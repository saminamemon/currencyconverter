#! /usr/bin/env node

import inquirer from "inquirer"
  let convert ={

    "pakrupee":{
    "usdollar":228.25,
   "saudiriyal":60.74,
"pakrupee":1,

    },
"usdollar":{
    "saudiriyal":3.76,
    "pakrupee":228.25,
    "usdollar":1,
},
    

"saudiriyal":{
    "pakrupee":60.74,
    "usdollar":0.27,
    "saudiriyal":1,
},
}



let answers :{

    from:"pakrupee"|"usdollar"| "saudiriyal"

    to:"pakrupee"|"usdollar"| "saudiriyal"
    "amount" :number
}=  await inquirer.prompt([{
    
    type : "list",
    name : "from",
    choices : [ "pakrupee","usdollar" ,"saudiriyal"],
    message : "you want to convert your currency from:"},
{
    type : "list",
    name : "to",
    choices : [ "pakrupee","usdollar" ,"saudiriyal"],
    message : "you want to convert your currency to:"},
    {
    type : "number",
    name : "amount",
    
    message : "plz enter your amount:"}


])
const {from,to,amount}=answers
 let answer= answers.amount =Math.floor(2)
// let result= answers.from, answers.to,answers
 if (answers.from && answers.to && answers.amount) {
    let convertedAmount= convert
    [from][to]*amount;
   
    console.log(`your's converted amount is${from}to${to} is ${convertedAmount}`)
    
} else{
    "insufficent amount"
}

