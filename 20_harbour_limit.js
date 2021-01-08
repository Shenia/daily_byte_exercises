// 2020-01-07

// assumptions: given a 2D array, assume that any
// horizontally or vertically attached S tiles together
// represent one boat, no one boat can occupy both vertically
// and horizontally connected S tiles
function canSail(array, limit) {
  let num_boats = getNumBoats(array);
  if (num_boats + 1 >= limit) {
    return false;
  } else {
    return true;
  }
}

function getNumBoats(array) {
  let checked = [];
  for (const row in array) {
    checked.push([]);
    for (const col in array[row]) {
      checked[row].push(false);
    }
  }
  let numBoats = 0;
  for (row = 0; row < array.length; row++) {
    for (column = 0; column < array[row].length; column++) {
      if (!checked[row][column] && array[row][column] === 'S') {
        numBoats += 1;
        checked[row][column] = true;
        let i = row + 1;
        let j = column + 1;
        while (i < array.length && array[i][column] === 'S') {
          checked[i][column] = true;
          i+=1;
        }
        while (j < array[row].length && array[row][j] === 'S') {
          console.log("next row");
          checked[row][j] = true;
          j+=1;
        }
      }
    }
  }
  return numBoats;
}

let O = 'O';
let S = 'S';

example1 = [
  [O, O, S],
  [S, O, O],
  [O, O, S],
];
example1_limit = 5;
example1_answer = true;
example2 = [
  [O, O, O],
  [S, O, S],
  [O, O, S],
];
example2_limit = 3;
example2_answer = false;

console.log(
  'Expect',
  example1_answer,
  ', got',
  canSail(example1, example1_limit)
);
console.log(
  'Expect',
  example2_answer,
  ', got',
  canSail(example2, example2_limit)
);

// runtime: O(n)
// space: O(n)