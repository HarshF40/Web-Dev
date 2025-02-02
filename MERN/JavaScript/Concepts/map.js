//returns an array
//key value pair

const number = [1,2,3,4,5];
const squared = number.map((element) => {
        return Math.pow(element, 2);
});
console.log(number, squared);
