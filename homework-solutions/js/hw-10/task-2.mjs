/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/

function countOccurrences(numbers) {
  return numbers.reduce((accumulator, number) => {
    accumulator[number] = (accumulator[number] ?? 0) + 1;
    return accumulator;
  }, {});
}

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

export { countOccurrences };
