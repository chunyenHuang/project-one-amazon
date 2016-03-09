// Page Cover Gallery
function loadHomepage(){
  main.className = "container";
  cartPanel.className ="hidden";
  var imgGallerys = document.getElementsByClassName('img-gallery');
  for(var i=0; i< imgGallerys.length; i ++){
    removeAllChild(imgGallerys[i]);
  }
  var mayLikeProducts = [];
  var sampleProducts = [];

  // Recommendation
  if (inCart.length>0){
    var tags = [];
    var inCartProducts = [];
    for(var i =0; i < inCart.length; i++){
      var theProduct = _.where(products, {id: inCart[i].id});
      inCartProducts.push(theProduct[0]);
      tags.push(theProduct[0].tag);
    }
    tags = _.flatten(tags);
    tags = _.uniq(tags);

    var notInCart = _.difference(products, inCartProducts);
    for(var i=0; i< notInCart.length; i++){
      for(var x=0; x < tags.length; x++){
        var checkTag = _.contains(notInCart[i].tag, tags[x]);
        if (checkTag === true){
          mayLikeProducts.push(notInCart[i]);
        }
      }
    }
    mayLikeProducts = _.uniq(mayLikeProducts);
    mayLikes = _.sample(mayLikeProducts, 6);

    for (var i=0; i < mayLikes.length;i++){
      insertImgGallery(imgGallerys[0],mayLikes[i]);
    }
    var others = _.difference(products, mayLikeProducts);
    var showed = [];
    for (var i=1; i < imgGallerys.length; i++){
      var itemPerRow = 6 ;
      var sampleProducts = _.difference(others, showed);
      var sampleProducts = _.sample(sampleProducts, itemPerRow)
      for(var t=0; t < itemPerRow; t++){
        insertImgGallery(imgGallerys[i], sampleProducts[t]);
        showed.push(sampleProducts[t]);
      }
    }
  } else if (pastInCart.length > 0){
    var tags = [];
    var lastPurchase = _.last(pastInCart);
    var lastItems = [];
    for(var i =0; i < lastPurchase.cart.length; i++){
      var theProducts = _.where(products, {id: lastPurchase.cart[i].id});
        lastItems.push(theProducts[0]);
        tags.push(theProducts[0].tag);
    }
    tags = _.flatten(tags);
    tags = _.uniq(tags);

    var notInCart = _.difference(products, lastItems);
    for(var i=0; i< notInCart.length; i++){
      for(var x=0; x < tags.length; x++){
        var checkTag = _.contains(notInCart[i].tag, tags[x]);
        if (checkTag === true){
          mayLikeProducts.push(notInCart[i]);
        }
      }
    }
    mayLikeProducts = _.uniq(mayLikeProducts);
    mayLikes = _.sample(mayLikeProducts, 6);

    for (var i=0; i < mayLikes.length;i++){
      insertImgGallery(imgGallerys[0],mayLikes[i]);
    }

    var others = _.difference(products, mayLikeProducts);
    var showed = [];
    for (var i=1; i < imgGallerys.length; i++){
      var itemPerRow = 6 ;
      var sampleProducts = _.difference(others, showed);
      var sampleProducts = _.sample(sampleProducts, itemPerRow)
      for(var t=0; t < itemPerRow; t++){
        insertImgGallery(imgGallerys[i], sampleProducts[t]);
        showed.push(sampleProducts[t]);
      }
    }
  } else {
    var showed = [];
    for (var i=0; i < imgGallerys.length; i++){
      var itemPerRow = 6 ;
      var sampleProducts = _.difference(products, showed);
      var sampleProducts = _.sample(sampleProducts, itemPerRow)
      for(var t=0; t < itemPerRow; t++){
        insertImgGallery(imgGallerys[i], sampleProducts[t]);
        showed.push(sampleProducts[t]);
      }
    }
  }
}

