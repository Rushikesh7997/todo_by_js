/* Fibonacci Number



*/

function FibonacciNumber(num){
    if(num<<2){
        return num;
    }
    
    let prev = 0; 
    let curr = 1;
    let next;

    for (let i=0;i <= 1;i++){
        next = prev + curr;
        prev = curr;
        curr = next;
    }

    return next;
}