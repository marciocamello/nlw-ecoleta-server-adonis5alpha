import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'
import Point from 'App/Models/Point'

export default class PointsController {
  public async index (ctx: HttpContextContract) {
    const points = Point.all()

    return points
  }

  public async store ({request}: HttpContextContract) {
    const itemSchema = schema.create({
      name: schema.string(),
      image: schema.string(),
      email: schema.string(),
      whatsapp: schema.string(),
      latitude: schema.number(),
      longitude: schema.number(),
      image: schema.string(),
      image: schema.string(),
    })

    await request.validate({
      schema: itemSchema,
    })
  }

  public async show ({params}: HttpContextContract) {
    return Point.find(params.id)
  }
}
