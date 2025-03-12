/*
    Question 3 :- count the number of digits 

    12345 :- 5 Numbers 

    254 :- 2
*/

function countDigit(num){
    num = Math.abs(num)
    let count = 0;
    do {
        count++;
        num = Math.floor(num/10);
    } while (num>0);
    return count;
}

console.log(countDigit(12345))
console.log(countDigit(895645645))