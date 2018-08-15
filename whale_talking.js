// -- whale talking case
/*
let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (i = 0; i < input.length; i++) {
    for (j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
    if (input[i] === 'e') {
        resultArray.push(input[i]);
    }
    if (input[i] === 'u') {
        resultArray.push(input[i]);
    }
}


console.log(resultArray.join('').toUpperCase());
*/

// --whale talk solution 2
/*
const userInput = 'javascript cool';
let whaleTalkTranslate = parameter => {
    let translate = '';
    for (let i = 0; i < parameter.length; i++) {
        let oneWord = parameter.charAt(i);
        if (oneWord === 'a' || oneWord === 'i' || oneWord ==='o') {
            translate = translate + oneWord;
        } else if (oneWord === 'e' || oneWord === 'u') {
            translate = translate + oneWord;
            translate = translate + oneWord;
        } else if (oneWord === ' ') {
            translate = translate + oneWord;
        }
    }
    return translate;
}

console.log('Translation: ' + whaleTalkTranslate(userInput).toUpperCase());
*/

/*
project:
Mini Linter
In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.
This is the same type of work that word processing software does. 
Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. 
In this project, you will create a miniature version of a linter using array methods that you have learned.
*/

let person = {
    name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    
    sayHello: function() {
      return 'Hello, my name is ${this.name}';
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
