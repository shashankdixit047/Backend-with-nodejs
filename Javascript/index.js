// // // console.log('Hello world');




                 //👩‍💻 VAriable and values 

// // // var myName = 'Shashank dixit' // semicolon is optional

// // // console.log('myName'); // will print the myname as string
// // // console.log(myName); // variable name will print the value inside the variable

// // var my_age = 18 //number dont have quoatation 
// // console.log(my_age);
 




                 // 👩‍💻 Data types 

// var my_age = 18
// console.log(my_age);

// console.log(typeof(my_age)); // typeof operator tells the data type of a variable
//  var iamdixit = true;
//  console.log(typeof(iamdixit));
//  console.log(iamdixit);

// ######### Interview questions 1
// differnce between null vs undefined ?

// var iamuseless = null; // java script is case sensitive Null and null are differnent 
// console.log(iamuseless);

// var iamstandby;
// console.log(iamstandby);

// console.log(typeof(iamuseless)); //data type is object(Objects are key to understanding object-oriented technology. )
// console.log(typeof(iamstandby));

// ######### Interview questions 2
// what is NAN????
// NaN is a property of the global object, In other words, it is a variable in global scope.
// console.log("shashank"-"dixit"); // output is NAN(Not a Number)

// var myName = 'shashank dixit'
// var myphonenumber = 930587

// console.log(myName);
// console.log(myphonenumber);


// console.log(isNaN(myName)); // output is true as shashank is not a number 
// console.log(isNaN(myphonenumber)); // outp ut is false as phone number was a number 

// method- isNAN --> It is used phone number is needed to be entered in particular section so user should not eneter any value other than number 

// if(isNaN(myName)){
//     console.log("plz enetr valid phone number ");
// }
// if(isNaN(myphonenumber)){
//     console.log("plz enetr valid phone number ");
// }

//             👩‍💻👩‍💻 Practise Time 👩‍💻👩‍💻
// NaN == NaN; - False --> Konsa Not a number it could be anything 
// Number.NaN == NaN; -  False 
     //---> Number.NaN means value that is not a number i.e. ki woh 1,2 jaise nhi hain it could be either a symbol or character 
// isNaN(NaN); - True
// isNaN(Number.NaN); - true 
// Number.isNaN(NaN); - true

// console.log(Number.isNaN(NaN));




                 // 👩‍💻Exprerssion and Operators and operands

// types:- Assignment, Arithmetic, comparison, logical, string ,conditional operators 

// 👉Assignment operators (=) --> Assigns value to the left operand 

// var x = 5;
// var y = 5;


// 👉 Arithmetic operator (+,-,*,/,%,) 
// console.log(3+3 , 3-3, 30/2, 3*3, 10%3);
// --> Increment or decrement operator (x++ or ++x and --x or x --)
//  X++, x-- are postfix, understand it with an anlogy of postpaid
//  var num = 15;
//  var newnum = num++;

//  console.log(newnum)
//  console.log(num)

//  ++x, --x are prefix, understand it with an anlogy of prepaid

// var num = 15;
//  var newnum = ++num;

//  console.log(newnum)
//  console.log(num)


// 👉 Comparison operator(== , !=(not equal) , >, <, >=, <=) --> output is always boolean 

// var a = 4;
// var b = 6;

// // console.log(a==b);
// // console.log(a!=b);

// // 👉 Logical operator (&&, ||, !)

// var a = 30;
// var b = 20;

// console.log(a>b && b>a); //--> logical and(logical conjunction) operators gives true output only when all the expersion are true.

// console.log(a>b || b>a || b<0); //-->  logical or (logical disjunction) if any of the expersion is true then the complete output will be true.


// console.log(!(a>b || b>a || b<0)); // --> logical not (logical complement or logical negotiation --> true ko false krdeta hain and false ko true)


// // 👉 String concatenation (" " + "")

// console.log("shashank" + "dixit");

// var myname = "shashank";
// console.log(myname + " Dixit");

// Conditional operator or ternanry operator --> it is the only javascript operator taht takes three operands 

// It is simply a shortern version of if else 

// variable name  = ((condition)? Value1(excute if true) : Value2 (execute if false));

// var age =17;
// console.log((age>= 18)? "You can vote" : "You cannot vote");




//                      👩‍💻👩‍💻Challenge time👩‍💻👩‍💻


// 1:- output of 3 ** 3 ?
// ** is an exponential operator 
//   console.log(3**3); // its going to be root for cube use ***


// 2:- what if we add a number and a string ?

// console.log(5 + "shashank");
// console.log(5 - "shashank");
// console.log("shashank" + "dixit");
// console.log("shashank" - "dixit");

// 3:- Differnce between == and ===?

// == checks only the value whereas === checks the value as well as data type
// num1 = 5; number 
// num2 = '5'; string
// console.log(num1==num2);
// console.log(num1===num2);



                 // 👩‍💻 Control statement operator 

// type:- if-else-elseif, Switch Statement, While loop, Do while loop, For loop , 
// for in and for of loop was introduced in Ecamascript 6