// put img on the homepage
function insertImgGallery(location, element){
  var imgBox = document.createElement('div');
  imgBox.className = "img-box";
  var link = document.createElement('a');
  link.setAttribute('data-id', element.id);
  link.href="#";
  link.addEventListener('click', function(){
    var productId = parseFloat(link.getAttribute('data-id'));
    showDetail(productId);
  })
  var img = document.createElement('img');
  img.src = element.thumbOne;

  location.appendChild(imgBox);
  imgBox.appendChild(link);
  link.appendChild(img);
}

// Global
function filterInt(value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value)){
    return Number(value);
  }
  return NaN;
}

function item(id, qty, price){
  this.id = id;
  this.qty = parseFloat(qty);
  this.price = price;
}

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

// Product Individual View
function showDetail(productId){
  main.className = "hidden";
  detail.className = ' ';
  removeAllChild(yield);
  yield.appendChild(detail);
  array = _.where(products, {id: productId});
  target = array[0];

  var img = document.createElement('img');
  img.src = target.thumbOne;
  img.setAttribute('width', '100%');

  var name = document.createTextNode(target.name);
  var price = document.createTextNode("$" + target.price);
  var description = document.createTextNode(target.description);

  removeAllChild(detailImg);
  removeAllChild(detailName);
  removeAllChild(detailPrice);
  removeAllChild(detailReviewBar);
  removeAllChild(detailReviewAll);
  removeAllChild(detailDescription);
  removeAllChild(detailReviews);

  detailImg.appendChild(img);
  detailName.appendChild(name);
  detailPrice.appendChild(price);
  detailDescription.appendChild(description);

  reviewArray = _.where(reviews);

  var detailQty = document.getElementById('detail-qty');
  var quantity = document.createElement('select');
  quantity.className="form-control input-sm";
  for (var i =1; i<=10; i++){
    var option = document.createElement('option');
    option.setAttribute('value', i);
    var num = document.createTextNode(i);
    option.appendChild(num);
    quantity.appendChild(option);
  }
  removeAllChild(detailQty);
  detailQty.appendChild(quantity);

  var detailAdd = document.getElementById('detail-add');
  detailAdd.addEventListener('click', function(){
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
    for(var x=0; x<inCart.length; x++){
      inCartCount = inCartCount + inCart[x].qty;
      inCartTotal = inCartTotal + (inCart[x].qty * inCart[x].price);
    }
    var cartCountValue = document.createTextNode(inCartCount);
    removeAllChild(cartCount);
    cartCount.appendChild(cartCountValue);
    calculate(showBalance, inCartTotal);
  })

  // detail review
  var reviewRating = 0;
  var array = _.where(reviews, {productId: target.id});
  var ownReview = _.where(array, {userId: currentUser.id});
  ownReview = _.sortBy(ownReview, 'date').reverse();
  var otherReview = _.difference(array, ownReview);
  otherReview = _.sortBy(otherReview, 'date').reverse();
  var theReview = [];
  for(var i=0; i<ownReview.length;i++){
    theReview.push(ownReview[i]);
  }
  for(var i=0; i<otherReview.length;i++){
    theReview.push(otherReview[i]);
  }

  if (theReview.length>0){
    for (var i=0; i < theReview.length; i++){
      reviewRating = reviewRating + theReview[i].rating
    }
    var average = reviewRating/(theReview.length);
    var showReview = document.createElement('img');
    showReview.src = "images/rating-" + Math.floor(average) + ".png";
    showReview.setAttribute('style','display:inline; max-width: 130px; height: auto;');
    detailReviewBar.appendChild(showReview);
    var reviewCount = document.createTextNode("("+theReview.length+")");
    detailReviewBar.appendChild(reviewCount);

    var displayReviews = document.createElement('div');
    for(var i=5; i >=1; i--){
      theReviewRatings = _.where(theReview, {rating: i});
      var ratingCount = document.createTextNode("("+theReviewRatings.length+")");
      var showRating = document.createElement('img');
      showRating.src = "images/rating-" + i + ".png";
      showRating.setAttribute('style','display:inline; width: 130px; height: auto;');
      displayReviews.appendChild(showRating);
      displayReviews.appendChild(ratingCount);
    }
    detailReviewAll.appendChild(displayReviews);

    var showedReviews = [];
    loadReviews(5);
    detailLoad10.addEventListener('click',function(){
      loadReviews(10);
    })
    detailLoad30.addEventListener('click',function(){
      loadReviews(30);
    })
    function loadReviews(num){
      var notShown = _.difference(theReview, showedReviews);
      var toShow = _.first(notShown, num);

      for(var i=0; i < toShow.length; i++){
        showedReviews.push(toShow[i]);
        var reviewLine = document.createElement('div');
        reviewLine.className = 'col-md-12';
        reviewLine.setAttribute('style','padding:10px;')
        var lineLeft = document.createElement('div');
        lineLeft.className = 'col-md-2';
        var lineRight = document.createElement('div');
        lineRight.className = 'col-md-10';
        var showReviewRating = document.createElement('img');
        showReviewRating.src = "images/rating-" + theReview[i].rating + ".png";
        showReviewRating.setAttribute('style','display:inline; width: 100px; height: auto;');
        var reviewUsername = _.where(users, {id: theReview[i].userId})
        var boldText = document.createElement('b');
        var showReviewUser = document.createTextNode(reviewUsername[0].name);
        var showReviewDate = document.createTextNode(timeStamp(theReview[i].date));
        var showReviewCommentBox = document.createElement('p');
        var showReviewComment = document.createTextNode(theReview[i].comment);
        detailReviews.appendChild(reviewLine);
        reviewLine.appendChild(lineLeft);
        reviewLine.appendChild(lineRight);
        lineLeft.appendChild(showReviewDate);
        lineLeft.appendChild(showReviewRating);
        lineRight.appendChild(boldText);
        boldText.appendChild(showReviewUser);
        showReviewCommentBox.appendChild(showReviewComment);
        lineRight.appendChild(showReviewCommentBox);
      }
    }
  } else {
    var noReview = document.createTextNode("N/A");
    detailReviewBar.appendChild(noReview);
  }
}


