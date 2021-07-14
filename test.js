const getProduct = require('./script/main.js');
// getProduct test to check if the product is returned
const virtualArray =  [
    {
        id: 1, 
        name: "camera",
        details: "cameraaaa",
        price: 12,
        image:"https://images.pexels.com/photos/615302/nikon-lens-zoom-optics-615302.jpeg",
        category :"animal"
      },
      {
        id: 2, 
        name: "soso",
        details: "cameraaaa",
        price: 25,
        image:"https://images.pexels.com/photos/615302/nikon-lens-zoom-optics-615302.jpeg",
        category :"people"

      }];
describe('Testing getProduct return specific product',()=>{
	test('Should return array of product when given value search',()=>{
		const actual = getProduct('camera',virtualArray);
		const expected=[{
        id: 1, 
        name: "camera",
        details: "cameraaaa",
        price: 12,
        image:"https://images.pexels.com/photos/615302/nikon-lens-zoom-optics-615302.jpeg",
        category :"animal"
      }];
expect(actual).toEqual(expected);
		
	});
})
