let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI>johnBMI;

console.log(markBMI,johnBMI);

if(markHigherBMI) console.log("Mark Has Greater BMI than John");
