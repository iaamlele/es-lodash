// _.pull(array, [values]): Removes all given values from array using SameValueZero for equality comparisons.
// Arguments
//      array (Array): The array to modify.
//      [values] (...*): The values to remove.
// Returns
//      (Array): Returns array.

export default function pull(arr, ...s) {
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(s[i] === arr[j]) {
                arr[j] = null;
            }
        }
    }
    let final_arr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === null) continue;
        else final_arr.push(arr[i]);
    }
    for(let i = 0; i < final_arr.length; i++) {
        arr[i] = final_arr[i];
    }
    const pop_len = arr.length - final_arr.length;
    for(let i = 0; i < pop_len; i++) {
        arr.pop();
    }
    return arr;
}