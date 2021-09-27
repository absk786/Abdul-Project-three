const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'English Premier League' },
    { name: 'La Liga' },
    { name: 'Bundesliga ' },
    { name: 'Ligue Un' },
    { name: 'Eradivise' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Manchester United',
      description:'football tickets',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 200.00,
      quantity: 5
    },
    {
      name: 'Liverpool',
      description:'football tickets',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 200.00,
      quantity: 5
    },
    {
      name: 'Chelsea',
      description:'football tickets',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 200.00,
      quantity: 5
    },
    {
      name: 'Tottenham',
      description:'football tickets',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 200.00,
      quantity: 5
    },
    {
      name: 'Manchester City',
      description:'football tickets',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 200.00,
      quantity: 5
    },
    {
      name: 'Barcelona',
      category: categories[1]._id,
      description:'football tickets',
      image: 'toilet-paper.jpg',
      price: 200.00,
      quantity: 5
    },
    {
      name: 'Real Madrid',
      category: categories[1]._id,
      description:'football tickets',
      image: 'soap.jpg',
      price: 200.00,
      quantity: 5
    },
    {
      name: 'Paris Saint Germain',
      category: categories[1]._id,
      description:'football tickets',
      image: 'wooden-spoons.jpg',
      price: 200.00,
      quantity: 5
    },
    {
      name: 'Borrousia Dortmund',
      category: categories[2]._id,
      description:'football tickets',
      image: 'camera.jpg',
      price: 200.00,
      quantity: 5
    },
    {
      name: 'Atletico Madrid',
      category: categories[2]._id,
      description:'football tickets',
      image: 'tablet.jpg',
      price: 200.00,
      quantity: 5
    },
    {
      name: 'Lilie',
      category: categories[3]._id,
      description:'football tickets',
      image: 'bedtime-book.jpg',
      price: 200.00,
      quantity: 5
    },
    {
      name: 'RB Salzburg',
      category: categories[4]._id,
      description:'football tickets',
      image: 'plastic-horses.jpg',
      price: 200.00,
      quantity: 5
    },
    {
      name: 'RB Leipzig',
      category: categories[4]._id,
      description:'football tickets',
      image: 'teddy-bear.jpg',
      price: 200.00,
      quantity: 5
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
