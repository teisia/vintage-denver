exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function(table){
    table.increments();
    table.string('name');
    table.text('date');
    table.text('review');
    table.integer('rating');
    table.integer('store_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
