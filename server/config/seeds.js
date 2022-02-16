const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'New' },
    { name: 'Women' },
    { name: 'Kids' },
    { name: 'Baby' },
    { name: 'Men' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Womens Jersey Pj Set',
      description:
        'Super soft fabrication, Piping trim, Added elastane for extra stretch and comfort piping trim',
      image: 'new-01.png',
      category: categories[0]._id,
      price: 25,
      quantity: 500
    },
    {
      name: 'Mens Active Sport Short',
      description:
        'Functional, drawcord Relaxed fit, Elasticated waistband, Side piping design',
      image: 'new-02.png',
      category: categories[0]._id,
      price: 10,
      quantity: 500
    },
    {
      name: 'Womens Crop Cardigan',
      category: categories[1]._id,
      description:
        'Fits true to size, a long sleeve boxy cardigan in a soft touch knit',
      image: 'women-01.png',
      price: 30,
      quantity: 20
    },
    {
      name: 'Womens Smocked Playsuit',
      category: categories[1]._id,
      description:
        'The comfy all in one style features a small floral print, an elastic waist with tie detail and side pockets making this ultra convenient.',
      image: 'women-02.png',
      price: 35,
      quantity: 50
    },
    {
      name: 'Boys Flintstones Hoodie',
      category: categories[2]._id,
      description:
        'Featuring a classic hoodie silhoeutte, a patterned design allover with Bamm Bamm chest detail and bone print.',
      image: 'kids-01.png',
      price: 20,
      quantity: 100
    },
    {
      name: 'Toddler Girl Pony Dress',
      category: categories[2]._id,
      description:
        'This beautiful, must have dress is glitter print with two layer tulle skirt',
      image: 'kids-02.png',
      price: 40,
      quantity: 30
    },
    {
      name: 'Baby Rib Romper Dress',
      category: categories[3]._id,
      description:
        'Snaps at inner leg for easy nappy changes, 95% cotton 5% elastane rib for comfort and a snug fit',
      image: 'baby-01.png',
      price: 15,
      quantity: 30
    },
    {
      name: 'Baby Print Tee',
      category: categories[3]._id,
      description:
        'Snaps at side neck for easy dressing, grey marle is cotton blend, Cotton',
      image: 'baby-02.png',
      price: 12,
      quantity: 100
    },
    {
      name: 'Mens Hooded Muscle Top',
      category: categories[4]._id,
      description: 'Front pocket, Loose fit, Muscle sleeveless style',
      image: 'men-01.png',
      price: 25,
      quantity: 1000
    },
    {
      name: 'Mens Festival Shirt',
      category: categories[4]._id,
      description:
        'Soft cotton touch, Chest pocket, Regular fit, Variety of print designs, Button up front',
      image: 'men-02.png',
      price: 30,
      quantity: 1000
    }
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
