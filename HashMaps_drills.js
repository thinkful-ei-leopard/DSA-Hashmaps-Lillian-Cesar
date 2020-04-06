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

//console.log(main());



//Drill 2
// Making sure that we understand how variables can be overriden.





// Drill 3 

//HashMapArray = [22,10,88,X,4,28,17,15,,59,31,X];

//SeparateChainingArray =[X,28 -> 19 -> 10, 20, 12,5,X,15 -> 33, X,17];



//Drill 4

function RemoveDuplicates(string) {
  let displayString = '';
  let Doop = new Map();

  for (let i = 0; i < string.length; i++) {
    if (!Doop.has(string[i])) {
      Doop.set(string[i])
      displayString += string[i]
    }
  }
  return displayString;
}
//console.log(RemoveDuplicates('google'))

//Drill 6
const anagrams = new Map();
function palindrome(str, prefix = '') {
  
  if(str.length <= 1){
    anagrams.set(`${prefix}${str}`, '');
  } else{
    for(let i = 0; i < str.length; i++) {
      let currentLetter = str.substring(i, i + 1);
      let previousLetters = str.substring(0, i);
      let afterLetters = str.substring(i + 1);
      palindrome(previousLetters+afterLetters, prefix+currentLetter);
    }
  }

  let answer = false;
  anagrams.forEach((value, key) => {
    const splitString = key.split('');
    const reversedArr = splitString.reverse();
    const reversedString = reversedArr.join('');
    if(reversedString === key) {
      answer = true;
      return answer;
    }
  });

  return answer;
}

console.log(palindrome('tacocat'));

