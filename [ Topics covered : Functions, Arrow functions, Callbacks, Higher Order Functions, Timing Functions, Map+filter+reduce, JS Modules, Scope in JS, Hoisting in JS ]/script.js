// [ Topics covered : Functions, Arrow functions, Callbacks, Higher Order Functions, Timing Functions, Map+filter+reduce, JS Modules, Scope in JS, Hoisting in JS ]
// Assignment 4

// IIFE (Immediately invoked function expression)
// (function(){
//     if (9>10){
//         console.log("yes")
//     }
//     else{
//         console.log("no")
//     }
// })();



// Nmaed function
// const factorial= function callfactorial(n){
//     if (n==0){
//         return 1
//     }
//     return n*callfactorial(n-1)
// }
// let n=parseInt(prompt("enter the number"))
// console.log(fun(n))


// 2.Write following programs using a function then update same program using an arrow function-
//a find the maximum of two numbers
//b find the sum of all elements in an array 
//c write a function that takes a string as an argument and returns a new string with all the vowels removed.
//d factorial of a number using a recursive function.
// eto sort an array of numbers in ascending order using a function.

// const max=(a,b)=>{
//     if (a>b){
//         console.log(a,"a is maximum")
//     }
//     else{
//         console.log(b,"b is maximum")
//     }
// }
// const a=parseInt(prompt("enter the number of a"))
// const b=parseInt(prompt("enter the number of b"))
// max(a,b)

// let array=[1,2,3,4,5]
// let arraysum=(array)=>{
//     let sum=0;
//     for(let i=0;i<array.length;i++){
//         sum+=array[i]
//     }
//     return sum;
// }
// console.log(arraysum(array))

// let str=prompt("enter the string");
// const newstr=(str)=>{
//     let string=[]
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//             continue;
//         }
//         string.push(str[i])
        
//     }
//     return string;
// }

// console.log(newstr(str))

// let n=parseInt(prompt("enter the number"))
// let fact=(n)=>{
//     if(n==0){
//         return 1
//     }
//     return n*fact(n-1)
// }
// console.log(fact(n))


// let array=[4,8,5,1,10,3]
// let sort=(array)=>{
//     let i=0;
//     let temp=0;
//     while(i<array.length){
//         let j=i+1;
//         while(j<array.length){
//             if (array[j]<array[i]){
//                 temp=array[i]
//                 array[i]=array[j]
//                 array[j]=temp
//             }
//             j+=1;
//         }
//         i+=1;
//     }
//     return array
// }
// console.log(sort(array))


// JS Modules questions :-
// Create a module that exports an object with two methods, add and subtract, that take in two arguments each and return the sum and difference of those numbers, respectively. Import this module in another file and use it to find the sum and difference of two numbers.
  
// import * as utility from './utility.js';
// let res=utility.add(2,5);
// console.log(res);
// let subtract=utility.sub(5,1);
// console.log(subtract);



// Questions based on map + filter + reduce :-
// Write a program that takes an array of strings and returns a new array with the length of each string.

// let arraystr=["preeti","singh","rajput"]
// let newarray=arraystr.map((x) => x.length)
// console.log(newarray)

// Write a program that takes an array of numbers and returns the sum and max of all the numbers.

// let array=[1,2,3,4,5,5]
// let newarray=array.reduce((acc,curr)=>acc+curr,0);
// let newarray2=array.reduce((maxvalue,curr)=>Math.max(maxvalue,curr));
// console.log(newarray);
// console.log(newarray2);

// Write a program that takes an array of numbers and returns a new array with only the numbers that are greater than 5.

// let array=[3,5,10,15,7,6]
// let newarray=array.filter((x)=>x>5)
// console.log(newarray)



// Suppose you have an array of objects representing students, where each object contains the student's name, age, and grades in different subjects. Your task is to calculate the average grade of students who are older than 18.

// const students = [
//   { name: 'Alice', age: 19, grades: [85, 90, 92] },
//   { name: 'Bob', age: 17, grades: [75, 80, 88] },
//   { name: 'Charlie', age: 20, grades: [90, 92, 94] },
//   { name: 'Dave', age: 22, grades: [78, 82, 86] },
//   { name: 'Eve', age: 18, grades: [88, 90, 92] }
// ];

// Using `map`, `filter`, and `reduce`, write a program to find the average grade of students who are older than 18.

// Hint: You can use `filter` to filter out the students older than 18, `map` to extract their grades, and `reduce` to calculate the sum of the grades. Finally, divide the sum by the number of students to get the average.

// let filteredstudent=students.filter((student)=>student.age>18);
// console.log(filteredstudent)
// let gradeobject=filteredstudent.map((student)=>student.grades).reduce((grade1,grade2)=>grade1.concat(grade2),[]);
// console.log(gradeobject)
// let sumofgradeobj=gradeobject.reduce((acc,curr)=>acc+curr,0);
// console.log(sumofgradeobj)
// let average=sumofgradeobj/gradeobject.length;
// console.log(average)



// how function works in javascript
//hoisting
// var x=1;
// a();
// b();
// console.log(x);

// function a(){
//   var x=100;
//   console.log(x);
// }

// function b(){
//   var x=10;
//   console.log(x);
// }


//Anonymous function
// let a=parseInt(prompt("enter the number"))
// let b=parseInt(prompt("enter the second number"))
// let anonyfun= function(a,b){
//   return a+b;
// }
// console.log(anonyfun(a,b))


// console.log(x)
// console.log(sum(2,5))
// var x=10;
// function sum(a,b){
//   return a+b;
// }


//Lexical scope

// function a(){
//   var b=10;
//   c();
//   function c(){
//     var d=40;
//     console.log(b);
//   }
//   console.log(d)
// }
// a();


// Call back function

// setTimeout(function(){
//   console.log("Timer");
// },5000);

// function x(y){
//   console.log("x")
//   y()
// }
// x(function y(){
//   console.log("y")
// })

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// var x;
// console.log(x); 
// x = 25;


// function output() {
//   x = 33;
//   console.log(x);
//   var x;
// }
// output();


// function closure(){
//     for(var i=1; i<5; i++){
//       function close(i){
//         setTimeout(() => {
//           console.log(i)
//         }, i*1000);
//       }
//       close(i);
//     }
// }
// closure()

//function declaration is also known as function statment
myfunction()
a()

function myfunction(){
  console.log("myfunction is called");
}

let a= function myfunction2(){
  console.log("myfunction2 is called")
}



