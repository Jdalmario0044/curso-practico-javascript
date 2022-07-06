// function PPonderado(n1,n2,n3,c1,c2,c3) {
//     return ((n1 * c1)+(n2 * c2)+(n3 * c3)) / (c1 + c2 +c3);
// }

const notes= [
    {
        note: 10,
        credit: 2
    },
    {
        note: 8,
        credit: 5
    },
    {
        note: 7,
        credit: 5
    }
];

const notesWithCredit= notes.map(function (noteObjet) {
    return noteObjet.note * noteObjet.credit;
});

const sumOfNotesWithCredit= notesWithCredit.reduce(
    function (sum= 0, newVal) {
        return sum + newVal;      
    }
);

const credits= notes.map(function (noteObjet) {
    return noteObjet.credit;
});

const sumOfCredits= credits.reduce(
    function (sum= 0, newVal ) {
        return sum + newVal;
    }
);

const PPonderado= sumOfNotesWithCredit / sumOfCredits;

