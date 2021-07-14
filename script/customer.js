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
//createProductComponent help you creating product component 
const products = document.querySelector("#products");
const createProductComponent = function(id, url, title, categorie, price) {
    const productContainer = document.createElement("div")
    productContainer.setAttribute("class", `product  ${id}`)

    const imageContainer = document.createElement("div")
    imageContainer.setAttribute("class", `product__image`)

    const image = document.createElement("img")
    image.src = url
    image.alt = alternative
    imageContainer.appendChild(image)

    const productDetails = document.createElement("div")
    productDetails.setAttribute("class", `product__product-detaile`)

    const productTitle = document.createElement("h3")
    productTitle.setAttribute("class", `product-detaile__title`)
    productTitle.setAttribute("id", `${id}-categorie`)
    const text = document.createTextNode(`${title}`)
    productTitle.appendChild(text)

    const productCategorie = document.createElement("h4")
    productCategorie.setAttribute("class", `product-detaile__category`)
    const categorieNode = document.createTextNode(`${categorie}`)
    productCategorie.appendChild(categorieNode)

    const productIcon = document.createElement("div")
    productIcon.setAttribute("class", `product-detaile__price-add`)

    const productPrice = document.createElement("button")
    productPrice.setAttribute("class", `product-detaile__price`)
    const priceNode = document.createTextNode(`${price}`)
    productPrice.appendChild(priceNode)

    const addProductIcon = document.createElement("button")
    addProductIcon.setAttribute("class", `product-detaile__add-icon`)

    const iconShopping = document.createElement("i")
    iconShopping.setAttribute("class", `icon-shopping-cart`)
    addProductIcon.appendChild(iconShopping)

    productIcon.appendChild(productPrice)
    productIcon.appendChild(addProductIcon)

    productDetails.appendChild(productTitle)
    productDetails.appendChild(productCategorie)
    productDetails.appendChild(productIcon)

    productContainer.appendChild(imageContainer)
    productContainer.appendChild(productDetails)
    products.appendChild(productContainer)
}
const products1 = localStorage.getItem("Products")
products1.forEach(function(product) {
    createProductComponent(product.id, product.url, product.title, product.category, product.price)
})