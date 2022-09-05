let home = 0
document.getElementById("homescore").textContent = home
let guest = 0
document.getElementById("guestscore").textContent = guest
let save1 = document.getElementById("save-1")
let save2 = document.getElementById("save-2")

function hadd1() {
    home += 1000
    homescore.textContent = home
}

function hadd2() {
    home += 100
    homescore.textContent = home
}

function hadd3() {
    home += 10
    homescore.textContent = home
}

function gadd1() {
    guest += 1000
    guestscore.textContent = guest
}

function gadd2() {
    guest += 100
    guestscore.textContent = guest
}

function gadd3() {
    guest += 10
    guestscore.textContent = guest
}

function save() {
    let countStr1 = home + " - "
    save1.textContent += countStr1
    homescore.textContent = 0
    home = 0
    
    let countStr2 = guest + " - "
    save2.textContent += countStr2
    guestscore.textContent = 0
    guest = 0
}

function newgame() {
    guestscore.textContent = 0
    guest = 0
    homescore.textContent = 0
    home = 0
    save1.textContent = "Results Player 1: "
    save2.textContent = "Results Player 2: "
}
