import {question} from "readline-sync";

// Q1
function questions(): void {
    const str1:string = question("Please enter the firs number\n");
    const opr:string = question("Please enter the operator (+, -, *, /)\n");
    const str2:string = question("Please enter the second number\n");
    const num1:number = parseInt(str1);
    const num2:number = parseInt(str2);
    validation(num1,opr,num2);
}

function validation(num1:number, opr:string, num2:number) {
    let operators = ["+","-","*","/"];
    if ( isNaN(num1) || isNaN(num2) || !operators.includes(opr)){
        console.log("invalid input");
        questions();
    } else {
    console.log("result:" , calculation(num1, opr, num2));
    }
}

function calculation(num1:number, opr:string, num2:number) {
    if(opr == "+"){
        return  num1 + num2;
    } 
    else if (opr == "-"){
        return  num1 - num2;
    }
    else if (opr == "*"){  
        return num1 * num2;
    }
    else if (opr == "/"){
        return num1 / num2;
    } 
}

// Q2
interface User {
    name:string,
    age:number,
    specialization:string,
    firstBF:string,
    secondBF:string,
    thirdBF:string,
}

let firstUser: User = {
    name: "Amal",
    age: 22,
    specialization: "IS",
    firstBF: "Hadeel",
    secondBF: "Eman",
    thirdBF: "Lama",
}

// Results
console.log("------Q1------")
questions();
console.log("\n------Q2------")
console.log(`User Info`);
console.log(`Name: ${firstUser.name}`);
console.log(`Age: ${firstUser.age}`);
console.log(`Specialization: ${firstUser.specialization}`);
console.log(`Best friends: ${firstUser.firstBF}, ${firstUser.secondBF}, and ${firstUser.thirdBF}`);

