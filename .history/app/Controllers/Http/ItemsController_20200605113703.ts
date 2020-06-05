import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index (ctx: HttpContextContract) {
  }
  public async store ({ request }: HttpContextContract) {
    const data = request.only(['title', 'image'])
    const item = await Item.create(data)
  }
}
