let divElem = document.getElementById("welcomeMessage")

function showWelcome(){
    let userName = prompt("اسمتون رو بفرمائید")
    divElem.textContent = `سلام ${userName}`
    divElem.style.display =  "block"
}