// Product Album View
function showResult(location, target, row){
  // Structure
  var outline = document.createElement('div');
  outline.setAttribute('style','padding:5px');
  outline.className = "col-xs-"+12/row +" " +"col-sm-"+12/row +" " + "col-md-"+12/row;
  var box = document.createElement('div');
  box.className = "col-md-12";
  box.setAttribute('style', 'padding-bottom:10px; border:1px solid rgb(213, 213, 213)');
  var boxImg = document.createElement('div');
  boxImg.className = "col-md-12";
  var boxBody = document.createElement('div');
  boxBody.className = "col-md-12";

  var link = document.createElement('a');
  link.href="#";
  link.setAttribute('product-id',target.id);
  link.addEventListener('click', function(){
    productId = parseFloat(link.getAttribute('product-id'));
    showDetail(productId);
  })

  var image = document.createElement('img');
  image.src=target.thumbOne;
  image.alt=target.name;
  image.setAttribute('width', '100%');

  var content = document.createElement('h5');
  var contentText = document.createTextNode(target.name);

  var commandForm = document.createElement('form');
  commandForm.className="form-inline";
  var commandBox = document.createElement('div');
  commandBox.className = "row";
  var commandBoxPrice = document.createElement('div');
  commandBoxPrice.className = "col-sm-4";
  commandBoxPrice.setAttribute('style', 'padding-top:5px')
  var commandBoxQty = document.createElement('div');
  commandBoxQty.className = "col-sm-8";
  var commandBoxAdd = document.createElement('div');
  commandBoxAdd.className = "col-sm-12";
  commandBoxAdd.setAttribute('style', 'padding-top:20px;padding-bottom:20px')


  var reviewBox = document.createElement('div');
  reviewBox.className = "col-md-12";
  var reviewRating = 0;
  var theReview = _.where(reviews, {productId: target.id})

  if (theReview.length>0){
    for (var i=0; i < theReview.length; i++){
      reviewRating = reviewRating + theReview[i].rating
    }
    var average = reviewRating/(theReview.length);
    var showReview = document.createElement('img');
    showReview.src = "images/rating-" + Math.floor(average) + ".png";
    showReview.setAttribute('style','display:inline; max-width: 70%; height: auto;');
    reviewBox.appendChild(showReview);
    var reviewCount = document.createTextNode("("+theReview.length+")");
    reviewBox.appendChild(reviewCount);

    var displayReviews = document.createElement('div');
    displayReviews.className = 'float-review-box hidden';
    reviewBox.appendChild(displayReviews);
    for(var i=5; i >=1; i--){
      theReviewRatings = _.where(theReview, {rating: i});
      var ratingCount = document.createTextNode("("+theReviewRatings.length+")");
      var showRating = document.createElement('img');
      showRating.src = "images/rating-" + i + ".png";
      showRating.setAttribute('style','display:inline; max-width: 70%; height: auto;');
      displayReviews.appendChild(showRating);
      displayReviews.appendChild(ratingCount);
    }
    reviewBox.addEventListener('mouseenter',function(){
      toggleClass('hidden', displayReviews);
    })
    reviewBox.addEventListener('mouseleave',function(){
      toggleClass('hidden', displayReviews);
    })
  } else {
    var noReview = document.createTextNode("N/A");
    reviewBox.appendChild(noReview);
  }

  var brand = document.createElement('p');
  brand.setAttribute('style','font-size:0.9em;');
  brand.textContent = "by "
  var brandLink = document.createElement('a');
  brandLink.textContent = target.manufacturer;
  brandLink.href="#";
  brandLink.addEventListener('click', function(){
    search(target.manufacturer, "manufacturer", pageYield);
  })
  var price = document.createElement('span');
  var priceTag = document.createTextNode("$" + target.price);
  var quantityText = document.createTextNode('Qty: ')
  var quantity = document.createElement('select');
  quantity.className="form-control input-sm";
  for (var i =1; i<=10; i++){
    var option = document.createElement('option');
    option.setAttribute('value', i);
    var num = document.createTextNode(i);
    option.appendChild(num);
    quantity.appendChild(option);
  }
  var cartIcon = document.createElement('i');
  var cartIconText = document.createTextNode(' Add to Cart');
  cartIcon.className="fa fa-cart-plus fa-lg";
  var addToCart = document.createElement('button');
  addToCart.className = "add-to-cart btn btn-success btn-xs btn-block";
  addToCart.setAttribute('style', 'display:block');

  // Node Tree
  location.appendChild(outline);
  outline.appendChild(box);
  box.appendChild(boxImg);
  box.appendChild(boxBody);
  boxImg.appendChild(link);
  link.appendChild(image);
  boxBody.appendChild(content);
  boxBody.appendChild(brand);
  boxBody.appendChild(commandForm);
  boxBody.appendChild(reviewBox);
  content.appendChild(contentText);

  commandForm.appendChild(commandBox);
  commandBox.appendChild(commandBoxPrice);
  commandBox.appendChild(commandBoxQty);
  commandBox.appendChild(commandBoxAdd);

  commandBoxPrice.appendChild(price);
  commandBoxQty.appendChild(quantityText);
  commandBoxQty.appendChild(quantity);
  commandBoxAdd.appendChild(addToCart);

  brand.appendChild(brandLink);
  price.appendChild(priceTag);
  addToCart.appendChild(cartIcon);
  cartIcon.appendChild(cartIconText);

  addToCart.addEventListener('click', function(e){
    e.preventDefault();
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
    for(var x=0; x<inCart.length; x++){
      inCartCount = inCartCount + inCart[x].qty;
      inCartTotal = inCartTotal + (inCart[x].qty * inCart[x].price);
    }
    var cartCountValue = document.createTextNode(inCartCount);
    removeAllChild(cartCount);
    cartCount.appendChild(cartCountValue);
    calculate(showBalance, inCartTotal);
  })
}

