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
function showResult(location, target, row){
  // Structure
  var outline = document.createElement('div');
  outline.setAttribute('style','padding:5px');
  outline.className = "col-xs-"+12/row +" " +"col-sm-"+12/row +" " + "col-md-"+12/row;

  console.log(outline.className);
  var box = document.createElement('div');
  box.className = "col-md-12";
  box.setAttribute('style', 'border:1px solid rgb(213, 213, 213)');
  var boxImg = document.createElement('div');
  boxImg.className = "col-md-12";
  var boxBody = document.createElement('div');
  boxBody.className = "col-md-12";

  var link = document.createElement('a');
  link.href="#";
  var image = document.createElement('img');
  image.src=target.thumbOne;
  image.alt=target.name;
  image.setAttribute('width', '100%');

  var content = document.createElement('p');
  var contentText = document.createTextNode(' ');

  var commandBox = document.createElement('div');
  commandBox.className = "row";
  commandBox.setAttribute('style', 'padding-bottom:15px;');
  var commandBoxTitle = document.createElement('div');
  commandBoxTitle.className = "col-md-12";
  var commandBoxPrice = document.createElement('div');
  commandBoxPrice.className = "col-md-4";
  commandBoxPrice.setAttribute('style','color:red;')
  var commandBoxQty = document.createElement('div');
  commandBoxQty.className = "col-md-4";
  var commandBoxAdd = document.createElement('div');
  commandBoxAdd.className = "col-md-4";

  var title = document.createElement('p');
  title.className = "media-heading";
  var titleText = document.createTextNode(target.name + " ("+target.condition+")");
  var price = document.createElement('h5');
  var priceTag = document.createTextNode("$" + target.price);
  var quantity = document.createElement('input');
  quantity.setAttribute('style', 'display:block');
  quantity.setAttribute('type', 'number');
  quantity.setAttribute('value', 1);
  quantity.setAttribute('min', 1);
  quantity.setAttribute('max', 100);
  var cartIcon = document.createElement('i');
  cartIcon.className="fa fa-cart-plus fa-lg";
  var addToCart = document.createElement('button');
  addToCart.className = "add-to-cart btn btn-primary";
  addToCart.setAttribute('style', 'display:block');

  // Node Tree
  location.appendChild(outline);
  outline.appendChild(box);
  box.appendChild(boxImg);
  box.appendChild(boxBody);
  boxImg.appendChild(link);
  link.appendChild(image);
  boxBody.appendChild(commandBox);
  boxBody.appendChild(content);
  content.appendChild(contentText);

  commandBox.appendChild(commandBoxTitle);
  commandBox.appendChild(commandBoxPrice);
  commandBox.appendChild(commandBoxQty);
  commandBox.appendChild(commandBoxAdd);

  commandBoxTitle.appendChild(title);
  commandBoxPrice.appendChild(price);
  commandBoxQty.appendChild(quantity);
  commandBoxAdd.appendChild(addToCart);

  title.appendChild(titleText);
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
    var added = false;
    for(var x=0; x < inCart.length; x++){
      if (addThis.id === inCart[x].id){
        inCart[x].qty = inCart[x].qty + addThis.qty;
        added = true;
      }
    }
    if(added == false){
      inCart.push(addThis);
    }
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
function showCart(location, target, editable, reviewable){
  for(var i=0; i < products.length; i++){
    if (target.id === products[i].id){
      target.name = products[i].name;
      target.condition = products[i].condition;
      target.thumbOne = products[i].thumbOne;
    }
  }

  // Structure
  var box = document.createElement('div');
  box.className = "col-md-12";
  box.setAttribute('id','product-'+target.id);
  box.setAttribute('style','padding-top:15px; padding-bottom:15px; border-bottom:1px solid gray')
  var boxImg = document.createElement('div');
  boxImg.className = "col-md-2";
  var boxBody = document.createElement('div');
  boxBody.className = "col-md-4";
  var boxPrice = document.createElement('div');
  boxPrice.className = "col-md-1";
  var boxAmount = document.createElement('div');
  boxAmount.className = "col-md-2";
  var boxTotal = document.createElement('div');
  boxTotal.className = "col-md-1";
  var boxRemove = document.createElement('div');
  boxRemove.className = "col-md-1";

  var boxReview = document.createElement('div');
  boxReview.className = 'col-md-6 col-md-offset-6';


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
  var totalTag = document.createTextNode("$" + (target.qty * target.price).toFixed(2));

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
      totalTag = document.createTextNode("$" + (target.qty * target.price).toFixed(2));
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
      var currentBox = document.createElement('div');
      currentBox.className= "col-md-10";
      var panel = document.createElement('div');
      panel.className = 'panel panel-default'
      var panelHeading = document.createElement('div');
      panelHeading.className = 'panel-heading';
      var panelBody = document.createElement('div');
      panelBody.className = 'panel-body';
      var title = document.createElement('p');
      var titleText = document.createTextNode("Shopping Cart");
      pageYield.appendChild(currentBox);
      currentBox.appendChild(panel);
      panel.appendChild(panelHeading);
      panel.appendChild(panelBody);
      panelHeading.appendChild(title);
      title.appendChild(titleText);

      for(var i=0; i < inCart.length; i++){
        showCart(panelBody, inCart[i], true, false);
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
        removeAllChild(pageYield);
        main.className = "container";
      }
      pageYield.appendChild(checkout);
    })
  }

  // Review Purchased Items
  if (reviewable == true){
    var review = document.createElement('button');
    review.setAttribute('class','btn btn-success')
    var reviewTag = document.createTextNode('review');
    boxRemove.appendChild(review);
    review.appendChild(reviewTag);
    review.addEventListener('click', function(){
      console.log("review?");
    })
  }
}

