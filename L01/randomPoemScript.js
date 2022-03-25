"use strict";
var randomPoem;
(function (randomPoem) {
    //Worte werden in Arrays gepackt
    let subjects = ["Tonda", "Hanna", "Mattis", "PJ"];
    let predicates = ["isst", "trinkt", "spielt mit", "liebt"];
    let objects = ["Katzenfutter", "Wolle", "Eistee", "Pizza"];
    //Arrays testen
    //console.log (subjects);
    //console.log (predicaten);
    //console.log (objects);
    //Schleife mit Laufvariable
    for (let i = 4; i >= 1; i--) {
        //console.log (i);
        getVerse(subjects, predicates, objects);
    }
    //Wörter zu Satz
    function getVerse(_subject, _predicate, _object) {
        let verse = "";
        let a = Math.floor(Math.random() * _subject.length);
        console.log(a);
        let b = Math.floor(Math.random() * _predicate.length);
        console.log(b);
        let c = Math.floor(Math.random() * _object.length);
        console.log(c);
        // let subject: string [] = _subject.splice (a, 1);
        // let predicate: string [] = _predicate.splice (b, 1);
        // let object: string [] = _object.splice (c, 1);
        verse = _subject.splice(a, 1) + " " + _predicate.splice(b, 1) + " " + _object.splice(c, 1);
        console.log(verse);
        return verse;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=randomPoemScript.js.map