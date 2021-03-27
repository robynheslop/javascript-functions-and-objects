// Rami's Budget
var weeklyIncome = 5000;
var weeklyExpenses = 2500;
var cashLeftoverEachWeek =  weeklyIncome-weeklyExpenses; 
console.log("You will have $"+cashLeftoverEachWeek+" left over per week");

// Robyn's Budget
var weeklyIncome = 15000;
var weeklyExpenses = 2900;
var cashLeftoverEachWeek =  weeklyIncome-weeklyExpenses; 
console.log("You will have $"+cashLeftoverEachWeek+" left over per week");

// Dale's Budget
var weeklyIncome = 4300;
var weeklyExpenses = 900;
var cashLeftoverEachWeek =  weeklyIncome-weeklyExpenses; 
console.log("You will have $"+cashLeftoverEachWeek+" left over per week");


// How could we easily share our budgeting calculator with another friend?
// Can we describe the technique that we use to work out how much money we have left each?

// 1 - Work out how much money you earn each week
// 2 - Work out how much money you spend each week
// 3 - Subtract the amount that you spend each week from the amount that you earn each week

// This is an abstraction of the procedure that we were repeating for Rami, Robyn and Dale.

// ---------------------------------------------------------------------- //

function calculateCashLeftOverEachWeek(){
    var cashLeftoverEachWeek =  weeklyIncome-weeklyExpenses; 
    console.log("You will have $"+cashLeftoverEachWeek+" left over per week");
}

// Rami's Budget
var weeklyIncome = 5000;
var weeklyExpenses = 2500;
calculateCashLeftOverEachWeek(); // logs "You will have $ 2500 left over per week"

// Robyn's Budget
var weeklyIncome = 15000;
var weeklyExpenses = 2900;
calculateCashLeftOverEachWeek(); // logs "You will have $ 12100 left over per week"

// Dale's Budget
var weeklyIncome = 4300;
var weeklyExpenses = 900;
calculateCashLeftOverEachWeek(); // logs "You will have $3400 left over per week"

// ---------------------------------------------------------------------- //
// Rami got a last minute bonus! Woooo. 
// How does our application handle it? 

function calculateCashLeftOverEachWeek(){
        // weeklyIncome & weeklyExpenses are 'free' variables. They are not declared within the body of the calculateCashLeftOverEachWeek function.
    var cashLeftoverEachWeek =  weeklyIncome-weeklyExpenses;
    console.log("You will have $"+cashLeftoverEachWeek+" left over per week");
}

// Rami's Budget
var weeklyIncome = 5000;
var weeklyExpenses = 2500;
calculateCashLeftOverEachWeek(); // logs "You will have $3400 left over per week"

// Robyn's Budget
var weeklyIncome = 15000;
var weeklyExpenses = 2900;
// Rami gets a bonus - his weekly income has gone up by $1000!
weeklyIncome += 1000;
calculateCashLeftOverEachWeek(); // logs "You will have $13100 left over per week"

// Dale's Budget
var weeklyIncome = 4300;
var weeklyExpenses = 900;
calculateCashLeftOverEachWeek(); // logs "You will have $3400 left over per week"

// ---------------------------------------------------------------------- //
// Binding our free variables to parameters

function calculateCashLeftOverEachWeek(weeklyIncome, weeklyExpenses){
    // weeklyIncome & weeklyExpenses are 'bound' to the body of the calculateCashLeftOverEachWeek function
    var cashLeftoverEachWeek =  weeklyIncome-weeklyExpenses; 
    console.log("You will have $"+cashLeftoverEachWeek+" left over per week");
}

// Rami's Budget
var weeklyIncome = 5000;
var weeklyExpenses = 2500;
calculateCashLeftOverEachWeek(); // logs "You will have $3400 left over per week"

// Robyn's Budget
var weeklyIncome = 15000;
var weeklyExpenses = 2900;
// Rami gets a bonus - his weekly income has gone up by $1000!
weeklyIncome += 1000;
calculateCashLeftOverEachWeek(); // logs "You will have $13100 left over per week"

// Dale's Budget
var weeklyIncome = 4300;
var weeklyExpenses = 900;
calculateCashLeftOverEachWeek(); // logs "You will have $3400 left over per week"


// Recipe for brownies
// Input to the cookbook is how many 'batches' you want to prepare (2)
// and the recipe I am interested in.
/*
    Combine 4 cups of flour with 3 tablespoons of sugar.
    Add 100 grams of coco and whisk.
    Bake for 1 hour at 200C.
*/

//Output is the actual recipe to follow
/*
    Combine 8 cups of flour with 6 tablespoons of sugar.
    Add 200 grams of coco and whisk.
    Bake for 1 hour at 200C.
*/

// 8 cups flour : 6 cups of sugar: 4 cups of coco 

function cookbook (batches) {
    var ingredients = {
        flour: 4,
        sugar: 3,
        cocoa: 2
    };
    var recipe = 
`Combine ${batches * ingredients.flour} cups of flour with ${batches * ingredients.sugar} tablespoons of sugar.
Add ${batches * ingredients.cocoa} grams of coco and whisk.
Bake for 1 hour at 200C.`
    return recipe;
}

console.log(cookbook(2));
console.log(cookbook(4));