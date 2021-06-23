// ITERATION 1

function updateSubtotal(product) {

const price = product.querySelector('.price span');
    const priceValue = price.innerText;

const quantity = product.querySelector('input');
    const quantityValue = quantity.value;

const subtotal = priceValue * quantityValue;

const subtotalSpan = product.querySelector ('.subtotal span');

subtotalSpan.innertext = subtotal;

return subtotal;

  /*
  ORIGINAL FORMULA:
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('input');

  quantity.innerHTML = "5";

  const subtotal = quantity.innerHTML * price;

  const subtotalElement = product.querySelector('.subtotal span')

 */

//Step 5: In step 3, you calculated the subtotal price, and in step 4, 
//you got the DOM element that should have displaying this price. 
//In this step, your goal is to set the subtotal price to the 
//corresponding DOM element. Also, make sure this function returns the 
//value of subtotal so you can use it later when needed.

/*
const $cart = document.querySelector('#cart tbody');
const $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  const price = product.querySelector('.price span');

              const priceValue = priceSpan.innerText;

  const quantityInput = product.querySelector('input');

              const quantityValue = quantityInput.value;


  const subtotal = parseFloat(priceValue) * parseInt(quantityValue);

  const subtotalSpan = product.querySelector('.subtotal span');

  subtotalSpan.innerText = subtotal.toFixed(2);

  return subtotal;
}
*/

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be 
  //removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
