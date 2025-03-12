let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let position = 3;
let newElement = 25;

for(i=arr.length-1; i>=position; i--){
    arr[i+1] = arr[i]
    if(i==position){
        arr[i] = newElement
    }
}
console.log(arr)