const itemsImperative = (numbers) => {
  const newItems = [];

  const addToNewItem = (number) => {
    newItems.push(number);
  };

  for (let i = 0; i < numbers.length; i++) {
    addToNewItem(numbers[i]);
  }

  return newItems;
};

const itemDeclarative = (numbers) => numbers.map((number) => number);

console.log(itemsImperative([2, 3, 4, 5]));
console.log(itemDeclarative([2, 3, 4, 5]));
