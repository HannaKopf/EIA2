"use strict";
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    console.log("load");
    //Grundgerüst anlegen
    let wrapper = document.getElementById("wrapper");
    let valueArray = [];
    //valueArray = schuffle (valueArray)
    let y = 0;
    let divCounter = 0;
    let cardDiv;
    //Anzahl der Paare abfragen
    let cardQuestion = prompt("wie viele Kartenpaare", "5-25");
    let cardQuestionNumber = parseFloat(cardQuestion);
    //console.log(cardQuestionNumber);
    if (cardQuestionNumber < 5 || cardQuestionNumber > 25) {
        window.location.reload();
    }
    else {
        createValues();
        createCards();
    }
    function createValues() {
        for (let i = 1; i < cardQuestionNumber; i++) {
            valueArray.push(i);
            valueArray.push(i);
        }
    }
    function createCards() {
        for (let x = 0; x < cardQuestionNumber; x++) {
            cardDiv = document.createElement("div");
            divCounter++;
            wrapper.appendChild(cardDiv);
            cardDiv.innerHTML = valueArray.splice(1, 0) + "";
            cardDiv.style.opacity = "0";
            cardDiv.addEventListener("click", cardClicked);
            //cardDiv.style = PointerEvent;
        }
        let timeStart = Date.now();
        console.log(timeStart);
    }
    function cardClicked(_event) {
        let clickedCard = _event.target;
        if (y < 3) { // && cardDiv.style.opacity = "0"
            clickedCard.style.opacity = "100";
            y++;
            //clickedCard = clickedCard + y; // keine Ahnung was genau hier passieren soll
        }
        if (y === 2) {
            window.setTimeout(() => {
                valueCheck();
            }, 2000);
        }
    }
    function valueCheck() {
        console.log("valueCheck");
    }
}
//# sourceMappingURL=script.js.map