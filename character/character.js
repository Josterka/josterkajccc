alert(`Welcome! My name is Jeffrey, and this story takes place in a haunted forest.`);

const charName = prompt(`What is your character's name?`, `Wanderer`);

const pet = prompt(`What type of pet or companion does ${charName} have?`);

const superpower = prompt(`What superpower does ${charName} have?`);

const trainingYearsText = prompt(`How many years has ${charName} been training?`);

const trainingYears = Number(trainingYearsText);

console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);

const powerLevel = trainingYears * 10;

const likesFighting = confirm(`Does ${charName} like fighting monsters?
Click OK for YES  Click Cancel for NO`);

console.log(likesFighting, typeof likesFighting);

alert(`Gathering magic for ${charName}... almost ready!`);

alert(`====================================

Name: ${charName}
Pet: ${pet}
Superpower: ${superpower}
Power Level: ${powerLevel}
Monster fighter? ${likesFighting ? "Yes" : "No"}

In the haunted forest, ${charName} travels with a loyal ${pet}.
Using the power of ${superpower}, ${charName} prepares for the adventure ahead!

====================================`);