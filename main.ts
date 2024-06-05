#! /usr/bin/env node
import inquirer from "inquirer";

let answer : { sentence : string } = await inquirer.prompt({
    name : "sentence",
    type : "input",
    message : "Enter your sentence to count the words : "
})

let {sentence} = answer

const word : string[] = sentence.trim().split(" ")
const wordCount : number = word.length
console.log(`Your sentence contain these words : ${word}\nNumber of Words : ${wordCount}`);
