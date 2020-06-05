import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PointItems extends BaseSchema {
  protected tableName = 'point_items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('point_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('points')

      table.integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('items')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
