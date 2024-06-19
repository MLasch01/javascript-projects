let num = "10.01";

//Returns 'undefined'.

//Use type conversion to print the length (number of digits) of an integer.

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

console.log(String(num));
console.log(typeof String(num));
console.log(num, "has", num.length, "characters");
if (String(num).includes('.')){
    console.log(String(num).length-1);
    } else {
    console.log(String(num).length);
    }