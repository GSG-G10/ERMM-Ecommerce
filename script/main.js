const getProduct = (nameProduct,arrayOfData) => {
    let product = arrayOfData.filter(x => x.name.includes(nameProduct));
    return product;
}
module.exports = getProduct
    
