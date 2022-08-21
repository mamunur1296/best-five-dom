function playerToArray(plArray) {
    const tableBody = document.getElementById("t-body");
    tableBody.innerHTML = "";
    for (let i = 0; i < plArray.length; i++) {
        const Name = plArray[i].playerName;
        const serialNo = i + 1;
        const tr = document.createElement("tr");
        tr.innerHTML = `
         <td class="col-4">${serialNo}</td>
         <td class="col-8">${Name}</td>
        `;
        tableBody.appendChild(tr);

    }
    console.log(tableBody.childNodes.length);
}
const playerArray = [];
function selectBtn(select) {
    const playerName = select.parentNode.childNodes[1].innerHTML;
    const playerObj = {
        playerName: playerName,
    }
    playerArray.push(playerObj);
    playerToArray(playerArray);
}




