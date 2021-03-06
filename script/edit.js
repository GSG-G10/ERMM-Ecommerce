const allProducts = JSON.parse(localStorage.getItem("Products"))
const currentProductId = window.location.search.slice(1).split("&")["id"]
const currentProductObject = allProducts.find(prod => prod.id === currentProductId)

const productNameInput = document.getElementById("name");
const productPriceInput = document.getElementById("price");
const productImgInput = document.getElementById("img");
const productCategory = document.getElementById("Category");
const saveButton = document.getElementById();


const editProduct = (arr, id, newData) => arr.map((item) => {
    if (item.id === id) {
        return { ...newData, id: item.id };
    } else {
        return item;
    }
});

const updateProductsArray = (id) => {
    return () => {
        const newData = {
            name: productNameInput.value,
            price: productPriceInput.value,
            img : productImgInput.value,
            index: productCategory.selectedIndex
            
        }   
        const products = JSON.parse(localStorage.getItem("Products"))
        const newArr = editProduct(products, id, newData)
        localStorage.setItem("Products", JSON.stringify(newArr))
    }
};

saveButton.onclick = updateProductsArray(id)

module.exports = { editProduct };