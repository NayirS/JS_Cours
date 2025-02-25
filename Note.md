# NOTES JS

## Environnement 

ecma script = une version de js 
une version de ecma script s'ecrit es (avec un chiffre ou une date ) note js est un executable de js les outils peut varier si on utilise le navigateur web ou note js la version es 6 (2015) et celle qui a le plus révolutionner 

vérifier avec quel lts notre environnement est compatible il faut etre vigileant avec ça en node 

en js l'error est pendant l'éxécution donc le risque est bien présent contrairement au csharp
plus difficile a détecter car elle son lieu à l'execution pas de compilation


java script bon début mais évolution compliquer il faut etre rigoureux

node est indispensable pour le javasxript

## commande Node

node vs version : voir la version de node 
node "chemin du fichier a executer" : executer notre code
npm = node packet manager
npm -v : version npm
let : variable modifiable 
const : constante , scope de bloc
var : ancienne méthode (à éviter ) , scope de la fonction 
gros problème potentillement ne va pas respecter les copes et les portées (interdit d'utiliser var)

utiliiser const par défaut 
let uniquement si la valeur doit changer
nom descriptif en camelcase
une variable = une resposabilité

utililser que let et const pour le scope 
le type primitif quand on crée une fonction qui renvoie une valeur la valeur ne bouge pas hors de la fontion mais d'un type complexe tout ce qui est hors est rapporté et les valeurs hors change par rapport  a ce qui est dans la fonction

# Chaines de caractères : Théories 
**Caractéristiques**

Séquence de caractères UTF-16
Imuables (les méthodes créent de nouvelleschaines)
indexées à partir de 0 
Peut utiliser ", "ou"

Méthodes Principales 
Manipulation : slice() , substring() , replace()
Transformation : toUpperCase() , toLowerCase() , trim()
    Recherche : indexOf , includes , startswith
    Découpages

attention si on enleve les accolade le return est implicite 

il existe deux manières de tester l'égalité en javascript 
== et === le triple === compare le contenue et le type tu peux bien avoir deux fois 1 si un et en string le triple egal renvoi false et la meme pour les inégalité != , !==