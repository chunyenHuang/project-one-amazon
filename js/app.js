function clearPage(){
  main.className='hidden';

  var route = document.getElementById('route');
  var cartRoute =document.getElementById('cart-route');
  var searchRoute =document.getElementById('search-route');
  removeAllChild(route);
  removeAllChild(cartRoute);
  removeAllChild(searchRoute);

  removeAllChild(pageYield);
  checkoutContent.className = 'hidden';
  confirmPage.className = 'hidden';
  cartPanel.className = 'hidden';
  detail.className = 'hidden';

  removeAllChild(detailImg);
  removeAllChild(detailName);
  removeAllChild(detailBrand);
  removeAllChild(detailPrice);
  removeAllChild(detailReviewBar);
  removeAllChild(detailReviewAll);
  removeAllChild(detailDescription);
  removeAllChild(detailReviews);
  removeAllChild(detailRecommend);
  removeAllChild(detailAdd);
  removeAllChild(detailWish);
  removeAllChild(confirmList);
  removeAllChild(confirmUser);
  removeAllChild(confirmPayment);
}

function printRoute(place, value){
  var route = document.getElementById('route');
  removeAllChild(route);
  var cartRoute = document.getElementById('cart-route');
  removeAllChild(cartRoute);
  var routeSearch = document.getElementById('search-route');
  removeAllChild(routeSearch);
  var slash = document.createElement('span');
  slash.textContent = " / ";
  var routeCart = document.createElement('a');
  routeCart.textContent = place;
  routeCart.href="#";
  var routeSearchPath = document.createElement('a');
  routeSearchPath.textContent = "search: " + value;
  routeSearchPath.href="#";
  if (place === "Shopping Cart"){
    routeCart.setAttribute('data-type', 'show-cart');
    cartRoute.appendChild(slash);
    cartRoute.appendChild(routeCart);
  }
  if (place === "Order History"){
    routeCart.setAttribute('data-type', 'show-history');
    cartRoute.appendChild(slash);
    cartRoute.appendChild(routeCart);
  }
  if (place === "Wish list"){
    routeCart.setAttribute('data-type', 'show-wishlist');
    cartRoute.appendChild(slash);
    cartRoute.appendChild(routeCart);
  }
  if (place === "search"){
    routeSearchPath.setAttribute('data-type','search');
    routeSearchPath.setAttribute('data-value', value);
    routeSearch.appendChild(routeSearchPath);
  }
}

window.addEventListener('load',function(){
  loadHomepage();
})

