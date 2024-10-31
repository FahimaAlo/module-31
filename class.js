const { position } = require("./practice-task");

const products = [
    {id: 1, name: 'lenovo', price: 5600},
    {id: 2, name: 'dell', price: 15600},
    {id: 3, name: 'hp', price: 55600},
    {id: 4, name: 'mac', price: 90600},
]

// similar
// has some properties, method
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}
const lenovo = new Product('le lenovo');
// console.log(lenovo);
// lenovo.speak('oba kita kau');

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject =subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const tapan = new Teacher('Tapan sir', "physics")
console.log(tapan);
export const addPosition = position.filter(p => p === 'Senior');


