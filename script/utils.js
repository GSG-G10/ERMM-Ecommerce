// this folder for all javascript function that will reusable
const deletingProduct = (id, array) => array.filter((ele) => ele.id !== id);
const addProduct = (products, product) => [...products, product];
const getProduct = (nameProduct, arrayOfData) => {
    const searchIput = document.querySelector('#searchInput');
    let product = arrayOfData.filter(x => x.name.includes(nameProduct));
    return product;
}
const filterProductBy=(which)=>{
    return (data,specific)=>{
        return data.filter(x=>x[which]===specific);
    }
}
const filterProductByCategorie=filterProductBy('category');
const filterProductByPrice=filterProductBy('price');
if (typeof module !== "undefined") {
    module.exports = {
        getProduct,
        addProduct,
        deletingProduct,
        filterProductByCategorie,
        filterProductByPrice
    };
}