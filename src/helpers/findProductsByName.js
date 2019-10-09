import productsArr from './productsList'

/**
  @param {array} arr - array of product names (strings)
  @returns {array} array of objects
*/
export default function findProductsByName(arr){
  let prodObjArr = []
  arr.map(a=>{
    for (var i = 0; i < productsArr.length; i++) {
      if (productsArr[i].name == a) {
        prodObjArr.push(productsArr[i])
        continue;
      }
    }
  })

  return prodObjArr
}
