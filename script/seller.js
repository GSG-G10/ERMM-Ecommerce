let prodcutsId = localStorage.getItem("id") ? localStorage.getItem("id") - 0 : 0;

const fetchProducts = () => JSON.parse(localStorage.getItem("Products"));

const fetchProduct = stringProduct => JSON.parse(stringProduct);

const addProductDom = stringProduct => {
    let tempProducts = fetchProducts();
    const tempProduct = fetchProduct(stringProduct);
    tempProduct.id = prodcutsId++;
    localStorage.setItem("id", prodcutsId);
    if (!tempProducts)
        tempProducts = [];
    localStorage.setItem("Products", JSON.stringify(addProduct(tempProducts, tempProduct)));
};