const text = 'Happiness, Time, Task, Apple, Wonderful, Joyful';
const pattern = /\b[^Aa\s]{6,}\b/g;
const result = text.match(pattern);

console.log(result);
