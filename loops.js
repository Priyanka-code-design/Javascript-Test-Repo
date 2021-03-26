//for loop //while //Do while//for....in
//infinite loop

//To avoid the repetative work we use loop

//for oop
for(let i=1; i<10; i++){
    console.log(i);
    if(i % 2 === 0)
        console.log('This is javascript');

}
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}
let p=1;
do{
    console.log(p);
    p++;
}
while(p<=10);

//for in loop

//fetch the value from object
const persons = {
    name:'Priyanka',
    age:34
};
for(let key in persons)
console.log(key,persons[key]);

//Array
const colors = ['red','blue','green'];
for(let index in colors)
console.log(index, colors[index]);

//For of 
//It is used to fetch the value from array

for(let col of colors)
console.log(col);
//Break and continue:

let k = 0;
while(k<=5){
    if(k===5){
        break;
        console.log(k);
        k++;
    }
}


