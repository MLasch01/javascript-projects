// Declare and assign the variables below

let spaceShuttleName = "Determination";
let ShuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof spaceShuttleName);
console.log(typeof ShuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKilometer);

// Calculate a space mission below

let milesToMars = distanceToMarsKm * milesPerKilometer;
let hoursToMars = milesToMars / ShuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

console.log(milesToMars);
console.log(hoursToMars);
console.log(daysToMars);
console.log(`${spaceShuttleName} will take ${daysToMars} days to reach Mars`);

// Calculate a trip to the moon below

let milesToMoon = distanceToMoonKm * milesPerKilometer;
let hoursToMoon = milesToMoon / ShuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below

console.log(milesToMoon);
console.log(hoursToMoon);
console.log(daysToMoon);
console.log(`${spaceShuttleName} will take ${daysToMoon} days to reach the Moon`);









// let shuttleName = 'Determination';
// let shuttleSpeedMph = 17500;
// let distanceToMarsKm = 225000000;
// let distanceToMoonKm = 38400;
// const milesPerKm = 0.621;
// console.log(typeof 'Determination');
// console.log(typeof 17500);
// console.log(typeof 225000000);
// console.log(typeof 38400);
// console.log(typeof 0.621);
// let distanceToMarsMiles = distanceToMarsKm * milesPerKm;
// let hoursToMars = distanceToMarsMiles / shuttleSpeedMph;
// let daysToMars = hoursToMars / 24;
// console.log(distanceToMarsMiles);
// console.log(hoursToMars);
// console.log(daysToMars);
// console.log("Determination will take 332.67857142857144 days to reach Mars.");
// let distanceToMoonMiles = distanceToMoonKm * milesPerKm;
// let hoursToMoon = distanceToMoonMiles / shuttleSpeedMph;
// let daysToMoon = hoursToMoon / 24;
// console.log(distanceToMoonMiles);
// console.log(hoursToMoon);
// console.log(daysToMoon);
// console.log(shuttleName + "will take" + daysToMoon + "days to reach the Moon.");