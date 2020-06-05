import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PointItems extends BaseSchema {
  protected tableName = 'point_items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('point_id').notNullable().unsigned().onDelete('cascade')
      table.integer('item_id').notNullable().unsigned()
      table.foreign('point_id', 'points.id')
      table.foreign('item_id', 'items.id')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
