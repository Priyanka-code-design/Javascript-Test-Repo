let hour = 18;
if(hour>=6 && hour<=12)    console.log('good morning');
else if(hour>=12 && hour<=18)     console.log('good afternoon');
else    console.log('good evening');


//WAP to find out maximum number
let a=400;
let b=500;
let c=300;

if(a>b && a>c) console.log('a is biggest');
else if(b>c) console.log('b is biggest');
else console.log('c is biggest');

//Switch case
let role = 'vendor'
switch(role){
    case 'admin':
    console.log('admin user');
    break;
    case 'guest':
    console.log('guest user');
    break;
    case 'vendor':
    console.log('vendor user');
    break;
    default :
    console.log('no user');
    break;

}

//Role with if else

if(role==='guest')console.log('guest user');
else if(role==='admin')console.log('admin user');
else if(role==='vendor')console.log('vendor');
else console.log('no user');

