/*
Palindrome from leetcode
palindrome number = 121
not palindrome number = 1234

*/

function palindrome(num){
    let copyNum = num;
    let reverseNum = 0;

    while (copyNum>0){
        const lastDigit = copyNum%10;
        reverseNum = reverseNum*10+lastDigit;
        copyNum = Math.floor(copyNum/10)
    }

    if(num === reverseNum){
        return "true"
    }else{
        return "false"
    }

    // return num = reverseNum;
}

console.log(palindrome(1234))