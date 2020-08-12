// /* the repl.it link https://repl.it/@jennifersmith2/FirstNameLastName#index.js */



 let a = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter","Sean Combs", "Michael Jordan", "Patrick Ewing"] 

let first_name = []
let last_name = []

for(let i = 0; i < a.length; i++){
  let b = a[i].split(" ")
  first_name.push(b[0])
  last_name.push(b[1])
}

console.log(first_name);
console.log(last_name);