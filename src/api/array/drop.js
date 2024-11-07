// _.drop(array, [n=1]): Creates a slice of array with n elements dropped from the beginning.
// Arguments
//      array (Array): The array to query.
//      [n=1] (number): The number of elements to drop.
// Returns
//      (Array): Returns the slice of array.

// undefined 是 JavaScript 中未初始化或未传递的变量的默认值。因此，你可以直接检查参数是否等于 undefined
export default function drop(array, n) {
    if(n === undefined) {
        console.log(array.slice(1));
    }else {
        console.log(array.slice(n));
    }
}