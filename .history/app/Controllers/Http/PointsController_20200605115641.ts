import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Point from 'App/Models/Point'

export default class PointsController {
  public async index (ctx: HttpContextContract) {
    const points = Point.all()

    return points
  }

  public async store (ctx: HttpContextContract) {
  }

  public async show (ctx: HttpContextContract) {
  }
}
