let home = 0
let guest = 0
let guestScore= document.getElementById("guest-score")
let homeScore= document.getElementById("home-score")

function homePlus1(){
    home += 1
    homeScore.textContent = home
}

function homePlus2(){
    home += 2
    homeScore.textContent = home
}

function homePlus3(){
    home += 3
    homeScore.textContent = home
}

function guestPlus1(){
    guest += 1
    guestScore.textContent = guest
}

function guestPlus2(){
    guest += 2
    guestScore.textContent = guest
}

function guestPlus3(){
    guest += 3
    guestScore.textContent = guest
}