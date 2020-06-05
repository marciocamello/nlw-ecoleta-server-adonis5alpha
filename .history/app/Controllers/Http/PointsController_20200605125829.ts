import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Point from 'App/Models/Point'
import Application from '@ioc:Adonis/Core/Application'

export default class PointsController {
  public async index (ctx: HttpContextContract) {
    const points = Point.all()

    return points
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

    const avatar = request.file('avatar')
    if (!avatar) {
      return 'Please upload file'
    }

    await avatar.move(Application.tmpPath('uploads'))

    const point = await Point.create(data)

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
    return Point.find(params.id)
  }
}
