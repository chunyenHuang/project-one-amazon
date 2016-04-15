// Change ads
// var mainAd = document.getElementById('main-ads');
// var towardLeft = document.getElementById('toward-left');
// var towardRight = document.getElementById('toward-right');
// var startNum = 1;
// var mainAdImg = document.createElement('img');
// mainAdImg.src = 'images/ads/ad-' + startNum + '.jpg';
// mainAdImg.setAttribute('data-id', startNum+100);
// mainAdImg.setAttribute('data-type', "show-product");
// mainAd.appendChild(mainAdImg);
// towardLeft.addEventListener('click', function(){
//   if (startNum == 1){
//       startNum =3 ;
//   } else {
//     startNum -=1;
//   }
//   mainAdImg.src = 'images/ads/ad-' + startNum + '.jpg';
//   mainAdImg.setAttribute('data-id', startNum+100);
//   mainAdImg.setAttribute('data-type', "show-product");
//   mainAd.appendChild(mainAdImg);
// })
//
// towardRight.addEventListener('click', function(){
//   if (startNum == 3){
//       startNum = 1 ;
//   } else {
//     startNum +=1;
//   }
//   mainAdImg.src = 'images/ads/ad-' + startNum + '.jpg';
//   mainAdImg.setAttribute('data-id', startNum+100);
//   mainAdImg.setAttribute('data-type', "show-product");
//   mainAd.appendChild(mainAdImg);
// })

// Functions
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
    for (var i =0; i<inCart.length; i++){
      var theProduct = _.where(products, {id: inCart[i].id});
      inCartProducts.push(theProduct[0]);
      tags.push(theProduct[0].tag);
    }
    tags = _.flatten(tags);
    tags = _.uniq(tags);

    var notInCart = _.difference(products, inCartProducts);
    for (var i=0; i<notInCart.length; i++){
      for (var x=0; x<tags.length; x++){
        var checkTag = _.contains(notInCart[i].tag, tags[x]);
        if (checkTag === true){
          mayLikeProducts.push(notInCart[i]);
        }
      }
    }
    mayLikeProducts = _.uniq(mayLikeProducts);
    mayLikes = _.sample(mayLikeProducts, 6);

    for (var i=0; i<mayLikes.length; i++){
      insertImgGallery(imgGallerys[0],mayLikes[i]);
    }
    var others = _.difference(products, mayLikeProducts);
    var showed = [];
    for (var i=1; i<imgGallerys.length; i++){
      var itemPerRow = 6 ;
      var sampleProducts = _.difference(others, showed);
      var sampleProducts = _.sample(sampleProducts, itemPerRow)
      for (var t=0; t<itemPerRow; t++){
        insertImgGallery(imgGallerys[i], sampleProducts[t]);
        showed.push(sampleProducts[t]);
      }
    }
  } else if (pastInCart.length > 0){
    var tags = [];
    var lastPurchase = _.last(pastInCart);
    var lastItems = [];
    for (var i =0; i<lastPurchase.cart.length; i++){
      var theProducts = _.where(products, {id: lastPurchase.cart[i].id});
        lastItems.push(theProducts[0]);
        tags.push(theProducts[0].tag);
    }
    tags = _.flatten(tags);
    tags = _.uniq(tags);

    var notInCart = _.difference(products, lastItems);
    for (var i=0; i<notInCart.length; i++){
      for (var x=0; x<tags.length; x++){
        var checkTag = _.contains(notInCart[i].tag, tags[x]);
        if (checkTag === true){
          mayLikeProducts.push(notInCart[i]);
        }
      }
    }
    mayLikeProducts = _.uniq(mayLikeProducts);
    mayLikes = _.sample(mayLikeProducts, 6);

    for (var i=0; i<mayLikes.length; i++){
      insertImgGallery(imgGallerys[0],mayLikes[i]);
    }

    var others = _.difference(products, mayLikeProducts);
    var showed = [];
    for (var i=1; i<imgGallerys.length; i++){
      var itemPerRow = 6 ;
      var sampleProducts = _.difference(others, showed);
      var sampleProducts = _.sample(sampleProducts, itemPerRow)
      for (var t=0; t<itemPerRow; t++){
        insertImgGallery(imgGallerys[i], sampleProducts[t]);
        showed.push(sampleProducts[t]);
      }
    }
  } else {
    var showed = [];
    for (var i=0; i<imgGallerys.length; i++){
      var itemPerRow = 6 ;
      var sampleProducts = _.difference(products, showed);
      var sampleProducts = _.sample(sampleProducts, itemPerRow)
      for (var t=0; t<itemPerRow; t++){
        insertImgGallery(imgGallerys[i], sampleProducts[t]);
        showed.push(sampleProducts[t]);
      }
    }
  }
}

