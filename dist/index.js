"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
// Q1
function questions() {
    const str1 = (0, readline_sync_1.question)("Please enter the firs number\n");
    const opr = (0, readline_sync_1.question)("Please enter the operator (+, -, *, /)\n");
    const str2 = (0, readline_sync_1.question)("Please enter the second number\n");
    const num1 = parseInt(str1);
    const num2 = parseInt(str2);
    validation(num1, opr, num2);
}
function validation(num1, opr, num2) {
    let operators = ["+", "-", "*", "/"];
    console.log(!operators.includes(opr));
    console.log(isNaN(num1));
    console.log(isNaN(num2));
    console.log(isNaN(num1) || isNaN(num2) || !operators.includes(opr));
    if (isNaN(num1) || isNaN(num2) || !operators.includes(opr)) {
        console.log("invalid input");
        questions();
    }
    else {
        console.log("result:", calculation(num1, opr, num2));
    }
}
function calculation(num1, opr, num2) {
    if (opr == "+") {
        return num1 + num2;
    }
    else if (opr == "-") {
        return num1 - num2;
    }
    else if (opr == "*") {
        return num1 * num2;
    }
    else if (opr == "/") {
        return num1 / num2;
    }
}
let firstUser = {
    name: "Amal",
    age: 22,
    specialization: "IS",
    firstBF: "Hadeel",
    secondBF: "Eman",
    thirdBF: "Lama",
};
// Results
console.log("------Q1------");
questions();
console.log("\n------Q2------");
console.log(`User Info`);
console.log(`Name: ${firstUser.name}`);
console.log(`Age: ${firstUser.age}`);
console.log(`Specialization: ${firstUser.specialization}`);
console.log(`Best friends: ${firstUser.firstBF}, ${firstUser.secondBF}, and ${firstUser.thirdBF}`);
