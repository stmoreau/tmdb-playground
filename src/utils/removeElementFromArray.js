export const removeElementFromArray = (array, el) => {
  const index = array.indexOf(el);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};
