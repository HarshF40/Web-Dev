
//team Koalas
const kScore1 = 88;
const kScore2 = 150;
const kScore3 = 110;
const kAvg = (kScore1 + kScore2 + kScore3)/3;

//team dolphin
const dScore1 = 96;
const dScore2 = 108;
const dScore3 = 89;
const dAvg = (dScore1 + dScore2 + dScore3)/3;

console.log(dAvg,kAvg);

if(dAvg > kAvg && dAvg>=100){
  console.log(`Team Dolohin Wins!`);
} else if(dAvg < kAvg && kAvg>=100){
  console.log(`Team Koala Wins!`);
} else if(dAvg === kAvg && kAvg>=100 && dAvg>=100){
  console.log(`Draw`);
} else {
  console.log(`No Decision`);
}

