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
