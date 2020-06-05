import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PointItems extends BaseSchema {
  protected tableName = 'point_items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.increments('id')
      table.increments('id')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
