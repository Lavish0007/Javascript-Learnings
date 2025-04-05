
let p = document.querySelector(".text");
let gen=document.querySelector("button");

let getfact= async ()=>{
    console.log("Getting data.....")
    let response = await fetch("https://meowfacts.herokuapp.com/");
    console.log(response);
    let info = await response.json();
    p.innerHTML=info.data[0];
    // console.log(info.data[0]);
    
}
gen.addEventListener("click",function(){
    getfact();
}
)

