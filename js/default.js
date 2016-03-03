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
var inCart = [];
var inCartCount = 0;
var inCartTotal = 0;
var count = 0;
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
  addToCart.setAttribute('style', 'display:block');

  var commandBox = document.createElement('div');
  commandBox.setAttribute('style','padding:20px; text-align:right');
  var price = document.createElement('h4');
  var priceTag = document.createTextNode("$" + target.price);
  var quantity = document.createElement('input');
  quantity.setAttribute('style', 'display:block');
  quantity.setAttribute('type', 'number');
  quantity.setAttribute('value', 1);
  quantity.setAttribute('min', 1);
  quantity.setAttribute('max', 100);

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
  commandBox.appendChild(quantity);
  commandBox.appendChild(addToCart);
  price.appendChild(priceTag);
  addToCart.appendChild(cartIcon);

  // Add to Cart
  function item(id, qty, price){
    this.id = id;
    this.qty = parseFloat(qty);
    this.price = price;
  }

  addToCart.addEventListener('click', function(){
    var addThis = new item(target.id, quantity.value, target.price);
    inCart.push(addThis);
    var inCartCount = 0;
    var inCartTotal = 0;
    for(var i=0; i<inCart.length; i++){
      inCartCount = inCartCount + inCart[i].qty;
      inCartTotal = inCartTotal + (inCart[i].qty * inCart[i].price);
    }
    var cartCountValue = document.createTextNode("(" + inCartCount + ")");
    removeAllChild(cartCount);
    cartCount.appendChild(cartCountValue);
    calculate(showBalance, inCartTotal);
  })
}

// Cart View
function showCart(location, target, editable){
  for(var i=0; i < products.length; i++){
    if (target.id === products[i].id){
      target.name = products[i].name;
      target.condition = products[i].condition;
      target.thumbOne = products[i].thumbOne;
    }
  }

  // Structure
  var box = document.createElement('div');
  box.className = "row";
  box.setAttribute('id','product-'+target.id);
  var boxImg = document.createElement('div');
  boxImg.className = "col-md-2";
  var boxBody = document.createElement('div');
  boxBody.className = "col-md-5";
  var boxPrice = document.createElement('div');
  boxPrice.className = "col-md-1";
  var boxAmount = document.createElement('div');
  boxAmount.className = "col-md-2";
  var boxTotal = document.createElement('div');
  boxTotal.className = "col-md-1";
  var boxRemove = document.createElement('div');
  boxRemove.className = "col-md-1";

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
  var amount = document.createElement('input');
  amount.setAttribute('disabled','disabled');
  amount.setAttribute('value', target.qty);
  amount.setAttribute('class', 'form-control');
  amount.setAttribute('type',"number");
  amount.setAttribute('min', 1);
  amount.setAttribute('max', 100);

  var total = document.createElement('h4');
  var totalTag = document.createTextNode("$" + target.qty * target.price);

  // Node Tree
  location.appendChild(box);
  box.appendChild(boxImg);
  box.appendChild(boxBody);
  box.appendChild(boxPrice);
  box.appendChild(boxAmount);
  box.appendChild(boxTotal);
  box.appendChild(boxRemove);
  boxImg.appendChild(link);
  link.appendChild(image);
  boxBody.appendChild(title);
  title.appendChild(titleText);
  boxPrice.appendChild(price);
  price.appendChild(priceTag);
  boxAmount.appendChild(amount);
  boxTotal.appendChild(total);
  total.appendChild(totalTag);

  // Change Qty
  if (editable == true){
    amount.removeAttribute('disabled');
    amount.addEventListener('input',function(e){
      e.preventDefault();
      target.qty = parseFloat(amount.value);
      total.removeChild(totalTag);
      totalTag = document.createTextNode("$" + target.qty * target.price);
      total.appendChild(totalTag);
      inCartCount = 0;
      inCartTotal = 0;
      for(var i=0; i<inCart.length; i++){
        inCartCount = inCartCount + inCart[i].qty;
        inCartTotal = inCartTotal + (inCart[i].qty * inCart[i].price);
      }
      var cartCountValue = document.createTextNode("(" + inCartCount + ")");
      removeAllChild(cartCount);
      cartCount.appendChild(cartCountValue);
      calculate(showBalance, inCartTotal);

      if(inCartCount==0){
        checkout.setAttribute('disabled','disabled')
      }
      pageYield.appendChild(checkout);
    })
  }

  // Remove Items from Cart
  if (editable == true){
    var remove = document.createElement('button');
    remove.setAttribute('class','btn btn-danger')
    var removeTag = document.createTextNode('remove');
    boxRemove.appendChild(remove);
    remove.appendChild(removeTag);

    remove.addEventListener('click', function(){
      // alert(' remove '+ target.name+" ? ");
      var position = inCart.indexOf(target);
      inCart.splice(position, 1);
      removeAllChild(pageYield);
      for(var i=0; i < inCart.length; i++){
        showCart(pageYield, inCart[i], true);
      }
      inCartCount = 0;
      inCartTotal = 0;
      for(var i=0; i<inCart.length; i++){
        inCartCount = inCartCount + inCart[i].qty;
        inCartTotal = inCartTotal + (inCart[i].qty * inCart[i].price);
      }
      var cartCountValue = document.createTextNode("(" + inCartCount + ")");
      removeAllChild(cartCount);
      cartCount.appendChild(cartCountValue);
      calculate(showBalance, inCartTotal);

      if(inCartCount==0){
        checkout.setAttribute('disabled','disabled')
      }
      pageYield.appendChild(checkout);
    })
  }
}

