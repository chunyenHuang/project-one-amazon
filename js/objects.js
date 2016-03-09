// Prodcuts Details
var products = [{
  id: 1,
  name: "Dream shoes",
  price: 45,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-01.jpg',
  manufacturer: "Nike",
  category: 'csj',
  tag: ['shoes']
}, {
  id: 2,
  name: "Metal Chain shoes",
  price: 30,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-02.jpg',
  manufacturer: "Nike",
  category: 'csj',
  tag: ['shoes']
}, {
  id: 3,
  name: "EpicStep Women's shoes",
  price: 30,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-03.jpg',
  manufacturer: "Coach",
  category: 'csj',
  tag: ['shoes']
}, {
  id: 4,
  name: "another dream shoes",
  price: 28,
  description: randomText(150),
  condition: 'Old',
  thumbOne: 'images/products/product-04.jpg',
  manufacturer: "Reebok",
  category: 'csj',
  tag: ['shoes']
}, {
  id: 5,
  name: "Space Shoes for women",
  price: 63,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-05.jpg',
  manufacturer: "Coach",
  category: 'csj',
  tag: ['shoes']
}, {
  id: 6,
  name: "Cotton cloth blue green",
  price: 45,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-06.jpg',
  manufacturer: "Nike",
  category: 'csj',
  tag: ['fashion']
}, {
  id: 7,
  name: "High shoes sport",
  price: 150,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-07.jpg',
  manufacturer: "Reebok",
  category: 'csj',
  tag: ['shoes']
}, {
  id: 8,
  name: "Fashion jewelry pendant",
  price: 70,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-08.jpg',
  manufacturer: "Cartier",
  category: 'csj',
  tag: ['fashion', 'gift']
}, {
  id: 9,
  name: "shoes sport",
  price: 700,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-09.jpg',
  manufacturer: "Nike",
  category: 'csj',
  tag: ['shoes', 'sport']
}, {
  id: 10,
  name: "flower mask",
  price: 1000,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-10.jpg',
  manufacturer: "Reebok",
  category: 'csj',
  tag: ['fashion']
}, {
  id: 11,
  name: "colorful paints",
  price: 340,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-11.jpg',
  manufacturer: "Adidas",
  category: 'csj',
  tag: ['fashion', 'women', 'men']
}, {
  id: 12,
  name: "silver pendant",
  price: 300,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-12.jpg',
  manufacturer: "Reebok",
  category: 'csj',
  tag: ['fashion', 'gift']
}, {
  id: 13,
  name: "coloful plastic bracelet bangle",
  price: 10,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-13.jpg',
  manufacturer: "Tiffany",
  category: 'csj',
  tag: ['fashion']
}, {
  id: 14,
  name: "nice shoes",
  price: 90,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-14.jpg',
  manufacturer: "Reebok",
  category: 'csj',
  tag: ['shoes']
}, {
  id: 15,
  name: "leather watch really cool",
  price: 230,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-15.jpg',
  manufacturer: "Nike",
  category: 'csj',
  tag: ['electronics']
}, {
  id: 16,
  name: "red shoes nice",
  price: 80,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-16.jpg',
  manufacturer: "Coach",
  category: 'csj',
  tag: ['shoes']
}, {
  id: 17,
  name: "So cool sun glasses",
  price: 400,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-17.jpg',
  manufacturer: "Coach",
  category: 'csj',
  tag: ['fashion']
}, {
  id: 18,
  name: "cream polish",
  price: 4000,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-18.jpg',
  manufacturer: "H&M",
  category: 'beauty',
  tag: ['cosmetic']
}, {
  id: 19,
  name: "red jacket waterproof",
  price: 250,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-19.jpg',
  manufacturer: "Nike",
  category: 'csj',
  tag: ['sport']
}, {
  id: 20,
  name: "leather jacket",
  price: 40,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-20.jpg',
  manufacturer: "Coach",
  category: 'csj',
  tag: ['fashion']
}, {
  id: 21,
  name: "hat",
  price: 400,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-21.jpg',
  manufacturer: "Coach",
  category: 'csj',
  tag: ['fashion', 'women']
}, {
  id: 22,
  name: "No 22 ungly t-shirt",
  price: 332.2,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-22.jpg',
  manufacturer: "Reebok",
  category: 'csj',
  tag: ['fashion', 'women', 't-shirt']
}, {
  id: 23,
  name: "cool watch",
  price: 410,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-23.jpg',
  manufacturer: "Nike",
  category: 'electronics',
  tag: ['electronics']
}, {
  id: 24,
  name: "leather watch",
  price: 20,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-24.jpg',
  manufacturer: "Apple",
  category: 'electronics',
  tag: ['electronics']
}, {
  id: 25,
  name: "watch so nice",
  price: 90,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-25.jpg',
  manufacturer: "Apple",
  category: 'electronics',
  tag: ['electronics']
}, {
  id: 26,
  name: "really cool phone",
  price: 2200,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-26.jpg',
  manufacturer: "Apple",
  category: 'electronics',
  tag: ['electronics']
}, {
  id: 27,
  name: "colorful purse",
  price: 700,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-27.jpg',
  manufacturer: "Coach",
  category: 'csj',
  tag: ['fashion', 'women']
}, {
  id: 28,
  name: "cool iphone contaier",
  price: 340,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-28.jpg',
  manufacturer: "Apple",
  category: 'csj',
  tag: ['gift', 'electronics']
}, {
  id: 29,
  name: "Purse black for nothing",
  price: 80,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-29.jpg',
  manufacturer: "Coach",
  category: 'csj',
  tag: ['fashion']
}, {
  id: 30,
  name: "lots of purses",
  price: 90,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-30.jpg',
  manufacturer: "Tiffany",
  category: 'csj',
  tag: ['fashion']
}, {
  id: 31,
  name: "iGlasses glasses",
  price: 300,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-31.jpg',
  manufacturer: "Apple",
  category: 'csj',
  tag: ['fashion', 'glasses']
}, {
  id: 32,
  name: "black tea glasses",
  price: 5,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-32.jpg',
  manufacturer: "Target",
  category: 'home',
  tag: ['home', 'drink']
}, {
  id: 33,
  name: "shot cup copper",
  price: 10,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-33.jpg',
  manufacturer: "Target",
  category: 'csj',
  tag: ['home', 'drink', 'alcohol']
}, {
  id: 34,
  name: "pearl necklace",
  price: 90,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-34.jpg',
  manufacturer: "Tiffany",
  category: 'csj',
  tag: ['fashion', 'necklace']
}, {
  id: 35,
  name: "silver pendant",
  price: 100,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-35.jpg',
  manufacturer: "tiffany",
  category: 'csj',
  tag: ['pendant', 'silver']
}, {
  id: 36,
  name: "cloth",
  price: 30,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-36.jpg',
  manufacturer: "H&M",
  category: 'csj',
  tag: ['cloth', 'fashion']
}, {
  id: 37,
  name: "red cloth party dress dinner",
  price: 100,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-37.jpg',
  manufacturer: "Coach",
  category: 'csj',
  tag: ['party']
}, {
  id: 38,
  name: "men's hat",
  price: 20,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-38.jpg',
  manufacturer: "H&M",
  category: 'csj',
  tag: ['hat', 'fashion']
}, {
  id: 39,
  name: "white pluffy hat",
  price: 20,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-39.jpg',
  manufacturer: "H&M",
  category: 'csj',
  tag: ['hat', 'winter', 'fashion']
}, {
  id: 40,
  name: "green purse",
  price: 50,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-40.jpg',
  manufacturer: "H&M",
  category: 'csj',
  tag: ['handbag', 'bag']
}, {
  id: 101,
  name: 'Fire Kids Edition, 7" Display, Wi-Fi, 8 GB, Blue Kid-Proof Case',
  price: 99.99,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-101.jpg',
  manufacturer: "Amazon",
  category: 'electronics',
  tag: ['tablet', 'kids', 'electronics']
}, {
  id: 102,
  name: 'Amazon Echo',
  price: 179.99,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-102.jpg',
  manufacturer: "Amazon",
  category: 'electronics',
  tag: ['speaker', 'music', 'electronics']
}, {
  id: 103,
  name: 'Billions 1 Season DVD',
  price: 9.99,
  description: randomText(150),
  condition: 'New',
  thumbOne: 'images/products/product-103.jpg',
  manufacturer: "Amazon",
  category: 'tv-show',
  tag: ['TV', 'DVD', 'show']
}];

