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
        let subject = _subject.splice(a, 1);
        let predicate = _predicate.splice(b, 1);
        let object = _object.splice(c, 1);
        verse = verse + subject[0] + " " + predicate[b] + " " + object[c];
        console.log(verse);
        return verse;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=randomPoemScript.js.map