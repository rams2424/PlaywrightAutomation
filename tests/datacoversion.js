//"use strict";
let val = "5";
let val1 = "5.5"
console.log(`The type of val1: ${typeof val}`);
console.log(`The type of val1:${typeof val1}`);

let package ="any package"
console.log(package);
//convert a string to number
numval = parseInt(val)
numval1 = parseInt(val1)

console.log(`The type of numVal: ${typeof numval}, and the value: ${numval}`);
console.log(`The type of numVal: ${typeof numval1}, and the value: ${numval1}`);

/**
 * Ternary operator (?)
 * @syntax:
 * <expression> ? "val1" : "val2"
 * 
 */
// Use case: set log level for different run env

//Basic use
let runner ="local"
let loglevel = runner === "local" ? "Info" : "Error"
console.log(loglevel);

//Advanced use
runner ==="local" ? "Info" : runner=== "cloud"?"silent" :"error"

/**
 * 
 * Prevents semantics error in Javascript
Prevents any undeclared global variables
Use of implements, interface, let, package, private, protected, public, static, and yield as identifiers
 */

a=1
console.log(a);

//Advanced use case with An array
let arr =["Apple", 10, "Orange", 20, "Grapes",30]

let sum = 0
for(let i=0; i< arr.length; i++)
{

let arrEle = arr[i]
if(typeof arrEle === "number"){
 //sum = sum +arrEle
 sum += arrEle
}

}
console.log(sum);

/**
 * Compare string
 * 1. Full Match
 * - Includes()
 * - startswith()
 * - endswith()
 * 
 */

let filename = "invoice_123.pdf"

//full match

if(filename ===`invoice_123.pdf`)
{
    console.log(`>> The filename matches...`);
}

if(filename.startsWith("invoice")){

    console.log(`Yes it starts with invoice`);
}

/** 
 * Replace and replace all
 * @rules:
 * replace method can accept a string
 */

/**
 * Extract string by split method
 * @rule
 * 1. The separator(string | regexp) is omitted from the returned array
 * 2. If the very first/last char is provided as a separator, it adds an empty string as in the first/last positions
 * 
 */

/**
 * Use of index of method
 * 
 */

let str = "Application # {12345} submitted"

