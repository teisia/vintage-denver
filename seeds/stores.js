exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('stores').del(),

    // Inserts seed entries
    knex('stores').insert({name: 'Queen City General Store', street1: '220 E 13th Ave', street2: '', city: 'Denver', state: 'CO', zip: 80203, rating: 5, bio: 'A lifestyle store in Denver, Colorado offering new and vintage clothing, accessories, housewares, curiosities, dry goods and cosmetics.', image: 'images/queencity.jpg', site: 'http://www.queencitygeneralstore.com', neighborhood_id: 1}),
    knex('stores').insert({name: 'Boss Vintage', street1: '10 South Broadway', street2: '', city: 'Denver', state: 'CO', zip: 80209, rating: 4, bio: 'In addition to providing you with the best selection of vintage clothing available, we also provide services to the motion picture, theatre, and television industry.', image: 'images/bossvintage.jpg', site: 'http://www.bossvintage.com', neighborhood_id: 2}),
    knex('stores').insert({name: 'Regal Vintage', street1: '1866 South Broadway', street2: '', city: 'Denver', state: 'CO', zip: 80210, rating: 5, bio: 'We specialize in vintage clothing for women, men, and children along with matching accessories from the 1890s to 1990s. Our clothes must fit into our motto of Fun, Fabulous, and Funky, or they do not join our inventory.', image: 'images/regal.jpg', site: 'http://www.regalvintage.com', neighborhood_id: 2}),
    knex('stores').insert({name: 'Buffalo Exchange', street1: '51 Broadway Street', street2: '', city: 'Denver', state: 'CO', zip: 80203, rating: 4, bio: 'Like a well-curated art show, Buffalo Exchange is an exhibition in beautiful apparel. Though it is a chain, the Denver locations have a definite style all their own, with a vibrant mix, ranging from designer to vintage.', image: 'images/buffalo.jpg', site: 'http://www.buffaloexchange.com/locations/denver/denver', neighborhood_id: 2}),
    knex('stores').insert({name: 'Babereeba', street1: '3629 West 32nd Avenue', street2: '', city: 'Highlands', state: 'CO', zip: 80211, rating: 3, bio: 'This quaint consignment shop sells high-end used & vintage clothing, plus fashion accessories.', image: 'images/babareeba.jpg', site: 'http://www.yelp.com/biz/babareeba-denver', neighborhood_id: 3})
  );
};