// Cart View
function showCart(location, target, editable, reviewable, orderCount){
  for(var x=0; x < products.length; x++){
    if (target.id === products[x].id){
      target.name = products[x].name;
      target.condition = products[x].condition;
      target.thumbOne = products[x].thumbOne;
    }
  }

  // Structure
  var box = document.createElement('div');
  box.className = "col-md-12";
  box.setAttribute('id','product-'+target.id);
  box.setAttribute('style','padding-top:15px; padding-bottom:15px; border-bottom:1px solid gray')
  var boxImg = document.createElement('div');
  boxImg.className = "col-md-1";
  var boxBody = document.createElement('div');
  boxBody.className = "col-md-4";
  var boxPrice = document.createElement('div');
  boxPrice.className = "col-md-1";
  var boxAmount = document.createElement('div');
  boxAmount.className = "col-md-2";
  var boxTotal = document.createElement('div');
  boxTotal.className = "col-md-2";
  var boxRemove = document.createElement('div');
  boxRemove.className = "col-md-2";

  var boxReview = document.createElement('div');
  boxReview.className = 'col-md-12 well hidden';
  boxReview.setAttribute('style','transition: 0.5')
  var boxReviewLeft = document.createElement('div');
  boxReviewLeft.className = "col-md-4";
  var boxReviewMid = document.createElement('div');
  boxReviewMid.className = "col-md-6";
  var boxReviewRight = document.createElement('div');
  boxReviewRight.className = "col-md-2";
  var reviewForm = document.createElement('form');

  var reviewComment = document.createElement('textarea');
  reviewComment.setAttribute('cols','50');
  reviewComment.setAttribute('rows','3');
  reviewComment.setAttribute('autofocus', true);
  reviewComment.setAttribute('name', 'review');
  reviewComment.setAttribute('style', 'resize: none');
  reviewComment.setAttribute('placeholder', 'write your review');
  var submitReview = document.createElement('button');
  submitReview.className = "btn btn-warning";
  submitReviewText = document.createTextNode('write my review!');

  var rating = document.createElement('div');
  var ratingText = document.createTextNode('Your rating ( 5 is the best) :');
  rating.appendChild(ratingText);
  var ratingContent = document.createElement('p');
  rating.appendChild(ratingContent);

  for (var x=1; x<=5; x++){
    var ratingLable = document.createElement('label');
    ratingLable.className = "radio-inline";
    var input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'rating' + orderCount);
    input.setAttribute('value', x);
    input.setAttribute('required','required');
    var num = document.createTextNode(x);
    ratingLable.appendChild(input);
    ratingLable.appendChild(num);
    ratingContent.appendChild(ratingLable);
  }

  var title = document.createElement('h4');
  title.className = "media-heading";
  var link = document.createElement('a');
  link.href="#";
  link.setAttribute('product-id',target.id);
  link.addEventListener('click', function(){
    detail.className = ' ';
    removeAllChild(yield);
    yield.appendChild(detail);
    productId = parseFloat(link.getAttribute('product-id'));
    showDetail(productId);
  })
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

  location.appendChild(reviewForm);
  reviewForm.appendChild(boxReview);
  boxReview.appendChild(boxReviewLeft);
  boxReview.appendChild(boxReviewMid);
  boxReview.appendChild(boxReviewRight);
  boxReviewLeft.appendChild(rating);
  boxReviewMid.appendChild(reviewComment);
  boxReviewRight.appendChild(submitReview);
  submitReview.appendChild(submitReviewText);

  // Change Qty
  if (editable == true){
    cartPanel.className = ' ';
    checkout.removeAttribute('disabled');

    amount.removeAttribute('disabled');
    amount.addEventListener('input',function(e){
      e.preventDefault();
      target.qty = parseFloat(amount.value);
      total.removeChild(totalTag);
      totalTag = document.createTextNode("$" + (target.qty * target.price).toFixed(2));
      total.appendChild(totalTag);
      inCartCount = 0;
      inCartTotal = 0;
      for(var x=0; x<inCart.length; x++){
        inCartCount = inCartCount + inCart[x].qty;
        inCartTotal = inCartTotal + (inCart[x].qty * inCart[x].price);
      }
      var cartCountValue = document.createTextNode(inCartCount);
      removeAllChild(cartCount);
      cartCount.appendChild(cartCountValue);
      calculate(showBalance, inCartTotal);

      if(inCartCount==0){
        checkout.setAttribute('disabled','disabled')
      }
    })
  }

  // Remove Items from Cart
  if (editable == true){
    var remove = document.createElement('button');
    remove.setAttribute('class','btn btn-danger')
    var removeTag = document.createTextNode('remove');
    boxRemove.appendChild(remove);
    remove.appendChild(removeTag);

    cartPanel.className = ' ';
    checkout.removeAttribute('disabled');

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

      for(var x=0; x < inCart.length; x++){
        showCart(panelBody, inCart[x], true, false, x);
      }
      inCartCount = 0;
      inCartTotal = 0;
      for(var x=0; x<inCart.length; x++){
        inCartCount = inCartCount + inCart[x].qty;
        inCartTotal = inCartTotal + (inCart[x].qty * inCart[x].price);
      }
      var cartCountValue = document.createTextNode(inCartCount);
      removeAllChild(cartCount);
      cartCount.appendChild(cartCountValue);
      calculate(showBalance, inCartTotal);

      if(inCartCount==0){
        checkout.setAttribute('disabled','disabled')
        removeAllChild(pageYield);
        main.className = "container";
      }
    })
  }

  // Review Purchased Items
  if (reviewable == true){
    var writeReview = document.createElement('button');
    writeReview.setAttribute('class','btn btn-danger')
    var reviewTag = document.createTextNode('review');
    boxRemove.appendChild(writeReview);
    writeReview.appendChild(reviewTag);
    writeReview.addEventListener('click', function(){
      toggleClass('hidden', boxReview);
    })
  }
  // Review submit
  reviewForm.addEventListener('submit',function(e){
    e.preventDefault();
    var ratings = document.getElementsByName('rating'+orderCount);
    for(var x=0; x < ratings.length; x++){
      if(ratings[x].checked){
        var ratingValue = ratings[x].value;
        break;
      }
    }
    var writeReviewDate = new Date();
    var addNewReview = new review(0, target.id, parseFloat(ratingValue), reviewComment.value, writeReviewDate, currentUser.id);
    reviews.push(addNewReview);
    console.log(reviews.length);
    var findReview = _.where(reviews, {productId: target.id, userId: currentUser.id}).reverse();
    var showStars = document.createElement('img');
    showStars.src = "images/rating-" + Math.floor(parseFloat(findReview[0].rating)) + ".png";
    showStars.setAttribute('style','display:block; width: 100%; height: auto;');
    toggleClass('hidden', boxReview);
    removeAllChild(boxRemove);
    boxRemove.appendChild(showStars);
  })
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

