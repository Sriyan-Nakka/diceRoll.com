document.querySelector("#rollDiceButton").addEventListener("click", () => {
    diceRollFunction();
});

function diceRollFunction() {
    let randNum = Math.floor(Math.random() * 6) + 1;
    console.log(randNum);
    switch(randNum){
        case 1:
            document.querySelector("#dice2").style.display = "none";
            document.querySelector("#dice3").style.display = "none";
            document.querySelector("#dice4").style.display = "none";
            document.querySelector("#dice5").style.display = "none";
            document.querySelector("#dice6").style.display = "none";
            document.querySelector("#result").textContent = "It is";
            setTimeout(() => {
                document.querySelector("#result").textContent = "It is.";
                setTimeout(() => {
                    document.querySelector("#result").textContent = "It is..";
                    setTimeout(() => {
                        document.querySelector("#result").textContent = "It is...";
                        setTimeout(() => {
                            document.querySelector("#result").textContent = "";
                            document.querySelector("#dice1").style.display = "block";
                    }, 1510);    
                }, 1500);    
            }, 1000);    
            }, 500);
            break;
        case 2:
            document.querySelector("#dice1").style.display = "none";
            document.querySelector("#dice3").style.display = "none";
            document.querySelector("#dice4").style.display = "none";
            document.querySelector("#dice5").style.display = "none";
            document.querySelector("#dice6").style.display = "none";
            document.querySelector("#result").textContent = "It is";
            setTimeout(() => {
                document.querySelector("#result").textContent = "It is.";
                setTimeout(() => {
                    document.querySelector("#result").textContent = "It is..";
                    setTimeout(() => {
                        document.querySelector("#result").textContent = "It is...";
                        setTimeout(() => {
                            document.querySelector("#result").textContent = "";
                            document.querySelector("#dice2").style.display = "block";
                    }, 1510);    
                }, 1500);    
            }, 1000);    
            }, 500);
            break;
        case 3:
            document.querySelector("#dice1").style.display = "none";
            document.querySelector("#dice2").style.display = "none";
            document.querySelector("#dice4").style.display = "none";
            document.querySelector("#dice5").style.display = "none";
            document.querySelector("#dice6").style.display = "none";
            document.querySelector("#result").textContent = "It is";
            setTimeout(() => {
                document.querySelector("#result").textContent = "It is.";
                setTimeout(() => {
                    document.querySelector("#result").textContent = "It is..";
                    setTimeout(() => {
                        document.querySelector("#result").textContent = "It is...";
                        setTimeout(() => {
                            document.querySelector("#result").textContent = "";
                            document.querySelector("#dice3").style.display = "block";
                    }, 1510);    
                }, 1500);    
            }, 1000);    
            }, 500);
            break;
        case 4:
            document.querySelector("#dice1").style.display = "none";
            document.querySelector("#dice2").style.display = "none";
            document.querySelector("#dice3").style.display = "none";
            document.querySelector("#dice5").style.display = "none";
            document.querySelector("#dice6").style.display = "none";
            document.querySelector("#result").textContent = "It is";
            setTimeout(() => {
                document.querySelector("#result").textContent = "It is.";
                setTimeout(() => {
                    document.querySelector("#result").textContent = "It is..";
                    setTimeout(() => {
                        document.querySelector("#result").textContent = "It is...";
                        setTimeout(() => {
                            document.querySelector("#result").textContent = "";
                            document.querySelector("#dice4").style.display = "block";
                    }, 1510);    
                }, 1500);    
            }, 1000);    
            }, 500);
            break;
        case 5:
            document.querySelector("#dice1").style.display = "none";
            document.querySelector("#dice2").style.display = "none";
            document.querySelector("#dice3").style.display = "none";
            document.querySelector("#dice4").style.display = "none";
            document.querySelector("#dice6").style.display = "none";
            document.querySelector("#result").textContent = "It is";
            setTimeout(() => {
                document.querySelector("#result").textContent = "It is.";
                setTimeout(() => {
                    document.querySelector("#result").textContent = "It is..";
                    setTimeout(() => {
                        document.querySelector("#result").textContent = "It is...";
                        setTimeout(() => {
                            document.querySelector("#result").textContent = "";
                            document.querySelector("#dice5").style.display = "block";
                    }, 1510);    
                }, 1500);    
            }, 1000);    
            }, 500);
            break;
        case 6:
            document.querySelector("#dice1").style.display = "none";
            document.querySelector("#dice2").style.display = "none";
            document.querySelector("#dice3").style.display = "none";
            document.querySelector("#dice4").style.display = "none";
            document.querySelector("#dice5").style.display = "none";
            document.querySelector("#result").textContent = "It is";
            setTimeout(() => {
                document.querySelector("#result").textContent = "It is.";
                setTimeout(() => {
                    document.querySelector("#result").textContent = "It is..";
                    setTimeout(() => {
                        document.querySelector("#result").textContent = "It is...";
                        setTimeout(() => {
                            document.querySelector("#result").textContent = "";
                            document.querySelector("#dice6").style.display = "block";
                    }, 1510);    
                }, 1500);    
            }, 1000);    
            }, 500);
            break;
    }
}
