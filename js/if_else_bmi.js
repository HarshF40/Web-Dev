
const markHeight = 1.69;
const markMass = 95;
const johnHeight = 1.69;
const johnMass = 92;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if(markBMI > johnBMI){
  console.log(`
Mark's BMI is Higher than John's.`);
} else {
  console.log(`
John's BMI is Higher than Mark's.`);
}

console.log(`
Mark's BMI : ${markBMI}
John's BMI : ${johnBMI}
`);
