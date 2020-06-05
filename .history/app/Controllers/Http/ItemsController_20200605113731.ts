import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index (ctx: HttpContextContract) {
  }
  public async store ({ request }: HttpContextContract) {
    const postSchema = schema.create({
      title: schema.string(),
      body: schema.string(),
    })

    const data = await request.validate({
      schema: postSchema,
      cacheKey: request.url(),
    })
    const data = request.only(['title', 'image'])
    const item = await Item.create(data)
  }
}
