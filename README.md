# Javascript Objects and Functions

## Data types

Javascript has several data types:

- Primitive - 7 data types that are primitives
  - Boolean: `true` and `false`
  - Number: An integer or floating point number e.g. 7 or 2.345
  - BigInt: An integer represented in the arbitrary precision format
  - String: A sequence of characters that represent a text value "Hullo partner"
  - Symbol: A data type whose instances are unique and immutable
  - `null`: A special keyword denoting a null value. `null` is not the same as `Null` or `NULL` or any other variant
  - `undefined`: a property whose value is undefined
- Object
  - Objects can be used to store keyed collections or more complex data types e.g. functions, arrays

## Statements

A javascript application consists or one or more statements that adhere to the javascript syntax.

Multiple statements can exist on a single line if each statement is seperated from the next statement by a semicolon e.g. `var foo; console.log(foo);`

Statements can be grouped into several distinct categories, depending on their purpose.

### Control Flow

#### `if...else`

```javascript
if (true) {
    console.log('I have done my homework.');
}
else{
    console.log('I would never not do my homework...*cough*');
}
```

#### `Block`

```javascript
{ //Block statements begin with an opening curly brace "{"...
    console.log("Don't be fooled by the rocks that I got");
    console.log("I'm still, I'm stil Jenny from the block");
    console.log("Used to have a little, now I have a lot");
    console.log("No matter where I go, I know where I came from (from the Bronx)");
} // and end with a closing curly brace "}".
```

### Declarations

```javascript
var foo; // variable declaration
```

### Iteration

```javascript
for(var i=0; i < 10; i++;){
    console.log(i);
}
```

```javascript
while(true){
    console.log("This is the song that never ends");
    console.log("It just goes on and on my friends");
    console.log("Some people started singing it, not knowing what it was");
    console.log("And they'll continue singing it forever just because...");
}
```

### Functions

#### `function` and `return`

```javascript
// Declares an anonymous function with two parameters x & y
function(x,y){
    
}

// Declares a named function 'myFunction' with two parameters x & y
function myFunction(x,y){
    return x+y // return specifies the value to be returned by this function
}

var theReturnedValue = myFunction(2,3);
console.log(theReturnedValue); // logs 5
```

## Expressions and Operators

### Operators

Javascript has many types of operators. Operators can be `unary`, `binary` or `ternary`.

A `unary` _operator_ requires 1 _operand_.

A `binary` _operator_ requires 2 _operands_.

A `ternary` _operator_ requires 3 _operands_.

#### Assignment

##### Simple Assignment `=`

```javascript
// This is *not* an expression - it is a variable declaration!
var foo;
// This is an assignment expression. 
// The value of the *operand* on the right hand side of the
// assignment operator '=' is assigned to the *operand* on 
// the left hand side
//
// operand (foo) operator (=) operand (bar)
foo = 'bar'; 
```

##### Compound assignment

```javascript
// This is *not* an expression - it is a variable declaration!
var count; 
// This is an simple assignment expression.
count = 0;
// This is compound assignment expression.
// It adds one to the current value of count and 
// assigns the resulting value to the count variable
count += 1; // evaluates to 1
// This is another example of compound assignment expression.
count -= 3; // evaluates to -2
```

#### Arithmetic

```javascript
2 + 1; // evaluates to 3

// This is *not* an expression - it is a variable declaration!
var num1;
// Thi is a simple assignment expression
num1 = 5;
num1 * num1; // evaluates to 25

21 % 8; // evaluates to 5
```

#### Comparison

##### Equal `==`

```javascript
7 == '7'; // evaluates to true
```

##### Strict Equal `===`

```javascript
192 == '192'; // evaluates to true
192 === '192' // evaluates to false
```

##### Greater than `>`, Less than `<`

```javascript
1000 > 999 // evaluates to true
1000 < 999 // evaluates to false
999 >= 999 // evaluates to true
'99' < 99 // evaluates to false
```

#### String

```javascript
"My" + "string!"; // evaluates to "Mystring!"

var mystring = 'alpha';
mystring += 'bet'; // evaluates to alphabet
```

#### Logical

```javascript
true && true; //evaluates to true
false || true; // evaluates to true
```

#### Conditional

```javascript
var age = 9;
// condition ? value1 : value2
(age >= 18) ? 'adult' : 'minor'; // evaluats to minor
```

#### Relational

```javascript
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
3 in trees; // evaluates to true
'oak' in trees; // evaluates to false - you must provide a valid array index e.g. 0,1,2,3,4 - 5 is not valid as the array only has 5 entries and therefore its indicies only go up to 4.
5 in trees; // evaluates to false because there is no value at the 5th index of the array.

var mycar = { 
    make: 'Honda', 
    model: 'Accord', 
    year: 1998 
};

'year' in mycar; // evaluates to true
'make' in mycar; // evaluates to true
```

#### Comma

```javascript
var x,y; // declaring two variables
x=3,y=5; // assigns 3 to x and 5 to y
```

#### Unary

```javascript
typeof 3; // evaluates to Number
"hello" instanceof String; // evaluates to true
```

### Expressions

An _expression_ is any valid unit of code that resolves to a value.

There are two types of expressions:

1. Expressions with side effects (e.g. an expression that assigns a value to a variable)

    ```javascript
    var x = 3; // The value 3 is assigned to the variable x
    ```

2. Expressions that, when fully evaluated, resolve to a value.

    ```javascript
    2+2; // This expression evaluates to 4, but does *not* assign the returned value to any variable.
    ```

Expressions can be broken up into the following categories:

- Arithmetic: evaluates to a number e.g. `3.41`
- String: evaluates to a character string
- Primary expressions: Basic keywords and general expressions in Javascript.
- Logical expressions:
- Left-hand-side expressions:

