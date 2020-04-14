function negate(arr) {
    
    if(!!arr == false) {return []}
    
    else {
    let i = 0;
    for (i in arr){
        arr[i] *= (-1)
    }
    return arr }
}


console.log(negate([1, 8, 45, -70, 12]))

let date1 = new Date

console.log(date1.getDate(), '/',(date1.getMonth() + 1),'/', date1.getFullYear())

console.log((date1.getTimezoneOffset())/60, 'hour difference between UTC and your timezone');