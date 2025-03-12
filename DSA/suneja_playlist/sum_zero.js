// Problem 1 :- checking pair of two number become sum zero 


const arr = [-6,-5,-4,-3,-2,3,4,6]
var bag =[]

function PairZero(arr){
    for(let i=0;i<=arr.length-1;i++){
       for(let j=i;j<=arr.length-1;j++){
            if(arr[i]+arr[j]===0){
                bag = bag + [arr[i],arr[j]] + " "
            }
        }
    }
    return bag;
}
const result = PairZero(arr)
console.log(result);


// time complexity :- O(n^2) 