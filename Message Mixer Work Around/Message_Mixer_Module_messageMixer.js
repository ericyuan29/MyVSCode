//Message Mixer
/*
Message Mixer is a messaging service that allows you to perform an action on input text and display the output of that behavior to the console. 
For example, with the current functions defined in Message Mixer, you can:

count the characters in a message
capitalize the first character of words
reverse a message's words in place
reversing characters in place
replace the first occurrence of a string
replace all occurrences of a string
encode text by swapping certain characters for other characters

At present, Message Mixer runs as a program in a single file. 
This single file includes functions that define behavior as well as the output. 
Message Mixer knows that by extracting the functions into a module, logic can be reused in different parts of our application.
*/

const MessageMixer = {};

MessageMixer.countCharacter = function countCharacter(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
};

MessageMixer.capitalizeFirstCharacterOfWords = function capitalizeFirstCharacterOfWords(string) {
  let arr = string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    arr[i] = word[0].toUpperCase() + word.substring(1);
  }
  return arr.join(" ");
};


MessageMixer.reverseWord = function reverseWord(word) {
  return word.split("").reverse().join("");
};

MessageMixer.reverseAllWords = function reverseAllWords(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = MessageMixer.reverseWord(words[i]);
  }
  return words.join(" ");
};

MessageMixer.replaceFirstOccurence = function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

MessageMixer.replaceAllOccurrences = function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

MessageMixer.encode = function encode(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o": "0" };
  for (let key in replacementObject) {
    string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]);
  }
  return string;
};

MessageMixer.palindrome = function palindrome(str) {
  return `${str} ${MessageMixer.reverseWord(str)}`;
};

// console.log(MessageMixer.palindrome("ka koo llp"));

MessageMixer.pigLatin = function pigLatin(sentence, character) {
  return sentence.split(' ').join(character + ' ');
};

export default MessageMixer;