
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('neighborhoods').del(),

    // Inserts seed entries
    knex('neighborhoods').insert({epicenter: 'rowValue', name: '', latitude: , longitude: }),
    knex('neighborhoods').insert({epicenter: 'rowValue', name: '', latitude: , longitude: }),
    knex('neighborhoods').insert({epicenter: 'rowValue', name: '', latitude: , longitude: }),
    knex('neighborhoods').insert({epicenter: 'rowValue', name: '', latitude: , longitude: })
  );
};
