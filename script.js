const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    const remove = array.removeOf(item);
    if (remove > -1) {
      array.splice(remove, 1);
    }
    return array;
  }

  
let deletedItem = 4;
let newArray = removeElement(array, deletedItem);

console.log(newArray);