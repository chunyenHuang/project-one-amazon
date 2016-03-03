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
  thumbOne: 'images/products/product-09.jpg'
}, {
  id: 10,
  name: "No 10",
  price: 1000,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-10.jpg'
}, {
  id: 11,
  name: "No 11",
  price: 340,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-11.jpg'
}, {
  id: 12,
  name: "No 12",
  price: 300,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-12.jpg'
}, {
  id: 13,
  name: "cushion diamond 1 ct 18k gold engagement ring",
  price: 10,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-13.jpg'
}, {
  id: 14,
  name: "phone black",
  price: 90,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-14.jpg'
}, {
  id: 15,
  name: "iphone cover fashion gold",
  price: 230,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-15.jpg'
}, {
  id: 16,
  name: "water bottle orange",
  price: 80,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-16.jpg'
}, {
  id: 17,
  name: "watch tiffany blue watch",
  price: 400,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-17.jpg'
}, {
  id: 18,
  name: "pills",
  price: 4000,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-18.jpg'
}, {
  id: 19,
  name: "Bicycle tiffany blue",
  price: 250,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-19.jpg'
}, {
  id: 20,
  name: "Paper Lantern green",
  price: 40,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-20.jpg'
}, {
  id: 21,
  name: "MXL microphone sets ",
  price: 400,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-21.jpg'
}, {
  id: 22,
  name: "No 22",
  price: 332.2,
  description: "Canon DSLR body",
  condition: 'New',
  thumbOne: 'images/products/product-22.jpg'
}, {
  id: 23,
  name: "bicycle pressure meter",
  price: 410,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-23.jpg'
}, {
  id: 24,
  name: "audio-technica headphone studio earphone",
  price: 20,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-24.jpg'
}, {
  id: 25,
  name: "Citrus pendant silver 925",
  price: 90,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-25.jpg'
}, {
  id: 26,
  name: "Emerald pendant fog silver 925",
  price: 2200,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-26.jpg'
}, {
  id: 27,
  name: "meter volt amp ohm",
  price: 700,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-27.jpg'
}, {
  id: 28,
  name: "Emerald 18k yellow gold ring",
  price: 340,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-28.jpg'
}, {
  id: 29,
  name: "Cloth jacket blue fashion",
  price: 80,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-29.jpg'
}, {
  id: 30,
  name: "Cloth jacket black fashion",
  price: 90,
  description: "something",
  condition: 'New',
  thumbOne: 'images/products/product-30.jpg'
}];

// Underscore
console.log(products);
var seven = _.where(products, {id: 7})
console.log(seven[0].id);
