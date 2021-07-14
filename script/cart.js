//createProductComponent help you creating product component 
const products =  document.querySelector("#products");
const createProductComponent = function(id,url,title,categorie,price){
   const productContainer = document.createElement("div")
    productContainer.setAttribute("class",`product  ${id}`)
    
    const imageContainer = document.createElement("div")
    imageContainer.setAttribute("class",`product__image`)

    const image = document.createElement("img")
    image.src = url
    image.alt = title +  categorie
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
    
    const productPrice = document.createElement("span")
    productPrice.setAttribute("class",`product-detaile__price`)
    const priceNode = document.createTextNode(`${price}`)
    productPrice.appendChild(priceNode)
   

    // const deleteIcon = document.createElement("div")
    // deleteIcon.setAttribute("class",`product__delete-product`)


     const removeProductIcon = document.createElement("button")
     removeProductIcon.setAttribute("class",`product-detaile__remove-icon`)
    
    const removeIcon = document.createElement("i")
    removeIcon.setAttribute("class",`icon-archive`)
    removeProductIcon.appendChild(removeIcon)
    //  deleteIcon.appendChild(removeIcon)


    productDetails.appendChild(productTitle)
    productDetails.appendChild(productCategorie)
    productContainer.appendChild(imageContainer)
    productContainer.appendChild(productDetails)
    productContainer.appendChild(productPrice)
    productContainer.appendChild(removeProductIcon)
    products.appendChild(productContainer)
}
const cartProduct = localStorage.getItem("cart")
cartProduct.forEach(function(product){
    createProductComponent(product.id,product.url,product.title,product.category,product.price)
})