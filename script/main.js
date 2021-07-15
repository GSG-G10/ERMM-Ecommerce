// for any function that will re-use in other files, you can just use this
 import {data} from './localStorage.js'
const productsId = document.querySelector("#products");
// this function for create one product as component 
const createProductComponent = ({category, id, img:image, name, price}) => {
    // container
    const productContainer = document.createElement("div")
    productContainer.setAttribute("class", `product  ${id}`)
    // container image
    const imageContainer = document.createElement("div")
    imageContainer.setAttribute("class", `product__image`)

    const image = document.createElement("img")
    image.src = url
    imageContainer.appendChild(image)
    productContainer.appendChild(imageContainer)
    image.style.width ="400px"
    // for any detail about product 
    const productDetails = document.createElement("div")
    productDetails.setAttribute("class", `product__product-detaile`)
    // title product 
    const productTitle = document.createElement("h3")
    productTitle.setAttribute("class", `product-detaile__title`)
    productTitle.setAttribute("id", `${id}-categorie`)
    const text = document.createTextNode(`${name}`)
    productTitle.appendChild(text)
    // categhory 
    const productCategorie = document.createElement("h4")
    productCategorie.setAttribute("class", `product-detaile__category`)
    const categorieNode = document.createTextNode(`${category}`)
    productCategorie.appendChild(categorieNode)
    // for add icon 
    const productIcon = document.createElement("div")
    productIcon.setAttribute("class", `product-detaile__price-add`)

    const productPrice = document.createElement("button")
    productPrice.setAttribute("class", `product-detaile__price`)
    const priceNode = document.createTextNode(`${price}`)
    productPrice.appendChild(priceNode)
  /*************/
    const addProductIcon = document.createElement("button")
    addProductIcon.setAttribute("class", `product-detaile__add-icon`)
    const addText = document.createTextNode('Add to cart')
    addProductIcon.appendChild(addText)
    addProductIcon.addEventListener('click', ()=>{
        addtoCart(id)
    })


    const iconShopping = document.createElement("i")
    iconShopping.setAttribute("class", `icon-shopping-cart`)
    addProductIcon.appendChild(iconShopping)
    iconShopping.addEventListener('click', ()=>{
        console.log(1)
    })

    productIcon.appendChild(productPrice)
    productIcon.appendChild(addProductIcon)

    productDetails.appendChild(productTitle)
    productDetails.appendChild(productCategorie)
    productDetails.appendChild(productIcon)
 /*****************/
    productContainer.appendChild(imageContainer)
    productContainer.appendChild(productDetails)
    productsId.appendChild(productContainer)
}
console.log(data)
data.forEach((product) => {
    createProductComponent(product)
})