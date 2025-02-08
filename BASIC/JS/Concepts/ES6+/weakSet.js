//very limited method
//no iterations
//constructor, has, delete, add
//only objects can be added no other types

let ws = new WeakSet();
const ob1 = {name : "yuki"}
const ob2 = {name : "draco"}
ws.add(ob1);
ws.add(ob2);
ws.delete(ob2);
console(ws.has(ob1));
