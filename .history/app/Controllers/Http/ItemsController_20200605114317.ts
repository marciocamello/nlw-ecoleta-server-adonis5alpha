import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index (ctx: HttpContextContract) {
  }
  public async store ({ request }: HttpContextContract) {
    const itemSchema = schema.create({
      title: schema.string(),
      image: schema.string(),
    })

    const data = await request.validate({
      schema: itemSchema,
    })

    const item = await Item.create({
      title: request.get('title'),
      image: request.get('image'),
    })
  }
}
