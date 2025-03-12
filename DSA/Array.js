const arr = [1,2,3,4, "Hello", {name:"Vishal"},[1,3,5]]

// console.log(arr)

const firstElement = arr[0];
const arrLength = arr.length;
const lastElement = arr[arrLength-1];
// console.log(firstElement,arrLength,lastElement)

// how do you remove the last element from an array 

const lastElement1 = arr.pop();
// console.log(arr)

// how do you add an element to the end of an array

arr.push(10);
// console.log(arr)

// how do you add an element to the start of an array 

arr.unshift(7)
// console.log(arr)

// how do you first element from the array 

arr.shift()
// console.log(arr)

// how do you loop through an array in JS

// for(let i=0;i<arr.length;i++){
//     console.log("for loop :- ", arr[i])
// }

// arr.forEach((x,i) =>{
//     console.log("forEach:-" , x)
// })

// for(let x of arr){
//     console.log(x) 
// }

// Question 1 :- how do you check if an elemnet exists in array?

// const findElement = (arr, target) =>{
//     for(let x of arr){
//         if(x === target){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(findElement(arr, "rishi"))

//  Question 2 :- how do you check if an element exists in an array ?

const findElementIndex = (arr, target) =>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return "Not Found"
}

// console.log(findElementIndex(arr, 10))

// how to delete add & update element from specific index 

// console.log(arr)
// arr.splice(1,3)
// console.log(arr)
// arr.splice(1,0,15,13,14,55)
// console.log(arr)
// arr.splice(1,3,6,7,8)
// console.log(arr)

// Splice vs slice 

const subArr = arr.slice(1,4)
console.log(subArr)


