const users = [{id: 1, name: 'Ann'}, {id: 2, name: 'Bo'} ];
console.log(users);

console.time('loop');
for (let i=0; i< 1e6; i++ ) {}
console.timeEnd('loop');