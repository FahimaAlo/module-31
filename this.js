class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}
const kodom = new Person('Kodom Ali', 34);
console.log(kodom);
kodom.sleep();