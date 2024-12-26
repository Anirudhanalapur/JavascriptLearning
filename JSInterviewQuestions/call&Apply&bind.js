function Animal(name) {
    this.name = name;
}
function Dog(name, breed) {
    Animal.call(this, name); // Call the Animal constructor
    this.breed = breed;
}
const myDog = new Dog('Buddy', 'Golden Retriever');
console.log(myDog.name);
console.log(myDog.breed);

// -------------------------------------------------------------
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`${this.name} ${this.age}`);
    }
}

class Employee extends Person {
    constructor(name, age) {
        super(name, age);
    }
}
const p = new Employee('anirudh', 12);
p.greet();
// -------------------------------------------------------------

function Person1(name, age) {
    let _name = name;
    let _age = age

    return {
        getName() {
            return _name
        },

        getAge() {
            return _age
        },
        setName(anotherName) {
            _name = anotherName;
        }
    }
}

const person = Person1('anirudh', 20);
person._name = 'jkjkjk';
// -------------------------------------------------------------

let obj = {
    name: 'anirudh',
    getName: function() {
        console.log(this.name);
    const test = () =>{
        console.log(this.name);
    }
    test();
    }
}

// let test = obj.getName()
// test()

console.log(obj.getName());

