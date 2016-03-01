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
}];

// Product View with Boostrap Default Media
var pageYield = document.getElementById('yield');
var productsToCart =[];
var count = 0;
var total = 0;
var cartCount = document.getElementById('cart-count');

function showResult(target){
  // Structure
  var box = document.createElement('div');
  box.className = "media well";
  box.setAttribute('id','product-'+target.id);
  var boxImg = document.createElement('div');
  boxImg.className = "media-left";
  var boxBody = document.createElement('div');
  boxBody.className = "media-body";

  var title = document.createElement('h4');
  title.className = "media-heading";
  var link = document.createElement('a');
  link.href="#";
  var image = document.createElement('img');
  image.src=target.thumbOne;
  image.alt=target.name;
  image.className="media-object";
  image.setAttribute('width', '300px');

  var titleText = document.createTextNode(target.name + " ("+target.condition+")");
  var content = document.createElement('p');
  var contentText = document.createTextNode(target.description);
  var addToCart = document.createElement('a');

  var commandBox = document.createElement('div');
  commandBox.setAttribute('style','padding:20px; text-align:right');
  var price = document.createElement('h4');
  var priceTag = document.createTextNode("$" + target.price);
  addToCart.href='#product-'+target.id;
  addToCart.className = "add-to-cart";
  addToCart.setAttribute('id',target.id);
  var cartIcon = document.createElement('i');
  cartIcon.className="fa fa-cart-plus fa-4x";

  // Node Tree
  pageYield.appendChild(box);
  box.appendChild(boxImg);
  box.appendChild(boxBody);
  boxImg.appendChild(link);
  link.appendChild(image);
  boxBody.appendChild(title);
  title.appendChild(titleText);
  boxBody.appendChild(content);
  content.appendChild(contentText);
  boxBody.appendChild(commandBox);
  commandBox.appendChild(price);
  commandBox.appendChild(addToCart);
  price.appendChild(priceTag);
  addToCart.appendChild(cartIcon);

  // Add to Cart
  addToCart.addEventListener('click', function(){
      productsToCart.push(target);
      count ++;
      var cartCountValue = document.createTextNode("(" + count + ")");
      cartCount.innerHTML = " ";
      cartCount.appendChild(cartCountValue);
      showBalance.innerHTML = " ";
      total = total + target.price;
      var balanceValue = document.createTextNode("total: $"+total);
      showBalance.appendChild(balanceValue);
  })
}

// Cart View
function showCart(target){
  // Structure
  var box = document.createElement('div');
  box.className = "row";
  box.setAttribute('id','product-'+target.id);
  var boxImg = document.createElement('div');
  boxImg.className = "col-md-2";
  var boxBody = document.createElement('div');
  boxBody.className = "col-md-6";
  var boxPrice = document.createElement('div');
  boxPrice.className = "col-md-2";
  var boxAmount = document.createElement('div');
  boxAmount.className = "col-md-1";
  var boxRemove = document.createElement('div');
  boxAmount.className = "col-md-1";

  var title = document.createElement('h4');
  title.className = "media-heading";
  var link = document.createElement('a');
  link.href="#";
  var image = document.createElement('img');
  image.src=target.thumbOne;
  image.alt=target.name;
  image.className="media-object";
  image.setAttribute('height', '50px');

  var titleText = document.createTextNode(target.name + " ("+ target.condition+")");
  var price = document.createElement('h4');
  var priceTag = document.createTextNode("$" + target.price);
  var amount = document.createElement('h4');
  var amountTag = document.createTextNode('');
  var remove = document.createElement('button');
  var removeTag = document.createTextNode('remove');

  // Node Tree
  pageYield.appendChild(box);
  box.appendChild(boxImg);
  box.appendChild(boxBody);
  box.appendChild(boxPrice);
  box.appendChild(boxAmount);
  box.appendChild(boxRemove);
  boxImg.appendChild(link);
  link.appendChild(image);
  boxBody.appendChild(title);
  title.appendChild(titleText);
  boxPrice.appendChild(price);
  price.appendChild(priceTag);
  boxAmount.appendChild(amount);
  amount.appendChild(amountTag);
  boxAmount.appendChild(remove);
  remove.appendChild(removeTag);

  // Remove Items from Cart
  remove.addEventListener('click', function(){
    // alert(' remove '+ target.name+" ? ");
    var position = productsToCart.indexOf(target);
    productsToCart.splice(position, 1);
    pageYield.innerHTML = " ";
    for(var i=0; i < productsToCart.length; i++){
      showCart(productsToCart[i]);
    }
    count --;
    var cartCountValue = document.createTextNode("(" + count + ")");
    cartCount.innerHTML = " ";
    cartCount.appendChild(cartCountValue);
    showBalance.innerHTML = " ";
    total = total - target.price;
    var balanceValue = document.createTextNode("total: $"+total);
    showBalance.appendChild(balanceValue);
  })
}


// The Shopping Cart
var cart = document.getElementById('cart');
var showBalance = document.getElementById('show-balance');
var hiddenClass = document.getElementsByClassName('hidden');

cart.addEventListener('click',function(evt){
  if (productsToCart.length>0){
    pageYield.innerHTML = "";
    for(var i=0; i < productsToCart.length; i++){
    //  total = total + productsToCart[i].price;
      showCart(productsToCart[i]);
    }
    hiddenClass[0].className = "show";
    // var balanceValue = document.createTextNode("total: $"+total);
    // showBalance.appendChild(balanceValue);
  }
})


// String Splitter
var comma = ",";
var space = " ";

// Search Function //
var search = document.getElementsByTagName('form')[0];

search.addEventListener('submit', function(evt){
  pageYield.innerHTML ='';
  evt.preventDefault()
  var results = [];
  var searchInput = document.getElementById('search-input').value;
  var searchInputArray = searchInput.split(space);

  // Search Compare
  for (var t=0; t < searchInputArray.length; t++){
    for (var i=0; i < products.length; i++){
      var nameArray = products[i].name.split(space);
      for (var x=0; x < nameArray.length; x++){
        if (nameArray[x].toLowerCase().indexOf(searchInputArray[t].toLowerCase()) != -1){
          results.push(products[i]);
        }
      }
    }
  }

  // Remove Duplicates
  var uniqResult = [];
  uniqResult.push(results[0]);
  for (var i=0; i < results.length; i++){
    var dupCount = 0;
    for (var t=0; t < uniqResult.length; t++){
      if (uniqResult[t].id === results[i].id){
        dupCount++;
      }
    }
    if(dupCount == 0){
      uniqResult.push(results[i]);
    }
  }

  // Print Result
  if (uniqResult.length <= 0){
    var noResult = document.createElement('h4');
    noResult.innerText = "sorry, no match found."
    pageYield.appendChild(noResult);
  } else {
    for (var i=0; i < uniqResult.length; i++){
      showResult(uniqResult[i]);
    }
  }
});
// End of Search Function //
// Add to Cart
