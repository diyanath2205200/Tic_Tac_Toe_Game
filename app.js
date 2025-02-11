

// step=1
let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

//ei turn variable ta use kora mane holo 
//akbar x khelbe ar akbar o ak ak kore khelbe

// step=2
let turnO = true //player o
let count = 0
//ebar amader wining pattern take store korar jonno array er dorkar 
//hobe amra ekhane 2D array use korbo
//it is the example of 2D array
// let arr2 = [[1,2,3],[4,5,6],[7,8,9]]

// step= 3
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide")
}
//box gulor opor kichu kaj perform korte hole amader 
//eventListener use korte hobe

// step=4
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        //ebar ei ta theke toh amra just bujhte parlm box click hoyeche n\
        //na hoyni kintu amake o or x print korate hobe but not simulteneously
        //tar jonno turn variable chai
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        //ebar amder bar bar x r o te change hoye jache tahole
    //ar amake korte hobe only one click tahole save hoye jabe
    //tar jonno box disabled korte hobe
        box.disabled = true;
        count++;
        let isWinner = checkWinner()
        if(count === 9 && !isWinner)
        {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw`;
    msgContainer.classList.remove("hide")
    disableBoxes();
}
//ebar bar bar o r x er click korle bar bar winner change hoye jache which is not admirable tai jonno sob button gulo ke amader disable korte hobe
// step= 7
const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};




//step => 8
//mane jokhon game suru hobe boxes enable hote pare
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};




//eikhane oike winner show hobe
// step=6
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`

    //amra initially winner ke hide kore rekhechilm tai
    //oi hide take remove korlm
    msgContainer.classList.remove("hide")
    disableBoxes();
}






//ebar ei je click hoche ami decide ki kore korbo je ke jitlo?
//tar jonno amy akta function banate hobe

//tar jonno amader je winpattern 2d array ta chilo oitar 
//akta akta kore sob index e giye check korte hobe

// step= 5
const checkWinner = () => {
    for(let pattern of winPatterns)
    {
      //ei pos1val mane box er bhitore pattern er bhitore kon kon value ache x or o 
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
       //ebar amder check korte hobe winning er kono box khali ache kina
       if(pos1val != "" && pos2val!="" && pos3val!=""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("winner");
            showWinner(pos1val);
            return true;
        }
       } 
    }
}

newGameBtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)