//Enumerating properties from the object
//get all the properties of an object
//check a property in an object

const Circle = {
    radius : 1,
    price : 1,
    draw(){
        console.log('draw');
    }
};
//get the properties with the help of for in loop
for(let key in Circle)
    console.log(key, Circle[key]);


//Generally of is used for array
//for-of loop
for(let key of Object.keys(Circle))
console.log(key);

//Entry

for(let entry of Object.entries(Circle))
console.log(entry);

//in-operator
//Check a property in an object
if('price' in Circle)
console.log('yes');

if('draw' in Circle)
console.log('yes');
