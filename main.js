
class Car{
    constructor(model,make,year,costMin,costMax){
    this.model=model,
    this.make=make,
    this.age=this.ageCar(year),
    this.cost=this.random_cost(costMin,costMax)
}
ageCar(year){
    return 2023-year ;
}

random_cost(costMin , costMax){
    return costMin + (costMax-costMin)*Math.random();
}

getDescription(){
    return `A ${this.model} made by ${this.make} at ${this.age} and its cost ${this.cost}`;
}
}

const car1= new Car ("Camry" , "Toyota" , "2015", "1000" ,"3000");
console.log(car1.getDescription());


class Person {
    constructor (firstName,lastName,year){
        this.first=firstName,
        this.last=lastName,
        this.age=this.agePerson(year)
    }

    agePerson(year){
        return 2023-year ;
    }

    getGreeting(){
        return `Hi , I'm ${this.first} ${this.last} and I'm ${this.age} years old.`
    }
}

const Bayan= new Person ("Bayan" , "Alriyati" , "1995");
console.log(Bayan.getGreeting());

// -----------------------------------------------------

counterFunc =(counter)=> { (counter > 100) ? counter = 0 :counter++;
    return counter;
  }
  
// -----------------------------------------------------

nameAge =(name, age)=> {
    console.log("Hello " + name);
    console.log("I am " + age + " years old");
  }
  nameAge("talab",29)
  
// -----------------------------------------------------
const createFullName=(firstName, lastName)=> {
    return firstName + " " + lastName;
  }
  
// -----------------------------------------------------
const doubleNumber=(number)=> {
    return number * 2;
  }
  
// -----------------------------------------------------
const getEvenNumbers=(array)=> {
    let evenNumbers = [];
    for (let i of array) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  };



// -----------------------------------------------------
let nums = [2, 4, 5];
let result =nums.reduce((accumulator, currentValue)=>accumulator+currentValue**2,0)/nums.length;
console.log(result);

// -----------------------------------------------------
let list=[1,2,3,4,5,6,7,8];

let result2 = list.map((ele)=> ele*10);

console.log(result2);

// -----------------------------------------------------
let arr =[
         {  name: "Angelina Jolie",
            age: 80   },
        {   name: "Eric Jones",
            age: 2
        },
        {   name: "Paris Hilton",
            age: 5
        },
        {   name: "Kayne West",
            age: 16
        },
        {   name: "Bob Ziroll",
            age: 100
        }
      ];

    let result3 = arr.map((ele)=> (ele.age >=18) ? ele.name +" can go to The Matrix" : ele.name +" is under age!!");
    console.log(result3);

// -----------------------------------------------------
var persons = [
        { name: { first: 'John', last: 'Hob' }, age: 35 },
        { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
        { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
        { name: { first: 'Zues', last: 'Odin' }, age: 55 },
        { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
      ];
      
      let result4 =persons.reduce((accumulator, currentValue)=>{
        console.log(accumulator);
        return accumulator+currentValue.age

      },0);
console.log(result4/persons.length);

// -----------------------------------------------------
arr = ([1,8,6,4]) ;
const result5 = arr.filter(num =>(num%2==0));
console.log(result5);


multiFour =(arr)=> {
     result6 = arr.filter(num =>(num%4==0));
     console.log(result6);
     return result6;
}

multiFour([1,8,6,4]) 