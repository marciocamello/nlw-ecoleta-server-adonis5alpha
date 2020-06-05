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

    const items = request.all().items

    const parsedItems = request.all().items

    //const point = await Point.create(data)

    return {
      message: 'Point cadastro com sucesso',
      parsedItems,
    }
  }

  public async show ({params}: HttpContextContract) {
    return Point.find(params.id)
  }
}
