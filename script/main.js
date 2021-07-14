const products = document.querySelector('#products');
const searchButton = document.getElementById('search-button');
const products = localStorage.getItem('products');
searchButton.addEventListener('click', () =>{
 const nameProduct =  searchButton.value;
 createProductComponent(getProduct(nameProduct,products));
 return false;
})
    
const getProduct = (nameProduct,arrayOfData) => {
    const searchIput = document.querySelector('#searchInput');
    let product = arrayOfData.filter(x => x.name.includes(nameProduct));
    return product;
}
module.exports = getProduct
    
