namespace randomPoem {
    //Worte werden in Arrays gepackt
    let subjects: string [] = ["Tonda", "Hanna", "Mattis", "PJ"];
    let predicates: string [] = ["isst", "trinkt", "spielt mit", "liebt"];
    let objects: string [] = ["Katzenfutter", "Wolle", "Eistee", "Pizza"];

    //Arrays testen
    //console.log (subjects);
    //console.log (predicaten);
    //console.log (objects);

    //Schleife mit Laufvariable
    for (let i: number = 4; i >= 1; i-- ) {
        //console.log (i);
        getVerse (subjects, predicates, objects);
    }

    //Wörter zu Satz
    function getVerse (_subject: string [], _predicate: string [], _object: string []): string {
        
        let verse: string = "";

        let a: number = Math.floor (Math.random() * _subject.length);
        console.log (a);

        let b: number = Math.floor (Math.random() * _predicate.length);
        console.log (b);

        let c: number = Math.floor (Math.random() * _object.length);
        console.log (c);

        // let subject: string [] = _subject.splice (a, 1);
        // let predicate: string [] = _predicate.splice (b, 1);
        // let object: string [] = _object.splice (c, 1);

        verse = _subject.splice (a, 1) + " " + _predicate.splice (b, 1) + " " + _object.splice (c, 1);
        console.log (verse);
        return verse;
    }
}




















