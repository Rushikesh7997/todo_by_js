// function sayHi(){
//     console.log(name);
//     console.log(age);
//     var name = "Rishi";
//     let age = 21
// }

// sayHi();

// ----------------------------------------------------------------------- //

// for (var i=0; i<3;i++){
//     setTimeout(()=> console.log(i), 1)
// }

// for (let i=0;i<3;i++){
//     setTimeout(()=> console.log(i), 1)
// }

// ----------------------------------------------------------------------- //

// const shape = {
//     radius: 10,
//     diameter(){
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
// };
// console.log(shape.diameter());
// console.log(shape.perimeter());

// ----------------------------------------------------------------------- //

// +true;
// !'Lydia';

// ----------------------------------------------------------------------- //

// const bird = {
//     size : "small",
// };

// const mouse = {
//     name: "mickey",
//     small: true,
// }

// ----------------------------------------------------------------------- //

// let c = {greeting: "Hey!"};
// let d;

// d=c;
// c.greeting = "Hello";
// console.log(d.greeting)

// ----------------------------------------------------------------------- //

// function f(a,b){
//     const sum = a + b;
//     return sum;
// }

// console.log(f(3,4))

// ----------------------------------------------------------------------- //

// IF else loop 

// let age = 19;

// if(age >= 18){
//     console.log("user can play game")
// }else{
//     console.log("user can't play game")
// }

// let num = 15;

// if(num%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

// ----------------------------------------------------------------------- //

// let age = 14;
// let drink;

// if(age>=5){
//     drink = "Coffee"
// }else{
//     drink = "Milk"
// }

// console.log(drink)

// ternary operator // conditional operator 

// let age = 15;
// let drink = age >= 5 ? "coffee" : "milk"

// console.log(drink);

// ----------------------------------------------------------------------- //

//  and operator &&

// let firstName = "Harsher"
// let age = 2;

// if(firstName[0]== "H" && age >= 18){
//     console.log("1. Name start with H and age is above 18");
// }else if (firstName[0] == "H" && age<18){
//     console.log("2. Name start with H but Age is smaller than 18");
// }else if (firstName[0] != "H" && age>=18){
//     console.log("3. Name letter is different and Age is above 18")
// }else{
//     console.log("4. Name letter is different and Age below 18");
// }

//  or operator ||

// let firstName = "Harsher"
// let age = 22;

// if(firstName[1] == "a" || age > 18){
//     console.log("inside if");
// }else{
//     console.log("inside else")
// }


// ----------------------------------------------------------------------- //

// nested if else 

// let winningNumber = 19;
// let userGuess = 19;

// if(userGuess === winningNumber){
//     console.log("Your Guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }
//     else{
//         console.log("too high !!");
//     }
// }

// ----------------------------------------------------------------------- //

// while loop

// let i=0;

// while(i<=5){
//     console.log(i)
//     i++
// }
// console.log(`current value of i is ${i}`)

// let num = 10
// let sum = 0
// let i=0;

// while(i<=10){
//     sum = sum + i
//     i++
// }
// console.log(sum)

// ----------------------------------------------------------------------- //


// let fruits = ["apple", "mangoes", "grapes"];
// console.log(fruits)
// fruits[1] = "banana";
// console.log(fruits)

// ----------------------------------------------------------------------- //

// let array1 = ["list1", "list2", "list3"]
// let array2 = [...array1];
// // let array2 = array1;

// array1.push("item4")

// console.log(array1)
// console.log(array2)

// ----------------------------------------------------------------------- //

// const band = {
//     bandName : "ed sheers",
//     songName: "perfect"
// }

// console.log(band.bandName,band.songName)

// ----------------------------------------------------------------------- //

// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(5))

// const people = [
//     { firstName: "John", lastName: "Doe" },
//     { firstName: "rahul", lastName: "raj" },
//     { firstName: "rohit", lastName: "singh" },
//     { firstName: "rakesh", lastName: "roshan" }
//   ];
  
  // people.forEach(function (person) {
  //   console.log(person.firstName);
  //   console.log(person.firstName, person.lastName);
  //   console.log(person.firstName);
  // });
  
  // people.forEach((user,index)=>{
  //   console.log(index, user.firstName,user.lastName)
  // })

// ----------------------------------------------------------------------- //

// let vehicle = {
//   wheels: '4',
//   fuelType: 'Gasoline',
//   color: 'Green'
// }
// let carProps = {
//   type: {
//     value: 'Volkswagen'
//   },
//   model: {
//     value: 'Golf'
//   }
// }

// var car = Object.create(vehicle, carProps);
// console.log(car);

// ----------------------------------------------------------------------- //

