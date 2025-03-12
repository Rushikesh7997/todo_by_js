/*  Missing Number

find missing number 
 n= [0,1,3]
 missing number is 2;

 approch is 

 0+1+3=4;
 1+2+3=6;
 6-4=2;

*/

function missingNumber (nums){
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }
    return nums.length*(nums.length+1)/2-sum
}