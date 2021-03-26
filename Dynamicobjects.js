const circle = {
    radius  : 1,
    color : 'red',
    log(){
        console.log('log', this.radius);

    }
}
console.log(circle);
circle.price = 100;
circle.isPresent = 'true';
circle.draw = function(){

}
console.log(circle);

//delete properties from object circle
delete circle.price;
console.log(circle);

delete circle.draw;
console.log(circle);

circle.log();

