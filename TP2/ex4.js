// Exercice 4 : Tri des Notes
const notes = [10, 15, 8, 18, 12];

// 3) Arrêt immédiat si une note < 10
for (let i = 0; i < notes.length; i++) {
  if (notes[i] < 10) {
    console.log("Note inférieure à 10 détectée : " + notes[i] + ". Arrêt du script.");
    // break (arrêt immédiat) 
    break;
  }
}

let hasBelow10 = false;
for (let i = 0; i < notes.length; i++) {
  if (notes[i] < 10) {
    hasBelow10 = true;
    break;
  }
}
if (hasBelow10) {
} else {
  // 2) Tri croissant
  notes.sort(function (a, b) { return a - b; });
  console.log("Notes triées (croissant) :");
  for (let i = 0; i < notes.length; i++) console.log(notes[i]);

  // 2) Tri décroissant
  notes.reverse();
  console.log("Notes triées (décroissant) :");
  for (let i = 0; i < notes.length; i++) console.log(notes[i]);
}
