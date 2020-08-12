/* the repl.it link https://repl.it/@jennifersmith2/Variablegrades */

let grades = Math.floor(Math.random() * 100);
/* mathf.floor(math.random) selects random interger*/
console.log(grades);
/*print out grades with log */
switch(grades) {
  case 100:
  case 99:
  case 98:
  case 97:
  case 96:
  case 95:
    console.log("A+");
    break;
  case 94:
  case 93:
  case 92:
  case 91:
  case 90:
    console.log("A");
    break;
  case 89:
  case 88:
  case 87:
  case 86:
  case 85:
  case 84:
    console.log("B+");
    break;
  case 83:
  case 82:
  case 81:
  case 80:
  case 79:
  case 78:
  case 77:
  case 76:
    console.log("C+");
    break;
  case 75:
  case 74:
  case 73:
  case 72:
  case 71:
  case 70:
    console.log("C");
    break;
  case 69:
  case 68:
  case 67:
    console.log("D+");
    break;
  case 66:
  case 65:
  case 64:
    console.log("D");
    break;
  case 63:
  case 62:
  case 61:
  case 60:
  default:
    console.log("F");
}
/*defualt is f nothing left to plug into */