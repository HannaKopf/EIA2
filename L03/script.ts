window.addEventListener("load", handleLoad);
function handleLoad(_event: Event): void {
    console.log("load");

    //Grundgerüst anlegen
    let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");
    let valueArray: number [] = [];
    //valueArray = schuffle (valueArray)
    let y: number = 0;
    let divCounter: number = 0;
    let cardDiv: HTMLDivElement;

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
        for (let i: number  = 1; i < cardQuestionNumber; i++ ) {
            valueArray.push(i);
            valueArray.push(i);
        }
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
        let timeStart: number = Date.now ();
        console.log(timeStart);
    }

    function cardClicked (_event: MouseEvent): void {
        let clickedCard: HTMLDivElement = <HTMLDivElement> _event.target;
        if (y < 3) { // && cardDiv.style.opacity = "0"
            clickedCard.style.opacity = "100";
            y++;
            //clickedCard = clickedCard + y; // keine Ahnung was genau hier passieren soll
        }
        if (y === 2) {
            window.setTimeout(() => {
                valueCheck ();
            },                2000);
        }
    }

    function valueCheck (): void {
        console.log("valueCheck");
    }

}