#### Arithmetic Expressions

```javascript
3.15; // evaluates to 3.15
6 + 7; // evaluates to 13
15/3; // evaluates to 5
```

#### String Expressions

```javascript
'Apple'; // evaluates to 'Apple'
'Apple'.toLowerCase(); // evaluates to 'apple'
'App' + 'le'; // evaluates to 'Apple'
'24' + 5; // evaluates to '245'

```

#### Primary Expressions

##### Grouping operator

Controls the precedence of expression evaluation

```javascript
(1 + 5) * 3; // evaluates to 18
1 + (5 * 3); // evaluates to 16
```

##### `this` keyword

The `this` keyword refers to the current object. `this` refers to the calling object in a method.

```javascript
this; // `this` refers to the global object

var myObject = {
    a: "foo",
    b: this.a+"bar" // `this` refers to myObject
    c: function(){
        console.log(this.b); // `this` refers to myObject
    }
}
myObject.c() // logs "foobar"
```

#### Logical Expressions

```javascript
true; // evaluates to true
new Boolean(0) // evaluates to false
null === "" // false
null == undefined // true LOLZ!
0 == "0"  // true because "0" is coerced into the number 0 
0 == [] // true because [] is coerced into the number 0
"0" == [] // false becasue [] is coerced into an empty string
```

#### Left-hand-side Expressions

##### `new` operator

The `new` operator can be used to create an _instance_ of an object type.

```javascript
new String("Hello!"); // evaluates to "Hello!" 
```

## Objects

### How do we create an object?

We can create object by using the `new` operator to invoke the Object `constructor` or with the object _literal_ notation.

#### Object constructor `new Object()`

We can construct an new object by invoking the Object `constructor`.

```javascript
//Construct an empty object
var objectA = new Object()

// Construct an object that is an instance of Number
var objectB = new Object(3);
console.log(typeof objectB); // logs 'object'
console.log(objectB instanceof Number); //logs true

// If passed an existing object, it simply returns the
// object that was passed in - a new Object is NOT created!
var objectC = new Object(objectB)
console.log(objectC === objectB); // logs true
```

#### Object literal

Objects can be created using the _literal_ notation. This can be done by enclosing zero or more _property names_ and their associated _values_ within curly braces `{}`

```javascript
var objectOne = { // "{" denotes the start of the object
    // propertyName1 : "property value one",
    // propertyName2 : "property value two",
    // etc...
    myName: 'Reuben Dallas Fortworth-Texas',
    myOccupation: 'C.I.A. Snitch',
    myFavoriteNumber: 42
} // "}" denotes the end of the object
```

### What types of values can be stored in an object?

```javascript
var myObjectStoringEverything = {
    // A value can be a String
    propertyOne: "I am a string value",
    // A value can be a Number
    propertyTwo: 182937,
    // A value can be an Array
    propertyThree: ["I", "am", "an", "array"]
    // A value can be another Object
    propertyFour: {
        myName: 'Reuben Dallas Fortworth-Texas',
        myOccupation: 'C.I.A. Snitch',
        myFavoriteNumber: 42
    }
    // A value can be a Function
    propertyFive: function() {
        console.log("Hello world!");
    }
}
```

### How do we access a value in an object?

#### Dot notation

```javascript
var personalDetails = {
    myName: 'Reuben Dallas Fortworth-Texas',
    myOccupation: 'Alien Invader',
    myFavoriteNumber: 666,
} 

// This is an "assignment" expression
// We know this because it looks like:
// thingToAssignAValueTo = someValue 
// Notice how an assignment expression always has an '=' sign
// between the value and the variable we are assigning the value to
var reubensFavouriteNumber = personalDetails.myFavouteNumber
console.log(reubensFavouriteNumber) // logs 666
```

#### Bracket notation

```javascript
var personalDetails = {
    myName: 'Daniel MiBruvva',
    myOccupation: 'Being stronger than me',
    myFavoriteNumber: 0,
}

personalDetails['myName']; // evaluates to 'Daniel MiBruvva'

var keyName = 'myFavoriteNumber'; 
// We cannot use dot notation if the property name is a variable 
// e.g. personalDetails.keyName. 
// This is where bracket notation can be helpful:
personalDetails[keyName]; // evaluates to 0
```

## Functions

```javascript
// are a data type 
// ‣ 1st class citizen
// ‣ pass functions as values
// ‣ can be assigned to variables
// ‣ multiple references to a single function


```

### Defining a Function

Three ways to define a function

1. Function statement/Function declaration: `function myFunc () {};`
2. Function expression: `var myfunc = function () {};`
3. Function constructor: `new Function("console.log('hello')");`

#### Function Declaration

```javascript
function myFunc () {
    
};
```

#### Function Expression

```javascript
var myfunc = function () {
    
};
```

#### Function Constructor

```javascript
new Function("console.log('hello')");
```

### Function Arguments

```javascript
// • passed by value
// • object references
```

### Invoking Functions

```javascript
// Ways to invoke a function
// • functionName()
// Function execution context
//  Creation phase
    // ∘ binding of argument values to locally scoped variables
    // ∘ access the values of arguments via arguments array
// • Execution phase
```

### Object methods

```javascript
var personalDetails = {
    myName: 'Reuben Dallas Fortworth-Texas',
    greetHumans: function(){
        console.log("Howdy partners");
    }
} 

// Here we are retrieving the value stored under the property
// 'greetHumans' in the 'personalDetails' object.
var reubenGreetsPeople = personalDetails.greetHumans;
console.log(reubenGreetsPeople()); // logs Howdy partners
```
