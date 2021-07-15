// this folder for all javascript function that will reusable
const deletingProduct = (id, array) => array.filter((ele) =>  ele.id !== id);

const addProduct = (products, product) => [...products, product];

module.exports = {
  deletingProduct, addProduct 
};