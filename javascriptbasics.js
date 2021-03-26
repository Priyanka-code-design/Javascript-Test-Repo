//Data types
let name = 'Priyanka';
let age = 34;

console.log(name);
console.log(age);
console.log(name + ' ' +age);
console.log(2+2);

const range = 5;
//range = 6;
console.log(range);

const numberOfdays = 7;
let s1 ='helo world';
let number = 2;
let flag = true;
let isActive = false;
let Price;
let model = null;
let wheel = undefined;


let user = {
    name: "Pree",
    age: 30,
}
console.log(user);
//Dot notation
console.log(user.name);
console.log(user.age);
user.age = 35;
console.log(user.age);
console.log(user.name + ' ' + user.age);

//Using bracket notation
user['name'] = 'Logan';
console.log(user.name);

//let language =[]; empty array
let language =['java','javascript'];
console.log(language);
console.log(language.length);

language[2]='hello';
console.log(language);

console.log(language[2]);

//Function

//0 parameter
function getName(){
    console.log("This is my function");
}
getName();

//param based function
function greet(name,age){
    console.log('hello ' + name + ' ' + age);

}
greet('Priyanka', 34);
greet('Priyanka');
greet();

//Return from a function
function add(num1, num2)
{
    return num1+num2;

}
let sum = add(2,3);
console.log(sum);

console.log(add(10,20));

function squareRoot(number)
{
    return number*number;
    
}
let root = squareRoot(4);
console.log(root);
console.log(squareRoot(2));


