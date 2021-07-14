const deletingProduct = (id, array) => {
  const newArray = array.filter((ele) => {
    return ele.id !== id;
  });
  return newArray;
};
module.exports = {
  deletingProduct,
};
