
exports.up = function(knex, Promise) {
    return knex.schema.createTable('todo', table => {
        table.increments('id')
        table.string('text').notNullable()
        table.boolean('completed').defaultTo(false)
        table.timestamps(false, true)
    })  
  
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("todo")
};
