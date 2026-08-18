let userScore = 0 ;
let  compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScorePara = document.querySelector(".user-score");
let compScorePara = document.querySelector(".comp-score");


const genComChoice = () =>{
      let options =["rock" , "paper" , "scissors"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};


const drawGame = ()=>{
        console.log ("you draw");
        msg.innerText = `Game is draw, Play again`;
        msg.style.backgroundColor = "rgb(3, 3, 32)";
    };


const showWinner =(userWin , userChoice , compChoice)=>{
    if(userWin){
        userScore++ ;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("youlose");
        msg.innerText = `You lose.  ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
};

const playGame =(userChoice)=>{
    console.log("userchoices is" ,userChoice);
     let compChoice  = genComChoice();
  console.log("compchoice is" ,compChoice);
   //battle condition
    if (userChoice === compChoice){
   drawGame();
    }else {
         let userWin = true ;
        if(userChoice ==="rock"){
           userWin = compChoice === "paper" ? false :true ;
    }else if (userChoice ==="paper"){
            userWin = compChoice === "scissor" ? false :true ;
    }else {
            userWin = compChoice === "rock" ? false :true ;
    }
    showWinner(userWin ,userChoice , compChoice);
}
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
      let userChoice =  choice.getAttribute("id");
      playGame(userChoice);
    });
});