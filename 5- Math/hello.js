function getTirageDe(n) {
 return Math.floor(n * Math.random() + 1);
}

console.time("boucle");
var resultats = new Array(0,0,0,0,0,0,0);
var nbTirage = 6e6;

for (var i=0; i<nbTirage; i++) {
  var de = getTirageDe(6);
  resultats[de]++;
}

console.timeEnd("boucle");
console.table(resultats);
