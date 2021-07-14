const { addProduct } = require("./script/main");

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