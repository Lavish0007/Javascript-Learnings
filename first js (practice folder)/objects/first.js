let role="zetta";

obj={
    name:"Lavish",
    age:21,
    Address:{
        city:"ghaziabad",
        loc:{
            lat:28.6692,
            lon:77.4538
        }
    },
    [role]:"Wo bhi Lavish"
}

let obj2=JSON.parse(JSON.stringify(obj));
obj2.Address.city="Delhi";
// for(let keyy in obj){
//     console.log(keyy,"->",obj[keyy])
// }

   