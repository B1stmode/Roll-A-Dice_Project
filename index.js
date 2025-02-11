const buttonEl = document.getElementById("roll-button");
const clearButtonEl = document.getElementById("clear-button"); // Grab the clear button element
const dice1El = document.getElementById("dice1");
const dice2El = document.getElementById("dice2");
const rollHistory1El = document.getElementById("roll-history1");
const rollHistory2El = document.getElementById("roll-history2");
let historyList1 = [];
let historyList2 = [];

function rollDice() {
    const rollResult1 = rollSingleDice();
    const rollResult2 = rollSingleDice();

    historyList1.push(rollResult1);
    historyList2.push(rollResult2);

    dice1El.innerHTML = getDiceFace(rollResult1);
    dice2El.innerHTML = getDiceFace(rollResult2);

    updateRollHistory(rollHistory1El, historyList1);
    updateRollHistory(rollHistory2El, historyList2);
}

function rollSingleDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateRollHistory(rollHistoryEl, historyList) {
    rollHistoryEl.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        rollHistoryEl.appendChild(listItem);
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

buttonEl.addEventListener("click", () => {
    dice1El.classList.add("roll-animation");
    dice2El.classList.add("roll-animation");
    setTimeout(() => {
        dice1El.classList.remove("roll-animation");
        dice2El.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});

clearButtonEl.addEventListener("click", () => {
    location.reload(); // Reloads the page
});