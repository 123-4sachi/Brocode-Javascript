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
    case true:
        console.log(`Your username cannot end with special characters like @,#,$,!,~`);
    
}

//phone number example
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);


phoneNumber = phoneNumber.padStart(12, "0");

console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(16, "2");

console.log(phoneNumber);
