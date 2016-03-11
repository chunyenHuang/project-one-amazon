// Change ads
var mainAd = document.getElementById('main-ads');
var towardLeft = document.getElementById('toward-left');
var towardRight = document.getElementById('toward-right');
var startNum = 1;
var mainAdImg = document.createElement('img');
mainAdImg.src = 'images/ads/ad-' + startNum + '.jpg';
mainAdImg.setAttribute('data-id', startNum+100);
mainAdImg.setAttribute('data-type', "show-product");
mainAd.appendChild(mainAdImg);
towardLeft.addEventListener('click', function(){
  if (startNum == 1){
      startNum =3 ;
  } else {
    startNum -=1;
  }
  mainAdImg.src = 'images/ads/ad-' + startNum + '.jpg';
  mainAdImg.setAttribute('data-id', startNum+100);
  mainAdImg.setAttribute('data-type', "show-product");
  mainAd.appendChild(mainAdImg);
})

towardRight.addEventListener('click', function(){
  if (startNum == 3){
      startNum = 1 ;
  } else {
    startNum +=1;
  }
  mainAdImg.src = 'images/ads/ad-' + startNum + '.jpg';
  mainAdImg.setAttribute('data-id', startNum+100);
  mainAdImg.setAttribute('data-type', "show-product");
  mainAd.appendChild(mainAdImg);
})
