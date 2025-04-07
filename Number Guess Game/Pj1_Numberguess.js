const prompt = require("prompt-sync")();
const fname = prompt("What is your name? ");
console.log(fname,"Welcomee! To our Game");
const play=prompt("Shall We Start the game? ")
if(play.toLowerCase()==="yes"){
    console.log("Ok Let's Start!");
    const win_num=Math.floor(Math.random()*6); // ek jyada hi lete hai 
    // console.log(win_num);
    let user=Number(prompt("Guess the number between 0 to 5: ")); //using number makes the input string to a number
    while(user!==win_num){
        console.log("Oh dear! It's not right. Come on Another try...");
        user=Number(prompt("Guess the number again between 0 to 5: "));
        console.log("\n");

    }
    console.log(`Hurrayy! You Won The Game! \nIt Was Pleasure Playing with you ${fname} :)`)


}else if(play.toLowerCase()==="no"){
    console.log("Okay :(");
}else{
    console.log("Invalid Input....");

}