function linkHome(){
  clearPage();
  loadHomepage();
}

function insertImgGallery(location, element){
  var imgCol = document.createElement('div');
  imgCol.className = "col-xs-6 col-sm-4 col-md-2";
  var imgBox = document.createElement('div');
  imgBox.className = "img-box";

  var link = document.createElement('a');
  link.href="#";

  var img = document.createElement('img');
  img.src = element.thumbOne;
  img.setAttribute('data-id', element.id);
  img.setAttribute('data-type', "show-product");

  location.appendChild(imgCol);
  imgCol.appendChild(imgBox);
  imgBox.appendChild(link);
  link.appendChild(img);
}

function filterInt(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)){
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
function showDetail(id){
  clearPage();
  detail.className = ' ';
  pageYield.appendChild(detail);

  var array = _.where(products, {id: id});
  var target = array[0];
  // removeAllChild(route);

  var route = document.getElementById('route');
  var routeProduct = document.createElement('span');
  routeProduct.textContent = " / " + target.name;
  route.appendChild(routeProduct);

  var img = document.createElement('img');
  img.src = target.thumbOne;
  img.setAttribute('width', '100%');

  var name = document.createTextNode(target.name);
  var price = document.createTextNode("$" + target.price);
  var description = document.createTextNode(target.description);

  var brand = document.createElement('p');
  brand.className="smaller";
  brand.textContent = "by "
  var brandLink = document.createElement('a');
  brandLink.textContent = target.manufacturer;
  brandLink.href="#";
  brandLink.setAttribute('data-type', 'search');
  brandLink.setAttribute('data-value', target.manufacturer);

  var recomArray = [];
  var self = [target];
  var noSelf = _.difference(products, self);
  for (var i=0; i<target.tag.length; i++){
    for (var x=0; x<noSelf.length; x++){
      var checkContain = _.contains(noSelf[x].tag, target.tag[i]);
      if (checkContain === true){
        recomArray.push(noSelf[x]);
      }
    }
  }
  recomArray = _.uniq(recomArray);

  function showRecommends(array){
    array = _.sample(array, 5);

    removeAllChild(detailRecommend);
    for (var i=0; i<array.length; i++){
      var spanBox = document.createElement('div');
      spanBox.className = "col-sm-4 col-md-2";
      var recomImgBox = document.createElement('a');
      recomImgBox.href="#"+array[i].id;
      recomImgBox.setAttribute('name', "recom-img-box");
      var recomImg = document.createElement('img');
      recomImg.src =array[i].thumbOne;
      recomImg.setAttribute('data-id',array[i].id);
      recomImg.setAttribute('data-type',"show-product");
      recomImg.setAttribute('width',"180px");

      var recomText = document.createElement('p');
      recomText.textContent = array[i].name;
      recomText.className='smaller';
      recomText.setAttribute('data-id',array[i].id);
      recomText.setAttribute('data-type',"show-product");

      var recomPrice = document.createElement('p');
      recomPrice.textContent = "$" + array[i].price;
      recomPrice.className='smaller';

      detailRecommend.appendChild(spanBox);
      spanBox.appendChild(recomImgBox);
      recomImgBox.appendChild(recomImg);
      recomImgBox.appendChild(recomText);
      spanBox.appendChild(recomPrice);

    }
  }
  showRecommends(recomArray);
  detailTowardLeft.addEventListener('click', function(){
    showRecommends(recomArray);
  })
  detailTowardRight.addEventListener('click', function(){
    showRecommends(recomArray);
  })

  detailImg.appendChild(img);
  detailName.appendChild(name);
  detailBrand.appendChild(brand);
  brand.appendChild(brandLink);
  detailPrice.appendChild(price);
  detailDescription.appendChild(description);

  var reviewArray = _.where(reviews);

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
  var qty = 1;
  quantity.addEventListener('input', function(e){
    qty  = parseFloat(quantity.value);
    detailAddButton.setAttribute('qty', qty);
  })

  var detailAddButton = document.createElement('button');
  detailAddButton.className = "btn btn-success btn-block";
  detailAddButton.textContent="Add to Cart";
  detailAddButton.setAttribute('data-id', target.id);
  detailAddButton.setAttribute('data-type', "add-to-cart");
  detailAddButton.setAttribute('qty', qty);
  detailAdd.appendChild(detailAddButton);

  var detailWishButton = document.createElement('button');
  detailWishButton.className = "btn btn-default btn-block";
  detailWishButton.textContent="Add to Wish List";
  detailWishButton.setAttribute('data-id', target.id);
  detailWishButton.setAttribute('data-type', "add-to-wishlist");
  detailWishButton.setAttribute('qty', 1);
  detailWish.appendChild(detailWishButton);

  // detail review
  var reviewRating = 0;
  var array = _.where(reviews, {productId: target.id});
  var ownReview = _.where(array, {userId: currentUser.id});
  ownReview = _.sortBy(ownReview, 'date').reverse();
  var otherReview = _.difference(array, ownReview);
  otherReview = _.sortBy(otherReview, 'date').reverse();
  var theReview = [];
  for (var i=0; i<ownReview.length; i++){
    theReview.push(ownReview[i]);
  }
  for (var i=0; i<otherReview.length; i++){
    theReview.push(otherReview[i]);
  }

  if (theReview.length>0){
    for (var i=0; i<theReview.length; i++){
      reviewRating = reviewRating + theReview[i].rating
    }
    var average = reviewRating/(theReview.length);
    var showReview = document.createElement('img');
    showReview.src = "images/rating-" + Math.floor(average) + ".png";
    showReview.className = "review-img"
    detailReviewBar.appendChild(showReview);
    var reviewCount = document.createTextNode("("+theReview.length+")");
    detailReviewBar.appendChild(reviewCount);

    var displayReviews = document.createElement('div');
    for (var i=5; i>=1; i--){
      var lineBox = document.createElement('div');
      theReviewRatings = _.where(theReview, {rating: i});
      var ratingCount = document.createTextNode("("+theReviewRatings.length+")");
      var showRating = document.createElement('img');
      showRating.src = "images/rating-" + i + ".png";
      showRating.className = "review-img"
      lineBox.appendChild(showRating);
      lineBox.appendChild(ratingCount);
      displayReviews.appendChild(lineBox);
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

      for (var i=0; i<toShow.length; i++){
        showedReviews.push(toShow[i]);
        var reviewLine = document.createElement('div');
        reviewLine.className = 'col-md-12';
        var lineLeft = document.createElement('div');
        lineLeft.className = 'col-md-2';
        var lineRight = document.createElement('div');
        lineRight.className = 'col-md-10';
        var showReviewRating = document.createElement('img');
        showReviewRating.src = "images/rating-" + theReview[i].rating + ".png";
        showReviewRating.className = "review-img";
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
  if (row == 4){
    outline.className = "col-xs-12 col-sm-6 col-md-3 no-padding";
  } else {
    outline.className = "col-xs-12 col-sm-4 col-md-2 no-padding";
  }
  var boxPadding = document.createElement('div');
  boxPadding.className="box-outside-padding";
  var box = document.createElement('div');
  box.className = "box";
  var boxImg = document.createElement('div');
  boxImg.className = "";
  var boxBody = document.createElement('div');
  boxBody.className = "";

  var link = document.createElement('a');
  link.href="#";
  link.setAttribute('data-id', target.id);
  link.setAttribute('data-type', "show-product");

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
  var commandBoxQty = document.createElement('div');
  commandBoxQty.className = "col-sm-8";
  var commandBoxAdd = document.createElement('div');
  commandBoxAdd.className = "col-sm-12";

  var reviewBox = document.createElement('div');
  reviewBox.className = "col-md-12";
  var reviewRating = 0;
  var theReview = _.where(reviews, {productId: target.id})

  if (theReview.length>0){
    for (var i=0; i<theReview.length; i++){
      reviewRating = reviewRating + theReview[i].rating
    }
    var average = reviewRating/(theReview.length);
    var showReview = document.createElement('img');
    showReview.src = "images/rating-" + Math.floor(average) + ".png";
    showReview.className="review-img";
    reviewBox.appendChild(showReview);
    var reviewCount = document.createTextNode("("+theReview.length+")");
    reviewBox.appendChild(reviewCount);

    var displayReviews = document.createElement('div');
    displayReviews.className = 'float-review-box hidden';
    reviewBox.appendChild(displayReviews);
    for (var i=5; i>=1; i--){
      theReviewRatings = _.where(theReview, {rating: i});
      var ratingCount = document.createTextNode("("+theReviewRatings.length+")");
      var showRating = document.createElement('img');
      showRating.src = "images/rating-" + i + ".png";
      showRating.className="review-img";
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
  brand.className = "smaller";
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
  addToCart.className = "add-to-cart btn btn-success btn-sm btn-block";
  var addToWishList = document.createElement('button');
  addToWishList.className = "add-to-cart btn btn-default btn-sm btn-block";
  addToWishList.textContent = "Add to My Wish List"
  addToWishList.setAttribute('data-type', "add-to-wishlist");
  addToWishList.setAttribute('data-id', target.id);
  addToWishList.setAttribute('qty', 1);

  // Node Tree
  location.appendChild(outline);
  outline.appendChild(boxPadding);
  boxPadding.appendChild(box);
  box.appendChild(boxImg);
  box.appendChild(boxBody);
  boxImg.appendChild(link);
  link.appendChild(image);
  link.appendChild(content);
  boxBody.appendChild(brand);
  boxBody.appendChild(commandForm);
  boxBody.appendChild(reviewBox);
  content.appendChild(contentText);

  commandForm.appendChild(commandBox);
  commandBox.appendChild(commandBoxPrice);
  commandBox.appendChild(commandBoxQty);
  commandBox.appendChild(commandBoxAdd);

  commandBoxPrice.appendChild(price);
  commandBoxAdd.appendChild(addToWishList);
  brand.appendChild(brandLink);
  price.appendChild(priceTag);
  addToCart.appendChild(cartIcon);
  cartIcon.appendChild(cartIconText);
}

// Cart View
function showCart(location, target, editable, reviewable, wishlist, orderCount){
  for (var x=0; x<products.length; x++){
    if (target.id === products[x].id){
      target.name = products[x].name;
      target.condition = products[x].condition;
      target.thumbOne = products[x].thumbOne;
    }
  }
  cartPanel.className = ' ';
  // Structure
  var box = document.createElement('div');
  box.className = "row cart";
  box.setAttribute('id','product-'+target.id);
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

  var title = document.createElement('a');
  title.href = "#";
  title.setAttribute('data-id', target.id);
  title.setAttribute('data-type',"show-product");

  var link = document.createElement('a');
  link.href="#";
  link.setAttribute('data-id', target.id);
  link.setAttribute('data-type',"show-product");

  var image = document.createElement('img');
  image.src=target.thumbOne;
  image.alt=target.name;
  image.className="media-object";
  image.setAttribute('height', '50px');

  var titleText = document.createElement('h4');
  titleText.textContent = target.name;
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
    amount.removeAttribute('disabled');
    amount.addEventListener('input',function(e){
      e.preventDefault();
      target.qty = parseFloat(amount.value);
      total.removeChild(totalTag);
      totalTag = document.createTextNode("$" + (target.qty * target.price).toFixed(2));
      total.appendChild(totalTag);
      resetCartTotal();
      calculate(showBalance, inCartTotal);

      if (inCartCount==0){
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

      for (var x=0; x<inCart.length; x++){
        showCart(panelBody, inCart[x], true, false, false, x);
      }
      resetCartTotal();
      calculate(showBalance, inCartTotal);

      if (inCartCount==0){
        checkout.setAttribute('disabled','disabled')
        removeAllChild(pageYield);
        main.className = "container";
      }
    })
  }

  // Review Purchased Items
  if (reviewable == true){
    cartPanel.className = 'hidden';
    var findReview = _.where(reviews, {id: target.reviewId}).reverse();
    if (findReview.length == 0){
      var writeReview = document.createElement('button');
      writeReview.setAttribute('class','btn btn-danger')
      writeReview.textContent= 'Write My review';
      boxRemove.appendChild(writeReview);
      writeReview.addEventListener('click', function(){
        toggleClass('hidden', boxReview);
      })
    } else {
      var showStars = document.createElement('img');
      showStars.src = "images/rating-" + Math.floor(parseFloat(findReview[0].rating)) + ".png";
      showStars.className = "review-img";
      removeAllChild(boxRemove);
      boxRemove.appendChild(showStars);
    }
  }
  // Review submit
  reviewForm.addEventListener('submit',function(e){
    e.preventDefault();
    var ratings = document.getElementsByName('rating'+orderCount);
    for (var x=0; x<ratings.length; x++){
      if (ratings[x].checked){
        var ratingValue = ratings[x].value;
        break;
      }
    }
    var writeReviewDate = new Date();
    var addNewReview = new review(0, target.id, parseFloat(ratingValue), reviewComment.value, writeReviewDate, currentUser.id);
    reviews.push(addNewReview);
    var findReview = _.where(reviews, {productId: target.id, userId: currentUser.id}).reverse();
    target.reviewId = findReview[0].id;
    console.log(target.reviewId);
    var showStars = document.createElement('img');
    showStars.src = "images/rating-" + Math.floor(parseFloat(findReview[0].rating)) + ".png";
    showStars.className = "review-img";
    toggleClass('hidden', boxReview);
    removeAllChild(boxRemove);
    boxRemove.appendChild(showStars);
  })

  // Wish List Items
  if (wishlist == true){
    cartPanel.className = 'hidden';
    var addWishToCart = document.createElement('button');
    addWishToCart.textContent= 'Add to My Cart';
    addWishToCart.setAttribute('class','btn btn-danger')
    addWishToCart.setAttribute('data-id', target.id);
    addWishToCart.setAttribute('data-type','add-wish-to-cart');
    addWishToCart.setAttribute('qty', 1);
    boxRemove.appendChild(addWishToCart);

    amount.removeAttribute('disabled');
    amount.addEventListener('input',function(e){
      var wishQty = parseFloat(amount.value);
      addWishToCart.setAttribute('qty', wishQty);
      total.removeChild(totalTag);
      totalTag = document.createTextNode("$" + (wishQty * target.price).toFixed(2));
      total.appendChild(totalTag);
    })
  }

}

// The Shopping Cart
function calculate(location, total){
  removeAllChild(location);
  var showSubTotal = document.createElement('p');
  var showShippingFee = document.createElement('p');
  var showTax = document.createElement('p');
  var showTotal = document.createElement('p');
  var showSubTotalText = document.createTextNode("subtotal: $" + total.toFixed(2));
  var showShippingFeeText = document.createTextNode("Shipping & handling: $" + shippingFee);
  var showTaxText = document.createTextNode("tax: $" + (total*0.07).toFixed(2));
  var showTotalText = document.createTextNode("total: $" + (total*1.07 + shippingFee).toFixed(2) );

  location.appendChild(showSubTotal);
  location.appendChild(showTax);
  location.appendChild(showShippingFee);
  location.appendChild(showTotal);
  showSubTotal.appendChild(showSubTotalText);
  showTax.appendChild(showTaxText);
  showTotal.appendChild(showTotalText);
  showShippingFee.appendChild(showShippingFeeText);
}

// Show cart
function showCurrentCart(){
  clearPage();
  printRoute("Shopping Cart", 0);
  cartPanel.className = ' ';

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

  for (var i=0; i<inCart.length; i++){
    inCartCount = inCartCount + inCart[i].qty;
    inCartTotal = inCartTotal + (inCart[i].qty * inCart[i].price);
  }
  for (var i=0; i<inCart.length; i++){
    showCart(panelBody, inCart[i], true, false, false, i);
  }

  pageYield.appendChild(currentBox);
  currentBox.appendChild(panel);
  panel.appendChild(panelHeading);
  panel.appendChild(panelBody);
  panelHeading.appendChild(title);
  title.appendChild(titleText);
}

// Show order history
function showOrderHistory(){
  clearPage();
  printRoute("Order History", 0);

  pastInCart = _.sortBy(pastInCart, date);
  pastInCart = pastInCart.reverse();
  for (var x=0; x<pastInCart.length; x++){
    var pastbox = document.createElement('div');
    pastbox.className= "col-md-12";
    var panel = document.createElement('div');
    panel.className = 'panel panel-default'
    var panelHeading = document.createElement('div');
    panelHeading.className = 'panel-heading';
    var panelBody = document.createElement('div');
    panelBody.className = 'panel-body';

    for (var y=0; y<pastInCart[x].cart.length; y++){
      showCart(panelBody, pastInCart[x].cart[y], false, true, false, y);
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
}

// Show Wish List
function showWishList(){
  clearPage();
  printRoute("Wish list");
  // add sort system here
  var pastbox = document.createElement('div');
  pastbox.className= "col-md-12";
  var panel = document.createElement('div');
  panel.className = 'panel panel-default'
  var panelHeading = document.createElement('div');
  panelHeading.className = 'panel-heading';
  var panelBody = document.createElement('div');
  panelBody.className = 'panel-body';
  var title = document.createElement('h3');
  title.textContent = "My Wish List"
  pageYield.appendChild(pastbox);
  pastbox.appendChild(panel);
  panel.appendChild(panelHeading);
  panel.appendChild(panelBody);
  panelHeading.appendChild(title);
  for (var x=0; x<inWishList.length; x++){
    showCart(panelBody, inWishList[x], false, false, true, x);
  }
}

// Search Function //
function search(value, targetProperty, location){
  clearPage();
  // show route
  printRoute("search", value);

  var searchInputArray = value.split(space);
  var results = [];
  var resultsNames = [];
  var resultsBrands = [];
  var resultsTags = [];
  var resultsDescriptions =[];
  if (targetProperty != "any"){
    producst = _.where(products, {target: value});
  }
  // Search for exact name
  for (var i=0; i<products.length; i++){
    var nameArray = products[i].name.split(space);
    var lowerCases = [];
    for (var x=0; x<nameArray.length; x++){
      lowerCases.push(nameArray[x].toLowerCase());
    }
    lowerCases = lowerCases.join(' ');
    if (lowerCases.indexOf(value.toLowerCase()) != -1){
      resultsNames.push({id: products[i].id, weight: 1});
    }
  }
  if (resultsNames.length == 0){
    // Search compare with Name
    for (var t=0; t<searchInputArray.length; t++){
      for (var i=0; i<products.length; i++){
        var nameArray = products[i].name.split(space);
        for (var x=0; x<nameArray.length; x++){
          if (nameArray[x].toLowerCase().indexOf(searchInputArray[t].toLowerCase()) != -1){
            resultsNames.push({id: products[i].id, weight: 1});
          }
        }
      }
    }
    // Search Compare with brands
    for (var t=0; t<searchInputArray.length; t++){
      for (var i=0; i<products.length; i++){
        var brandArray = products[i].manufacturer.split(space);
        for (var x=0; x<brandArray.length; x++){
          if (brandArray[x].toLowerCase().indexOf(searchInputArray[t].toLowerCase()) != -1){
            resultsBrands.push({id: products[i].id, weight: 0.7});
          }
        }
      }
    }
    // Search Compare with tag
    for (var t=0; t<searchInputArray.length; t++){
      for (var i=0; i<products.length; i++){
        var tagsArray = products[i].tag;
        for (var x=0; x<tagsArray.length; x++){
          if (tagsArray[x].toLowerCase().indexOf(searchInputArray[t].toLowerCase()) != -1){
            resultsTags.push({id: products[i].id, weight: 0.3});
          }
        }
      }
    }
    // Search Compare with description
    for (var t=0; t<searchInputArray.length; t++){
      for (var i=0; i<products.length; i++){
        var desArray = products[i].description.split(space);
        for (var x=0; x<desArray.length; x++){
          if (desArray[x].toLowerCase().indexOf(searchInputArray[t].toLowerCase()) != -1){
            resultsDescriptions.push({id: products[i].id, weight: 0.1});
          }
        }
      }
    }
  }

  var resultWeight = [];
  resultsNames = _.uniq(resultsNames, function(x){return x.id;});
  resultsBrands = _.uniq(resultsBrands, function(x){return x.id;});
  resultsTags = _.uniq(resultsTags, function(x){return x.id;});
  resultsDescriptions = _.uniq(resultsDescriptions, function(x){return x.id;});
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

  for (var i=0; i<addWeight.length; i++){
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
      for (var t=0; t<(uniqResult.length/perRow); t++){
        var colBox = document.createElement('div');
        colBox.className='col-md-12';
        var row = document.createElement('div');
        row.className="row";
        colBox.appendChild(row)
        resultsYield.appendChild(colBox);
        take = _.difference(uniqResult, showed);
        if (take.length >= perRow){
          take = _.first(take, perRow);
        }
        for (var x=0; x<take.length; x++){
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
  showPerRow1.className = "btn btn-default btn-sm active";
  var showPerRowSm = document.createElement('i');
  showPerRowSm.className = "fa fa-th";
  var showPerRow2 = document.createElement('button');
  showPerRow2.className = "btn btn-default btn-sm";
  var showPerRowLg = document.createElement('i');
  showPerRowLg.className = "fa fa-th-large";
  showPerRow1.appendChild(showPerRowSm);
  showPerRow2.appendChild(showPerRowLg);
  showPerRowBox.appendChild(showPerRow1);
  showPerRowBox.appendChild(showPerRow2);
  showPerRow1.addEventListener('click',function(){
    perRow = 6;
    printResult();
    toggleClass('active', showPerRow1);
    toggleClass('active', showPerRow2);

  })
  showPerRow2.addEventListener('click',function(){
    perRow = 4;
    printResult();

    toggleClass('active', showPerRow1);
    toggleClass('active', showPerRow2);
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
    if (type === "relevance"){
      return array = resultsRelevance;
    } else if (type === "priceLow"){
      return array = _.sortBy(array, "price");
    } else if (type === "priceHigh"){
      return array = _.sortBy(array, "price").reverse();
    } else if (type === "mostReview"){
      var newArray =[];
      for (var i=0; i<mostReviews.length; i++){
        var found = _.where(array, {id: filterInt(mostReviews[i][0])});
        if (found.length >0){
          newArray.push(found[0]);
        }
      }
      return array = newArray;
    } else if (type === "average"){
      var newArray =[];
      for (var i=0; i<rankReviews.length; i++){
        var found = _.where(array, {id: filterInt(rankReviews[i].productId)});
        if (found.length >0){
          newArray.push(found[0]);
        }
      }
      return array = newArray;
    }
  }

  var functionBar = document.createElement('div');
  functionBar.className = "col-md-12 well"
  var functionBarRow = document.createElement('div');
  functionBarRow.className = "row"
  var functionBarLeft = document.createElement('div');
  functionBarLeft.className = "col-md-4";
  var functionBarMid = document.createElement('div');
  functionBarMid.className = "col-md-4";
  var functionBarRight = document.createElement('div');
  functionBarRight.className = "col-md-4";
  pageYield.appendChild(functionBar);
  functionBar.appendChild(functionBarRow)
  functionBarRow.appendChild(functionBarLeft);
  functionBarRow.appendChild(functionBarMid);
  functionBarRow.appendChild(functionBarRight);
  functionBarLeft.appendChild(resultCountBox);
  functionBarMid.appendChild(showPerRowBox);
  functionBarRight.appendChild(sortResult);

  var resultsYield = document.createElement('div');
  location.appendChild(resultsYield);

  printResult();
}

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

function resetCartTotal(){
  inCartCount = 0;
  inCartTotal = 0;
  for (var x=0; x<inCart.length; x++){
    inCartCount = inCartCount + inCart[x].qty;
    inCartTotal = inCartTotal + (inCart[x].qty * inCart[x].price);
  }
  var cartCountValue = document.createTextNode(inCartCount);
  removeAllChild(cartCount);
  cartCount.appendChild(cartCountValue);
}

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
