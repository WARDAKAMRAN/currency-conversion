//#! /usr/bin/env node
// inquirer instull

import inquirer from "inquirer";

// currency convertions object
let currencyConversion ={
    "PKR":{
        "USD" : 0.0036,
        "GBP" : 0.0029,
        "PKR" : 1,

    },
    "GBP":{
        "USD" : 1.25,
        "GBP" : 1,
        "PKR" : 347.82,
    },
    "USD": {
        "USd" : 1,
        "GBP" : 0.80,
        "PKR" : 278.50,

    },
};

// prompt user for input

const answer: {
    from: "PKR" |"GBP" |"USD",
    to: "PKR" |"GBP" |"USD",
    amount: number,
}= await inquirer.prompt([{
    type: "list",
    name: "from",
message: "please select your currency?",
choices: ["PKR","GBP","USD"],
},
{
    type: "list",
    name: "to",
message: "please select your converstion rate",
choices: ["PKR","GBP","USD"]
},
{
    type: "number",
    name: "amount",
message: "please enter the amount you wish to convert",
}
]);

//Destructuring user input
const {from, to, amount} = answer;
// perform currency conversion

if(from && to && amount){
    let result = currencyConversion[from][to] *amount;
    console.log(`your Conversion from ${from} to ${to} is ${result}`);
}else {
    console.log("invalid conversion");
}
