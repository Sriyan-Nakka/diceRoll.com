document.querySelector("#rollDiceButton").addEventListener("click", () => {
    diceRollFunction();
});

function diceRollFunction() {
    let randNum = Math.floor(Math.random() * 6) + 1;
    console.log(randNum);
    switch(randNum){
        case 1:
            document.querySelector("#dice1").style.display = "block";
            document.querySelector("#dice2").style.display = "none";
            document.querySelector("#dice3").style.display = "none";
            document.querySelector("#dice4").style.display = "none";
            document.querySelector("#dice5").style.display = "none";
            document.querySelector("#dice6").style.display = "none";
            break;
        case 2:
            document.querySelector("#dice1").style.display = "none";
            document.querySelector("#dice2").style.display = "block";
            document.querySelector("#dice3").style.display = "none";
            document.querySelector("#dice4").style.display = "none";
            document.querySelector("#dice5").style.display = "none";
            document.querySelector("#dice6").style.display = "none";
            break;
        case 3:
            document.querySelector("#dice1").style.display = "none";
            document.querySelector("#dice2").style.display = "none";
            document.querySelector("#dice3").style.display = "block";
            document.querySelector("#dice4").style.display = "none";
            document.querySelector("#dice5").style.display = "none";
            document.querySelector("#dice6").style.display = "none";
            break;
        case 4:
            document.querySelector("#dice1").style.display = "none";
            document.querySelector("#dice2").style.display = "none";
            document.querySelector("#dice3").style.display = "none";
            document.querySelector("#dice4").style.display = "block";
            document.querySelector("#dice5").style.display = "none";
            document.querySelector("#dice6").style.display = "none";
            break;
        case 5:
            document.querySelector("#dice1").style.display = "none";
            document.querySelector("#dice2").style.display = "none";
            document.querySelector("#dice3").style.display = "none";
            document.querySelector("#dice4").style.display = "none";
            document.querySelector("#dice5").style.display = "block";
            document.querySelector("#dice6").style.display = "none";
            break;
        case 6:
            document.querySelector("#dice1").style.display = "none";
            document.querySelector("#dice2").style.display = "none";
            document.querySelector("#dice3").style.display = "none";
            document.querySelector("#dice4").style.display = "none";
            document.querySelector("#dice5").style.display = "none";
            document.querySelector("#dice6").style.display = "block";
            break;
    }
}