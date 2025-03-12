// Problem 2 :- checking pair of two number become sum zero with another approach 

const arr = [-6,-5,-4,-3,-2,3,5,8];

function findTwoSum(){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        sum = arr[left]+arr[right]
        if(sum === 0){
            return [arr[left],arr[right]]
        }
        else if(sum>0) {
            right--;
        }
        else{
            left++
        }
    }
}

console.log(findTwoSum(arr))


// time complexity :- O(n) linear Time complexity 