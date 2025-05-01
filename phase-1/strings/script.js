let userName = " modiji@#";


//upper and lower case

userName = userName.toUpperCase();

console.log(userName);

userName = userName.toLowerCase();

console.log(userName);


userName = userName.repeat(3);

console.log(userName);



// starts with and ends with


let result = userName.startsWith(" ");

console.log(result);

if(result){
    console.log("Your username can't start with empty space");
}

else{
    console.log(userName);
}

let name =  userName.endsWith('@');

console.log(name);

switch(name){
    case name:
        console.log(`Your username cannot end with special characters like @,#,$,!,~`);
    
}

//phone number example replace, pad start, pad end
let phoneNumber = "123-456-7890@";

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);


phoneNumber = phoneNumber.padStart(12, "0");

console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(16, "2");

console.log(phoneNumber);
 
phoneNumber = phoneNumber.includes("@")

switch(phoneNumber) {
    case true:
        console.log("Your phone number can't contain special characters only numbers");
    
}

/////strings slicing = creating a substring from a portion of another string.

let fullname = prompt("please enter your full name with space. " + "Like- 'Harry Potter':-");

let firstName = fullname.slice(0,fullname.indexOf(" "));
firstName = firstName.toUpperCase();

// console.log(userName);

alert("Yo Nigga " + firstName + " Welcome to the hood" );

// in website it works differently but for terminal we use readline

// const readline = require('node:readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`);
//   rl.close();
// });




//method chaining


