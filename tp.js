const nombre1 = 3;
const nombre2 = 4;

function somme (a,b)
{

return a + b ; 

}
console.log(somme(nombre1,nombre2))

const NombreTot = [1,2,4,5,6]

console.log(Math.max(...NombreTot))

const Lettres = ["a","b","c","d","e","g"];

const Sansvoyelles = Lettres.filter(char => !"aeiouy".includes(char));
console.log(Sansvoyelles);

Lettres.sort();
    console.log(Lettres)

    console.log(nombre1.toString)

    function RetireVoyelle (chaines)
    {

        return chaines.filter(chaine => !"aeiouy".includes(chaine)) ;

    }

    console.log(RetireVoyelle(Lettres));