// The Shopping Cart
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


cart.addEventListener('mouseover',function(){
  var viewbox = document.createElement('div');
  viewbox.className = "view-cart-box";
  var current = document.createElement('button');
  current.className = 'btn btn-default btn-block'
  current.setAttribute('disabled', 'disabled');
  currentText = document.createTextNode('My Cart')
  var past = document.createElement('button');
  past.className = 'btn btn-default btn-block'
  past.setAttribute('disabled', 'disabled');
  pastText = document.createTextNode('Order History');
  pageTop.appendChild(viewbox);
  viewbox.appendChild(current);
  viewbox.appendChild(past);
  current.appendChild(currentText);
  past.appendChild(pastText);

  viewbox.addEventListener('mouseleave', function(){
    pageTop.removeChild(viewbox);
  })

  if (inCart.length>0){
    current.removeAttribute('disabled')
    current.addEventListener('click', function(){
      removeAllChild(pageYield);
      main.className="hidden";
      cartPanel.className = ' ';

      checkout.removeAttribute('disabled');
      var checkoutButton = document.getElementById('checkout-button');
      checkoutButton.appendChild(checkout);
      var currentBox = document.createElement('div');
      currentBox.className= "col-md-10";
      var panel = document.createElement('div');
      panel.className = 'panel panel-default'
      var panelHeading = document.createElement('div');
      panelHeading.className = 'panel-heading';
      var panelBody = document.createElement('div');
      panelBody.className = 'panel-body';
      var title = document.createElement('p');
      var titleText = document.createTextNode("Shopping Cart");

      for(var i=0; i<inCart.length; i++){
        inCartCount = inCartCount + inCart[i].qty;
        inCartTotal = inCartTotal + (inCart[i].qty * inCart[i].price);
      }
      for(var i=0; i < inCart.length; i++){
        showCart(panelBody, inCart[i], true, false);
      }

      pageYield.appendChild(currentBox);
      currentBox.appendChild(panel);
      panel.appendChild(panelHeading);
      panel.appendChild(panelBody);
      panelHeading.appendChild(title);
      title.appendChild(titleText);
    })
  }

  if (pastInCart.length>0){
    past.removeAttribute('disabled')

    past.addEventListener('click', function(){
      removeAllChild(pageYield);
      main.className="hidden";
      cartPanel.className = ' ';
      pastInCart = _.sortBy(pastInCart, date);
      pastInCart = pastInCart.reverse();
      for(var x=0; x < pastInCart.length; x++){
        var pastbox = document.createElement('div');
        pastbox.className= "col-md-12";
        var panel = document.createElement('div');
        panel.className = 'panel panel-default'
        var panelHeading = document.createElement('div');
        panelHeading.className = 'panel-heading';
        var panelBody = document.createElement('div');
        panelBody.className = 'panel-body';

        for(var y=0; y < pastInCart[x].cart.length; y++){
          showCart(panelBody, pastInCart[x].cart[y], false, true);
        }
        var paraTotal = document.createElement('p');
        var paraDate = document.createElement('p');
        var total = document.createTextNode("Total(w/ Tax & Shipping): $" + pastInCart[x].total);
        var date = document.createTextNode("Purchased Date: " + timeStamp(pastInCart[x].date));

        pageYield.appendChild(pastbox);
        pastbox.appendChild(panel);
        panel.appendChild(panelHeading);
        panel.appendChild(panelBody);
        panelHeading.appendChild(paraTotal);
        panelHeading.appendChild(paraDate);
        paraTotal.appendChild(total);
        paraDate.appendChild(date);

      }
      cartPanel.className = 'hidden';
    })
  }
})

