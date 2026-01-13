let userScore = 0;
let compScore = 0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        console.log("you win!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`YOU WIN!,your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`YOU LOOSE, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const draw=()=>{
    console.log("game was draw");
    msg.innerText="DRAW TRY AGAIN!";
    msg.style.backgroundColor="black";
}
const genCompChoice=()=>{
    const opt=["rock","paper","scissor"];
    const ind=Math.floor(Math.random()*3);
    //math is a class,random genetates random no between 0-1 multiply with integer to get one less insex,it is converted to integer from decimal from floor
    return opt[ind];
}
const playgame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //to generate computer choice modular way of programming(more function division for reusability)
    const compChoice=genCompChoice();
    console.log("computer choice=",compChoice);
    if(userChoice === compChoice){
        //draw
      draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){//paper,scissor
        userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){//rock,scissor
        userWin=compChoice==="rock"?true:false;
        }
        else{//rock,paper
        userWin=compChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    /*console.log(choice); to print*/
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playgame(userChoice);
});
});