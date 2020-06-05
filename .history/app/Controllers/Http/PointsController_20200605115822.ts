import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Point from 'App/Models/Point'

export default class PointsController {
  public async index (ctx: HttpContextContract) {
    const points = Point.all()

    return points
  }

  public async store (ctx: HttpContextContract) {
    const itemSchema = schema.create({
      title: schema.string(),
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
