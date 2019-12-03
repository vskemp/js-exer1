//Hello, you!
// Write a function hello which given a name, says hello to the name. Use the following 
// template:

//function hello(name) {
// put your code here
//}
//hello('Mustache');

//Make the above program print:
//Hello, Mustache!
//************************** */

function hello(name) {
    console.log(`Hello ${name}`)
}
hello(`Mustache`);

/*************************** */

//Hello, you! Part 2
//Modify your hello program such that if no name is given: hello(), it will print 
// "Hello, world!", otherwise it behaves the same as previously.

function hello(name="world") {
    console.log(`Hello, ${name}!`);
}
console.log(hello("Mustache"));
console.log(hello());

/*************************** */

//Madlib
//Write a madlib function, which is given a name and a subject. It will return(not print) 
// a new string: (name)'s favorite subject in school is (subject).

//Example:

//> madlib('Anushka', 'art');
//'Anushka's favorite subject in school is art.'

function madlib(name, subject) {
    return `${name}'s favorite subject in school is ${subject}.`;
}

console.log(madlib("Anushka", "art"));


/****************************** */

//Tip Calculator
// Write a function tipAmount that is given the bill amount and the level of service (one of 
// good, fair and poor) and returns the dollar amount for the tip. Based on:

//good -> 20%
//fair -> 15%
//bad -> 10%
//> tipAmount(100, 'good')
//20
//> tipAmount(40, 'fair')
//6

function tipAmount(billAmount, levelOfService) {
    if (levelOfService === "good") {
        return billAmount * 0.20;
    } else if (levelOfService === "fair") {
        return billAmount * 0.15;
    } else {
        return billAmount * 0.10;
    }
}

console.log(tipAmount(100, 'good'));
console.log(tipAmount(100, 'fair'));

function totalAmount(billAmount, levelOfService) {
    if (levelOfService === "good") {
        return billAmount * 0.20 + billAmount;
    } else if (levelOfService === "fair") {
        return billAmount * 0.15 + billAmount;
    } else {
        return billAmount * 0.10 + billAmount;
    }
}

console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));

/**************************** */

//Tip Calculator 3
//Write a function splitAmount that takes the bill amount and the level of service, and 
//t he number of people to split the bill between. It will return the final amount for each 
// person.

//> splitAmount(100, 'good', 5)
//24
//> splitAmount(40, 'fair', 2)
//23

function splitAmount(billAmount, levelOfService, numberOfPeople) {
    if (levelOfService === "good") {
        return (billAmount * 0.20 + billAmount)/numberOfPeople;
    } else if (levelOfService === "fair") {
        return (billAmount * 0.15 + billAmount)/numberOfPeople;
    } else {
        return (billAmount * 0.10 + billAmount)/numberOfPeople;
    }
}

console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(40, 'fair', 2));