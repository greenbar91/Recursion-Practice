/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
***********************************************************************/


function iceCreamShop(flavors, favorite) {
//If empty array, return false
if(!flavors.length){
  return false;
}

//Get first element of the array
const firstElement = flavors[0];

//Get the rest of the array
const slicedFlavors = flavors.slice(1);

//Look for the favorite in the array
if(firstElement === favorite){
  return true;
}

//To see if the favorite exists in the array
return iceCreamShop(slicedFlavors, favorite)


}



console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true
console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')); // false
console.log(iceCreamShop(['moose tracks'], 'moose tracks')); // true
console.log(iceCreamShop([], 'honey lavender')); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
