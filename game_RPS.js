let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const mess=document.querySelector("#messg")
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const genComChoice=()=>{
    let options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}
const drawGame=()=>{
    console.log("Game was draw");
    mess.innerText="Game was Draw. play again";
    mess.style.backgroundColor="#081b31";
}
const showWin=(userWin,userChoice,compChoice)=>{
    if(userWin){
    console.log("You Win!");
    userScore++;
    userScorePara.innerText=userScore;
    mess.innerText=`You Win. your ${userChoice} beats ${compChoice}`;
    mess.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose");
        mess.innerText=`You Lost.  ${compChoice} beats your ${userChoice}`;
        mess.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("user Choice =",userChoice);
    //Generate computer choice
    const compChoice=genComChoice();
    console.log("comp Choice =",compChoice);

    if(compChoice===userChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice === "paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice === "scissors" ? false:true;
        }
        else {
            userWin=compChoice === "rock" ? false:true;
        }
        showWin(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    });
});