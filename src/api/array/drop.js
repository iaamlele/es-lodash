// _.drop(array, [n=1]): Creates a slice of array with n elements dropped from the beginning.
// Arguments
//      array (Array): The array to query.
//      [n=1] (number): The number of elements to drop.
// Returns
//      (Array): Returns the slice of array.

// undefined 是 JavaScript 中未初始化或未传递的变量的默认值。因此，你可以直接检查参数是否等于 undefined
export default function drop(array, n = 1) {
    array = Array.from(array);
    if(typeof n !== "number" || (typeof n === "number" && isNaN(n))) {
        return array;
    }else {
        if(n <= 0) {
            return array;
        }else if(n >= array.length) {
            return [];
        }else {
            return array.slice(parseInt(String(n), 10));
        }
    }
    
}