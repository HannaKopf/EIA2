//Grundgerüst anlegen
let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");
let valueArray: number [] = [];
//valueArray = schuffle (valueArray)
let y: number = 1;
let divCounter: number = 0;
let cardDiv: HTMLDivElement;
let timeStart: number;
let clickedCard1: HTMLDivElement;
let clickedCard2: HTMLDivElement;

//Anzahl der Paare abfragen
let cardQuestion: string = <string>prompt ("wie viele Kartenpaare", "5-25");
let cardQuestionNumber: number = parseFloat(cardQuestion);
//console.log(cardQuestionNumber);
if (cardQuestionNumber < 5 || cardQuestionNumber > 25) {
    window.location.reload();
}
else {
    createValues();
    createCards();
}

function createValues (): void {
    for (let i: number  = 0; i < cardQuestionNumber; i++ ) {
        valueArray.push(i + 1);
        valueArray.push(i + 1);
    }
    //console.log(valueArray);
}

function createCards (): void {
    for (let x: number = 0; x < cardQuestionNumber; x++) {
        cardDiv = document.createElement ("div");
        divCounter ++;
        wrapper.appendChild(cardDiv);
        cardDiv.innerHTML = valueArray.splice (1, 0) + "";
        cardDiv.style.opacity = "0";
        cardDiv.addEventListener ("click", cardClicked);
        //cardDiv.style = PointerEvent;
    }
    timeStart = Date.now ();
    //console.log(timeStart);
}

function cardClicked (_event: MouseEvent): void {
    let clickedCard: HTMLDivElement = <HTMLDivElement> _event.target;
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
            valueCheck ();
        },            2000);
    }

function valueCheck (): void {
    console.log("valueCheck");
    if (clickedCard1 == clickedCard2) {
        if (cardDiv.style.opacity == "100") {
            remove (cardDiv);
            divCounter --;
            if ( divCounter == 0) {
                let timeEnd: number = Date.now ();
                let timePassed: number = timeEnd - timeStart;
                alert ("Spiel fertig! Zeit:" + timePassed);
            }
        }

    }
    else {
        cardDiv.style.opacity = "0";
    }
}