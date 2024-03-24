#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t Wellcome To CLI - Simple Calculator\n\t ----------------------------------- \n\t");
//Asking Question from User through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "FirstNumber" },
    { message: "Enter your Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select One Operator To Perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//If-else Condition For Calculator
if (answers.operator === "Addition") {
    console.log(`${answers.FirstNumber}`, "+", `${answers.SecondNumber}`, "=", answers.FirstNumber + answers.SecondNumber);
}
else if (answers.operator == "Multiplication") {
    console.log(`${answers.FirstNumber}`, "*", `${answers.SecondNumber}`, "=", answers.FirstNumber * answers.SecondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(`${answers.FirstNumber}`, "-", `${answers.SecondNumber}`, "=", answers.FirstNumber - answers.SecondNumber);
}
else if (answers.operator === "Division") {
    console.log(`${answers.FirstNumber}`, "/", `${answers.SecondNumber}`, "=", answers.FirstNumber / answers.SecondNumber);
}
else {
    console.log("Invalid Input !");
}
