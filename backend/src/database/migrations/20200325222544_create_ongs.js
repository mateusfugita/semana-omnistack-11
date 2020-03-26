
exports.up = function(knex) { //o que será feito
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) { //o que fazer caso ocorra algum erro
  return knex.schema.dropTable('ongs');
};

//npx knex migrate: make [create_sth] -> create the migration file (this file)
//npx knex migrate:latest -> run the migration and create the tables
