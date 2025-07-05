// function = A section of reuseable code.
//     declare code once, use it whenever you want.
//     call the function to execute that code.


// with prompt and with parameters and argument


// let name = window.prompt("Enter your name");
// let age = window.prompt("Enter your age ");

// function passed(name , age) {
//     document.getElementById("1").textContent = (`Congrats to you ${name} passed your 12th without any compartment`);

//     document.getElementById("2").textContent = (`You have passed sr.secondary at the age of ${age}`);

// }

// passed("bob", 80);

// return

function div(x , y) {
    let result = x / y ;
    return result;
}

// let answer = div(89, 32);

//directly calling it without saving it first
console.log(div(77,23)); 


function bobAgeing(age) {
	age = Number(age);
	let result = age + 5; // in next five years bob wil be this much old
	
	return result; //holding the code and telling it to run

}

let answer = bobAgeing(15);

console.log(`bob your age in next five years would be ${answer}`);








let day = "sunday";

switch(day){
 case "sunday":
	console.log("sunday is holiday");
	break;
}


function canAccessPage (){
	let isLoggedIN = true;
	let isVerified = true;
}



function canAccessPage(name, isLoggedIn, isVerified) {
  if (isLoggedIn && isVerified) {
    return `${name} Access Granted`;
  } else {
    return `${name} Access Denied`;
  }
}



console.log(canAccessPage("rohan", true, true));  // Access Granted
console.log(canAccessPage("mohan", true, false)); // Access Denied
let i = 1;
do {
  console.log("Do loop:", i);
  i++;
} while (i <= 3);


let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}


let printList = ["pen", "book", "marker"];

for (let i =0; i< printList.length; i++){
  console.log(printList[i]);
}


function printDetails(obj) {
  console.log("Name: " + obj.name + ", Age: " + obj.age);
}

printDetails({ name: "Arya", age: 20 });


let now = new Date();

console.log(now.getFullYear()); // e.g., 2025
console.log(now.getMonth());    // e.g., 5 (June; months are 0-indexed)
console.log(now.getDate());     // e.g., 25


let todos = [];

function addTask(task) {
  todos.push(task);
}

function removeTask(index) {
  todos.splice(index, 1);
}

function showTasks() {
  todos.forEach((task, i) => {
    console.log(`${i + 1}. ${task}`);
  });
}

// Usage:
addTask("Finish JS revision");
addTask("Drink water");
showTasks();  // shows all tasks
removeTask(0);
showTasks();  // shows updated tasks
