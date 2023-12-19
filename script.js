// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
  // Prompt for password length
  // At least 8 characters, no more than 128 characters
  // Conditional to check that the number that was entered is in range
  // Prompts store data as strings, so need to parse into a number
  // If the user's input is out of range, either return out of the function or call the function again

  // Confirm which character sets to use
  // If the user answers false for all, either return out of the function or call the function again
  
  // Once they select a character set:
  // Generate a random character for each selected character set
  // Either push selected character sets to a mega-array of all selected characters
  // OR you can keep the arrays separate and generate a random number to select the array and another to select the index
  
  // Once character sets are selected, move on to generating random characters


// Function for getting a random element from an array
  // Need a variable to hold the password as it's being generated
  // Need a variable to hold the index that's being generated

  // For loop that loops the number of times that matches the length the user chose
  // Generate a random number
  // That number is the index for a character in the mega-array
  // So then, mega-array[generated-index] is the actual character
  // Add that character to the password

  // Once we finish the for loop, return the generated password

// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



const generatedPassword = '';
function getPasswordOptions() {
  let passwordLength = parseInt(prompt('Enter password length (between 8 and 128 characters):'));

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert('Please enter a valid number between 8 and 128.');
    return null; // Returning null indicates an invalid entry
  }

  const useLowercase = confirm('Do you want to include lowercase letters?');
  const useUppercase = confirm('Do you want to include uppercase letters?');
  const useNumbers = confirm('Do you want to include numbers?');
  const useSymbols = confirm('Do you want to include special characters?');

  if (!(useLowercase || useUppercase || useNumbers || useSymbols)) {
    alert('Please select at least one character set.');
    return null; // Returning null indicates an invalid entry
  }

  const selectedCharOptions = [];
  if (useLowercase) selectedCharOptions.push(...lowerCasedCharacters);
  if (useUppercase) selectedCharOptions.push(...upperCasedCharacters);
  if (useNumbers) selectedCharOptions.push(...numericCharacters);
  if (useSymbols) selectedCharOptions.push(...specialCharacters);

  return { passwordLength, selectedCharOptions };
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function generatePassword() {
  const options = getPasswordOptions();
  if (options) {
    let generatedPassword = '';
    for (let i = 0; i < options.passwordLength; i++) {
      const randomChar = getRandom(options.selectedCharOptions);
      generatedPassword += randomChar;
    }
    return generatedPassword;
  } else {
    return 'Invalid options. Please try again.';
  }
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);