// 👉 If else


// var tomr = 'rainy';
// var tomr = 'sunny';

// if(tomr =='rainy'){
//      console.log('TAke umberella with yourself');
// }else {
//      console.log('Apply sunscream');
// }




//                      👩‍💻👩‍💻Challenge time👩‍💻👩‍💻

// Question -> What is truthy and falsy value in javascript?
// It just a trend in js developers that they call true values and false values as truthy and falsy
// ⭐ we have total five falsy values in javscript 
// 1- 0
// 2- " "
// 3- undefined
// 4- null
// 5-NaN
// false** is false anyway

// CAse1
// var score = 0;
// if(score=0){ // ALways else part executed as soon as we use above five falsy values
//      console.log("If part executed");
// }else{
//      console.log("else part executed");
// }


// 👉 Switch statement (Decrease complexity that we face with if else if else)
// A switch construct is used to compare the value stored in variable num and execute the block of statements associated with the matched case

// var area = "circle";
// var area = "Rectangle";
// var area = "Triangle";
// var area = "myhead";
// var pi= 3.14,l=5,b=4,r=3;

// switch(area){
//      case'circle':
//      console.log('the area of circle is ' + 2*pi*r**r);
//      break;
//      case'Triangle':
//      console.log('the area of triangle is ' + (l*b)/2);
//      break;
//      case'Rectangle':
//      console.log('the arae of rectangle is ' + l*b);
//      break;
//      default:
//           console.log('Enter the shape with options avavilable');
// }

// ⭐ break statement is used to terminate switch statement execution, once we have achieved our result.
// ⭐ The default keyword the default block of code in a switch statement. The default keyword specifies some code to run if there is no case match in the switch.





// 👉 While Loop - Checks the statement if true or not before entering in scope of loop, If true execute the loop untill false condition achived

// Case1:

// var num =10;
// while(num < 10){
//      console.log(num);
// }

// Case2:

// var num =0;
// while(num <= 10){
//      console.log(num);
//      num++;
// }
// Case3:

// var num =0;
// while(num <= 10){
//      console.log(num);
//      ++num;
// }


// 👉 do while loop 
// execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// var num =20;
// do{
//      console.log(num);
//      num++;
// }while(num<=10)

// 👉 For Loop --> the shortest version of while loop

// synatx:-
//        for(Initializer; condition; Iteration)
//        {
//           //code to be executed
//        }
// case1; no output
// for(var num=20; num<=10; num++){
//      console.log(num);
// }
// case2;
// for(var num=0; num<=10; num++){
//      console.log(num);
// }

                       // 👩‍💻 Functions(Reusable code)

// A javascript function is a block of code designed to perform a particular task, Increases reusibility of code.
                              // OR
// Define the code once, and reuse it as many times as you need with diffrent arguments, to produce differnent results
// Topics we'll covered:-
// Function definition, Calling a function, Function Parameter, FUnction Arguments, FUnction XPathExpression, Return Keyword, Anonymous function

// 👉Function Definition --> A function definition also called a function declaration, or function statement consnits up of the function keyword, followed by name of funtion and a list of parameters

// Synatx::
// function name(params) {
//        Statement      
// }

// Example1:--> addition of two numbers
// function sum(){
//      var a=10, b=20;
//      var total = a+b;
//      console.log(total);
// } // comma , Seprate and semicolon ; terminates
// No output now we have created the function but we also have to call this function

// 👉 ---> Calling of a function 
// Defining a function does not execute it. A java script function is executed whem we invoke it or call It

// sum();
// console.log(sum()); // output- undefined  reason on line 312 we already initiated the log or fir usko same dubara log ke andar rakh rahe hain jo ki pehle hi console pe print ho na hain

// 👉👉 What is the differnce between Function parameter and function argumnets

// --> function pararmeters are the names listed inside in the definition of function
// --> function argumnets are the real value passed to the function 

// function sum(a,b){ // a and b are pararmetrs 
//      var total = a+b;
//      console.log(total);
// }

// sum();  // No arguments --> output - NaN --> we are calling that koi to do number hain jinhe plus krana hain
// sum(20,30); //20, 30 are arguments

// 👉 Function experssion
// Function expression simply means create a function and put it into the variable 

// function sum(a,b){ 
//      var total = a+b;
//      console.log(total);
// }
// console.log(total); // wE CANNOT USE variable declare with var outside the function scope
// var funexp = sum(5,15);
// var total = 55;
// console.log(total);

// 👉 Return Keyword
// when javascript reaches a return statement, the function will stop executing, FUnction often compute a return value. the return value is returned back to the caller.

// function sum(a,b){
//      return total = a+b;
// }

// var funexp = sum(5,60);
// console.log('the sum of the number is ' + funexp);

 // 👉Anonymous Function
// Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

// An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.


// var funexp = function(a,b){ // FUnction has no name so we call it as anonymous function
//      return total = a+b;
// }
// console.log(funexp(15,15));
     // or
// var sum = funexp(15,15)
// console.log('The sum is ' +sum);

























