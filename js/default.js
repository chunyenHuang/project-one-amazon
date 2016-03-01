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

// Product View with Boostrap Default Media
var searchResult = document.getElementById('search-result');

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

  // Value from Products
  var titleText = document.createTextNode(target.name);
  var content = document.createElement('p');
  content.innerHTML = "condition: " + target.condition + "<br>" + target.description + "<br><hr>" + "<h4>$" + target.price + "</h4>";

  // Node Tree
  searchResult.appendChild(box);
  box.appendChild(boxImg);
  box.appendChild(boxBody);
  boxImg.appendChild(link);
  link.appendChild(image);
  boxBody.appendChild(title);
  title.appendChild(titleText);
  boxBody.appendChild(content);
}

// String Splitter
var comma = ",";
var space = " ";

// Search Function //
var search = document.getElementsByTagName('form')[0];

search.addEventListener('submit', function(evt){
  searchResult.innerHTML ='';
  evt.preventDefault()
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
          break;
        }
      }
    }
  }


  // Remove Duplicates
  var uniqResult = [];
  uniqResult.push(results[0]);
  console.log(uniqResult[0]);
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
  if (uniqResult.length <= 0){
    var noResult = document.createElement('h4');
    noResult.innerText = "sorry, no match found."
    searchResult.appendChild(noResult);
  } else {
    for (var i=0; i < uniqResult.length; i++){
      showResult(uniqResult[i]);
    }
  }
});
// End of Search Input//
