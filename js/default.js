// prodcuts
var products = [{
  name: "Dream",
  price: 45,
  description: "You'll love this lightweight runner! It features a mesh upper, padded collar, laces for good fit, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials.",
  condition: 'New',
  thumbOne: 'images/products/product-01-01.jpg',
  thumbTwo: 'images/products/product-01-02.png',
  thumbThree: 'images/products/product-01-03.png'
}, {
  name: "EpicStep Women's Casual Slip On Loafers Metal Chain Flats Thick Sole Shoes Sneakers",
  price: 30,
  description: "You'll love this lightweight runner! It features a mesh upper, padded collar, laces for good fit, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials.",
  condition: 'New',
  thumbOne: 'images/products/product-02-01.jpg',
  thumbTwo: 'images/products/product-02-02.png',
  thumbThree: 'images/products/product-02-03.png'
}, {
  name: "EpicStep Women's Casual Slip On Loafers Metal Chain Flats Thick Sole Shoes Sneakers",
  price: 30,
  description: "You'll love this lightweight runner! It features a mesh upper, padded collar, laces for good fit, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials.",
  condition: 'New',
  thumbOne: 'images/products/product-03.jpg'
}, {
  name: "ddddd One", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-04.jpg'
}, {
  name: "eeeee One", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-05.jpg'
}, {
  name: "fffff One", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-06.jpg'
}, {
  name: "ggggg One", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-07.jpg'
}, {
  name: "hhhhh One", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-08.jpg'
}];

// Search Input
var search = document.getElementsByTagName('form')[0];
search.addEventListener('submit', function(evt){
  evt.preventDefault()
  var searchInput = document.getElementById('search-input').value;
  console.log(searchInput);
});
