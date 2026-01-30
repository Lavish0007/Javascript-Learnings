// reusable discount calculator

function discount(amt){
    return function(price){
        return price-price*(amt/100);
    }
}
let ten = discount(10);
let twenty = discount(20);

console.log(ten(100))
console.log(twenty(100))









// console.log("Hello, World!");
// console.log("This is a simple JavaScript file.");
// // alert("Welcome to JavaScript programming!");

// let person = {
//     name: "Alice",
//     age: 30,
//     city: "New York"

// }
// person['city'] = "Los Angeles";
// console.log(person.city);

// function greet(name, last="Smith") {
//     return `Hello, ${name} ${last}!`;
// }

// console.log(greet(20));

// console.log(a);

// let a = 10;
// let a=5;
// for(let i=1;i<11;i++){
//      console.log(`5 * ${i} = ${5*i}`)
// }
// let a=10;
// while(a>=1){
//     console.log(a);
//     a--;
// }
// let a=100;
// console.log((a*(a+1))/2)
// let n = prompt("Tell the number.");
// for(let i=1;i<=100;i++){
//     if(i%3===0 && i%5===0){
//         console.log(i);
//     }
    
// }
// function nacho(v){
//     console.log(`${v} naach rha hai`)
// }
// nacho("ghoda");
// nacho("ghoda");

// let arr=[1,2,3,4,5];
// let s=0;
// function sum(...score){
//     score.forEach(function(val){
//         s+=val;
//     })

// }
// sum(10,10,10,10)
// console.log(s);
// function check( age ){
//     if(age < 18) return "Too Young";
//     return "Allowed";
// }
// console.log(check(19))
//  function dbl(val){
//     console.log(val*2) ;
//  }
//  ar=[10,20,30];
//  dbl(function sm(ar){
//     let s=0;
//     ar.forEach(function (val){
//         s+=val;
//     })
//     return s;
//  })

// BMI CALCULATOR

// function bmi(w,h){
//     let res=w/(h*h)
//     return res.toFixed(2);
// }
// console.log(bmi(73,1.81))
