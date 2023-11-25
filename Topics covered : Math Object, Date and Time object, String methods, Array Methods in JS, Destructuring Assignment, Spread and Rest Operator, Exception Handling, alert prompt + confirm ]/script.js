// Assignment 3


// Topics covered : Math Object, Date and Time object, String methods, Array Methods in JS, Destructuring Assignment, Spread and Rest Operator, Exception Handling, alert prompt + confirm ]

// Math and Date Object questions

// Write a program-
// 1. to find the square root of a given number.
// let number=parseInt(prompt("Enetre the number"));
// let square_root=Math.sqrt(number);
// console.log(square_root);

// // 2.to find the value of PI.
// console.log(Math.PI)

// // 3. to generate a random number between 1 and 10.
// console.log(Math.random(1,10));

// // 4. to round a given decimal number to the nearest integer.
// console.log(Math.round(number));

// // 5. to find the absolute value of a given number.
// console.log(Math.abs(number));

// // 6. to calculate the power of a given base to a given exponent.
// console.log(Math.pow(num,2))



// Write a program-
// 1.to display the current date and time in ISO format (YYYY-MM-DDTHH:MM:SSZ).
// 2.that gets the current date and time and displays it in a human-readable format (e.g. "Today is Monday, April 12, 2021, and the time is 3:30 PM").
// 3.that takes a date as and returns the day of the week (e.g. "Monday", "Tuesday", etc.) in string format.
// 4.that takes a date and returns the number of days in the month that the date falls in.

// let now=new Date();
// console.log(now.toISOString());
// console.log(now.toDateString());
// console.log(now.getFullYear());
// console.log(now.toTimeString());

// 3.1.Write a program that takes a string input from the user and :-
// a..print out the length of the string.
// let string=prompt("Enter the string")
// console.log(string.length);

// b. converts all the characters in the string to uppercase.
// let string2=prompt("Enter the string")
// console.log(string2.toUpperCase());

// c. take two strings and concatenate them into a single string.
// let str1=prompt("ENTER THE FIRST STRING")
// let str2=prompt("ENTER THE SECOND STRING")
// console.log(str1+str2)

// d. takes a string and prints out the first and last characters of the string.
// let str=prompt("enter the string")
// console.log(str.charAt(0));
// console.log(str.charAt(str.length-1))

// e. replaces all occurrences of the letter "a" with the letter "b".
// let newstr=prompt("enter the string for replace a to b")
// console.log(newstr.replaceAll('a','b'));

// f. removes all the whitespace characters from the string.
// let orgstr=prompt("Enter the string for removing white space");
// console.log(orgstr.split(" ").join(""));

// g. prints out the number of vowels (a, e, i, o, u) in the string.
// let str=prompt("ENTER THE STRING FOR COUNTING VOWELS");
// let count=0;
// for(let i=0;i<str.length;i++){
//     if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
//         count+=1;
//     }
// }
// console.log(count);




// 2.Write a program that takes a string input from the user and checks if the string is a palindrome (reads the same backwards as forwards).
// let str=prompt("enter the string for checking palindrome")
// let newstr=str.split("").reverse().join("");
// if(str==newstr){
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome")
// }


// 3.Write a program that takes a string input from the user and capitalizes the first letter of every word in the string (e.g. "hello world" becomes "Hello World")




// 4.Write a program that takes a string input from the user and sorts the characters in the string alphabetically.

// let str=prompt("enter the string")
// let newstr=str.split("").sort().join("")
// console.log(newstr)

//5. Write a program that takes a string input from the user and removes all punctuation characters from the string.
// let str=prompt("enter the string")
// let array=[]
// for(let i=0;i<str.length;i++){
//     if(str[i]>='a' && str[i]<='z' || str[i]>='A' && str[i]<='Z'){
//         array.push(str[i])
//     }
// }
// console.log(array.join(""))


// 6.Write a function that takes in two parameters, name and age, and uses a template literal to output a message like this: "My name is __ and I am __ years old."
// let name=prompt("enter the name");
// let age=prompt("enter the age");
// let res=`My Name is ${name} and I am ${age} year old`;
// console.log(res);


// ARRAYS [Array methods questions]

// 1.takes two arrays of numbers as input and returns a new array containing the sum of the corresponding elements in each array.
// let array1=[1,2,3,4,5];
// let array2=[6,7,8,9,10];
// let newarray=[]
// let sum=0;
// for (let i=0; i<array1.length; i++){
//     sum=array1[i]+array2[i];
//     newarray.push(sum);
// }
// console.log(newarray)


// 2.takes an array as input and removes the first element using the shift() method.
// let array=[]
// let number=parseInt(prompt("enter the number how many you want to insert in array"))
// for (let i=0; i<number;i++){
//     let input=parseInt(prompt("enter the number"))
//     array.push(input);
// }
// console.log(array.shift())

// 3.takes an array and a value as input and adds the value to the beginning of the array using the unshift() method. Return the modified array.
// let array=[]
// let number=parseInt(prompt("enter the number how many you want to insert in array"))
// for (let i=0; i<number;i++){
//     let input=parseInt(prompt("enter the number"))
//     array.push(input);
// }
// let newarray=array.unshift(20);
// console.log(newarray)
// console.log(array)


// 4.takes an array as input and removes the last element using the pop() method. Return the modified array.
// let array=[]
// let number=parseInt(prompt("enter the number how many you want to insert in array"))
// for (let i=0; i<number;i++){
//     let input=parseInt(prompt("enter the number"))
//     array.push(input);
// }
// let newarray=array.pop();
// console.log(newarray)
// console.log(array)


