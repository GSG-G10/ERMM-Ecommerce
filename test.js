
const { editProduct } = require("./script/edit");

describe("Edit item", () => {
    test("editing the first item in the array", () => {
      const arr = [
        { id: 0, name: "t-shirt", price: 20 },
        { id: 1, name: "top", price: 30 },
        { id: 2, name: "pants", price: 40 },
      ];
      const actual = editProduct(arr, 0, { name: "full-shirt", price: 40 });
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
      const actual = editProduct(arr, 1, { name: "bot" });
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
      const actual = editProduct(arr, 4, { name: "full-shirt", price: 40 });
      const expected = [
        { id: 0, name: "t-shirt", price: 20 },
        { id: 1, name: "top", price: 30 },
        { id: 2, name: "pants", price: 40 },
      ];
      expect(actual).toEqual(expected);
    });
  });
