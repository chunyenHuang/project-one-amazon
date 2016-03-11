
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

mainAd.addEventListener('click', function(){
  mainAd.setAttribute('product-id', startNum+100);
  main.className="hidden";
  detail.className = ' ';
  removeAllChild(yield);
  yield.appendChild(detail);
  var productId = parseFloat(mainAd.getAttribute('product-id'));
  showDetail(productId);
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
