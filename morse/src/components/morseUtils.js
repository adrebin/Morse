const LETTERS_TO_MORSE = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----",
  ".": "-.-.-",
  ",": "--..--",
  "?": "..--..",
  ":": "---...",
  ";": "-.-.-.",
  "-": "-....-",
  "'": ".----.",
  "/": "-..-.",
  "\"": ".-..-.",
  "!": "-.-.--",
  "(": "-.--.",
  ")": "-.--.-",
  "+": ".-.-.",
  "@": ".--.-.",
}

const MORSE_TO_LETTERS = Object.fromEntries(
  Object.entries(LETTERS_TO_MORSE).map(([key, value]) => [value, key])
);

const WORD_CHAR = "/";
const LETTER_GAP = " ";

export function convertMorseToText(morseString) {
  let textString = "";

  let currentLetterMorse = "";
  for (let i = 0; i < morseString.length; i++) {
    const char = morseString[i];

    if (char === '.' || char === "-") {
      currentLetterMorse += char;
    } else if (char === LETTER_GAP) {
      if (currentLetterMorse !== "") {
        const convertedLetter = MORSE_TO_LETTERS[currentLetterMorse] ?? "[not sure]";
        textString += convertedLetter;
        currentLetterMorse = "";
      }
    } else if (char === WORD_CHAR) {
      textString += " ";
      currentLetterMorse = "";
    }
  }

  if (currentLetterMorse !== "") {
    const convertedLetter = MORSE_TO_LETTERS[currentLetterMorse] ?? "[not sure]";
    textString += convertedLetter;
  }

  return textString;
}

export function convertTextToMorse(text) {
  let morseString = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const upperChar = char.toUpperCase();
    if (Object.keys(LETTERS_TO_MORSE).includes(upperChar)) {
      morseString += LETTERS_TO_MORSE[upperChar] + " ";
    } else if (char === " ") {
      morseString += " / ";
    } else {
      morseString += "[not sure]"
    }
  }

  return morseString;
}