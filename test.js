const {deletingProduct} = require('./script/main');
describe('Deleting items object from products array', () => {
    test('Should return [] when given (0, [{id:0, name:camera-2a, price:2$, category:cameras}])', () => { 
        const actual = deletingProduct(0,[{id:0, name:'camera-2a', price:'2$', category:'cameras'}]);
        const expected = [];
        expect(actual).toEqual(expected);
    })
    test('Should return [{id:0, name:camera-2a, price:2$, category:cameras}] when given (1, [{id:0, name:camera-2a, price:2$, category:cameras}, {id:1, name:caffmera-2a, price:24$, category:cameras}])', () =>{
        const actual = deletingProduct(1,[{id:0, name:'camera-2a', price:'2$', category:'cameras'}, {id:1, name:'caffmera-2a', price:'24$', category:'cameras'}]);
        const expected = [{id:0, name:'camera-2a', price:'2$', category:'cameras'}];
        expect(actual).toEqual(expected);
    })
})
