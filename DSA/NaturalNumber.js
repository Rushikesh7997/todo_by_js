// Question 1 : sum of all natural number from 1 to n ;

// sum of 1 to 5 : 15 

function sumofNaturalNumber(num){
    let sum = 0;
    for(i=0;i<=num;i++){
        sum = sum+i
    }
    return sum;
}

console.log(sumofNaturalNumber(5))
console.log(sumofNaturalNumber(10))
console.log(sumofNaturalNumber(8))