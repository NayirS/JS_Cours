#  Notes JavaScript

##  Environnement

- **ECMAScript (ES)** : Version standardisée de JavaScript.
- Une version d'ECMAScript s'écrit `ES` suivi d'un chiffre ou d'une date (ex: `ES6`, `ES2015`).
- **Node.js** est un environnement d'exécution de JavaScript en dehors du navigateur.
- **ES6 (2015)** est la version qui a apporté le plus de changements majeurs.
- **Compatibilité des versions** : Il faut vérifier avec quelle version LTS notre environnement est compatible.

###  Erreurs en JavaScript
- En JavaScript, les erreurs surviennent **pendant l'exécution** (contrairement au C# où elles sont détectées à la compilation).
- Les erreurs sont donc **plus difficiles à détecter**, nécessitant une grande rigueur.

##  Commandes Node.js

- `node -v` : Voir la version de Node.js.
- `node "chemin_du_fichier.js"` : Exécuter un fichier JavaScript avec Node.js.
- `npm` : **Node Package Manager** (gestionnaire de paquets pour JavaScript).
- `npm -v` : Voir la version de npm.

##  Déclaration des Variables

| Mot-clé  | Modifiable ? | Portée |
|----------|-------------|--------|
| `const`  |  Non      | Bloc   |
| `let`    |  Oui      | Bloc   |
| `var`    |  Oui      | Fonction (⚠️ à éviter) |

###  Pourquoi éviter `var` ?
- Problèmes de **portée et de hoisting**.
- Peut provoquer des comportements imprévisibles.

###  Bonne pratique
- **Utiliser `const` par défaut**.
- **Utiliser `let` seulement si la valeur doit changer**.
- **Nom descriptif en camelCase**.
- **Une variable = Une responsabilité**.

## 📝 Chaînes de Caractères

### Caractéristiques
- Séquence de caractères **UTF-16**.
- **Immuables** (les méthodes créent de nouvelles chaînes).
- **Indexées à partir de `0`**.
- Peuvent être déclarées avec **""** ou **''**.

### Méthodes principales

| Type            | Méthodes |
|----------------|----------------------------------|
| **Manipulation** | `slice()`, `substring()`, `replace()` |
| **Transformation** | `toUpperCase()`, `toLowerCase()`, `trim()` |
| **Recherche** | `indexOf()`, `includes()`, `startsWith()` |
| **Découpage** | `split()` |

### Attention
- **Retour implicite** : Si une fonction n'a pas d'accolades `{}`, le `return` est implicite.

##  Comparaison en JavaScript

| Opérateur | Comparaison |
|-----------|--------------------------------|
| `==`  | Compare **seulement la valeur** (ex: `"1" == 1` → `true`) |
| `===` | Compare **la valeur et le type** (ex: `"1" === 1` → `false`) |
| `!=`  | Différent en **valeur** (ex: `"1" != 1` → `false`) |
| `!==` | Différent en **valeur et type** (ex: `"1" !== 1` → `true`) |

## Précision des Calculs

- **JavaScript n'est pas conçu pour des calculs précis**.
- Problèmes de précision notamment avec les nombres à virgule flottante.


Javascript est mono thread 
un seul fil d'exécution , doit rester réactif , les fonctions son gérées les un après les autres lappel d'avant doit être traiter avant  que celle d'après soit traiter

opération qui prennent du temps 
requete réseau , opération disques (sa bloque le thrad sa prend du temps) , animations complexes

programme : est une enorme boucles 

call stack = pile d'appel c'est la pile d'appel de notre code source
la majorité des appel son les execution immeditate et 

```mermaid {scale: 0.7}    
graph TD 
A[Code JavaScript] -->B[Call Stack]
 B --> C{Opération<br>synchrone?}
  C -->|Oui| D[Exécution immédiate] 
  C -->|Non| E[APIs Asynchrones] 
  E --> F[Callback Queue] 
  F --> G[Event Loop] 
  G --> H{Stack<br>vide?} 
  H -->|Oui| I[Exécuter callback] 
  I --> B 
  H -->|Non| G 
  style A fill:#42b883 
  style G fill:#35495e 
  ```

  set timeout permet de simuler l'asyncrhrone 
  l'usage de callback c'est comme ça que js synchronise au depart


  pROMESSE EST UN OBJET QUI REPR2SENTE UNE OPERATION ASYNCRHONE EN JAVASCRIPT
  il a un etat cette objet qui petu prendre pending  , fullfilled , rejected
  tout les operations asyncrhone on trois etats une appel https c'est pareils
  un objet ce déclare avec "new"
  call back est une fonction passer en paramètres d'une autre fonctions

  api = interface de programmation 
  api c'est tout les outils qu'on utilise map c'est une api de node

  il y a plusieurs module possible (les modules natif) sur la doc notjs c'est bien présenter 
  npm = gestionnaire de paquets 
  utiliser npm pour nos projet node
  lorsque on place le module requipe on peut passer nimporte quel fichier sur notre appli

  export nommé pour lutiliser on met export devant et la variable qu,on veut exporter au debut on peut avoir plusieurs export et si on fait u n export nommé il faut avoir une syntaxe particulière 

  interface de ligne de commande = cli 
  npm js. com = tout les dependance lié a npm
  si vous télecharger un paquet qui n'est pas maintenue donc peut etre dangereux et pas compatible a notre version de node

  le node module TOUJOURS ignorer sur git TOUJOURS -2