// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
function divide (numer, denom) {
    let num = (numer / denom)
        return num;
    // console.log(divide(8,4));
    
    if (denom === 0) {
        throw Error ("Attempted to divide by zero.")
    }
    return num;
    }