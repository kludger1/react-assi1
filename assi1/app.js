class Developer {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    };

    getName () {
        console.log(this.firstName + " " + this.lastName)
    }
};


class JavaScriptDeveloper extends Developer {
    constructor() {
        super();
    }

    getJob () {
         return "Javascript Developer"
    }
}


const person1 = new Developer("katleen", "ludger")
person1.getName()


const person2 = new JavaScriptDeveloper("Lola", "Brown")

console.log(person2.getJob())

const getGreeting = () => Console.log("Welcome to React Dev")