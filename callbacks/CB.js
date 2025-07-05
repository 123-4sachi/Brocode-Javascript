// Callback == A function that is passed as an argument to another function.

// 

 function doHomework(subjectA, subject, callback) {
  console.log(`📚 Starting my ${subjectA}, ${subject} homework...`);
  callback();
}

function finishedHomework() {
  console.log("✅ Done with homework!");
}

doHomework("Math", "history", finishedHomework);



function jerk ( name, callback ){
 console.log(` ${name}, it's time to jerk ig`)
 callback();
}

function done  () {
 console.log("yeah now i'm regreting, what have i done")
}

jerk("sachi", done)





function checkEqual(one, two){
  if(one = Number){
    
      console.log("yes your element is number")  
  }

 if(    one = String) {
   
      console.log("it's not a number");
    
  };

  if(two = String){
      console.log("it's a string not number");

    // two = Number;
    //   console.log("it's not a string");
      
      
  }
}

checkEqual('2', 4 );





let age = 2;
let result = age >= 18 ? "adult" : "fail";
console.log(result);


