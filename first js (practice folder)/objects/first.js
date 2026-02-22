obj={
    name:"Lavish",
    Address:{
        city:"ghaziabad",
        loc:{
            lat:28.6692,
            lon:77.4538
        }
    }
}
let obj2=JSON.parse(JSON.stringify(obj));
obj2.Address.city="Delhi";
// for(let keyy in obj){
//     console.log(keyy,"->",obj[keyy])
// }

   