//Part Two Section One

// First, print out the dna strand in it's current state.

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT "
console.log(dna);

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

dna.trim();
console.log(dna);

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.

console.log(dna.toUpperCase());

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

dna = dna.trim().toLocaleUpperCase();
console.log(dna);

//Part Two Section Two



//1) Replace the gene "GCT" with "AGG", and then print the altered strand.

console.log(dna.replace("GCT","AGG"));

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

dna.indexOf("CAT");
if (dna.indexOf("CAT") == "CAT") {
    console.log("CAT gene found.");
} else console.log("CAT gene not found.");

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

console.log(dna.slice(16,19));

//4) Use a template literal to print, "The DNA strand is ___ characters long."

console.log(`The DNA strand is ${dna.length} characters long`);

//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.

console.log(`${dna.slice(3,7)}O${dna.slice(40,43)}`);










// //Part Two Section One

// let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// // First, print out the dna strand in it's current state.

// //1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.
// let newString = dna.trim();
// console.log(newString);

// //2) Change all of the letters in the dna string to UPPERCASE, then print the result.

// dna = dna.trim().toUpperCase();
// console.log(dna);

// //3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
// //Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

// dna.replace('GCT', 'AGG');
// console.log(dna);
// let result = dna.indexOf("CAT");
// if (result != -1) {
//     console.log("CAT found")
// } else {
//     console.log("CAT NOT found");
// }
// console.log(dna.slice(16,19));
// console.log(`The DNA strand is ${dna.length} characters long.`);
// console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);

// //Part Two Section Two

// let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

// //1) Replace the gene "GCT" with "AGG", and then print the altered strand.

// //2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

// //3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

// //4) Use a template literal to print, "The DNA strand is ___ characters long."

// //5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
