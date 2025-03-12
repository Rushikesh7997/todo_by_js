let data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let position = 3;

for(i=position;i<=data.length-1;i++){
    // if(i==position){
       data[i] = data[i+1]
    // }

}
data.length = data.length-1
console.log(data)