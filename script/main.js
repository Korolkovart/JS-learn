let num = 266219;

let multiplication = [...num.toString()].reduce((a,b) => a * b);
console.log(multiplication);


let exponentiation = multiplication ** 3
console.log(exponentiation);

let bothNum = exponentiation.toString().slice(0, 2);
console.log (bothNum);












