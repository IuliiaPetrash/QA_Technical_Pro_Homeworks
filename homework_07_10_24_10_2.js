var str = "Wonderful, Joyful, Happiness, Time, Task, Apple";
var re = /\b[^Aa\s]{6,}\b/g;
console.log(str.match(re));