let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let mesagecontainer = document.querySelector(".msgconntainer")
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-button");

let turn0 = true; //playerx,player0

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetgame = () => {
    turn0 = true;
    enableboxes();
    mesagecontainer.classList.add("hide");

}



boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;

        chekwinner();

    });
});




const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showinner = (winner) => {
    msg.innerHTML = `congrast, winner is ${winner}`;
    mesagecontainer.classList.remove("hide");
    disabledboxes();
}
const chekwinner = () => {
    for (let pattern of winpattern) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;


        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {

                showinner(position1);
            }
        }
    }
};

newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
