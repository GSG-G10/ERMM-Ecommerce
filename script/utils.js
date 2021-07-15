// this folder for all javascript function that will reusable
// export const deletingProduct = (id, array) => array.filter((ele) =>  ele.id !== id);

// export const addProduct = (products, product) => [...products, product];
 const getProduct = (nameProduct,arrayOfData) => {
    const searchIput = document.querySelector('#searchInput');
    let product = arrayOfData.filter(x => x.name.includes(nameProduct));
    return product;
}
if (typeof module !== "undefined") {
  module.exports = {
    getProduct
  };
}