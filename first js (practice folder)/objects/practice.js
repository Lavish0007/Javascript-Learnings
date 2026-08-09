let a="age";
let obj={
    "first-name":"Lavish",
    age:21,
    isEnrolled:true,
    loc:{
        lat:28.4,
        lan:74.5
    }
}
let{lat,lan}=obj.loc;
let {age}=obj;

console.log(age,lat,lan)