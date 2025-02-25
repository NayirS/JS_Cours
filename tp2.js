function RetireMonnaie(Monnaie) {
  let result = []; 
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
      result.push(Euros[7]); 
  }

  while (Monnaie >= 100) {
    Monnaie -= 100;
    result.push(Euros[6]); 
}

while (Monnaie >= 50) {
  Monnaie -= 50;
  result.push(Euros[5]); 
}

while (Monnaie >= 20) {
  Monnaie -= 20;
  result.push(Euros[4]); 
}
while (Monnaie >= 10) {
  Monnaie -= 10;
  result.push(Euros[3]); 
}
while (Monnaie >= 5) {
  Monnaie -= 5;
  result.push(Euros[2]); 
}

while (Monnaie >= 2) {
  Monnaie -= 2;
  result.push(Euros[1]); 
}

while (Monnaie >= 1) {
  Monnaie -= 1;
  result.push(Euros[0]); 
}

while (Monnaie >= 0.50) {
  Monnaie -= 0.50;
  result.push(centimes[5]); 
}

while (Monnaie >= 0.20) {
  Monnaie -= 0.20;
  result.push(centimes[4]); 
}

while (Monnaie >= 0.10) {
  Monnaie -= 0.10;
  result.push(centimes[3]); 
}
while (Monnaie >= 0.05) {
  Monnaie -= 0.05;
  result.push(centimes[2]);
}
  return result;
}


console.log(RetireMonnaie(545));
