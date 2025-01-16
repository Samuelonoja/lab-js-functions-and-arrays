// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNum, secondNum) {
  return Math.max(firstNum, secondNum);
}
const maxNum = maxOfTwoNumbers(10, 48);
console.log(maxNum);

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord() {
  //console.log(words.length)
  if (words.length === 0) {
    return null;
  }
  let longWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longWord.length) {
      longWord = words[i];
    }
  }
  return longWord.length;
}

const maxArrWord = findLongestWord();
console.log(maxArrWord);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {
  let sumArr = 0;

  for (let i = 0; i < numbers.length; i++) {
    sumArr += numbers[i];
  }

  return sumArr;
}

const finalSum = sumNumbers();
console.log(finalSum);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
  let avrNum = 0;
  for (let i = 0; i < numbers2.length; i++) {
    avrNum += numbers2[i];
  }

  return avrNum / numbers2.length;
}
const finalAvr = averageNumbers();
console.log(finalAvr);

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordSearch, wordCheck) {
  if (words2.length === 0) {
    return null;
  }
  for (let i = 0; i < words2.length; i++) {
    //wordCheck += words2[i];
    if (wordSearch[i] === wordCheck) {
      return true;
    }
  }
  return false;
}
const checker = doesWordExist(words2, "trouble");
console.log(checker);
