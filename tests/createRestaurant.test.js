const createRestaurant = require('../controller/createRestaurant');
const Restaurant = require('../model/Restaurant');
const db = require('./db.js');

beforeAll(async () => await db.connect());

afterEach(async () => await db.clearDatabase());

afterAll(async () => await db.closeDatabase());

describe('Restaurants created when', () => {
  it('First restaurant', async () => {
    const { restaurantId } = await createRestaurant('First', 'Sydney', '$');

    // find the restaurant from the db
    const restaurant = await Restaurant.findById(restaurantId);

    // check  the name, location ect of the restaurant found
    expect(restaurant.name).toEqual('First');
    expect(restaurant.cost).toEqual('$');
    expect(restaurant.location).toEqual('Sydney');
  });
});
