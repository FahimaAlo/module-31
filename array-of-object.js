const products = [
    {id: 1, name: 'lenovo', price: 5600},
    {id: 2, name: 'dell', price: 15600},
    {id: 3, name: 'hp', price: 55600},
    {id: 4, name: 'mac', price: 90600},
]
const names = products.map(p => p.name);
// console.log(names);

// foreach
products.forEach(p => console.log(p.id))

// filter

const expensive = products.filter(p => p.price > 50000)
// console.log(expensive);


// find
const affodable = products.find(p => p.price < 50000)
// console.log(affodable);

// reduce
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);