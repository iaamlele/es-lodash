// _.compact(array): Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
// Arguments
//      array (Array): The array to compact.
// Returns
//      (Array): Returns the new array of filtered values.

export default function compact(array) {
    const res_array = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] !== false 
            && array[i] !== null 
            && array[i] !== 0 
            && array[i] !== "" 
            && array[i] !== undefined 
            // NaN（不是一个数字）是一种数值数据类型，指代一种未定义的值或者不能够被描述的值，尤其浮点型结算的结果。
            // 使用 isNaN() 或 Number.isNaN() 来判断数组中的元素是否是 NaN
            && !isNaN(array[i])) {
                res_array.push(array[i]);
        }
    }
    console.log(res_array);
}