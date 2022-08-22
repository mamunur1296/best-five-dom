function playerToArray(plArray) {
    const tableBody = document.getElementById("t-body");
    tableBody.innerHTML = "";
    for (let i = 0; i < plArray.length; i++) {
        const Name = plArray[i].playerName;
        const serialNo = i + 1;
        const tr = document.createElement("tr");
        tr.innerHTML = `
         <td class="fw-bolder col-4 ">${serialNo}</td>
         <td class="col-8">${Name}</td>
        `;
        tableBody.appendChild(tr);
    }
}
const playerArray = [];
function selectBtn(select) {
    select.disabled = true;
    const playerName = select.parentNode.childNodes[1].innerHTML;
    const playerObj = {
        playerName: playerName,
    }
    playerArray.push(playerObj);
    if (playerArray.length >= 6) {
        select.disabled = false;
        alert("you cannot select more than 5 players")
        return;
    }
    document.getElementById("plair-list").innerText = playerArray.length;
    console.log(playerArray.length);
    playerToArray(playerArray);
}
document.getElementById("calculate-btn").addEventListener("click", function () {
    const inputfileOne = inputFildById("input-cost");
    const playerParOrder = elementFildById("plair-list");
    if (isNaN(inputfileOne)) {
        alert(" Enter your valid Number");
        return;
    } else {
        const totalPlayerExp = inputfileOne * playerParOrder;
        gatRejult("player-exp", totalPlayerExp);
    }
})
document.getElementById("total-calculate-btn").addEventListener("click", function () {
    const managerCost = inputFildById("input-manager");
    const coachCost = inputFildById("input-coach");
    const totalplayerExp = elementFildById("player-exp");
    if (isNaN(coachCost)) {
        alert(" Enter your valid Number");
        return;
    } else {
        const inputTotalCost = totalplayerExp + managerCost + coachCost;
        gatRejult("total-const", inputTotalCost)
    }
})