var current = document.getElementById('current');
var past = document.getElementById('past');

current.addEventListener('click', function(){
  if (inCart.length>0){
    removeAllChild(pageYield);
    main.className="hidden";
    cartPanel.className = ' ';
    checkout.removeAttribute('disabled');

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
      showCart(panelBody, inCart[i], true, false, i);
    }

    pageYield.appendChild(currentBox);
    currentBox.appendChild(panel);
    panel.appendChild(panelHeading);
    panel.appendChild(panelBody);
    panelHeading.appendChild(title);
    title.appendChild(titleText);
  }
})

past.addEventListener('click', function(){
  if (pastInCart.length>0){
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
        showCart(panelBody, pastInCart[x].cart[y], false, true, y);
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
  }
})


// Search Function //
function search(value, target, location){
  removeAllChild(pageYield);
  main.className = "container hidden";
  cartPanel.className = 'hidden';
  var searchInputArray = value.split(space);
  var results = [];
  var resultsNames = [];
  var resultsBrands = [];
  var resultsTags = [];
  var resultsDescriptions =[];
  if (target != 0){
    producst = _.where(products, {target: value});
  }
  // Search Compare with name
  for (var t=0; t < searchInputArray.length; t++){
    for (var i=0; i < products.length; i++){
      var nameArray = products[i].name.split(space);
      for (var x=0; x < nameArray.length; x++){
        if (nameArray[x].toLowerCase().indexOf(searchInputArray[t].toLowerCase()) != -1){
          resultsNames.push({id: products[i].id, weight: 1});
        }
      }
    }
  }
  // Search Compare with brands
  for (var t=0; t < searchInputArray.length; t++){
    for (var i=0; i < products.length; i++){
      var brandArray = products[i].manufacturer.split(space);
      for (var x=0; x < brandArray.length; x++){
        if (brandArray[x].toLowerCase().indexOf(searchInputArray[t].toLowerCase()) != -1){
          resultsBrands.push({id: products[i].id, weight: 0.7});
        }
      }
    }
  }
  // Search Compare with tag
  for (var t=0; t < searchInputArray.length; t++){
    for (var i=0; i < products.length; i++){
      var tagsArray = products[i].tag;
      for (var x=0; x < tagsArray.length; x++){
        if (tagsArray[x].toLowerCase().indexOf(searchInputArray[t].toLowerCase()) != -1){
          resultsTags.push({id: products[i].id, weight: 0.3});
        }
      }
    }
  }
  // Search Compare with description
  for (var t=0; t < searchInputArray.length; t++){
    for (var i=0; i < products.length; i++){
      var desArray = products[i].description.split(space);
      for (var x=0; x < desArray.length; x++){
        if (desArray[x].toLowerCase().indexOf(searchInputArray[t].toLowerCase()) != -1){
          resultsDescriptions.push({id: products[i].id, weight: 0.1});
        }
      }
    }
  }
  var resultWeight = [];
  resultWeight.push(resultsNames);
  resultWeight.push(resultsBrands);
  resultWeight.push(resultsTags);
  resultWeight.push(resultsDescriptions);
  resultWeight = _.flatten(resultWeight, 1);
  resultWeight = _(resultWeight).groupBy('id');
  var addWeight = _.chain(resultWeight).map(function(num, key){
        return {
          id: key,
          weight: _(num).reduce(function(m, x){ return m+x.weight;},0)
        };
      }).sortBy('weight').value().reverse()

  for(var i=0;i < addWeight.length;i++){
    var foundProduct = _.where(products, {id: filterInt(addWeight[i].id)});
    results.push(foundProduct[0]);
  }
  var resultsRelevance = results;

  // Print Result (Remove Duplicates)
  var uniqResult = _.uniq(results);
  var perRow = 6;

  var resultCountBox = document.createElement('h5');
  var resultCount = document.createTextNode(uniqResult.length + " results for " + '"' + value  + '"');
  resultCountBox.appendChild(resultCount);

  function printResult(){
    if (results.length <= 0){
      appendMessage(pageYield, "sorry, no match found.");
    } else {
      removeAllChild(resultsYield);
      var rowSix = [];
      var showed = [];
      for(var t=0; t < (uniqResult.length/perRow); t++){
        var row = document.createElement('div');
        row.className="row";
        resultsYield.appendChild(row);
        take = _.difference(uniqResult, showed);
        if(take.length >= perRow){
          take = _.first(take, perRow);
        }
        for(var x=0;x<take.length; x++){
          showed.push(take[x]);
          showResult(row, take[x], perRow);
        }
      }
    }
  }

  // Sort
  var showPerRowBox = document.createElement('div');
  showPerRowBox.className = 'btn-group';
  var showPerRow1 = document.createElement('button');
  showPerRow1.className = "btn btn-default btn-xs";
  showPerRow1.textContent = "small view";
  var showPerRow2 = document.createElement('button');
  showPerRow2.className = "btn btn-default btn-sm";
  showPerRow2.textContent = "medium view";
  var showPerRow3 = document.createElement('button');
  showPerRow3.className = "btn btn-default";
  showPerRow3.textContent = "large view";
  showPerRowBox.appendChild(showPerRow1);
  showPerRowBox.appendChild(showPerRow2);
  showPerRowBox.appendChild(showPerRow3);
  showPerRow1.addEventListener('click',function(){
    perRow = 6;
    printResult();
  })
  showPerRow2.addEventListener('click',function(){
    perRow = 4;
    printResult();
  })
  showPerRow3.addEventListener('click',function(){
    perRow = 3;
    printResult();
  })

  var sortResult = document.createElement('form');
  sortResult.className = "form form-inline";
  sortResult.textContent ="sort by:";
  var sortResultOptions = document.createElement('select');
  sortResultOptions.className="form-control input-sm";
  var option1 = document.createElement('option');
  option1.textContent = "Relevance";
  option1.value ="relevance";
  var option2 = document.createElement('option');
  option2.textContent = "Price: Low to High";
  option2.value = "priceLow";
  var option3 = document.createElement('option');
  option3.textContent = "Price: High to Low";
  option3.value = "priceHigh";
  var option4 = document.createElement('option');
  option4.textContent = "Most Review";
  option4.value = "mostReview";
  var option5 = document.createElement('option');
  option5.textContent = "Average Rating";
  option5.value = "average";
  sortResultOptions.appendChild(option1);
  sortResultOptions.appendChild(option2);
  sortResultOptions.appendChild(option3);
  sortResultOptions.appendChild(option4);
  sortResultOptions.appendChild(option5);
  sortResult.appendChild(sortResultOptions);
  sortResultOptions.addEventListener('change', function(){
    uniqResult = sorts(uniqResult, sortResultOptions.value);
    printResult();
  })

  function sorts(array, type){
    if(type === "relevance"){
      return array = resultsRelevance;
    } else if (type === "priceLow"){
      return array = _.sortBy(array, "price");
    } else if(type === "priceHigh"){
      return array = _.sortBy(array, "price").reverse();
    } else if(type === "mostReview"){
      var newArray =[];
      for(var i=0; i < mostReviews.length; i++){
        var found = _.where(array, {id: filterInt(mostReviews[i][0])});
        if (found.length >0){
          newArray.push(found[0]);
        }
      }
      return array = newArray;
    } else if(type === "average"){
      var newArray =[];
      for(var i=0; i < rankReviews.length; i++){
        var found = _.where(array, {id: filterInt(rankReviews[i].productId)});
        if (found.length >0){
          newArray.push(found[0]);
        }
      }
      return array = newArray;
    }
  }

  var functionBar = document.createElement('div');
  functionBar.className = "row well"
  functionBarLeft = document.createElement('div');
  functionBarLeft.className = "col-md-4";
  functionBarMid = document.createElement('div');
  functionBarMid.className = "col-md-4";
  functionBarRight = document.createElement('div');
  functionBarRight.className = "col-md-4";
  pageYield.appendChild(functionBar);
  functionBar.appendChild(functionBarLeft);
  functionBar.appendChild(functionBarMid);
  functionBar.appendChild(functionBarRight);
  functionBarLeft.appendChild(resultCountBox);
  functionBarMid.appendChild(showPerRowBox);
  functionBarRight.appendChild(sortResult);

  var resultsYield = document.createElement('div');
  location.appendChild(resultsYield);

  printResult();
}

