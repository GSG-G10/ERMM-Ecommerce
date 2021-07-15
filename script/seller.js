let prodcutsId = localStorage.getItem("id") ? localStorage.getItem("id") - 0 : 0;

const fetchProducts = () => JSON.parse(localStorage.getItem("Products"));

const fetchProduct = stringProduct => JSON.parse(stringProduct);

const addProductDom = stringProduct => {
    let tempProducts = fetchProducts();
    console.log(tempProducts)
    const tempProduct = fetchProduct(stringProduct);
    tempProduct.id = prodcutsId++;
    localStorage.setItem("id", prodcutsId);
    if (!tempProducts)
        tempProducts = [];
    localStorage.setItem("Products", JSON.stringify(addProduct(tempProducts, tempProduct)));
};

const addproductJson = () => {
    const pName = document.querySelector(".add-form #name").value;
    const pImg = document.querySelector(".add-form #img").value;
    console.log(document.querySelector(".add-form #img"))
    console.log(pImg)
    const pPrice = document.querySelector(".add-form #price").value;
    const pCategory = document.querySelector(".add-form #Category").value;
    const tempProduct = {};
    tempProduct.name = pName;
    tempProduct.img = pImg;
    tempProduct.price = pPrice;
    tempProduct.category = pCategory;
    addProductDom(JSON.stringify(tempProduct));
    window.location.href = ".\\seller.html" 
};


const allProducts = JSON.parse(localStorage.getItem("Products"))

//createProductComponent help you creating product component 
const products =  document.querySelector("#products");
const createProductComponent = ({id,img,name:title,category,price}) => {
   const productContainer = document.createElement("div")
    productContainer.setAttribute("class",`product  ${id}`)

    const imageContainer = document.createElement("div")
    imageContainer.setAttribute("class",`product__image`)

    const image = document.createElement("img")
    image.src = img
    image.style.width = "400px"
    image.alt = title + category
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

    const productIcon = document.createElement("div")
    productIcon.setAttribute("class",`product-detaile__tools`)
    
   const editProductIcon = document.createElement("button")
    editProductIcon.setAttribute("class",`product-detaile__edit-icon`)
    const editText = document.createTextNode('edit')
    editProductIcon.appendChild(editText)
    

    const iconEdit = document.createElement("i")
    iconEdit.setAttribute("class",`icon-edit`)
    editProductIcon.appendChild(iconEdit)
    productIcon.appendChild(editProductIcon)

    const removeProductIcon = document.createElement("button")
    removeProductIcon.setAttribute("class",`product-detaile__remove-icon`)
    const removeText = document.createTextNode('delete')
    removeProductIcon.appendChild(removeText)
    removeProductIcon.addEventListener("click", () => {
      deleteProductDisplay(id)
  });

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
    products.appendChild(productContainer)
}

allProducts.forEach(function(product){
    createProductComponent(product)
})

const cleardata = (myNode) => {
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  };

function deleteProductDisplay (deletedId) {
    let allProducts = JSON.parse(localStorage.getItem("Products"));
    allProducts = deletingProduct(deletedId, allProducts);
    localStorage.setItem("Products", JSON.stringify(allProducts));
    cleardata(products)
    allProducts.forEach((element) => {
      createProductComponent(element);
    });
  }




