async function createTodo(todoBody) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoBody),
    });

    if (response.status !== 201) {
      throw new Error(`Failed to create todo. Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
  } catch (e) {
    console.error(e.message);
  }
}

const newEntry = {
  userId: 1,
  title: 'Hello',
  completed: false,
};

createTodo(newEntry).then((result) => {
  if (result) {
    console.log(result);
  }
});
