/*
let person = {
    name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    
    sayHello: function() {
      return `Hello, my name is ${this.name}`;
    },
    
    sayGoodbye() {
      return 'Goodbye!';
    }
    
  };
  
  console.log(person.sayHello());
  
  person.hobbies = ['Basketball', 'Coaching'];
  person.hobbies = ['Basketball'];
  console.log(person.hobbies);
  
  
  console.log(person['name']);
  console.log(person['age']);
  
  let day = 'Tuesday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);
  */

// Getters and setters
/*
  let restaurant = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  set seatingCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
      console.log(`${newCapacity} is valid input.`);
    } else {
        console.log(`Change ${newCapacity} to a number.`)
    }
  }
}
*/
// Getter and Setter 2
let person = {
    _name: 'Lu Xun',
    _age: 137,
    
    set age(ageIn) {
      if (typeof ageIn === 'number') {
        this._age = ageIn;
      }
      else {
        console.log('Invalid input');
        return 'Invalid input';
      }
    },
    get age() {
      console.log(`${this._name} is ${this._age} years old`)
      return this._age;
    }
  };

person.age = 'one';
person.age = 39;
console.log(person.age);

//test git
