exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('stores').del(),

    // Inserts seed entries
    knex('stores').insert({name: 'Queen City General Store', street1: '', street2: '', city: '', state: '', zip: , rating: , bio: '', image: '', neighborhood_id: }),
    knex('stores').insert({name: 'rowValue', street1: '', street2: '', city: '', state: '', zip: , rating: , bio: '', image: '', neighborhood_id: }),
    knex('stores').insert({name: 'rowValue', street1: '', street2: '', city: '', state: '', zip: , rating: , bio: '', image: '', neighborhood_id: }),
    knex('stores').insert({name: 'rowValue', street1: '', street2: '', city: '', state: '', zip: , rating: , bio: '', image: '', neighborhood_id: }),
    knex('stores').insert({name: 'rowValue', street1: '', street2: '', city: '', state: '', zip: , rating: , bio: '', image: '', neighborhood_id: }),
    knex('stores').insert({name: 'rowValue', street1: '', street2: '', city: '', state: '', zip: , rating: , bio: '', image: '', neighborhood_id: })
  );
};
