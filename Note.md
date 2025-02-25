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
