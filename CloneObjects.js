const Circle = {
    radius : 1,
    draw(){
       console.log('draw the circle');
    
    }
}

//1.clone the object with the help of for in
const Another = {}
console.log(Another);

for(key in Circle)
Another[key] = Circle[key];
console.log(Another);
console.log(Circle);

//2. Clone the object with the help of Object.assign method
const another = Object.assign({},Circle);
console.log(another);

const another1 = Object.assign({color:'red'}, Circle);
console.log(another1);
//3. Clone the object with the help of spread operator
const another = {...Circle}
console.log(another);
another.draw();




