
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('searchInput');
const productsSection = document.getElementById("products");
const productsLocalStorage = localStorage.getItem('products');
const cleardate = (myNode) => {
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
};
searchButton.addEventListener('click', () =>{
 const nameProduct =  searchInput.value;
 const filterProduct = getProduct(nameProduct,productsLocalStorage);
  cleardate(productsSection);
 filterProduct.forEach(function(product){
     createProductComponent(product.id,product.url,product.title,product.categorie,product.price);
 })
})
const toggle1 = () => {
    const nav1 = document.body.querySelector(".nav1");
    if (nav1.className == "nav1")
        nav1.className += " responsive";
    else nav1.className = "nav1";
};

const myFunction1 = (x) => {
    x.classList.toggle("change1");
};

const clicked1 = (x) => {
    x.classList.toggle("clicked");

};

const clicked2 = (x) => {
    x.classList.toggle("clicked1");
};

const dropItem1 = (x) => {
    const item = document.querySelector("#dropItem");
    if (item)
        item.removeAttribute("id");
    x.setAttribute("id", "dropItem");
};

const dropItem2 = (x) => {
    const item = document.querySelector("#dropItem1");
    if (item)
        item.removeAttribute("id");
    x.setAttribute("id", "dropItem1");
};
