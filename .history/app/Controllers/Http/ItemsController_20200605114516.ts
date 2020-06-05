import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index (ctx: HttpContextContract) {
    const items = await Item.all()

    return items
      .map(item => {
        return {
          id: item.id,
          title:item.title,
          image_url: item.image,
        }
      })
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
