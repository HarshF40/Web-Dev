//maps
const numbers = [1,2,3,4,5]
const doubled = numbers.map((num) => 2 * num)
console.log(doubled)

//reduces --> uses accumalator
const sum = numbers.reduce((acc, num) => acc + num, 0) //0 is the initial value of the accumalator
console.log(sum)

//filters out the elements based on the given criteria
const filtered = numbers.filter((num) => num % 2 === 0)
console.log(filtered)
