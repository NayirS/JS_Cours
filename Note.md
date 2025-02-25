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

---

##  Commandes Node.js

- `node -v` : Voir la version de Node.js.
- `node "chemin_du_fichier.js"` : Exécuter un fichier JavaScript avec Node.js.
- `npm` : **Node Package Manager** (gestionnaire de paquets pour JavaScript).
- `npm -v` : Voir la version de npm.

---

##  Déclaration des Variables

| Mot-clé  | Modifiable ? | Portée |
|----------|-------------|--------|
| `const`  |  Non      | Bloc   |
| `let`    |   Oui      | Bloc   |
| `var`    |  Oui      | Fonction ( à éviter) |

###  Pourquoi éviter `var` ?
- Problèmes de **portée et de hoisting**.
- Peut provoquer des comportements imprévisibles.

###  Bonne pratique
- **Utiliser `const` par défaut**.
- **Utiliser `let` seulement si la valeur doit changer**.
- **Nom descriptif en camelCase**.
- **Une variable = Une responsabilité**.

---

##  Chaînes de Caractères

###  Caractéristiques
- Séquence de caractères **UTF-16**.
- **Immuables** (les méthodes créent de nouvelles chaînes).
- **Indexées à partir de `0`**.
- Peuvent être déclarées avec **""** ou **''**.

###  Méthodes principales

| Type            | Méthodes |
|----------------|----------------------------------|
| **Manipulation** | `slice()`, `substring()`, `replace()` |
| **Transformation** | `toUpperCase()`, `toLowerCase()`, `trim()` |
| **Recherche** | `indexOf()`, `includes()`, `startsWith()` |
| **Découpage** | `split()` |

###  Attention
- **Retour implicite** : Si une fonction n'a pas d'accolades `{}`, le `return` est implicite.

---

## 🔄 Comparaison en JavaScript

| Opérateur | Comparaison |
|-----------|--------------------------------|
| `==`  | Compare **seulement la valeur** (ex: `"1" == 1` → `true`) |
| `===` | Compare **la valeur et le type** (ex: `"1" === 1` → `false`) |
| `!=`  | Différent en **valeur** (ex: `"1" != 1` → `false`) |
| `!==` | Différent en **valeur et type** (ex: `"1" !== 1` → `true`) |

---

##  Précision des Calculs

- **JavaScript n'est pas conçu pour des calculs précis**.
- Problèmes de précision notamment avec les nombres à virgule flottante.

---

##  JavaScript est Mono-Thread

- Un seul fil d'exécution.
- Doit rester **réactif**.
- Les fonctions sont gérées **les unes après les autres**.
- Une opération doit être terminée avant que la suivante ne soit exécutée.

###  Opérations qui prennent du temps
- Requêtes réseau.
- Opérations disque (lecture/écriture de fichiers).
- Animations complexes.

###  Programmation événementielle
- Un programme JavaScript fonctionne comme **une énorme boucle**.

###  Call Stack (Pile d'appels)
- Gère l'exécution du code source.
- La majorité des appels sont **exécutés immédiatement**.

---

##  Programmation Asynchrone


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

###  `setTimeout()`
- Permet de **simuler l'asynchrone**.
- Exécute une fonction après un délai donné.

###  Callbacks
- Une **fonction passée en paramètre** d'une autre fonction.
- Utilisée pour exécuter du code après une opération asynchrone.

### 🔮 Promesses (`Promise`)
- Objet représentant **une opération asynchrone** en JavaScript.
- Trois états possibles :
  - `pending` (en attente)
  - `fulfilled` (résolue)
  - `rejected` (échouée)

### 📡 API
- **Interface de Programmation**.
- Exemple : `fetch()` est une API permettant de faire des requêtes HTTP.
- **Node.js contient des API natives** (modules intégrés).

---

##  Modules et NPM

- **`npm` (Node Package Manager)** est un **gestionnaire de paquets**.
- Permet d'installer, partager et gérer des **bibliothèques JavaScript**.

###  Modules en Node.js
- Un module peut être **interne** ou **externe**.
- Exemple de module natif : `fs` pour gérer les fichiers.
- Utilisation des **`require` et `import/export`** pour charger des modules.

###  Toujours ignorer `node_modules/` sur Git

Dans `.gitignore`, ajouter :
```plaintext
node_modules/
```

---

##  Interface de Ligne de Commande (CLI)

- **CLI (Command Line Interface)** : Exécuter des commandes via un terminal.
- `npmjs.com` contient **toutes les dépendances compatibles avec npm**.
-  **Télécharger un paquet non maintenu peut être dangereux et incompatible avec notre version de Node.js**.

---

 **Ces notes te serviront pour bien comprendre et structurer ton apprentissage en JavaScript !** 

