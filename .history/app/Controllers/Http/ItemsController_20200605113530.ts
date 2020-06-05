import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index (ctx: HttpContextContract) {
  }
  public async store (ctx: HttpContextContract) {
    const item = await Item.create()
  }
}
