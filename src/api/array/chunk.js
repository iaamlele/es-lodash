// _.chunk(array, [size=1]): Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
//     Arguments:
//     1. array (Array): The array to process.
//     2. [size=1] (number): The length of each chunk
//     Returns:
//     (Array): Returns the new array of chunks.


export default function chunk(array, number) {
    const return_arr = [];
    let sub_arr = [];
    let k = 0;
    for(let i = 0; i < array.length; i++) {
        sub_arr.push(array[i]);
        k++;
        if(k === number && i !== array.length - 1) {
            return_arr.push(sub_arr);
            sub_arr = [];
            k = 0;
        }
        if(i === array.length - 1) {
            return_arr.push(sub_arr);
        }
    }
    console.log(return_arr);
}