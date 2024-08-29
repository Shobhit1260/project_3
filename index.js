// @ts-nocheck
document.addEventListener('DOMContentLoaded', function() {

const btns=document.querySelectorAll(".box") ;
const newGame=document.getElementsByClassName("newbtn")[0] ;
const resetGame=document.getElementsByClassName("resetbtn")[0];
let turn = true;
const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [6,7,8],
    [2,4,6],
    [3.4,5],
];
function enablebtns(){
    for(let btn of btns){
        btn.innerText="";
        btn.disabled=false;
    }
}

function disablebtns(){
    for(let btn of btns){
        btn.disabled=true;
    }
}

function showWinner(winner){
    const winMsgEl=document.getElementsByClassName("win-msg")[0];
    winMsgEl.innerText=`Congratulations! Winner is ${winner}`;
    winMsgEl.setAttribute("style","color:red; font-size:2rem; ");
    disablebtns();

}

const winner=()=>{
    for(let pattern of winningPatterns){
        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;
    
    if(pos1val!=" " && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            showWinner(pos1val);
        }
    }
}
}

btns.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("clicked");
    if(turn){
        box.innerHTML="X";
        turn =false;
    }
    else{
        box.innerHTML="O";
        turn =true;
    }
    box.disabled = true;
    winner();
})
})

newGame.addEventListener("click",()=>{
    console.log("click");
    enablebtns();
})

resetGame.addEventListener("click",()=>{
    console.log("click");
    enablebtns();
})

})