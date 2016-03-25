
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('neighborhoods').del(),

    // Inserts seed entries
    knex('neighborhoods').insert({epicenter: '200 E Colfax Ave, Denver, CO 80203', name: 'Capitol Hill', latitude: 39.739477, longitude: -104.984595}),
    knex('neighborhoods').insert({epicenter: '110 Broadway, Denver, CO 80203', name: 'Baker', latitude: 39.718771, longitude: -104.987375}),
    knex('neighborhoods').insert({epicenter: '2620 16th St, Denver, CO 80211', name: 'Highlands', latitude: 39.759457, longitude: -105.011107})
  );
};
