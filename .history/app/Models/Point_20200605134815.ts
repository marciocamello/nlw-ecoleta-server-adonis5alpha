import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import PointItem from './PointItem'

export default class Point extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public image: string

  @column({ serializeAs: null })
  public image_url: string

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

  @hasMany(() => PointItem, {
    foreignKey: 'point_id',
  })
  public pointItems: HasMany<typeof PointItem>
}
