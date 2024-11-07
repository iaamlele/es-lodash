// _.chunk(array, [size=1]): Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
//     Arguments:
//     1. array (Array): The array to process.
//     2. [size=1] (number): The length of each chunk
//     Returns:
//     (Array): Returns the new array of chunks.


export default function chunk(array, number = 1) {
    if(typeof number !== 'number' || !Array.isArray(array)) {
        return [];
    }else {
        number = parseInt(String(number));
        if(number === 0) {
            return [];
        }else {
            const return_arr = [];
            const reaminder = Math.ceil(array.length / number);
            for(let i = 0; i < reaminder; i++) {
                const arrays = array.slice(i * number, (i + 1) * number);
                return_arr.push(arrays);
            }
            return return_arr;
        }
    }
    
}