/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;

  const lowerCaseWord = word.toLowerCase();
  return lowerCaseWord === lowerCaseWord.split('').reverse().join('');
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (sentence === '' || typeof sentence !== 'string') return [];

  let words = sentence.split(' ');
  let maxLength = 0;
  let longestWords = [];

  for (let i = 0; i < words.length; i++) {
    let wordLength = words[i].length;

    if (wordLength > maxLength) {
      maxLength = wordLength;
      longestWords = [words[i]];
    } else if (wordLength === maxLength) {
      longestWords.push(words[i]);
    }
  }

  return longestWords;
}

export { isPalindrom, findLongestWords };
