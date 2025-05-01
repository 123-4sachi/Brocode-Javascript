const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running == true){

    guess = window.prompt(`Guess a Number between ${minNum} - ${maxNum}`)
    guess = Number (guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess> maxNum){
        window.alert("Please enter a valid number");

    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`Too Low! Try again`);
        }
        else if(guess > answer){
            window.alert(`Too High!`);
        }
        else if(guess == answer){
            window.alert(`Congratulations if you have the right number`);
            running = false;
        }
    }


}



for (let i = 2; i <= 10; i+=2) {
    console.log(i);
}

let j = 0;
 while(j < 10) {
    j+=2;
    console.log(j);
 }


 let n = 1000;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log( i ); // a prime
}