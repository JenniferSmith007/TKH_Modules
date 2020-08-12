/* the repl.it link for this challenge https://repl.it/@jennifersmith2/Budgetappjs */

let weeklyincome = parseInt(prompt("What is your weekly income?"))
let foodcost = parseInt(prompt("How much do you spend on Food a week?"))
let housingcost = parseInt(prompt("Rent Cost?"))
let transportation = parseInt(prompt("Transportation Cost?"))
let othercost = parseInt(prompt("Other Cost?"))
let saveayear = parseInt(prompt("How much would you like to save in a year?"))
let weekspending = foodcost + housingcost + transportation + othercost;
let saving = weeklyincome - weekspending;
let yearsaving = saveayear / 52;

if(saving >= yearsaving) {
  console.log("you're on track!");
}else{
  let delta = yearsaving - saving
  console.log("need to save" + delta + "more per week to meet goal");
}

