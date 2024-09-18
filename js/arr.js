
const temp = [17,21,23];

const printForecast = function (t) {
  let str = '';
  for(let i=0;i<t.length;++i){
    str = str + ` ${temp[i]}°C in ${i+1} days ... `
  }
  console.log(` ...`+str);
}

printForecast(temp);
