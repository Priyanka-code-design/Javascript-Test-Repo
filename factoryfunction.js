//Factory functions: it produces objects
function createCircle(radius){

    return {
        radius,
        draw(){
            console.log('Please draw a circle');
        }

    }
    return circle;
}
const c1 = createCircle(1);
console.log(c1);
//c1.draw();

const c2 = createCircle(2)
console.log(c2);
//c2.draw();