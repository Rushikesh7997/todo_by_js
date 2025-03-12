/*
Question 2 :- sum of digit of a number

1287 = 18

1287 %10 , remindar = 7 + 8 + 2, Q = 128 % 10 = 12
*/

function sumOfDigit(num){
    let sum = 0;
    while (num>0){
        sum += num%10;
        num = Math.floor(num/10)
    }
    return sum;
}

console.log(sumOfDigit(1287));