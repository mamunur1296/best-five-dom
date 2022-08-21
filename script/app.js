function playerToArray(plArray) {
    const tableBody = document.getElementById("t-body");
    tableBody.innerHTML = "";
    for (let i = 0; i < plArray.length; i++) {
        const Name = plArray[i].playerName;
        const serialNo = i + 1;
        const tr = document.createElement("tr");
        // tr.className = "hi"
        tr.innerHTML = `
         <td class="col-4 hi">${serialNo}</td>
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
    document.getElementById("plair-list").innerText = playerArray.length;
    if (playerArray.length >= 6) {
        return;
    }
    console.log(playerArray.length);
    playerToArray(playerArray);
}
document.getElementById("calculate-btn").addEventListener("click", function () {
    const inputfileOne = inputFildById("input-cost");
    const playerParOrder = elementFildById("plair-list");
    const totalPlayerExp = inputfileOne * playerParOrder;
    gatRejult("player-exp", totalPlayerExp);
})