const deletingProduct = (id, array) => {
  const newArray = array.filter((ele) => {
    return ele.id !== id;
  });
  return newArray;
};

const addProduct = (products, product) => [...products, product];

module.exports = {
  deletingProduct, addProduct 
};