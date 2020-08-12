/* the repl.it link https://repl.it/@jennifersmith2/lyrics */

/*  "Wipe the sweat off my dome, 
spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab,
 or Montero Jeep I can't call it, 
 the beats make me falling asleep I keep falling, 
 but never falling six feet deep I'm out for presidents to represent me, 
 I'm out for presidents to represent me, 
 I'm out for dead presidents to represent me," 
*/
/* take string and turn into an array of strings */
/* iterate into the srings in the array and to replace s w. $ */
/*  create a string from array of strings */

let lyric = "Wipe the sweat off my dome,\
spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab,\
 or Montero Jeep I can't call it, the beats make me falling asleep I keep falling,\
  but never falling six feet deep I'm out for presidents to represent me,\
   I'm out for presidents to represent me, I'm out for dead presidents to represent me " ;
let r = lyric.split(" ");
for(i = 0; i < r.length; i++){
    let b = r[i].replace(/s/g, "$").replace(/S/g, "$");
    r[i] = b;
    
}
console.log(r);
console.log(r.join(" "))