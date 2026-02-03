function counter(){
    let count =0;
    return function(){
        count++;
        console.log(count) ;
    }
}

let c= counter();
let d= counter();
c();
c();
c();
c();
d();
d();
d();
c();