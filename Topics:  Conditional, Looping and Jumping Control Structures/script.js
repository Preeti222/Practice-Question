1.// Write a JavaScript program to find the largest of three given numbers.
// num1=parseInt(prompt("Enter the first number"))
// num2=parseInt(prompt("Enter the second number"))
// num3=parseInt(prompt("Enter the third number"))
// if(num1>num2){
//     if(num1>num3){
//         console.log("Largest number is",num1)
//     }
// }
// else if (num2>num1) {
//     if(num2>num3){
//         console.log("Largest number is",num2)
//     }

// } else {
//     console.log("largest number is",num3)
    
// }


// 2.Create a JavaScript program that checks whether a given year is a leap year or not. Leap years are divisible by 4, except for years that are divisible by 100 but not divisible by 400. Implement this logic using if-else if statements and print the result accordingly.
// let year=parseInt(prompt("enter the value of year"))
// if((year%400===0) || (year%4===0 && year%100!==0)){
//     console.log("leap year is",year)
// }else{
//     console.log("this is not leap year",year)
// }


// 3.Write a JavaScript program to calculate the number of days in a given month. The program should take the month number and the year as input and display the number of days in that month. For example, if the user enters 2, the program should display "28" (assuming it's not a leap year). If the month number is less than 1 or greater than 12, print the appropriate error message. Use switch case to implement this.

// let month=parseInt(prompt('Enter the Month number'));
// let year=parseInt(prompt("Enter the year"))
// if (month<1 || month>12){
//     console.log("invalid month number");
// }else{
//     let answer;
//     switch(month){
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             answer=31;
//             break
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             answer=30;
//             break
//         case 2:
//             if((year%400===0) || (year%4===0 && year%100!==0)){
//                 answer=29;
//             }
//             else{
//                 answer=28;
//             }
//     }
//     console.log(answer)
// }


// 4.Write a JavaScript program to display the odd numbers between 1 and 10 using the for loop.
// for(let i=1; i<=10; i++){
//     if(i%2==1){
//         console.log(i)
//     }
// }


// 5.Write a JavaScript program to calculate the sum of all the elements in an array using the for…of loop.
// let array=[13,34,56,22,42];
// sum=0
// for( let i of array){
//     sum+=i;
// }
// console.log(sum)



// 6.Write a JavaScript program to display the properties of an object using the for...in loop and the values of the properties using the for...of loop.
// let object={
//     name:"preeti",
//     surname:"Singh",
//     profession:"Software Engineer"
// }
// console.log(object)
// for(const i in object){
//     console.log(i)
// }
// for(const i of Object.values(object)){
//     console.log(i)
// }


// 7.Write a JavaScript program to create a new array containing only the even numbers from an existing array using the for…of loop.

// let array=[2,3,4,5,6,7,8,9,10]
// let newarray=[]
// for(const i of array){
//     if(i%2==0){
//         newarray.push(i)
//     }
// }
// console.log(newarray)


// 8.Write a program that calculates the sum of all even numbers between 1 and 500. Use a do…while loop to accomplish this.
// let i=1;
// let evensum=0;
// do {
//     if (i%2==0){
//         evensum+=i;
//     }
//     i++;
    
// } while (i<=500);
// console.log(evensum)


// 9.Write a program that asks the user to enter a series of numbers and stops asking when the user enters a negative number. Calculate the sum of all the positive numbers entered by the user, ignoring the negative number.
// let num=parseInt(prompt("ENTER A NUMBER OF SERIES"))
// let sum=0;
// for(let i=0; i<num;i++){
//     let newnum=parseInt(prompt("enter the number"))
//     if (newnum<0){
//         break
//     }else{
//         sum+=newnum;
//     }
// }
// console.log(sum)


// 10.Write a JavaScript program that prints the first 100 prime numbers, skipping any prime number that ends with the digit 7.
// let num=7;
// let flag=0;
// if(num<=0){
//     console.log("invalid")
// }else{
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             flag=1;
//             break
//         }
//     }
//     if(flag==1){
//         console.log("not prime")
//     }
//     else{
//         console.log("prime")
//     }
// }

const low=1;
const high=100;
const prime=[]
for(let i=low; i<=high; i++){
    let flag=0
    if(i<2){
        continue
    }
    if(i==2){
        prime.push(i)
        continue;
    }
    for(let x=2; x<i; x++){
        if(i%x==0){
            flag=1;
            break
        }
    }
    if(flag==0){
        prime.push(i)
    }
}
console.log(prime)

