let home = document.getElementById("homeScore")

let guest = document.getElementById("guestScore")

let count = 0
let countTwo = 0


function btnOne(){
    count=count + 1
    home.innerText=count
}

function btnTwo(){
    count=count + 2
    home.innerText=count
}


function btnThree(){
    count=count + 3
    home.innerText=count

}

function btnFour(){
    countTwo=countTwo + 1
    guest.innerText=countTwo
}

function btnFive(){
    countTwo=countTwo + 2
    guest.innerText=countTwo
}


function btnSix(){
    countTwo=countTwo + 3
    guest.innerText=countTwo

}

function rstButton(){
    home.innerText= 0
    guest.innerText=0
    count=0
    countTwo= 0
}