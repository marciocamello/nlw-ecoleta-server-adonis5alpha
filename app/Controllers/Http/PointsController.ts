import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Point from 'App/Models/Point'
import Application from '@ioc:Adonis/Core/Application'
import crypto from 'crypto'

export default class PointsController {
  public async index ({request}: HttpContextContract) {
    const {city, uf, items} = request.get()

    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()))

    const points = await Point
      .query() // 👈now have access to a
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parsedItems)
      .where('city', 'like', `%${String(city)}%`)
      .where('uf', String(uf))
      .distinct()
      .select('points.*')

    const serializedPoints = points.map(p => {
      const point = p.$attributes
      return {
        ...point,
        image_url: `${process.env.BASE_URL}/uploads/${point.image}`,
      }
    })

    return serializedPoints
  }

  public async store ({request}: HttpContextContract) {
    const itemSchema = schema.create({
      name: schema.string(),
      email: schema.string(),
      whatsapp: schema.string(),
      latitude: schema.number(),
      longitude: schema.number(),
      city: schema.string(),
      uf: schema.string(),
    })

    await request.validate({
      schema: itemSchema,
    })

    const data = request.only([
      'name',
      'email',
      'whatsapp',
      'latitude',
      'longitude',
      'city',
      'uf',
    ])

    const image = request.file('image', {
      size: '10mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })

    if (!image) {
      return 'Please upload file'
    }

    if (image.hasErrors) {
      return image.errors
    }

    const hash = crypto.randomBytes(6).toString('hex')
    const fileName = `${hash}-${image.clientName}`

    await image.move(Application.publicPath('uploads'), {
      name: fileName,
    })

    const point = await Point.create({
      ...data,
      image: fileName,
    })

    const parsedItems = request
      .all()
      .items
      .split(',')
      .map(item => Number(item.trim()))
      .map((item_id: number) => {
        return {
          item_id,
          point_id: point.id,
        }
      })

    const pointItems = await point.related('pointItems')
      .createMany(parsedItems)

    return {
      message: 'Point cadastro com sucesso',
      point,
      pointItems,
    }
  }

  public async show ({params}: HttpContextContract) {
    const point = await Point.firstOrFail(params.id)

    if(!point) {
      return {
        message: 'Não existe ponto com esse Id',
      }
    }

    point.image_url = point.image

    return point.serialize()
  }
}
