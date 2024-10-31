
// // for loop..............

// const { addPosition } = require("./class");

// // const oddNumbers = [1, 3, 5, 7, 9];
// const evenNumbers = [];
// for(const number of oddNumbers){
//     const num = number + 1;
//     evenNumbers.push(num);
// }
// // console.log(evenNumbers)



// // map.....................

// const oddNumbers = [1, 3, 5, 7, 9];
// const evenNumbers = oddNumbers.map(number => number + 1);
// // console.log(evenNumbers);


// array filter................
// const numbers = [ 33, 50, 79, 78, 90, 101, 30 ];
// const divide = numbers.filter(num => num %10 === 0);
// // console.log(divide);

// // find .....................

// const fdi= numbers.find(num => num % 10 === 0);
// console.log(fdi);



// // filter.....................
// const instructor = [
//     {name:'Nodi', age:24, position:'Senior'},
//     {name:'Akhi', age:26, position:'Junior'},
//     {name:'Shobuj', age:30, position:'Senior'},
// ]

// export const position = instructor.map(p => p.position);

// console.log(addPosition);
// // console.log(position);

// array reduce.....................
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22},
    
];

const total = people.reduce((acum, current) => acum + current.age, 0);
console.log(total);