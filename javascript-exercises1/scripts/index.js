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

function hello(name) {
    for (let name of hello) {
    if (name == hello());
    console.log(`Hello ${name}`)
    }
}
hello(name);

/*************************** */

//Madlib
//Write a madlib function, which is given a name and a subject. It will return(not print) 
// a new string: (name)'s favorite subject in school is (subject).

//Example:

//> madlib('Anushka', 'art');
//'Anushka's favorite subject in school is art.'


function madlib(name1, subject2) {
    console.log(`${name1}'s favorite subject in school is ${subject2}`);
}
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

/**************************** */

//Tip Calculator 3
//Write a function splitAmount that takes the bill amount and the level of service, and 
//t he number of people to split the bill between. It will return the final amount for each 
// person.

//> splitAmount(100, 'good', 5)
//24
//> splitAmount(40, 'fair', 2)
//23