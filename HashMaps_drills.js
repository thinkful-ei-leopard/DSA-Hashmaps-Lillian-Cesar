'use strict';
const HashMap = require('./HashMap');

function main() {
  const lotr = new HashMap;

  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');

  return lotr;
}

console.log(main());



//Drill 2
// Making sure that we understand how variables can be overriden.





// Drill 3 

HashMapArray = [22,10,88,X,4,28,17,15,,59,31,X];

SeparateChainingArray =[X,28 -> 19 -> 10, 20, 12,5,X,15 -> 33, X,17];