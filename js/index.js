// ITERATION 1

function updateSubtotal(product) {
  // getting the elements that we want
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  const priceValue = priceElement.innerText;
  const quantityValue = quantityElement.value;

  const subtotal = priceValue * quantityValue;

  subtotalElement.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be
  //removed.

  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProductsElements = document.querySelectorAll('.product');
  console.dir(allProductsElements);

  //original did total = 0;
  let total = 0;
  allProductsElements.forEach((product) => {
    total += updateSubtotal(product);
  });
  console.log(total);

  //const totalElement = document.querySelector('.h2 span');

  const allSubtotalElements = document.querySelectorAll('.subtotal');
  const allTotalElements = document.querySelector('#total-value span');

  allTotalElements.innerText = subtotal;
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
