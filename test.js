const {
    deletingProduct
} = require('./script/utils');
const {
    addProduct
} = require("./script/utils");

describe('Deleting items object from products array', () => {
    test('Should return [] when given (0, [{id:0, name:camera-2a, price:2$, category:cameras}])', () => {
        const actual = deletingProduct(0, [{
            id: 0,
            name: 'camera-2a',
            price: '2$',
            category: 'cameras'
        }]);
        const expected = [];
        expect(actual).toEqual(expected);
    })
    test('Should return [{id:0, name:camera-2a, price:2$, category:cameras}] when given (1, [{id:0, name:camera-2a, price:2$, category:cameras}, {id:1, name:caffmera-2a, price:24$, category:cameras}])', () => {
        const actual = deletingProduct(1, [{
            id: 0,
            name: 'camera-2a',
            price: '2$',
            category: 'cameras'
        }, {
            id: 1,
            name: 'caffmera-2a',
            price: '24$',
            category: 'cameras'
        }]);
        const expected = [{
            id: 0,
            name: 'camera-2a',
            price: '2$',
            category: 'cameras'
        }];
        expect(actual).toEqual(expected);
    })
})

const addProductTests = [{
        products: [{
            id: 0,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 1,
            name: "T-shirt",
            details: ".....",
            price: 25
        }],

        product: {
            id: 2,
            name: "T-shirt",
            details: ".....",
            price: 25
        },

        expected: [{
            id: 0,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 1,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 2,
            name: "T-shirt",
            details: ".....",
            price: 25
        }]
    },
    {
        products: [],

        product: {
            id: 2,
            name: "T-shirt",
            details: ".....",
            price: 25
        },

        expected: [{
            id: 2,
            name: "T-shirt",
            details: ".....",
            price: 25
        }]
    },
    {
        products: [{
            id: 0,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 1,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 2,
            name: "T-shirt",
            details: ".....",
            price: 25
        }],

        product: {
            id: 3,
            name: "T-shirt",
            details: ".....",
            price: 25
        },

        expected: [{
            id: 0,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 1,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 2,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 3,
            name: "T-shirt",
            details: ".....",
            price: 25
        }]
    },
    {
        products: [{
            id: 0,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 1,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 2,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 3,
            name: "T-shirt",
            details: ".....",
            price: 25
        }],
        product: {},
        expected: [{
            id: 0,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 1,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 2,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {
            id: 3,
            name: "T-shirt",
            details: ".....",
            price: 25
        }, {}]
    },
];


describe('test add product function', () => {
    for (let i = 0; i < addProductTests.length; i++)
        test('test1', () => {
            expect(addProduct(addProductTests[i].products, addProductTests[i].product)).toEqual(addProductTests[i].expected);
        });
});