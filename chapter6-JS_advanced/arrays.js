// CRUD - Create Read Update Delete 

//Populate & Insert
let products = ['milk', 'egg'];
products[products.length] = 'honey'; 
products.push('yoghurt'); 
products.unshift('bread'); 
products.splice(1, 0, 'orange'); 
alert(products.join()); 

//Delete
let product = products.pop(); 
let shiftedProduct = products.shift();
let deletedProduct = products.splice(1, 1); 
alert(products.join());

//Search
let orangePosition = products.indexOf('orange');
alert(orangePosition);

//Update
products [0] = 'oranges';
alert(products.join());

//Traverse
for (let i = 0; i < products.length; i++) {
    document.write(products[i] + ' ') 
}

for (let product of products) {
    document.write(product + '--')
}