// The Shopping Cart
var cart = document.getElementById('cart');
var showBalance = document.getElementById('show-balance');
var shippingFee = 0;

function calculate(location, inCartTotal){
  removeAllChild(location);
  var showSubTotal = document.createElement('p');
  var showShippingFee = document.createElement('p');
  var showTax = document.createElement('p');
  var showTotal = document.createElement('p');
  var showSubTotalText = document.createTextNode("subtotal: $" + inCartTotal.toFixed(2));
  var showShippingFeeText = document.createTextNode("Shipping & handling: $" + shippingFee);
  var showTaxText = document.createTextNode("tax: $" + (inCartTotal*0.07).toFixed(2));
  var showTotalText = document.createTextNode("total: $" + (inCartTotal*1.07 + shippingFee).toFixed(2) );

  location.appendChild(showSubTotal);
  location.appendChild(showTax);
  location.appendChild(showShippingFee);
  location.appendChild(showTotal);
  showSubTotal.appendChild(showSubTotalText);
  showTax.appendChild(showTaxText);
  showTotal.appendChild(showTotalText);
  showShippingFee.appendChild(showShippingFeeText);

}

var hiddenClass = document.getElementsByClassName('hidden');
var inCart = [];

cart.addEventListener('click',function(){
  if (inCart.length>0){
    removeAllChild(pageYield);

    for(var i=0; i<inCart.length; i++){
      inCartCount = inCartCount + inCart[i].qty;
      inCartTotal = inCartTotal + (inCart[i].qty * inCart[i].price);
    }

    for(var i=0; i < inCart.length; i++){
      showCart(pageYield, inCart[i], true);
    }

    checkout.removeAttribute('disabled');
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

checkout.addEventListener('click',function(){
  console.log(inCartTotal);
  removeAllChild(pageYield);
  removeAllChild(checkoutList);
  checkoutContent.className = '';
  pageYield.appendChild(checkoutContent);
  calculate(showBalance, inCartTotal);
  for(var i=0; i < inCart.length; i++){
    showCart(checkoutList, inCart[i], false);
  }
})

// Shipping Options
var shipOptionStandard = document.getElementById('shipping-options-standard');
var shipOptionTwoDays = document.getElementById('shipping-options-twodays');
var shipOptionSameDay = document.getElementById('shipping-options-sameday');

function addShippingFee (element, fee){
  var showFee = document.createElement('span');
  var showFeeText = document.createTextNode("$"+fee);
  showFee.appendChild(showFeeText);
  element.appendChild(showFee);
  element.addEventListener('click', function(){
    shippingFee = fee;
    calculate(showBalance, inCartTotal);
  })
}
addShippingFee(shipOptionStandard, 0);
addShippingFee(shipOptionTwoDays, 3.50);
addShippingFee(shipOptionSameDay, 12.10);


toggleClassButton("checkout-list-button", "checkout-list");
toggleClassButton("checkout-customer-button", "checkout-customer-form");
toggleClassButton("checkout-payment-button", "checkout-payment");
var confirmAddress = document.getElementById('confirm-address');
var checkoutForm = document.getElementById('checkout-customer-form')
var checkoutPayment = document.getElementById('checkout-payment')
confirmAddress.addEventListener('click', function(){
  toggleClass('hidden', checkoutForm);
  toggleClass('hidden', checkoutPayment);
})


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
  calculate(confirmList, inCartTotal);
  for(var i=0; i < inCart.length; i++){
    showCart(confirmList, inCart[i], false);
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
})

// Place order
var payPlaceorder = document.getElementById('pay-placeorder-button');
payPlaceorder.addEventListener('click', function(){
  inCartTotal = 0;
  inCartCount = 0;
  inCart = [];
  removeAllChild(pageYield);
  removeAllChild(cartCount);
  removeAllChild(showBalance);
  appendMessage(pageYield, "Thanks for shopping with us!")

})
