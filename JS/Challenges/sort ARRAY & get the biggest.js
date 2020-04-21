const findLargestNum = (array) => {
    
    let i = 0; let j = 0; let aux = 0;
    
    const n = array.length; 
    
    for (; i < n; ++i) {
        for (j = i; j < n; ++j) {

            if(array[i] >= array[j]){
                aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    console.log(array);
    
    return array[n-1];
}

const array1 = [3, 7 , 1, 4, 5.5, 9, 15, 67.8, 3, 90, 50, 34, 70];

console.log(findLargestNum(array1));