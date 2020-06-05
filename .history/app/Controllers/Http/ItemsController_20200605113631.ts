import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index (ctx: HttpContextContract) {
  }
  public async store ({ request }: HttpContextContract) {
    const item = await Item.create()
  }
}
