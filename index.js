// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(array, string) {
  return array.filter(function (index) {
    if (index.toLowerCase() === string.toLowerCase()) {
      return index;
    }
  });
}

function fuzzyMatch(array, string) {
  return array.filter((element) => element.slice(0, 1) === string.slice(0, 1));
}

function matchName(object, string) {
  return object.filter((driver) => driver.name === string);
}
