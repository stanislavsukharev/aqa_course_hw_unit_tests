// 1

function delayTwoSeconds(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

delayTwoSeconds(() => {
  console.log('message');
});

// 2

const one = new Promise((resolve, reject) => {
  resolve(1);
});

one.then((result) => {
  console.log(result);
});

// 3

const taskThree = new Promise((resolve, reject) => {
  reject('Promise failed');
});

taskThree.catch((err) => console.log(err));

// 4

function promiseNumber(number) {
  return new Promise((resolve, reject) => {
    resolve(number);
  });
}

// 5

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(([p1, p2, p3]) => {
    console.log(p1);
    console.log(p2);
    console.log(p3);
  })
  .catch((rej) => console.log(rej));

// 6

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(([p1, p2, p3]) => {
    console.log(p1);
    console.log(p2);
    console.log(p3);
  })
  .catch((rej) => console.log(rej));

// 7

async function allPromises() {
  try {
    const [p1, p2, p3] = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);

    console.log(p1);
    console.log(p2);
    console.log(p3);
  } catch (error) {
    console.log(err);
  }
}

async function runPromises() {
  try {
    const [p1, p2, p3] = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);

    console.log(p1);
    console.log(p2);
    console.log(p3);
  } catch (error) {
    console.log(error);
  }
}
