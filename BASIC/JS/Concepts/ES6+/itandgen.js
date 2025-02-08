//making a own iterator
let makeRangeIterator = (start = 0, end = Infinity, step = 1) => {
	let nextIndex = start;
	let iterCount = 0;

	const rangeIterator = {
		next(){
			let result;
			if(nextIndex < end){
				result = {value : nextIndex, done : false}
				nextIndex += step
				iterCount++
				return result
			}
			return {value: iterCount, done: true}
		}
	}
	return rangeIterator
}

const iter = makeRangeIterator(1, 20, 2)
let result = iter.next();
while(!result.done){
	console.log(result.value)
	result = iter.next();
}

//generators functions in JS
//generator functions are defined with function*
function* count() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
}

const even = count()
for(const v of even){
	console.log(v)
}

//same implementation of above iterator can be done by
function* makeMyIteratorNew(start = 0, end = Infinity, step = 1) {
	for(let i = start; i <= end; i+=step){
		yield i
	}
}

const newIt = makeMyIteratorNew(0, 50, 2)
for(const val of newIt){
	console.log(val)
}
