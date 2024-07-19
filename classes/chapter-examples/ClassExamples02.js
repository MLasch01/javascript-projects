// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name = 'Tom', age = 2, mass = 54){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let tortoise = new Astronaut('Speedy', 120);

let cat = new Astronaut(this.name, 4, 10);

// console.log(tortoise.name, tortoise.age, tortoise.mass);
console.log(tortoise, cat);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!