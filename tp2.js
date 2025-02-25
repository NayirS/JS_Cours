function RetireMonnaie(Monnaie) {
  let result = []; // Stocke les billets et pièces retirés
  const Centimes = [
      "Un-centime",
      "Deux-centimes",
      "Cinq-centimes",
      "Dix-centimes",
      "Vingt-centimes",
      "Cinquante-centimes"
  ]; 

  const Euros = [
      "Un-euro",
      "Deux-euros",
      "Cinq-euros",
      "Dix-euros",
      "Vingt-euros",
      "Cinquante-euros",
      "Cent-euros",
      "Deux-cents-euros"
  ];

  while (Monnaie >= 200) {
      Monnaie -= 200;
      result.push(Euros[7]); // "Deux-cents-euros"
  }

  return result;
}

// Exemple d'utilisation :
console.log(RetireMonnaie(600)); // ["Deux-cents-euros", "Deux-cents-euros", "Deux-cents-euros"]
