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

// Global Functions
var comma = ",";
var space = " ";

function removeAllChild(node){
  while (node.firstChild) {
      node.removeChild(node.firstChild);
  }
}

function toggleClass(value, target){
  var classes = target.className.split(' ');
  var position = classes.indexOf(value);
  if (position === -1 ){
    classes.push(value);
  } else {
    classes.splice(position, 1);
  }
  target.className = classes.join(' ');
  console.log(target.className);
}

function toggleClassButton(button, target){
  var btn = document.getElementById(button);
  var toggleTarget = document.getElementById(target);
  btn.addEventListener('click', function(){
    toggleClass('active', btn);
    toggleClass('hidden', toggleTarget);
  })
}

function appendMessage(location, value){
  var msgBox = document.createElement('h4');
  var msg = document.createTextNode(value);
  msgBox.appendChild(msg);
  location.appendChild(msgBox);
}

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
  var addToCart = document.createElement('button');
  addToCart.className = "add-to-cart btn btn-primary";

  var commandBox = document.createElement('div');
  commandBox.setAttribute('style','padding:20px; text-align:right');
  var price = document.createElement('h4');
  var priceTag = document.createTextNode("$" + target.price);

  var cartIcon = document.createElement('i');
  cartIcon.className="fa fa-cart-plus fa-3x";

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
      removeAllChild(cartCount);
      cartCount.appendChild(cartCountValue);
      removeAllChild(showBalance);
      total = total + target.price;
      var balanceValue = document.createTextNode("total: $"+total.toFixed(2));
      showBalance.appendChild(balanceValue);
  })
}

// Cart View
function showCart(location, target, removable){
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


  // Node Tree
  location.appendChild(box);
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

  // Remove Items from Cart
  if (removable == true){
    var remove = document.createElement('button');
    remove.setAttribute('class','btn btn-danger')
    var removeTag = document.createTextNode('remove');
    boxAmount.appendChild(remove);
    remove.appendChild(removeTag);

    remove.addEventListener('click', function(){
      // alert(' remove '+ target.name+" ? ");
      var position = productsToCart.indexOf(target);
      productsToCart.splice(position, 1);
      removeAllChild(pageYield);
      for(var i=0; i < productsToCart.length; i++){
        showCart(pageYield, productsToCart[i], true);
      }
      count --;
      var cartCountValue = document.createTextNode("(" + count + ")");
      removeAllChild(cartCount);
      cartCount.appendChild(cartCountValue);
      removeAllChild(showBalance)
      total = total - target.price;
      var balanceValue = document.createTextNode("total: $"+total);
      showBalance.appendChild(balanceValue);
      if(count==0){
        checkout.setAttribute('disabled','disabled')
      }
    })
  }
}

// The Shopping Cart
var cart = document.getElementById('cart');
var showBalance = document.getElementById('show-balance');
var hiddenClass = document.getElementsByClassName('hidden');

cart.addEventListener('click',function(){
  if (productsToCart.length>0){
    removeAllChild(pageYield);
    console.log(pageYield);
    for(var i=0; i < productsToCart.length; i++){
      showCart(pageYield, productsToCart[i], true);
    }
    pageYield.appendChild(checkout);
  }
})

// Search Function //
var search = document.getElementsByTagName('form')[0];

search.addEventListener('submit', function(evt){
  removeAllChild(pageYield);
  evt.preventDefault();
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
  if (results.length <= 0){
    appendMessage(pageYield, "sorry, no match found.");
  } else {
    for (var i=0; i < uniqResult.length; i++){
      showResult(uniqResult[i]);
    }
  }
});
// End of Search Function //

// Checkout Content
var checkout = document.createElement('button');
checkout.className = "btn btn-success btn-block";
var checkoutText = document.createTextNode('Checkout!');
checkout.appendChild(checkoutText);

var checkoutList = document.getElementById('checkout-list');
var checkoutContent = document.getElementById('checkout-content');
var checkoutBalance = document.getElementById('checkout-balance');

checkout.addEventListener('click',function(){
  removeAllChild(pageYield);
  removeAllChild(checkoutList);
  removeAllChild(checkoutBalance);
  checkoutContent.className = '';
  pageYield.appendChild(checkoutContent);
  var showSubTotal = document.createElement('p');
  var showTax = document.createElement('p');
  var showTotal = document.createElement('p');
  var showSubTotalText = document.createTextNode("subtotal:" + total.toFixed(2));
  var showTaxText = document.createTextNode("tax:" + (total*0.07).toFixed(2));
  var showTotalText = document.createTextNode("total:" + (total*1.07).toFixed(2));
  checkoutBalance.appendChild(showSubTotal);
  checkoutBalance.appendChild(showTax);
  checkoutBalance.appendChild(showTotal);
  showSubTotal.appendChild(showSubTotalText);
  showTax.appendChild(showTaxText);
  showTotal.appendChild(showTotalText);

  for(var i=0; i < productsToCart.length; i++){
    showCart(checkoutList, productsToCart[i], false);
  }
})

