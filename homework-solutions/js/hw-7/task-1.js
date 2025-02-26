/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...args) {
  return [].concat(...args);
}

// Example usage:
console.log(mergeArrays([1, 2, 3], [4, 5], [6, 7, 8])); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  let words = sentence.trim().split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word === '') continue;

    if (result === '') {
      result = word.toLowerCase(); 
    } else {
      result += '_' + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
    }
  }

  return result;
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
    первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
    function fibonacci(n) {
      if (n <= 1) return n;

      let previous = 0; 
      let current = 1;  
    
      for (let i = 2; i <= n; i++) {
        let next = previous + current; 
        previous = current; 
        current = next;
      }
    
      return current;
    }

export { mergeArrays, fibonacci, devideBy };
