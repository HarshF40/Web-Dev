// ... -> spread operator

const [x, y] = [1,2] //x = 1, y = 2
console.log(x, y)

const [a, ...b] = [1,2,3] // x = 1, y = remaining
console.log(a, b)

/////////////////////////////////////////////////

const c = [1,2,3,4,5]
const d = c //if we do this, c will be a reference to b
//for eg.
d.push("6")
console.log(c, d)

//to avoid this referencing we use ... operator to copy the elements
const e = [...c]
e.push("7")
console.log(c, e)
