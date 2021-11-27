const user=document.getElementById('user');
const comp=document.getElementById('comp');
const result=document.getElementById('result');


const choices=document.querySelectorAll('button');
let userChoice
choices.forEach(choice => choice.addEventListener('click', (e)=>{
    userChoice=e.target.id
user.innerHTML=userChoice;
computerPlay()
game()
}))

let compChoice

function computerPlay(){
    let options=['rock', 'paper', 'scissors'];
    compChoice=options[Math.floor(Math.random()*3)];
    // return choice;
    comp.innerHTML=compChoice;
}

function game(){
    if (userChoice===compChoice){
       result.innerHTML='Draw';
    } else if (userChoice=='rock' && compChoice=='scissors'){
       result.innerHTML='You Win';
    } else if(userChoice=='paper' && compChoice=='rock'){
        result.innerHTML='You Win';
    } else if (userChoice=='scissors' && compChoice=='paper'){
        result.innerHTML='You Win'; 
    } else if (userChoice=='paper' && compChoice=='scissors'){
            result.innerHTML='You Lose';
    } else if (userChoice=='scissors' && compChoice=='rock'){
            result.innerHTML='You Lose';
    } else if (userChoice=='rock' && compChoice=='paper'){
        result.innerHTML='You Lose';
    }  
    return
  
}












































//     let computerSelection=computerPlay();
//     let playerSelection=

//     const choose=document.querySelectorAll('button');
//     let pushed
    
    
//     choose.forEach(choos => choos.addEventListener('click', (e)=>{
//             pushed=e.target.id;
//         });
    
    
    
//     console.log(pushed);
    
//     function playRound(playerSelection, computerSelection){
//         if (playerSelection=='rock'&&computerSelection=='paper'){
//            message=`You lose! ${computerSelection} beats ${playerSelection}!`;
            
//         }
//         else if (playerSelection=='paper'&&computerSelection=='scissors'){
//            message=`You lose! ${computerSelection} beats ${playerSelection}!`;
            
//         }
//         else if (playerSelection=='scissors'&&computerSelection=='rock'){
//            message=`You lose! ${computerSelection} beats ${playerSelection}!`;
           
//         }
//         else if (playerSelection=='rock'&&computerSelection=='scissors'){
//            message=`You win! ${playerSelection} beats ${computerSelection}!`;
            
//         }
//         else if (playerSelection=='paper'&&computerSelection=='rock'){
//            message=`You win! ${playerSelection} beats ${computerSelection}!`;
          
//         }
//         else if (playerSelection=='scissors'&&computerSelection=='paper'){
//           message=`You win! ${playerSelection} beats ${computerSelection}!`;
           
//         }
//         else if (playerSelection==computerSelection){
//           message='Draw! Try again!';
         
//         }
        
//         return message;
//     }
//     console.log(computerSelection);
//     console.log(playRound(playerSelection, computerSelection));
//     let result=playRound(playerSelection, computerSelection);

// let userScore=0;
// let compScore=0;
//    function keepScore()
//     {
//         if (result==`You win! ${playerSelection} beats ${computerSelection}!`){
//           userScore=userScore+1;
//       }
//         else if (result==`You lose! ${computerSelection} beats ${playerSelection}!`){
//           compScore=compScore+1;
//       }
//     }

//       keepScore();
//       console.log(userScore);
//       console.log(compScore);     



     



// console.log(userScore);
// console.log(compScore);
{/* 
    if (userScore>compScore){
      alert('You win!')
    }
    else if(userScore<compScore){
      alert('Computer wins!')
    }
    else{
      alert('Draw!')
    } */}


