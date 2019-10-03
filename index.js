"use strict";

let persons = [
    "Erik", 
    "Monika"
];
persons.push("Xavier");
persons.unshift("Andreas");
console.log(persons);

let removedPerson = persons.shift();
console.log(removedPerson);
console.log(persons);
// alert("In dem Kurs sind " + persons.length + " Teilnehmer");