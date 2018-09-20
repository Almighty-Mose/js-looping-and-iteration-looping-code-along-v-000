// Code your solutions in this file
function printBadges(names) {
  for(let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}

function tailsNeverFails() {
  let tailsCounter = 0;
  
  while (isTails()) {
    tailsCounter++;
  }
  return `You got ${tailsCounter} tails in a row!`;
}

function isTails() {
  return Math.random() >= 0.5;
}