// 1. Given a string, reverse each word on the sentence.

const str = "I am the Best Deveopler"

const savedStr = str.split(" ")
    .map(function (word){
        return word.split("").reverse().join("")
    })

// console.log(savedStr.join(" "));

// ----------------------------------------------------------------------- //

// 2. How to check if an object is an array or not? 

function checkArray(ele){
    return Array.isArray(ele)
}

// console.log(checkArray([]))
// console.log(checkArray({}))

// ----------------------------------------------------------------------- //

// 3. How to empty an array in javascript ? - do not reset it to a new array, and do not loop through to pop each value 

var arr = [1,2,3,4,5,6]
arr.length = 0;
// console.log(arr.length)

// ----------------------------------------------------------------------- //

// 4. How would you check if a number is an integer?

var a = 14

function checkInteger(num){
    if(a%1 == 0){
        return "integer"
    }else{
        return "not integer"
    }
}

// console.log(checkInteger(a))

// ----------------------------------------------------------------------- //

//  Make a duplicate Array [1,2,3,4] ==> [1,2,3,4,1,2,3,4]

var arr1 = [1,2,3,4];

function duplicateArray( arr){
    return arr.concat(arr);
}

// console.log(duplicateArray(arr1))

// ----------------------------------------------------------------------- //

// 6. write a Javascript function that reverse a number

// option 1
function reverseNumber(num){
    return Number(num.toString().split("").reverse().join(""))
}

// console.log(reverseNumber(12))

// option 2 

function reverseNumber2(num){
    let rev = 0;
    while(num>0){
        var rem = num%10;
        rev = rev*10+rem;
        num = Math.floor(num/10)
    }
    return rev
}

console.log(reverseNumber2(12349656555))