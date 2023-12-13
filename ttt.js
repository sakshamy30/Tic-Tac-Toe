let boxes = document.querySelectorAll(".box")
console.log(boxes);
let resetBox = document.querySelector(".reset")
console.log(resetBox);
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")

let turnO = true

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const newGame = () => {
    turnO = true
    enableBoxes()
    msgContainer.classList.add("hidden")
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("clicked");
        if(turnO){
            box.innerHTML="O"
            turnO = false
        }
        else
        {
            box.innerHTML="X"
            turnO = true
        }
        box.disabled = true
        check()
    })
})

const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = true
    }
}

const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = false
        box.innerText =""
    }
}

const showWinner = (winner)=> {
    msg.innerText = `Congrats, Winner is ${winner}`
    msgContainer.classList.remove("hidden")
    disableBoxes()
}

const check = () => {
    for(let pattern of winPattern)
    {
        let pos1 = boxes[pattern[0]].innerHTML
        let pos2 = boxes[pattern[1]].innerHTML
        let pos3 = boxes[pattern[2]].innerHTML

        if(pos1 !="" && pos2 !="" && pos3!="")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                console.log("winner");
                showWinner(pos1);
            }
        }
    }
}

resetBox.addEventListener("click", newGame)