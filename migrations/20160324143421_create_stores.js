exports.up = function(knex, Promise) {
  return knex.schema.createTable('stores', function(table){
    table.increments();
    table.string('name');
    table.string('street1');
    table.string('street2');
    table.string('city');
    table.string('state');
    table.integer('zip');
    table.integer('rating');
    table.text('bio');
    table.string('image');
    table.text('site');
    table.integer('neighborhood_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stores');
};
