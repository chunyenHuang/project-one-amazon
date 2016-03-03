
// Change ads
var mainAd = document.getElementById('main-ads');
var towardLeft = document.getElementById('toward-left');
var towardRight = document.getElementById('toward-right');
var startNum = 1;
var route = 'background:url("images/ads/ad-' + startNum + '.jpg")';
mainAd.setAttribute('style',route);

towardLeft.addEventListener('click', function(){
  if (startNum == 1){
      startNum =3 ;
  } else {
    startNum -=1;
  }
  var route = 'background:url("images/ads/ad-' + startNum + '.jpg")';
  mainAd.setAttribute('style',route);
})

towardRight.addEventListener('click', function(){
  if (startNum == 3){
      startNum = 1 ;
  } else {
    startNum +=1;
  }
  var route = 'background:url("images/ads/ad-' + startNum + '.jpg")';
  mainAd.setAttribute('style',route);
})

// Details Image Gallery
function toggleImg() {
  var imgDisplay = document.getElementById('img-display');
  var thumbOne = document.getElementById('thumb-01');
  var thumbTwo = document.getElementById('thumb-02');
  var thumbThree = document.getElementById('thumb-03');

  thumbOne.addEventListener('mouseover', function () {
    var route = thumbOne.getAttribute('src');
    imgDisplay.innerHTML = '<img src="' + route + '" width="100%">';
  });
  thumbTwo.addEventListener('mouseover', function () {
    var route = thumbTwo.getAttribute('src');
    imgDisplay.innerHTML = '<img src="' + route + '" width="100%">';
  });
  thumbThree.addEventListener('mouseover', function () {
    var route = thumbThree.getAttribute('src');
    imgDisplay.innerHTML = '<img src="' + route + '" width="100%">';
  });
}

// Select Payment Method
 var paymentList = document.getElementsByTagName('li');
 var paymentInput = document.getElementById('payment-input-box');
 var visa = document.getElementById('visa');
 for(var i=0; i < paymentList.length; i+=1){
    paymentList[i].addEventListener('click', function() {
      for(var i=0; i < paymentList.length; i+=1){
        paymentList[i].setAttribute('class', 'list-group-item-noborder');
        var paymentSelect =paymentList[i].getAttribute('name');
        var form = document.getElementById(paymentSelect);
        form.setAttribute('class', 'hidden');
      }
      this.setAttribute('class', 'list-group-item-noborder active');
      var paymentSelect =this.getAttribute('name');
      var form = document.getElementById(paymentSelect);
      form.setAttribute('class', 'active');
   })
 }
 console.log(paymentInput);

 // Page Cover Gallery

 var imgGallerys = document.getElementsByClassName('img-gallery');
 var sampleProducts = [];
 for (var i=0; i < imgGallerys.length; i++){
   var sampleProducts = _.difference(products, sampleProducts);
   var sampleProducts = _.sample(sampleProducts, 4)

   for(var t=0; t<4; t++){
     var imgBox = document.createElement('div');
     imgBox.className = "img-box";
     var link = document.createElement('a');
     link.href = "#";
     var img = document.createElement('img');
     img.src =  sampleProducts[t].thumbOne;
     imgBox.appendChild(link);
     link.appendChild(img);
     imgGallerys[i].appendChild(imgBox);
   }
 }

 // Search Input
 var search = document.getElementById('search-bar');
 var searchValue;
 search.addEventListener('submit', function () {
     //window.location.href = "search.html";
     //var searchInput = document.getElementById('search-input');
   var searchValue = document.getElementById('search-input').value;
   var searchResult = [];
   function searchProducts(value){
     value.preventDefault();
     for(var i=0; i < products.length; i +=1){
       if (value == products[i].name){
         searchResult.push(products[i]);
       }
       if (searchResult.length == 0 ){
         return "N/A";
       } else {
         return searchResult;
       }
     }
   }

   searchResult = searchProducts("Dream")
   console.log(searchValue);
   console.log(searchResult[0].description);
 })

 // Search Result