// 5.takes an array and a value as input and adds the value to the end of the array using the push() method. Return the modified array.
// let array=[]
// let number=parseInt(prompt("enter the number how many you want to insert in array"))
// for (let i=0; i<number;i++){
//     let input=parseInt(prompt("enter the number"))
//     array.push(input);
// }
// console.log(array)

// 6.takes an array, an index, and a value as input, and inserts the value at the specified index using the splice() method. Return the modified array.
// let array=[]
// let number=parseInt(prompt("enter the number how many you want to insert in array"))
// for (let i=0; i<number;i++){
//     let input=parseInt(prompt("enter the number"))
//     array.push(input);
// }
// console.log(array)
// let newarray=array.splice(1,2);
// console.log(newarray);
// console.log(array)

// 7.takes an array and two indices as input, and returns a new array that contains the elements between the two indices (inclusive) using the slice() method.
// let array=[]
// let number=parseInt(prompt("enter the number how many you want to insert in array"))
// for (let i=0; i<number;i++){
//     let input=parseInt(prompt("enter the number"))
//     array.push(input);
// }
// console.log(array)
// let newarray=array.slice(1,3);
// console.log(newarray);
// console.log(array)


// 8.takes an array and a value as input, and returns a boolean indicating whether the value is present in the array using the includes() method.
// let array=[]
// let number=parseInt(prompt("enter the number how many you want to insert in array"))
// for (let i=0; i<number;i++){
//     let input=parseInt(prompt("enter the number"))
//     array.push(input);
// }
// console.log(array)
// let newarray=array.includes(4);
// console.log(newarray);
// console.log(array)

// 9.that takes an array and a value as input, and counts the number of occurrences of the value in the array using a combination of indexOf() and a loop.
// let array=[]
// let number=parseInt(prompt("enter the number how many you want to insert in array"))
// for (let i=0; i<number;i++){
//     let input=parseInt(prompt("enter the number"))
//     array.push(input);
// }
// console.log(array)
// let newarray=array.indexOf(5)
// console.log(newarray)

// 10.takes a string as input and returns an array of words from the string using the split() method. Assume that sentences in the string are separated by periods.
// let str=prompt("enter the string");
// console.log(str.split(""))

// 11.that takes an array of strings as input and returns a new array where each element is a string in reverse order using a combination of split() and reverse() methods.
// let n=parseInt(prompt("enter the number"));
// let array=[]
// for(let i=0;i<n;i++){
//     let strinp=prompt("enter string")
//     array.push(strinp)
// }
// console.log(array)
// let k;
// let newarray=[]
// for(let i=0;i<array.length;i++){
//     k=array[i].split("").reverse().join("")
//     newarray.push(k)
// }
// console.log(newarray)





// Destructuring Assignment, Spread and Rest Operator

// 1.What will be the output of the following code snippet? 
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1,4, 5, 6]; 
// console.log(arr2);

// 2.What will be the output of the following code snippet?
// const user = { name: 'John', age: 30 }; 
// const { name, age } = user;    //destructuring assignment
// console.log(name);

// 3.What will be the output of the following code snippet? 
// const obj1 = { a: 1, b: 2 }; 
// const obj2 = { ...obj1, c: 3 }; 
// console.log(obj2);

// 4.What will be the output of the following code? 
// const arr1 = [1, 2, 3]; 
// const arr2 = [4, 5, 6];
// const [a, b, c] = arr1; 
// const [d, ...e] = arr2; 
// const f = [...arr1, ...arr2]; //spread operator
// console.log(a,b,c,d,e,f); 

// 5.What will be the output of the following code? 
// const obj = { 
// name: "John",
// age: 30,
// address: {street: "123 Main St", city: "Anytown",state: "CA"}
//  }; 
// const { name, address: { city } } = obj; 
// console.log(name); 
// console.log(city);


// Exception Handling in JS

// 1. Write a program that takes a number as input and returns its square root. If the input is negative, throw an error with the message "Input must be a positive number". Use try-catch block to handle the error.
// try {
//        let number=parseInt(prompt("enter the number"))
// //     if(number<0){
//         throw new Error( "Input must be a positive number");
//     }
//     else{
//         console.log(Math.sqrt(number));
//     }
// } catch (error) {
//     console.log(error.name,error.message);
// }


// 2.Write a program that takes in two arguments and returns their division. Handle the error when the second argument is zero.


// let num1=parseInt(prompt("Enter the first number"))
// let num2=parseInt(prompt("Enter the second number"))
// try {
//     if(num2==0){
//         throw new Error("num2 must be greator than zero")
//     }else{
//         console.log(num1/num2)
//     }
// } catch (error) {
//     console.log(error.message, error.name);
// }



//3. Write a program that takes in an array and an index and returns the value at that index. Handle the error if the index is out of bounds (i.e. greater than the length of the array).
// let array=[1,2,3,4,5,,7,8]
// let index=10;
// try {
//     if(index<0 || index>=array.length){
//         throw new Error("index out of range");
//     }
//     console.log(array[index])
// } catch (error) {
//     console.log(error.message);
// }


// alert + prompt + confirm

// 1.Create a web page that asks the user to enter their name using a prompt box. Display a message using an alert box saying "Hello, [user's name]!".

// let name=prompt("enter the name")
// alert(`Hello ${name}`);


// 2.Write a program that asks the user to confirm if they are over 18 years old using the confirm box. If the user confirms, display a message using an alert box saying "You are eligible for voting". If the user cancels, display a message saying "Sorry, you are not eligible for voting".
// let age=parseInt(prompt("enter the age"));
// if(age>18){
//     confirm("you are eligible for voting")
// }
// else{
//     alert("yor are not eligible for voting")
// }


// 3.Write a program that asks the user to enter a number using a prompt box. If the user enters a number, display the square of that number using the alert box. If the user enters an invalid input or cancels the prompt, display a message saying "Invalid input".
