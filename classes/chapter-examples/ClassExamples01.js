//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

// console.log(fox);
// console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

// console.log(fox);
// console.log(fox.age, fox.color);

//Try modifying or adding properties below.

fox.favoriteFood = 'tacos';
fox.shoeSize = 12;

let mouse = new Astronaut('Mickey', 90, 0.2);

mouse.pantsColor = 'red with gold buttons';

console.log(fox, mouse);