// Search Function //
search.addEventListener('submit', function(evt){
  removeAllChild(pageYield);
  main.className = "container hidden";
  evt.preventDefault();
  cartPanel.className = 'hidden';
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
  var uniqResult = _.uniq(results);

  // Print Result
  if (results.length <= 0){
    appendMessage(pageYield, "sorry, no match found.");
  } else {
    var rowSix = [];
    var showed = [];
    var perRow = 6;

    for(var t=0; t < (uniqResult.length/perRow); t++){
      var row = document.createElement('div');
      row.className="row";
      pageYield.appendChild(row);
      take = _.difference(uniqResult, showed);
      if(take.length >= perRow){
        take = _.sample(take, perRow);
      }
      for(var x=0;x<take.length; x++){
        showed.push(take[x]);
        showResult(row, take[x], perRow);
      }
    }
  }
});

// End of Search Function //

// Checkout Content
checkout.addEventListener('click',function(){
  console.log(inCartTotal);
  removeAllChild(pageYield);
  removeAllChild(checkoutList);
  checkoutContent.className = '';
  pageYield.appendChild(checkoutContent);
  calculate(showBalance, inCartTotal);
  for(var i=0; i < inCart.length; i++){
    showCart(checkoutList, inCart[i], false, false);
  }
})

// Shipping Options
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

confirmAddress.addEventListener('click', function(){
  toggleClass('hidden', checkoutForm);
  toggleClass('hidden', checkoutPayment);
})

// form values
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
payContinue.addEventListener('click', function(){
  removeAllChild(pageYield);
  removeAllChild(confirmList);
  removeAllChild(confirmUser);
  removeAllChild(confirmPayment);
  confirmPage.className = '';
  pageYield.appendChild(confirmPage);
  calculate(confirmList, inCartTotal);
  for(var i=0; i < inCart.length; i++){
    showCart(confirmList, inCart[i], false, false);
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
function order(cart, total, date){
  this.cart = cart;
  this.total = parseFloat(total);
  this.date = date;
}

function timeStamp() {
  var now = new Date();
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
  return date.join("/");
}

payPlaceorder.addEventListener('click', function(){
  var orderTime = Date.now();
  var addThisCart = new order(inCart, ((inCartTotal*1.07 + shippingFee).toFixed(2)), orderTime);
  pastInCart.push(addThisCart);

  console.log(inCart);
  console.log(pastInCart);
  inCartTotal = 0;
  inCartCount = 0;
  inCart = [];
  cartPanel.className = 'hidden';
  removeAllChild(pageYield);
  removeAllChild(cartCount);
  removeAllChild(showBalance);
  appendMessage(pageYield, "Thanks for shopping with us!")
})
