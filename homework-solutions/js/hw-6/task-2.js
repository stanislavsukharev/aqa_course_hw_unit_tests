/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique = [];
let resultNull;

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let competitorLowerCase = [];
for (let i = 0; i < competitorPizzas.length; i++) {
  competitorLowerCase.push(competitorPizzas[i].toLowerCase());
}

for (let i = 0; i < myPizzasT1.length; i++) {
  let pizzaLowerCase = myPizzasT1[i].toLowerCase();
  let found = false;

  for (let j = 0; j < competitorLowerCase.length; j++) {
    if (pizzaLowerCase === competitorLowerCase[j]) {
      found = true;
      break;
    }
  }

  if (!found) {
    resultUnique.push(pizzaLowerCase);
  }
}

let tempUnique = [];
for (let i = 0; i < myPizzasT2.length; i++) {
  let pizzaLower = myPizzasT2[i].toLowerCase();
  let found = false;

  for (let j = 0; j < competitorLowerCase.length; j++) {
    if (pizzaLower === competitorLowerCase[j]) {
      found = true;
      break;
    }
  }

  if (!found) {
    tempUnique.push(pizzaLower);
  }
}

resultNull = resultUnique.length === 0 ? (tempUnique.length === 0 ? null : tempUnique) : null;

console.log(resultUnique);
console.log(resultNull);

export { resultNull, resultUnique };
