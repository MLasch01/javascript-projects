// Define your Book class here:
class Book{
    constructor(title, author, copyrightDate, ISBN, numberOfPages, numberOfCheckOuts, discarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN - ISBN;
        this.numberOfPages = numberOfPages;
        this.numberOfCheckOuts = numberOfCheckOuts;
        this.discarded = discarded;
    }
    numberOfCheckOuts(uses = 1) {
        this.numberOfCheckOuts += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, ISBN, numberOfPages, numberOfCheckOuts, discarded) {
        super(title, author, copyrightDate, ISBN, numberOfPages, numberOfCheckOuts, discarded);
     }
     dispose(currentYear) {
            if (currentYear - this.copyrightDate > 5) {
                this.discarded = 'Yes';
            }
            else (currentYear - this.copyrightDate < 5); {
                this.dicarded = 'No';
            }
        return `${this.title} needs to be discarded?' ${this.discarded}`
        }
    }
    
class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, numberOfPages, numberOfCheckOuts, discarded) {
        super(title, author, copyrightDate, ISBN, numberOfPages, numberOfCheckOuts, discarded);
    }
   checkOuts = this.numberOfCheckOuts += 5;
    
    dispose(checkOuts){ 
            if (this.numberOfCheckOuts > 100) {
                this.discarded = 'Yes';
            }
            else (this.numberOfCheckOuts <= 100); {
                this.discarded = 'No';
            }
    return `${this.title} needs to be discarded?' ${this.discarded}`
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPred = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');
console.log(prideAndPred);

let shuttleBuildManul = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');
console.log(shuttleBuildManul);

// Code exercises 4 & 5 here:
console.log(prideAndPred.dispose(32));
console.log(prideAndPred.checkOuts);

console.log(shuttleBuildManul.dispose(2024));