searchBar.addEventListener('submit', function(evt){
  evt.preventDefault();
  var searchInput = document.getElementById('search-input').value;
  search(searchInput, 0, pageYield);
});

// End of Search Function //

// Checkout Content
checkout.addEventListener('click',function(){
  removeAllChild(pageYield);
  removeAllChild(checkoutList);
  checkoutContent.className = '';
  pageYield.appendChild(checkoutContent);
  calculate(showBalance, inCartTotal);
  for(var i=0; i < inCart.length; i++){
    showCart(checkoutList, inCart[i], false, false, i);
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
    showCart(confirmList, inCart[i], false, false, i);
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

function timeStamp(date) {
  var showDate = [ date.getMonth() + 1, date.getDate(), date.getFullYear() ];
  return showDate.join("/");
}

payPlaceorder.addEventListener('click', function(){
  var orderTime = new Date();
  var addThisCart = new order(inCart, ((inCartTotal*1.07 + shippingFee).toFixed(2)), orderTime);
  pastInCart.push(addThisCart);
  var lastPurchase = _.last(pastInCart);
  console.log(lastPurchase.cart);
  console.log(pastInCart);
  inCartTotal = 0;
  inCartCount = 0;
  inCart = [];
  cartPanel.className = 'hidden';
  removeAllChild(pageYield);
  removeAllChild(cartCount);
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

  for(var y=0; y < showLastOrder.cart.length; y++){
    showCart(panelBody, showLastOrder.cart[y], false, true, y);
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
})
