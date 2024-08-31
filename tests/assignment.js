/**
 * Assignment operator
 * =,+=,-=,*=,/=
 * 
 */

// use case 1: Basic
// let a = 1

// // Use case 2: chaining
//  let x =y =1
// //  console.log(x);
// //  console.log(y);

//  //Use case 3: +=
//  let start =5
//  for(let i=1;i<=5; i++){
//     start += i
//     console.log(start);
//  }

/**Comparison operator 
 * 1. == checks only the value
 * 2. === strict equality operator: value + type
 * 3. !=
 * 4. !==
 * 5. >
 */

// use (==,===)
 let a = "1"
 let b = 1

 console.log(a==b); //true
 console.log(a===b);//false


 /**
  * Logical Opeartor
  * 1. &&
  * 2. ||
  * 3. !
  * 
  * Two main purposes:
  * 1. In conditional statements (e.g if else)
  * 2. To have a default value
  */

 // Use case 1: AND (&&) check if given val is a text

 let val = "Monday"
 if (typeof val === "string" && val.length>1)
 {
    console.log(`Given value: ${val} is valid string`);
 }
 else{
    console.log(`Given value: ${val} is NOT valid string`);
 }

 /**
  * Logical operator OR ||
  * 
  */

 // check if given day is weekend or not

 let day = "Monday"
 if (day=== "saturday" || day ==="sunday"){
    console.log(`Given day : ${day} is weekend`);
 }
 else{
    console.log(`Given day : ${day} is NOT a weekend`);
 }