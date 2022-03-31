"use strict";
var L02_EventInspector;
(function (L02_EventInspector) {
    // Script wird erste gelesen, wenn HTML geladen ist
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        // Elemente auswählen
        let body = document.getElementsByName("body")[0];
        let div0 = document.getElementById("div0");
        let div1 = document.getElementById("div1");
        let span = document.getElementById("span");
        // Listener installieren am Dokument
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("click", documentClicked);
        document.addEventListener("keyup", documentKeyUp);
        // Listener installieren am Body
        body.addEventListener("click", bodyClicked);
        body.addEventListener("keyup", bodyKeyUp);
        // Listener installieren am div0
        div0.addEventListener("click", div0Clicked);
        div0.addEventListener("keyup", div0KeyUp);
        // Listener installieren am div1
        div1.addEventListener("click", div1Clicked);
        div1.addEventListener("keyup", div1KeyUp);
        // Funktionen implementieren
        //Dokument
        function mouseMove(_event) {
            setInfoBox(_event);
        }
        function documentClicked(_event) {
            logInfo(_event);
        }
        function documentKeyUp(_event) {
            logInfo(_event);
        }
        //Body
        function bodyClicked(_event) {
            logInfo(_event);
        }
        function bodyKeyUp(_event) {
            logInfo(_event);
        }
        //Div0
        function div0Clicked(_event) {
            logInfo(_event);
        }
        function div0KeyUp(_event) {
            logInfo(_event);
        }
        //Div1
        function div1Clicked(_event) {
            logInfo(_event);
        }
        function div1KeyUp(_event) {
            logInfo(_event);
        }
        //Infobox anlegen
        function setInfoBox(_event) {
            //Maus Position auslesen
            let mousePositionX = _event.clientX;
            console.log(mousePositionX);
            let mousePositionY = _event.clientY;
            console.log(mousePositionY);
            // Infobox wird an den Maus Curser gehängt
            span.style.left = mousePositionX + "px";
            span.style.top = mousePositionY + "px";
            //console.log (span);
            //console.log (_event);
            //Mausposition wird in Infobox angezeigt
            span.innerText = "X=" + mousePositionX + " Y=" + mousePositionY;
        }
        //Infobox aktualisieren
        function logInfo(_event) {
            //Eventtype
            let eventType = _event.type + "";
            //Target
            let target = _event.target + "";
            //current Target
            let currentTarget = _event.currentTarget + "";
            //event Objekt
            let eventObjekt = _event + "";
            //Infos in Span ausgeben
            console.log(eventType);
            console.log(target);
            console.log(currentTarget);
            console.log(eventObjekt);
        }
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=script.js.map