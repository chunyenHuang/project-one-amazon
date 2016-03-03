// Prodcuts Details
var products = [{
  id: 1,
  name: "Dream shoes",
  price: 45,
  description: "You'll love this lightweight runner! It features a mesh upper, padded collar, laces for good fit, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials.",
  condition: 'New',
  thumbOne: 'images/products/product-01-01.jpg',
}, {
  id: 2,
  name: "Metal Chain Flats Thick Sole Shoes Sneakers shoes",
  price: 30,
  description: "You'll love this lightweight runner! It features a mesh upper, padded collar, laces for good fit, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials.",
  condition: 'New',
  thumbOne: 'images/products/product-02-01.jpg',
}, {
  id: 3,
  name: "EpicStep Women's Casual Slip On Loafers Metal Chain Flats Thick Sole Shoes Sneakers shoes",
  price: 30,
  description: "You'll love this lightweight runner! It features a mesh upper, padded collar, laces for good fit, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials.",
  condition: 'New',
  thumbOne: 'images/products/product-03.jpg'
}, {
  id: 4,
  name: "dream dream dream",
  price: 28,
  description: "something",
  condition: 'Old',
  thumbOne: 'images/products/product-04.jpg'
}, {
  id: 5,
  name: "Space Shoes for women",
  price: 63, description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-05.jpg'
}, {
  id: 6,
  name: "Cotton Shoes for men",
  price: 45,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-06.jpg'
}, {
  id: 7,
  name: "High Heels",
  price: 150,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-07.jpg'
}, {
  id: 8,
  name: "High Heels brown color",
  price: 70,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-08.jpg'
}, {
  id: 9,
  name: "No 9",
  price: 700,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-08.jpg'
}, {
  id: 10,
  name: "No 10",
  price: 1000,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-08.jpg'
}];

// Underscore
console.log(products);
var seven = _.where(products, {id: 7})
console.log(seven[0].id);
