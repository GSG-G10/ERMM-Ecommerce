const deletingProduct = (id, array) => {
    const newArray = [...array]
    newArray.forEach((ele, index) => {
        if(ele.id == id){
            newArray.splice(index, 1)
        }          
    })   
    return newArray
}
module.exports = {
    deletingProduct
}