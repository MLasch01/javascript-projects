//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore = function (n) {
        let newScores = this.scores.push(n);
        return this.scores;
    }

    average = function () {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        let scoreAverage = sum / this.scores.length;
        return Math.round(scoreAverage*10)/10;
    }

    status = function () {
        let average = this.average();
        let result = "";
        if (average >= 90) {
            result = "Accepted";
        } 
        else if (average >= 80 && average < 90) {
            result = "Reserve";
        } 
        else if (average >= 70 && average < 80) {
             result = "Probationary";
        } 
        else if (average < 70) {
            result = "Rejected";
        }
        return result;
    }

    reportStatus = function() {
        let stat = `${this.name} earned an average test score of ${this.average()}% and has a status of ${this.status()}.`;
        return stat;
    }
}

let bear = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
let falcon = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let gator = new CrewCandidate('Glad Gator', 225, [75,78,62]);

// console.log(bear);
// console.log(falcon);
// console.log(gator);

//console.log (bear.addScore(83));

// console.log(bear.average());
// console.log(falcon.average());
// console.log(gator.average());

// console.log(bear.status());
// console.log(falcon.status());
// console.log(gator.status());

console.log(bear.reportStatus());
console.log(falcon.reportStatus());
console.log(gator.reportStatus());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
    

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.