let wm = new WeakMap();
const ob1 = {name : "yuki"}
const ob2 = {name : "draco"}
wm.set(ob1, "hello")
wm.set(ob2, "hi")
console.log(wm.get(ob1))
console.log(wm.get(ob2))
