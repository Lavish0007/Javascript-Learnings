// let arr=["apple","Lichi"];
// arr.push("Mango");
// arr.unshift("pineapple");
// arr.forEach(function(v,i){
//     console.log(i);
//     if(v==="Lichi"){
//         arr[i]="Banana";
//     }
// })
// arr.splice(1,2,"halua");
// // let myarr=[...arr];
// let v=[4,1,5,7,8,3,6,4]
// v.sort(); // Array sorted
// v.reverse(); // Array reversed
// let newv = v.map(function(val){
//     return val*val;
// })
// let fil=v.filter(function(val,i){
//     if(val>4) return true;
// })
// let indexes=[]
// v.map(function(val,i){
//     if(val>4) indexes.push(i);
// })
// console.log(indexes)
// let sum=v.reduce(function(acc,val){
//     return acc+val;
// },0)


function rev(arr){
    arr.forEach(function(_,i){
        arr[i]++;
    });
    return arr;
}



let arr=[40,10,30,25,60];
let nw=rev(arr);
nw.forEach(function (val){
    console.log(val)
})




