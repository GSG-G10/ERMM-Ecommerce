const {
    data
} = require("./script/localStorage.js");
const {
    getProduct,
    addProduct,
    deletingProduct,
    filterProductByCategorie,
    filterProductByPrice
} = require("./script/utils.js");
const virtualNewProduct = {
    id: 5,
    name: "LEICA RM",
    price: 310,
    image: "https://cdn.shopify.com/s/files/1/0543/1637/products/TBPhotography_ed644957-8545-4b4f-88df-213d442ee767_540x.jpg",
    category: "ACCESSORIES",
}
const virtualSearchProduct = [{
    id: 3,
    name: "LEICA R ADAPTER M",
    price: 310,
    image: "https://cdn.shopify.com/s/files/1/0543/1637/products/TBPhotography_ed644957-8545-4b4f-88df-213d442ee767_540x.jpg",
    category: "ACCESSORIES",
}]
describe('Testing getProduct return specific product', () => {
    // search specific product
    test('Should return array of product when given value search', () => {
        const actual = getProduct("LEICA R ADAPTER M", data);
        const expected =virtualSearchProduct ;
        expect(actual).toEqual(expected);

    })
    // // add product tests
    test('Should add new product for data array', () => {
        const actual =addProduct(data, virtualNewProduct);
        const expected = [...data, virtualNewProduct];
        expect(actual).toEqual(expected);

    })
    // dalete product tests
    test('Should delete product index of 2 from data array', () => {
        const actual =deletingProduct(2, data);
        const expected = data.filter((ele,index) => index !== 2);
        expect(actual).toEqual(expected);

    // })
    // filter product tests
    test('Should filter product by category', () => {
        const actual =filterProductByCategorie(data, "ACCESSORIES");
        const expected = data.filter(ele => ele.category === "ACCESSORIES");
        expect(actual).toEqual(expected);
    })
    
    // filter product tests by price
    test('Should filter product by price', () => {
        const actual =filterProductByPrice(data, 25);
        const expected = data.filter(ele => ele.price <= 25);
        expect(actual).toEqual(expected);
    })
});