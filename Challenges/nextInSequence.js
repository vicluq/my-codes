function nextElement(arr) {

    let aux = 0;

    for(let i = 0; i<(arr.length - 1); ++i){
       
        if (arr[i+1] - arr[i] == arr[i+2] - arr[i+1]){
         aux = 1;   
         
        }

        else if (arr[i] == arr[i+1]) {
          aux = 3;  
        }
        
    }


    if (aux == 1) {
        return arr[arr.length] = arr[arr.length - 1] + (arr[1] - arr[0]);
    }

    else if (aux == 3) {
        return arr[arr.length] = arr[arr.length - 1];
        
    }
    
}

console.log(nextElement([-5, -6, -7]));
console.log(nextElement([0, -1, -2]));
console.log(nextElement([8454, 8455, 8456, 8457]));
console.log(nextElement([-3, -3, -3]));