//createProductComponent help you creating product component 
const products =  document.querySelector("#products");
const createProductComponent = function(id,url,alternative,title,categorie,price){
   const productContainer = document.createElement("div")
    productContainer.setAttribute("class",`product  ${id}`)
    productContainer.setAttribute("id",`${id}`)

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
    const text = document.createTextNode(`${title}`)
    productTitle.appendChild(text)

    const productCategorie = document.createElement("h4")
    productCategorie.setAttribute("class",`product-detaile__category`)
    const categorieNode = document.createTextNode(`${categorie}`)
    productCategorie.appendChild(categorieNode)

    const productIcon = document.createElement("div")
    productIcon.setAttribute("class",`product-detaile__tools`)
    
   const editProductIcon = document.createElement("span")
    editProductIcon.setAttribute("class",`product-detaile__edit-icon`)

    const iconEdit = document.createElement("i")
    iconEdit.setAttribute("class",`icon-edit`)
    editProductIcon.appendChild(iconEdit)

    const removeProductIcon = document.createElement("span")
    removeProductIcon.setAttribute("class",`product-detaile__remove-icon`)

    const iconRemove = document.createElement("i")
    iconRemove.setAttribute("class",`icon-archive`)
    removeProductIcon.appendChild(iconRemove)

    productIcon.appendChild(editProductIcon)
    productIcon.appendChild(removeProductIcon)

    productDetails.appendChild(productTitle)
    productDetails.appendChild(productCategorie)
    productDetails.appendChild(productIcon)
    
    productContainer.appendChild(imageContainer)
    productContainer.appendChild(productDetails)
    return productContainer
}