toggleClassButton("checkout-list-button", "checkout-list");
toggleClassButton("checkout-customer-button", "checkout-customer-form");
toggleClassButton("checkout-payment-button", "checkout-payment");

// form values
var customerName = document.getElementById('customer-name');
var email = document.getElementById('email');
var address = document.getElementById('address');
var paymentName = document.getElementById('payment-name');
var paymentCardNumber = document.getElementById('payment-cardnumber');
var paymentExpireDate = document.getElementById('payment-expire-date');
var paymentCvv = document.getElementById('payment-cvv');
var paymentAddress = document.getElementById('payment-address');
var checkBillingAddress = document.getElementById('check-address');

checkBillingAddress.addEventListener('click',function(){
  if(paymentAddress.getAttribute('value') === address.value){
    paymentAddress.setAttribute('value', ' ');
    paymentAddress.removeAttribute('disabled');
  } else {
    paymentAddress.setAttribute('value', address.value);
    paymentAddress.setAttribute('disabled', 'disabled');
  }
})

// Confirm Page
var payContinue = document.getElementById('pay-continue-button');

var confirmPage = document.getElementById('confirm-page');
var confirmList = document.getElementById('confirm-list');
var confirmUser = document.getElementById('confirm-user');
var confirmPayment = document.getElementById('confirm-payment');

payContinue.addEventListener('click', function(){
  removeAllChild(pageYield);
  removeAllChild(confirmList);
  removeAllChild(confirmUser);
  removeAllChild(confirmPayment);
  confirmPage.setAttribute('class','well');
  pageYield.appendChild(confirmPage);
  for(var i=0; i < productsToCart.length; i++){
    showCart(confirmList, productsToCart[i], false);
  }
  var printName = document.createTextNode('Name: ' + customerName.value);
  var printEmail = document.createTextNode('Email: ' + email.value);
  var printAddress = document.createTextNode('Address: ' + address.value);
  var showName = document.createElement('h5');
  var showEmail = document.createElement('h5');
  var showAddress = document.createElement('h5');
  showName.appendChild(printName);
  showEmail.appendChild(printEmail);
  showAddress.appendChild(printAddress);
  confirmUser.appendChild(showName);
  confirmUser.appendChild(showEmail);
  confirmUser.appendChild(showAddress);
  var printPaymentName = document.createTextNode('Name: ' + paymentName.value);
  var printPaymentCardNumber = document.createTextNode('Card Number: ' + paymentCardNumber.value + " " + "expire-date: " + paymentExpireDate.value );
  var printPaymentAddress = document.createTextNode('Billing Address: ' + paymentAddress.value);
  var showPaymentName = document.createElement('h5');
  var showPaymentCardNumber = document.createElement('h5');
  var showPaymentAddress = document.createElement('h5');
  showPaymentName.appendChild(printPaymentName);
  showPaymentCardNumber.appendChild(printPaymentCardNumber);
  showPaymentAddress.appendChild(printPaymentAddress);
  confirmPayment.appendChild(showPaymentName);
  confirmPayment.appendChild(showPaymentCardNumber);
  confirmPayment.appendChild(showPaymentAddress);

  var hrline = document.createElement('hr');
  var showSubTotal = document.createElement('h5');
  var showTax = document.createElement('h5');
  var showTotal = document.createElement('h5');
  var showSubTotalText = document.createTextNode("subtotal: $" + total.toFixed(2));
  var showTaxText = document.createTextNode("tax: $" + (total*0.07).toFixed(2));
  var showTotalText = document.createTextNode("total: $" + (total*1.07).toFixed(2));
  confirmList.appendChild(hrline);
  confirmList.appendChild(showSubTotal);
  confirmList.appendChild(showTax);
  confirmList.appendChild(showTotal);
  showSubTotal.appendChild(showSubTotalText);
  showTax.appendChild(showTaxText);
  showTotal.appendChild(showTotalText);

})




// Place order
var payPlaceorder = document.getElementById('pay-placeorder-button');
payPlaceorder.addEventListener('click', function(){
  removeAllChild(pageYield);
  total = 0;
  count = 0;
  productsToCart = [];
  cartCount.removeChild(cartCount.firstChild);
  showBalance.removeChild(showBalance.firstChild);
  appendMessage(pageYield, "Thanks for shopping with us!")

})
