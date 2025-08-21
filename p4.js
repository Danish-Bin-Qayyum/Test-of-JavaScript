

const myObject = {
  id: 1,
  items: [
    { name: 'itemA', processed: false },
    { name: 'itemB', processed: true },
    { name: 'itemC', processed: false }
  ]
};

// Define a function that processes an item
function processItem(item) {
  // Simulate some processing
  item.processed = true;
  return item;
}

// Simulate applying the function to some items
myObject.items[1] = processItem(myObject.items[1]);

// Validate if at least one item has been processed
const atLeastOneProcessed = myObject.items.some(item => item.processed === true);

console.log(atLeastOneProcessed); // Output: true