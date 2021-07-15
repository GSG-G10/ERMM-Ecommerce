const data = [
  {
    id: 0,
    name: "LEICA S (TYP 006)",
    price: 18.55,
    image:
      "https://cdn.shopify.com/s/files/1/0543/1637/products/1347910998_360x.jpg",
    category: "CAMERAS",
  },
  {
    id: 1,
    name: "LEICA S (TYP 006) / 70MM LENS SET",
    price: 15.66,
    image:
      "https://cdn.shopify.com/s/files/1/0543/1637/products/Leica_S-002_180x.jpg",
    category: "CAMERAS",
  },
  {
    id: 2,
    name: "LEICA ADAPTER FOR 21MM F/1.4 ASPH TO ACCEPT E82 FILTER",
    price: 105,
    image:
      "https://cdn.shopify.com/s/files/1/0543/1637/products/TBPhotography-8265_360x.jpg",
    category: "ACCESSORIES",
  },
  {
    id: 3,
    name: "LEICA R ADAPTER M",
    price: 310,
    image:
      "https://cdn.shopify.com/s/files/1/0543/1637/products/TBPhotography_ed644957-8545-4b4f-88df-213d442ee767_540x.jpg",
    category: "ACCESSORIES",
  },
  {
    id: 4,
    name: "VIDEO DEVICES SUN HOOD FOR PIX-E5 / E5H",
    price: 40,
    image:
      "https://cdn.shopify.com/s/files/1/0543/1637/products/acc_pix_e5_e5h_hood_540x.jpg",
    category: "VIDEO",
  },
  {
    id: 5,
    name: "VIDEO DEVICES XL-B2 7.4V 5200MAH LI-ION BATTERY FOR PIX-E RECORDERS",
    price: 81,
    image: "https://5jl.cc/wp-content/uploads/2019/11/126-12.jpg",
    category: "VIDEO",
  },
  {
    id: 6,
    name: "LEICA ULTRAVID 8X32 EDITION ZAGATO",
    price: 25,
    image:
      "https://cdn.shopify.com/s/files/1/0543/1637/products/Ultravid_HD-Plus_32_Zagato_3D_540x.jpg",
    category: "SPORT",
  },
  {
    id: 7,
    name: "LEICA ULTRAVID 10 X 32 HD-PLUS, EDITION HERMES",
    price: 25,
    image:
      "https://cdn.shopify.com/s/files/1/0543/1637/products/Ultravid_10x32_Hermes-1_540x.jpg",
    category: "SPORT",
  },
];
// add this object to localStorage
if (!localStorage.getItem("products"))
  localStorage.setItem("products", JSON.stringify(data));
// export data to use in the app
if (typeof module !== "undefined") {
  module.exports = data;
}