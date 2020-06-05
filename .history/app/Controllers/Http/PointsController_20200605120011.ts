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
      title: schema.string(),
      image: schema.string(),
    })

    await request.validate({
      schema: itemSchema,
    })
  }

  public async show ({params}: HttpContextContract) {
    const point = Point.find(params.id)

    if(!point) {
      return []
    }

    return point
  }
}
