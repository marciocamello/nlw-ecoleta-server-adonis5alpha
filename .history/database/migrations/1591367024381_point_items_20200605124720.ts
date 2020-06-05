import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PointItems extends BaseSchema {
  protected tableName = 'point_items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('point_id').notNullable().unsigned()
      table.integer('item_id').notNullable().unsigned()
      table.references('point_id', 'points.id').inTable('points').onDelete('cascade')
      table.references('item_id', 'items.id').inTable('items')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
