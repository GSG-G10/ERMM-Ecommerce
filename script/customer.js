const fetchProductsCart = () => JSON.parse(localStorage.getItem("Cart"));
const fetchProductsProducts = () => JSON.parse(localStorage.getItem("Products"));

const fetchProduct = ProductId => {
    const tempProducts = fetchProductsProducts();
    let wantedProduct;
    for (let i = 0; i < tempProducts.length; i++) {
        if (tempProducts[i].id == ProductId)
            wantedProduct = tempProducts[i];
    }
    return wantedProduct;
};

const addtoCart = productId => {
    let tempProducts = fetchProductsCart();
    const tempProduct = fetchProduct(productId);
    if (!tempProducts)
        tempProducts = [];
    localStorage.setItem("Cart", JSON.stringify(addProduct(tempProducts, tempProduct)));
};