// Underscore
var seven = _.where(products, {id: 7})

// A fake user id
var users =[{
  id:1,
  name: ">>>Current User<<<  <<<<<<<<<<<<<<<< This guy is you!"
}]

// push random user
for (var i=2; i<=500;i++){
  var randomName = randomText(2);
  var addNewUser = new user(i, randomName);
  users.push(addNewUser);
}

function user(id, name){
  this.id = id;
  this.name = name
}

var currentUser = {
  id:1,
  name: ">>>Current User<<<  <<<<<<<<<<<<<<<< This guy is you!"
}

// reviews
var reviews=[];

function review(id, productId, rating, comment, date, userId){
  if(reviews.length==0){
    id = 1;
  } else {
    var last = _.last(reviews);
    id = last.id + 1;
  }
  this.id = id;
  this.productId = productId;
  this.rating = rating;
  this.comment = comment;
  this.date = date;
  this.userId = userId;
}

function randomText(length){
    var text = "";
    var paragraph = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    var paragraphLength = Math.floor(Math.random() * (length)) + 1;
    for(var x=0; x < paragraphLength; x++){
      text = "";
      var textLength = Math.floor(Math.random() * (10)) + 3;
      for( var i=0; i < textLength; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      paragraph = paragraph + text + " ";
    }
    return paragraph;
}

// push a random reviews


for (var i=1; i<=2000;i++){
  var randomProduct = _.sample(products, 1);
  var randomRating = Math.floor(Math.random() * (5)) + 1;
  var randomeUser = _.sample(users, 1);
  var randomYear = Math.floor(Math.random() * (8)) + 2008;
  var randomMonth = Math.floor(Math.random() * (11)) + 1;
  var randomDay = Math.floor(Math.random() * (29)) + 1;
  var randomDate = new Date(randomYear, randomMonth, randomDay);
  var addNewReview = new review(0, randomProduct[0].id, randomRating , randomText(100), randomDate, randomeUser[0].id);
  reviews.push(addNewReview);
}
for (var i=1; i<=1000;i++){
  var samples = _.first(products, 5);
  var randomProduct = _.sample(samples, 1);
  var randomRating = Math.floor(Math.random() * (5)) + 1;
  var randomeUser = _.sample(users, 1);
  var randomYear = Math.floor(Math.random() * (8)) + 2008;
  var randomMonth = Math.floor(Math.random() * (11)) + 1;
  var randomDay = Math.floor(Math.random() * (29)) + 1;
  var randomDate = new Date(randomYear, randomMonth, randomDay);
  var addNewReview = new review(0, randomProduct[0].id, 1 , randomText(100), randomDate, randomeUser[0].id);
  reviews.push(addNewReview);
}
for (var i=1; i<=1000;i++){
  var samples = _.last(products, 5);
  var randomProduct = _.sample(samples, 1);
  var randomRating = Math.floor(Math.random() * (5)) + 1;
  var randomeUser = _.sample(users, 1);
  var randomYear = Math.floor(Math.random() * (8)) + 2008;
  var randomMonth = Math.floor(Math.random() * (11)) + 1;
  var randomDay = Math.floor(Math.random() * (29)) + 1;
  var randomDate = new Date(randomYear, randomMonth, randomDay);
  var addNewReview = new review(0, randomProduct[0].id, 5 , randomText(100), randomDate, randomeUser[0].id);
  reviews.push(addNewReview);
}

var mostReviews = _.chain(reviews).countBy("productId").pairs().sortBy(1).value().reverse();

var reviewGroups = _(reviews).groupBy('productId');
var rankReviews = _.chain(reviewGroups).map(function(num, key){
  return {
          productId: key,
          rating: _(num).reduce(function(m,x){ return m + x.rating; }, 0)/num.length
         };
}).sortBy('rating').value().reverse();

// tester
var data = [ { type: "A", val: 10 },
             { type: "B", val: 3 },
             { type: "A", val: 10 },
             { type: "C", val: 5 } ];

var groups = _(data).groupBy('type');

var out = _(groups).map(function(g, key) {
  return { type: key,
           total: _(g).reduce(function(m,x) { return m + x.val; }, 0)
          };
});
// Order History
var pastInCart = [{
  cart: [{id:3, name:"EpicStep Women's k Sole Shoes Sneakers shoes", price:30, qty:3,thumbOne: "images/products/product-03.jpg",condition: "New"}],
  date: new Date(),
  total: 96.3
}]
