const max = prompt("Enter the maximum Number");

const ramdom = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
 if(guess == "quit"){
    console.log("User Quit");
    break;
 }

 if(guess == ramdom) {
    console.log("you are right! Congrats!! Random number was", ramdom);
    break;
 }else if(guess < ramdom){
     guess = prompt("your guess was too small number!! please try again");
 }else{
    guess = prompt("your guess was too large number!! please try again");
 }
}