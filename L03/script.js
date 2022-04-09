"use strict";
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    console.log("load");
    //Grundgerüst anlegen
    let wrapper = document.getElementById("wrapper");
    let valueArray = [];
    //valueArray = schuffle (valueArray)
    let y = 1;
    let divCounter = 0;
    let cardDiv;
    let timeStart;
    let clickedCard1;
    let clickedCard2;
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
        for (let i = 0; i < cardQuestionNumber; i++) {
            valueArray.push(i + 1);
            valueArray.push(i + 1);
        }
        //console.log(valueArray);
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
        timeStart = Date.now();
        //console.log(timeStart);
    }
    function cardClicked(_event) {
        let clickedCard = _event.target;
        if (y == 1 && clickedCard.style.opacity == "0") {
            clickedCard.style.opacity = "100";
            y++;
            clickedCard1 = clickedCard;
        }
        if (y == 2 && clickedCard.style.opacity == "0") {
            clickedCard.style.opacity = "100";
            y++;
            clickedCard2 = clickedCard;
        }
        window.setTimeout(() => {
            valueCheck();
        }, 2000);
    }
    function valueCheck() {
        console.log("valueCheck");
        if (clickedCard1 == clickedCard2) {
            if (cardDiv.style.opacity == "100") {
                remove(cardDiv);
                divCounter--;
                if (divCounter == 0) {
                    let timeEnd = Date.now();
                    let timePassed = timeEnd - timeStart;
                    alert("Spiel fertig! Zeit:" + timePassed);
                }
            }
        }
        else {
            cardDiv.style.opacity = "0";
        }
    }
}
//# sourceMappingURL=script.js.map