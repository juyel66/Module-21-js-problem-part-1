// practice task 1

function celsiusToFahrenheit(Celsius){
  const Fahrenheit= Celsius * 9/5 + 32;
return Fahrenheit;

}
const temperature = celsiusToFahrenheit(40);
console.log('Fahrenheit Temperature is:', temperature);



// swap

let a= 2;
let b= 4;

 console.log(a,b);

 const temp = a;
 a=b;
 b=temp;
 console.log(a,b)





// practice task 2



function countOccurrences(numbers, find) {
  let count = 0;
  for (let number of numbers) {
      if (number === find) {
          count++;
      }
  }
  return count;
}

// Test cases
let numbers1 = [5, 6, 11, 12, 98, 5];
let find1 = 5;
console.log("Output 1:", countOccurrences(numbers1, find1)); // Output: 2

let numbers2 = [5, 6, 11, 12, 98, 5];
let find2 = 25;
console.log("Output 2:", countOccurrences(numbers2, find2)); // Output: 0



// practice task 3

// vowels

function countVowels(str) {
  // Convert the string to lowercase to make the comparison case-insensitive
  str = str.toLowerCase();
  
  // Define an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  // Initialize a count variable to store the number of vowels
  let count = 0;
  
  // Loop through each character of the string
  for (let char of str) {
      // If the character is a vowel, increment the count
      if (vowels.includes(char)) {
          count++;
      }
  }
  
  // Return the count of vowels
  return count;
}

// Test cases
let str1 = "Hello World";
console.log("Number of vowels in '" + str1 + "':", countVowels(str1)); // Output: 3

let str2 = "JavaScript";
console.log("Number of vowels in '" + str2 + "':", countVowels(str2)); // Output: 3





// practice task 4

function findLongestWord(str) {
  // Split the string into an array of words
  let words = str.split(" ");
  
  // Initialize variables to keep track of the longest word and its length
  let longestWord = "";
  let maxLength = 0;
  
  // Loop through each word in the array
  for (let word of words) {
      // If the length of the current word is greater than the current maximum length,
      // update the longest word and its length
      if (word.length > maxLength) {
          longestWord = word;
          maxLength = word.length;
      }
  }
  
  // Return the longest word
  return longestWord;
}

// Test case
let input = "I am learning Programming to become a programmer";
console.log("Longest word:", findLongestWord(input)); // Output: Programming



// practice task 5


function generateRandomNumber(min, max) {
  // Generate a random decimal number between 0 and 1
  let randomDecimal = Math.random();
  
  // Scale and shift the random decimal to the desired range
  let randomNumber = randomDecimal * (max - min + 1) + min;
  
  // Use Math.floor to truncate the decimal and return an integer
  return Math.floor(randomNumber);
}

// Generate a random number between 10 and 20
let randomNumber = generateRandomNumber(10, 20);
console.log("Random number between 10 and 20:", randomNumber);



