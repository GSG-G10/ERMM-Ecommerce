//just for test 

    let viweProduct = [];
//createProductComponent help you creating product component 
const products =  document.querySelector("#products");
const createProductComponent = function(id,url,title,categorie,price){
   const productContainer = document.createElement("div")
    productContainer.setAttribute("class",`product  ${id}`)

    const imageContainer = document.createElement("div")
    imageContainer.setAttribute("class",`product__image`)

    const image = document.createElement("img")
    image.src = url
    image.alt = alternative
   imageContainer.appendChild(image)

    const productDetails = document.createElement("div")
    productDetails.setAttribute("class",`product__product-detaile`)

    const productTitle = document.createElement("h3")
    productTitle.setAttribute("class",`product-detaile__title`)
    productTitle.setAttribute("id",`${id}-categorie`)
    const text = document.createTextNode(`${title}`)
    productTitle.appendChild(text)

    const productCategorie = document.createElement("h4")
    productCategorie.setAttribute("class",`product-detaile__category`)
    const categorieNode = document.createTextNode(`${categorie}`)
    productCategorie.appendChild(categorieNode)

    const productIcon = document.createElement("div")
    productIcon.setAttribute("class",`product-detaile__price-add`)
    
    const productPrice = document.createElement("button")
    productPrice.setAttribute("class",`product-detaile__price`)
    const priceNode = document.createTextNode(`${price}`)
    productPrice.appendChild(priceNode)

    const addProductIcon = document.createElement("button")
    addProductIcon.setAttribute("class",`product-detaile__add-icon`)

    const iconShopping = document.createElement("i")
    iconShopping.setAttribute("class",`icon-shopping-cart`)
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
<<<<<<< HEAD
//test
const createProduct = function(data){
viweProduct = [...data];
viweProduct.forEach(function(item){
    const product = createProductComponent(item.id,item.image,item.name,item.details,item.category,item.price)
    products.appendChild(product)
})
}
// products.appendChild(createProductComponent(1,"https://images.pexels.com/photos/615302/nikon-lens-zoom-optics-615302.jpeg",",,mnbhbgbg",`LEICA M (TYP 240) EDITION "LEICA 60"`,`Film Cameras.`,`$18,500`))

// get prevent form submit =============
const form = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
form.addEventListener("submit",function(event){
    event.preventDefault();
    // using getProduct 
})
=======
const products = localStorage.getItem("products")
products.forEach(function(product){
    createProductComponent(product.id,product.url,product.title,product.category,product.price)
})
>>>>>>> 20-refact