document.body.addEventListener('click', function(event){
  if (event.target.hasAttribute('data-type')){
    var id = filterInt(event.target.getAttribute('data-id'));
    var type = event.target.getAttribute('data-type');
  } else {
    var id = filterInt(event.target.parentNode.getAttribute('data-id'));
    var type = event.target.parentNode.getAttribute('data-type');
  }
  var value = event.target.getAttribute('value');
  var theProduct = _.where(products, {id: id})[0];

   if (type === "show-wishlist"){
    if (inWishList.length>0){
      showWishList();
    }
  }
  if (type === "show-cart"){
    if (inCart.length>0){
      showCurrentCart();
    }
  }
  if (type === "show-history"){
    if (pastInCart.length>0){
      showOrderHistory();
    }
  }

  if(type === "link-to-home"){
    linkHome();
  }

  if (type === "show-product"){
    showDetail(id);
  }

  if (type === "add-to-cart"){
    var qty = event.target.getAttribute('qty');
    var addThis = new item(id, qty, theProduct.price);
    var added = false;
    for (var x=0; x<inCart.length; x++){
      if (inCart[x].id === addThis.id){
        inCart[x].qty = inCart[x].qty + addThis.qty;
        added = true;
      }
    }
    if (added === false){
      inCart.push(addThis);
    }
    resetCartTotal();
    calculate(showBalance, inCartTotal);
  }

  if (type === "add-to-wishlist"){
    var qty = event.target.getAttribute('qty');

    var addThis = new item(id, qty, theProduct.price);
    var added = false;
    for (var x=0; x<inWishList.length; x++){
      if (addThis.id === inWishList[x].id){
        inWishList[x].qty = inWishList[x].qty + addThis.qty;
        added = true;
      }
    }
    if (added == false){
      inWishList.push(addThis);
    }
  }

  if (type === "add-wish-to-cart"){
    var qty = event.target.getAttribute('qty');
    var addThis = new item(id, qty, theProduct.price);
    var added = false;
    for (var x=0; x<inCart.length; x++){
      if (addThis.id === inCart[x].id){
        inCart[x].qty = inCart[x].qty + addThis.qty;
        added = true;
      }
    }
    if (added == false){
      inCart.push(addThis);
    }

    resetCartTotal();
    calculate(showBalance, inCartTotal);
    var find = _.where(inWishList, {id: id})[0];
    var position = _.indexOf(inWishList, find);
    inWishList.splice(position, 1);

    showWishList();
  }

  if (type === "checkout"){
    clearPage();
    printRoute("Shopping Cart", 0);
    checkoutContent.className = '';
    pageYield.appendChild(checkoutContent);
    resetCartTotal();
    for (var i=0; i<inCart.length; i++){
      showCart(checkoutList, inCart[i], false, false, false, i);
    }
  }

  if (type === "use-this-address"){
    toggleClass('hidden', checkoutForm);
    toggleClass('hidden', checkoutPayment);
  }

  if (type === "check-billing-address"){
    if (paymentAddress.getAttribute('value') === address.value){
      paymentAddress.setAttribute('value', ' ');
      paymentAddress.removeAttribute('disabled');
    } else {
      paymentAddress.setAttribute('value', address.value);
      paymentAddress.setAttribute('disabled', 'disabled');
    }
  }

  if (type === "confirm-transaction"){
    clearPage();
    printRoute("Shopping Cart", 0);

    confirmPage.className = '';
    pageYield.appendChild(confirmPage);
    calculate(confirmList, inCartTotal);
    for (var i=0; i<inCart.length; i++){
      showCart(confirmList, inCart[i], false, false, false, i);
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
  }

  if (type === "complete-transaction"){
    clearPage();

    var orderTime = new Date();
    var addThisCart = new order(inCart, ((inCartTotal*1.07 + shippingFee).toFixed(2)), orderTime);
    pastInCart.push(addThisCart);
    var lastPurchase = _.last(pastInCart);

    resetCartTotal();
    inCart = [];
    removeAllChild(showBalance);
    appendMessage(pageYield, "Thanks for shopping with us!")

    var showLastOrder = _.last(pastInCart);
    var pastbox = document.createElement('div');
    pastbox.className= "col-md-12";
    var panel = document.createElement('div');
    panel.className = 'panel panel-default'
    var panelHeading = document.createElement('div');
    panelHeading.className = 'panel-heading';
    var panelBody = document.createElement('div');
    panelBody.className = 'panel-body';

    for (var y=0; y<showLastOrder.cart.length; y++){
      showCart(panelBody, showLastOrder.cart[y], false, true, false, y);
    }
    var paraTotal = document.createElement('p');
    var paraDate = document.createElement('p');
    var total = document.createTextNode("Total(w/ Tax & Shipping): $" + showLastOrder.total);
    var date = document.createTextNode("Purchased Date: " + timeStamp(showLastOrder.date));

    pageYield.appendChild(pastbox);
    pastbox.appendChild(panel);
    panel.appendChild(panelHeading);
    panel.appendChild(panelBody);
    panelHeading.appendChild(paraTotal);
    panelHeading.appendChild(paraDate);
    paraTotal.appendChild(total);
    paraDate.appendChild(date);

    cartPanel.className = 'hidden';
  }

  if (type === "search"){
    var searchInput = event.target.getAttribute('data-value');
    search(searchInput, "any", pageYield);
  }
})

document.body.addEventListener('submit', function(event){
  event.preventDefault();
  var id = filterInt(event.target.getAttribute('data-id'));
  var type = event.target.getAttribute('data-type');

  if (type === "search"){
    var searchInput = document.getElementById('search-input').value;
    search(searchInput, "any", pageYield);
  }
})
