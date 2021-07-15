
let cartProduct = JSON.parse(localStorage.getItem("Cart"))
console.log(cartProduct)
//createProductComponent help you creating product component 
const products =  document.querySelector("#products");
const createProductComponent = ({id,img:url,name:title,category,price}) => {
   const productContainer = document.createElement("div")
    productContainer.setAttribute("class",`product  ${id}`)
    
    const imageContainer = document.createElement("div")
    imageContainer.setAttribute("class",`product__image`)

    const image = document.createElement("img")
    image.src = url
    image.alt = title +  category
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
    const categorieNode = document.createTextNode(`${category}`)
    productCategorie.appendChild(categorieNode)
    
    const productPrice = document.createElement("span")
    productPrice.setAttribute("class",`product-detaile__price`)
    const priceNode = document.createTextNode(`${price}`)
    productPrice.appendChild(priceNode)
   
    const removeProductIcon = document.createElement("button")
    removeProductIcon.setAttribute("class",`product-detaile__remove-icon`)
    
    const removeIcon = document.createElement("h")
    removeIcon.setAttribute("class",`icon-archive`)

    const removeTest = document.createTextNode('delete')
    removeIcon.appendChild(removeTest)

    removeProductIcon.appendChild(removeIcon)
    removeIcon.addEventListener("click", () => {
        deleteProductDisplay(id)
    });
    //  deleteIcon.appendChild(removeIcon)


    productDetails.appendChild(productTitle)
    productDetails.appendChild(productCategorie)
    productContainer.appendChild(imageContainer)
    productContainer.appendChild(productDetails)
    productContainer.appendChild(productPrice)
    productContainer.appendChild(removeProductIcon)
    products.appendChild(productContainer)
}
cartProduct.forEach(function(product){
    createProductComponent(product)
})

const cleardata = (myNode) => {
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  };

function deleteProductDisplay (deletedId) {
    cartProduct = JSON.parse(localStorage.getItem("Cart"));
    cartProduct = deletingProduct(deletedId, cartProduct);
    localStorage.setItem("Cart", JSON.stringify(cartProduct));
    cleardata(products)
    cartProduct.forEach((element) => {
      createProductComponent(element);
    });
  }






