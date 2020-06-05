import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Points extends BaseSchema {
  protected tableName = 'points'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('image')
      table.string('name')
      table.string('email')
      table.string('whatsapp')
      table.decimal('latitude', 8, 2)
      table.decimal('longitude', 8, 2)
      table.string('city')
      table.string('uf')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
