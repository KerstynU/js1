/*Napište funkci, která jako parametry vezme pole a dvě čísla jako indexy. Funkce vypíše 
všechny prvky v poli od prvního do druhého indexu.*/



function vypisKousekPole (pole, startIndex, konecIndex)    {
    for (let i = startIndex; i<= konecIndex, i++) {
      console.log ("vypisuji prvek z pole do indexu" )
      console.log (pole[i]);
    }
}

vypisKousekPole(["ježek", "sova", "buvol", "surikata", "myš", "tapír"], 2,4);

/* Napište funkci, která vezme jako parametr pole čísel a jako výsledek vrátí nové pole, 
kde budou všechna čísla z původního pole zvýšená o tři.*/
const poleCisel = [2,3,7,5,10];

function zvysCislaOTri (pole) {
        for (let index = 0; index < pole.length; index++) {
            pole[index] +=3;            
        }

}

const poleCisel(polecisel);
console.log (poleCisel;)