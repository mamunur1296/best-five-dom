function inputFildById(input) {
    const inputfild = document.getElementById(input);
    const inputfildString = inputfild.value;
    const inputFildNam = parseFloat(inputfildString);
    return inputFildNam;
}
function elementFildById(element) {
    const elementFild = document.getElementById(element);
    const elementFildString = elementFild.innerText;
    const elementFildNumber = parseFloat(elementFildString);
    return elementFildNumber;
}
function gatRejult(elementId, elementValue) {
    const rejult = document.getElementById(elementId);
    rejult.innerText = elementValue;
}