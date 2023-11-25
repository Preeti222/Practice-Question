// 1.Declare a variable called myLet using the let keyword and assign it the value 10.Print the value of myLet to the console using console.log(). Change the value of myLet to 20.Print the new value of myLet to the console using console.log().
// let myLet=10;
// console.log(myLet);
// myLet=20;
// console.log(myLet);


// 2.Declare a variable called myConst using the const keyword and assign it the value 3.14.Print the value of myConst to the console using console.log().Attempt to change the value of myConst to 2.71. Observe the error message in the console and write a comment explaining why the error occurred.
// const myConst=3.14;
// console.log(myConst);
// myConst=2.71;
// console.log(myConst);
// ans=3.14
// uncaught TypeError: Assignment to constant variable.

 
// 3.Write a program that calculates the area of a circle with a radius of 5. Use the Math.PI constant and the exponentiation operator (**) to perform the calculation.
// const radius=7;
// const area=Math.PI*(radius**2);
// console.log(area);


// 4.Write a program that converts a temperature in degrees Celsius to Fahrenheit. Use the formula F = (C * 9/5) + 32 to perform the calculation, where C is the temperature in Celsius.
// let Celsius=parseInt(prompt("enter the temperature in celcius"));
// let Fahrenheit=(Celsius*9/5)+32;
// console.log(Fahrenheit)


// 5.Demonstrate the use of pre-increment/decrement and post-increment/decrement operators. (++a, a++, - -a, a- -)
// let a=parseInt(prompt("Enter the value of a"));
// let b=++a;
// let c=a++;
// console.log(b);
// console.log(c);Write a program that takes two numbers as input and displays the larger of the two numbers using the ternary operator (? :).



// 6.Demonstrate the use of all comparison operators (==,!=,===,!==,>,>=,<,<=) and logical operators ( &&, | | , ! ). 
// let a=5;
// let b="5";
// console.log(a==b)  //true
// console.log(a===b)  //false because their datatypes are different


// 7.Write a program that takes two numbers as input and displays the larger of the two numbers using the ternary operator (? :).
// let num1=parseInt(prompt("enter the first number"));
// let num2=parseInt(prompt("enter the second number"))
// num1>num2? console.log(num1) : console.log(num2)


// 8.Write a program in JS to demonstrate the use of all the data types in JS. (Number, String, Boolean, BigInt, undefined, null, Symbol, Object).
// let a;
// console.log(a) // undefined

// let b="k"*"k";
// console.log(b)  //NaN
// Number
// let num = 42;

// // String
// let str = "Hello, World!";

// // Boolean
// let isTrue = true;

// // BigInt
// let bigInt = 1234567890123456789012345678901234567890n;

// // undefined
// let undef;

// // null
// let nul = null;

// // Symbol
// let symbol1 = Symbol("symbol1"); //unique ans special datatypes in js
// let symbol2 = Symbol("symbol2");

// // Object
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30
// };

// // Printing the values and types
// console.log("Number:", num, typeof num);
// console.log("String:", str, typeof str);
// console.log("Boolean:", isTrue, typeof isTrue);
// console.log("BigInt:", bigInt, typeof bigInt);
// console.log("Undefined:", undef, typeof undef);
// console.log("Null:", nul, typeof nul);
// console.log("Symbol:", symbol2, typeof symbol2);
// console.log("Object:", person, typeof person);


// 9.Demonstrate the use of Implicit and Explicit type Conversion in JS.

// let a=9;
// let b="9";
// console.log(a+b) //Implicit type conversion


// let a=9;
// let b="9";
// console.log(a+Number(b)) //explicit type conversion


// 10.Create two variables, num1 and num2, and assign them the values 10 and "5" respectively.Then do the following :-
// a.Convert num1 to a string and store the result in a new variable called num1AsString.
// b.Convert num2 to a number and store the result in a new variable called num2AsNumber.
// c.Create a variable called sum and assign it the sum of num1AsString and num2AsNumber.
// d.Create a variable called product and assign it the product of num1 and num2.
// e.Display the values of num1AsString, num2AsNumber, sum, and product in the console using console.log().

// let num1=10;
// let num2="5";

// // a answer
// let num1AsString=num1.toString();

// // b answer
// let num2AsNumber=Number(num2);

// // c answer
// let sum=num1AsString+num2AsNumber;

// // d answer
// let product=num1*num2;

// // e answer
// console.log(num1AsString,typeof(num1AsString));
// console.log(num2AsNumber,typeof(num2AsNumber));
// console.log(sum,typeof(sum));
// console.log(product,typeof(product));
