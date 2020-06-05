import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Points extends BaseSchema {
  protected tableName = 'points'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('image').notNullable()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('whatsapp').notNullable()
      table.decimal('latitude', 8, 2).notNullable()
      table.decimal('longitude', 8, 2).notNullable()
      table.string('city').notNullable()
      table.string('uf').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
