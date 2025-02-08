
const calcAvg = function(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum/arr.length;
}

const calcTip = function(bill) {
  return ((bill>50 && bill<300 ) ? 0.15*bill : 0.2*bill);
}

const bills = [22,195,176,440,37,105,10,1100,86,52];
let tip = [];
let total = [];

for(let i=0; i<bills.length; i++){
  tip.push(calcTip(bills[i]));
  total.push(tip[i] + bills[i]);
}

console.log(tip, total);
console.log(calcAvg(bills));


