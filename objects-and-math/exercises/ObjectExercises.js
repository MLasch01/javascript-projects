const input = require('readline-sync');
let crewMember = "";

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return (Math.round(Math.random()*10))}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return (Math.round(Math.random()*10))}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {return (Math.round(Math.random()*10))}
};

let jenkins = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return (Math.round(Math.random()*10))}
};

let highlander = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {return (Math.round(Math.random()*10))}
};

let crew = [superChimpOne, salamander, superChimpTwo, jenkins, highlander];

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

function crewReport(){
   crewMember = input.question("Enter crew member name: ");
   for (let i = 0; i < crew.length; i++){
      if (crew[i].name == crewMember){
      return (`${crew[i].name} is a ${crew[i].species}.  They are ${crew[i].age} years old and ${crew[i].mass} kilograms. Their ID is ${crew[i].astronautID}.`);
      }
   }
   return('Crew Name not found.');
};
console.log(crewReport());

// function crewReport2(crewMember){
//    return (`${crewMember.name} is a ${crewMember.species}.  They are ${crewMember.age} years old and ${crewMember.mass} kilograms. Their ID is ${crewMember.astronautID}.`);
     
// }
// console.log(crewReport2(superChimpOne));

// Start an animal race!
function fitnessTest(arr){
   let results = [];
   let result = ""
   let crewMember;
   let crewMemberTurns;
   let crewMemberSteps;
   
   for (let i = 0; i < arr.length; i++){
      crewMember = arr[i];
      crewMemberTurns = 0;
      crewMemberSteps = 0;
      while(crewMemberSteps < 20){
         crewMemberSteps += crewMember.move();
         crewMemberTurns ++;
      }
      result = (`${crewMember.name} took ${crewMemberTurns} turns to take 20 steps.`);
      results.push(result);
   }
   return results;
};

let results = fitnessTest(crew);
for (let i = 0; i < crew.length; i++){
   console.log(results[i]);
}