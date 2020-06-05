import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Points extends BaseSchema {
  protected tableName = 'points'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('image')
      table.name('image')
      table.email('image')
      table.whatsapp('image')
      table.latitude('image')
      table.longitude('image')
      table.city('image')
      table.city('image')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
