





/*function mergeAndDeduplicate(arraysOfObjects, uniqueKey) {
  return arraysOfObjects.reduce((accumulator, currentArray) => {
    // Use a Map to keep track of objects by their unique key for efficient lookup
    const uniqueObjectsMap = accumulator.reduce((map, obj) => {
      map.set(obj[uniqueKey], obj);
      return map;
    }, new Map());

    currentArray.forEach(obj => {
      // If the object's unique key is not in the map, add it
      if (!uniqueObjectsMap.has(obj[uniqueKey])) {
        uniqueObjectsMap.set(obj[uniqueKey], obj);
      }
      // If it exists, you can choose to update the existing object or ignore
      // For this example, we're simply ensuring uniqueness and keeping the first encountered object
    });

    // Convert the Map values back to an array for the next iteration or final result
    return Array.from(uniqueObjectsMap.values());
  }, []); // Initialize with an empty array
}

// Example Usage:
const array1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const array2 = [{ id: 2, name: 'Robert' }, { id: 3, name: 'Charlie' }];
const array3 = [{ id: 1, name: 'Alicia' }, { id: 4, name: 'David' }];

const mergedUniqueArray = mergeAndDeduplicate([array1, array2, array3], 'id');
console.log(mergedUniqueArray);*/

// Q 10 )Use the map function to transform an array into an object,
//  where each word in the array is a key and its index in the array is the value.
console.log(a=['apple', 'banana', 'cherry'].map((a,b,c)=>{return `${a} : ${b}: ${c}` }));//{ apple: 0, banana: 1, cherry: 2 }