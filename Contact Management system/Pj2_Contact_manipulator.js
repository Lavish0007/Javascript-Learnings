const prompt=require("prompt-sync")()
function contactinfo(){
    console.log("<== Contact management system ==>");
    console.log("---------------------------------");
    console.log("1. Add to contact");
    console.log("2. Remove contact");
    console.log("3. View contacts");
    console.log("4. Search contact");
    console.log("5. Exit");
} 

contacts=[]; //array uses for of loop, meanwhile objects use for in loop


function add() {
    let name=prompt("Enter your name: ");
    let num=Number(prompt("Enter Phone No. :"));
    const contact={
        Name:name,
        Number:num
    }
    contacts.push(contact);
    console.log("\nAdded!\n");
}
function remove() {
    if(contacts.length==0){
        console.log("⚠️  No Contacts found!")
    }
    else{

        console.log("🗑️  Contact IDs");
        for (let j=0;j<contacts.length;j++){
            const contact=contacts[j];
            console.log(`${j+1} :`,contact.Name);
        }
        const id=Number(prompt("Enter an ID : "))
        if(isNaN(id)||id>contacts.length){
            console.log("❌ Enter a valid Field!")
            return
        }else{
            contacts.splice(id-1,1);
            console.log("✅ Removed!")
        }


    }
    

}
function view(contacts) {
    console.log("\n");
    // console.log(contacts);
    let i=1;
    for (let key of contacts){ //key is the object here , uske fields le rhe hai hum
        console.log(`# ${i}`)
        console.log(`👤 Name: ${key.Name}`)
        console.log(`📞 Number: ${key.Number}`)
        console.log();
        i++;
    }
    console.log("\nThese are the Contacts.\n");
}


function search() {
    const tosearch=prompt("Enter here : ").toLowerCase();
    const results=[];
    for(let key of contacts ){
        if(key.Name.toLowerCase().includes(tosearch))  results.push(key);
    }
    view(results);

    // console.log("Search function executed.");
}


let loop_variable=true;

while(loop_variable===true){
    contactinfo();
    
    const choice=Number(prompt("Enter your choice: "));

    switch(choice){
    case 1:
        add();
        break;
    case 2:
        remove()
        break;
    case 3:
        view(contacts)
        break;
    case 4:
        search()
        break;
    case 5:
        loop_variable=false;
        console.log("Exiting...");
        break;
    default:
        console.log("Pass a valid Choice...");
        break;
}
}

// Test



