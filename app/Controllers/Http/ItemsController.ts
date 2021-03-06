import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index (ctx: HttpContextContract) {
    const items = await Item.all()

    return items
      .map(item => {
        return {
          id: item.id,
          title:item.title,
          image_url: `${process.env.BASE_URL}/uploads/${item.image}`,
        }
      })
  }

  public async store ({ request }: HttpContextContract) {
    const itemSchema = schema.create({
      title: schema.string(),
      image: schema.string(),
    })

    await request.validate({
      schema: itemSchema,
    })

    const data = request.only(['title', 'image'])
    const item = await Item.create(data)

    return {
      message: 'Item cadastro com sucesso',
      item,
    }
  }
}
