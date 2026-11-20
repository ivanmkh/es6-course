console.log(typeof 10n, typeof Symbol(), typeof new Date(), typeof class {});
/*
/////////////////
for (let a = 0; a < 3; a++) {    
    console.log(a);
    a = 3;
}
/////////////////
let v = 42;
console.log(typeof v);
v = 'hello';
console.log(typeof v);
console.log(typeof typeof v);
/////////////////
let a;
const b = null;
const obj = {};
function f(x) { return x; }

console.log(a);
console.log(b);
console.log(obj.missing);
console.log(f());
////////////
console.log(typeof 42, typeof 'hi', typeof true, typeof undefined);
console.log(typeof null, typeof [], typeof function () {}, typeof NaN);

const user = { name: 'Ann' };
user.name = 'Bo';
console.log(user.name);

user = { name: 'Cy' };
console.log('done');
////////////
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
////////////
function f(){
    var inside = 1;
}
console.log(typeof inside);
////////////
{
    var a = 1;
    let b = 2;
}
console.log(typeof a, typeof b);
////////////
console.log(b);
let b = 1;
////////////
console.log(a);
var a = 1;
console.log(a);
*/