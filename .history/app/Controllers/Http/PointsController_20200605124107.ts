import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'
import Point from 'App/Models/Point'
import Item from 'App/Models/Item'

export default class PointsController {
  public async index (ctx: HttpContextContract) {
    const points = Point.all()

    return points
  }

  public async store ({request, params}: HttpContextContract) {
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

    const posts = await user.related('posts').createMany([
      {
        title: 'Adonis 101',
        body: 'Lorem Ipsum is simply dummy text',
      },
      {
        title: 'NodeJS 101',
        body: 'Lorem Ipsum is simply dummy text',
      },
    ])

    return {
      message: 'Point cadastro com sucesso',
      parsedItems,
    }
  }

  public async show ({params}: HttpContextContract) {
    return Point.find(params.id)
  }
}
