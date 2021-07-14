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



const {editItem } = require("./script/seller");

describe("Edit item", () => {
    test("editing the first item in the array", () => {
      const arr = [
        { id: 0, name: "t-shirt", price: 20 },
        { id: 1, name: "top", price: 30 },
        { id: 2, name: "pants", price: 40 },
      ];
      const actual = editItem(arr, 0, { name: "full-shirt", price: 40 });
      const expected = [
        { id: 0, name: "full-shirt", price: 40 },
        { id: 1, name: "top", price: 30 },
        { id: 2, name: "pants", price: 40 },
      ];
      console.log(actual);
      expect(actual).toEqual(expected);
    });
    test("editing the 2nd item in the array", () => {
      const arr = [
        { id: 0, name: "t-shirt", price: 20 },
        { id: 1, name: "top", price: 30 },
        { id: 2, name: "pants", price: 40 },
      ];
      const actual = editItem(arr, 1, { name: "bot" });
      const expected = [
        { id: 0, name: "t-shirt", price: 20 },
        { id: 1, name: "bot", price: 30 },
        { id: 2, name: "pants", price: 40 },
      ];
      expect(actual).toEqual(expected);
    });
  
    test("trying to edit a non-existent id, do nothing", () => {
      const arr = [
        { id: 0, name: "t-shirt", price: 20 },
        { id: 1, name: "top", price: 30 },
        { id: 2, name: "pants", price: 40 },
      ];
      const actual = editItem(arr, 4, { name: "full-shirt", price: 40 });
      const expected = [
        { id: 0, name: "t-shirt", price: 20 },
        { id: 1, name: "top", price: 30 },
        { id: 2, name: "pants", price: 40 },
      ];
      expect(actual).toEqual(expected);
    });
  });






