import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Item from './Item'

export default class Point extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public image: string

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public whatsapp: string

  @column()
  public latitude: number

  @column()
  public longitude: number

  @column()
  public city: string

  @column()
  public uf: string

  @hasMany(() => Item)
  public items: HasMany<typeof Item>

  @column()
  public point_id: number

  @column()
  public item_id: number
}
