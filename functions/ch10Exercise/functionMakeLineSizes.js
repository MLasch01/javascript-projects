function makeLine(size) {
 let line = '';
 for ( let i = 0; i < size; i++) {
    if (line < 2) {
        line += '#';
    }
        else {
            (line += "$");
    }
 }
return line;
}
console.log(makeLine(5));
console.log("\n");

// Prototype with console.log
// function makeSquare(size) {
//     for ( let i = 0; i < size; i++) {
//         console.log(makeLine(size));
//     }
// }
// makeSquare(5);

// Add newline to all except the last row, then add the last row without newline.
// function makeSquare(size) {
//     let line = '';
//     for ( let i = 0; i < size-1; i++) {
//         line += makeLine(size);
//         line += '\n';
//     }
//     line += makeLine(size);
//     return line;
// }

// Add each row, add newline to all except the last.

function addLine(line, width, height, i){
    line += makeLine(width);
    if (i < height -1){
        line += '\n';
    }
    return line;
}

function addLineSquare(line, size, i){
    return addLine(line, size, size, i);
}

function makeSquare(size) {
    let line = '';
    for ( let i = 0; i < size; i++) {
        line = addLineSquare(line, size, i);
    }
    return line;
}

console.log(makeSquare(5));
console.log("\n");

function makeRectangle(width, height){
    let line = '';
    for (let i = 0; i < height; i++) {
        line = addLine(line, width, height, i);
    }
    return line;
}
console.log(makeRectangle(5,3));
console.log("\n");

function makeDownwardStairs (size){
    let line = '';
    for ( let i = 0; i < size; i++) {
        line += makeLine(i + 1);
        if (i < size -1){
            line += "\n";
        }
    }
    return line
}
console.log(makeDownwardStairs(5));
console.log("\n");

function makeSpaceLine(numSpaces, numChars) {
    let line = '';
    for ( let i = 0; i < numSpaces; i++) {
        line += ' ';
    }
    for ( let i = 0; i < numChars; i++) {
       line += '#';
   }
   for ( let i = 0; i < numSpaces; i++) {
    line += ' ';
}
   return line;
   }
   console.log(makeSpaceLine(3,5));
   console.log("\n");

   function makeIsoscelesTriangle(height){
    let line = '';
    for ( let i = 0; i < height; i++) {
        line += makeSpaceLine(height - i - 1, 2 * i + 1);
        if (i < height -1){
            line += "\n";
        }
    }
    return line
}
console.log(makeIsoscelesTriangle(5));
console.log("\n");

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

// function makeDiamond(height){
//     let line = '';
//     for ( let i = 0; i < height; i++) {
//         line += makeSpaceLine(height - i - 1, 2 * i + 1);
//         if (i < height -1){
//             line += "\n";
//         }
//     }
//     line += "\n"
//     let str = makeIsoscelesTriangle(height);
//     let reverse = '';
//     for (let i = 0; i < str.length; i++){
//     reverse = str[i] + reverse;
//     }
//     line += reverse;
//     return line
// }

// console.log(makeDiamond(5));
// console.log("\n");

function makeDiamond(height){
    let tophalf = makeIsoscelesTriangle(height);
    let bottomhalf = reverse(tophalf);
    diamond = tophalf + '\n' + bottomhalf;
    return diamond;
}
console.log(makeDiamond(5));
console.log("\n");
