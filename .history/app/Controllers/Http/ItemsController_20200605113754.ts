import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index (ctx: HttpContextContract) {
  }
  public async store ({ request }: HttpContextContract) {
    const postSchema = schema.create({
      title: schema.string(),
      image: schema.string(),
    })

    const data = await request.validate({
      schema: postSchema,
      cacheKey: request.url(),
    })
    const item = await Item.create(data)
  }
}
