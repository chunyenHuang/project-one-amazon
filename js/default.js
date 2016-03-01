// prodcuts
var products = [{
  name: "Dream shoes",
  price: 45,
  description: "You'll love this lightweight runner! It features a mesh upper, padded collar, laces for good fit, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials.",
  condition: 'New',
  thumbOne: 'images/products/product-01-01.jpg',
  thumbTwo: 'images/products/product-01-02.png',
  thumbThree: 'images/products/product-01-03.png'
}, {
  name: "Metal Chain Flats Thick Sole Shoes Sneakers shoes",
  price: 30,
  description: "You'll love this lightweight runner! It features a mesh upper, padded collar, laces for good fit, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials.",
  condition: 'New',
  thumbOne: 'images/products/product-02-01.jpg',
  thumbTwo: 'images/products/product-02-02.png',
  thumbThree: 'images/products/product-02-03.png'
}, {
  name: "EpicStep Women's Casual Slip On Loafers Metal Chain Flats Thick Sole Shoes Sneakers shoes",
  price: 30,
  description: "You'll love this lightweight runner! It features a mesh upper, padded collar, laces for good fit, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials.",
  condition: 'New',
  thumbOne: 'images/products/product-03.jpg'
}, {
  name: "dream dream dream", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-04.jpg'
}, {
  name: "Space Shoes for women", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-05.jpg'
}, {
  name: "Cotton Shoes for men", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-06.jpg'
}, {
  name: "High Heels", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-07.jpg'
}, {
  name: "High Heels brown color", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-08.jpg'
}];

// Product View with Boostrap Default Media
var searchResult = document.getElementById('search-result');

function showResult(target){
  // structure
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

  // result value
  var titleText = document.createTextNode(target.name);
  var content = document.createElement('p');
  content.innerHTML = "price: " + target.price + "<br>" + "condition: " + target.condition + "<br>" + target.description;

  // node tree
  searchResult.appendChild(box);
  box.appendChild(boxImg);
  box.appendChild(boxBody);
  boxImg.appendChild(link);
  link.appendChild(image);
  boxBody.appendChild(title);
  title.appendChild(titleText);
  boxBody.appendChild(content);
}

// String Split //
var comma = ",";
var space = " ";

// Search Input
var search = document.getElementsByTagName('form')[0];

search.addEventListener('submit', function(evt){
  searchResult.innerHTML ='';
  evt.preventDefault()
  var results = [];
  var searchInput = document.getElementById('search-input').value;
  var searchInputArray = searchInput.split(space);

  // search compare
  for (var t=0; t < searchInputArray.length; t+=1){
    for (var i=0; i < products.length; i+=1){
      var nameArray = products[i].name.split(space);
      for (var x=0; x < nameArray.length; x+=1){
        if (nameArray[x].toLowerCase().indexOf(searchInputArray[t].toLowerCase()) != -1){
          results.push(products[i]);
          break;
        }
      }
    }
  }

  // print result
  if (results.length <= 0){
    var noResult = document.createElement('h4');
    noResult.innerText = "sorry, no match."
    searchResult.appendChild(noResult);
  } else {
    for (var i=0; i < results.length; i+=1){
      showResult(results[i]);
    }
  }
});
// End of Search Input//
