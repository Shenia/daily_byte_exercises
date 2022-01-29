// 2022-01-28
/**
 * Takes an nxm matrix people representing a grid of people, where 0 represents
 * an empty cell, 1 represents a healthy person, and 2 represents a sick person.
 * It takes 1 minute for a person adjacent to a sick person to get sick. Return
 * the number of minutes it takes for everyone in the grid to get sick.
 * @param {array} people A matrix representing a grid of people
 * @returns {number} mins The number of minutes it takes for everyone in the 
 * grid to get sick
 */
function infection(people) {
  let t = 0;
  const currentPeople = people;
  const tilesToUpdate = [];
  while(true) {
    getTilesToUpdate(currentPeople, tilesToUpdate);
    if (isEveryoneSick(currentPeople)) {
      return t;
    } else if (tilesToUpdate.length == 0) {
      return -1;
    }
    step(currentPeople, tilesToUpdate);
    t = t + 1;
  }
}

/**
 * Update the array of the tiles to update, which are the tiles around 2s that are 1s
 * @param {array} people 
 * @param {array} update
 */
function getTilesToUpdate(people, update) {
  update.length = 0;
  for (const [rowIndex, row] of people.entries()) {
    for (const [colIndex, person] of row.entries()) {
      if (person == 2) {
        if (rowIndex > 0 && people[rowIndex - 1][colIndex] == 1) {
          update.push([rowIndex-1, colIndex]);
        }
        if (colIndex > 0 && people[rowIndex][colIndex - 1] == 1) {
          update.push([rowIndex, colIndex-1]);
        }
        if (rowIndex < people.length - 1 && people[rowIndex + 1][colIndex] == 1) {
          update.push([rowIndex+1, colIndex]);
        }
        if (colIndex < people[0].length - 1 && people[rowIndex][colIndex + 1] == 1) {
          update.push([rowIndex, colIndex+1]);
        }
      }
    }
  }
}

/**
 * Updates the grid of people after 1 step, in place
 * @param {array} people 
 * @param {array} update
 */
function step(people, update) {
  for (const updateCoord of update) {
    const rowIndex = updateCoord[0];
    const colIndex = updateCoord[1];
    people[rowIndex][colIndex] = 2;
  }
}

/**
 * Returns true if the grid contains only 0s and 2s, otherwise false.
 * @param {array} people
 * @returns {boolean} isEveryoneSick
 */
function isEveryoneSick(people) {
  for (const rowIndex in people) {
    for (const person of people[rowIndex]) {
      if (person == 1) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Returns true if the grid contains no active 2s, where an active 2 is a 2
 * with at least a 1 adjacent to it. Returns false otherwise.
 * @param {array} people 
 * @returns {boolean} isInfectionContained
 */
function isInfectionContained(people) {
  for (const [rowIndex, row] of people.entries()) {
    for (const [colIndex, person] of row.entries()) {
      if (person == 2) {
        const upperRow = rowIndex - 1;
        const lowerRow = rowIndex + 1;
        const leftCol = colIndex - 1;
        const rightCol = colIndex + 1;
        if (leftCol >= 0 && row[leftCol] == 1) {
          return false;
        }
        if (rightCol < row.length && row[rightCol] == 1) {
          return false;
        }
        if (upperRow >= 0 && people[upperRow][colIndex] == 1) {
          return false;
        }
        if (lowerRow < people.length && people[lowerRow][colIndex] == 1) {
          return false;
        }
      }
    }
  }
  return true;
}

const array1 = [
  [1,1,1],
  [1,1,0],
  [0,1,2]
];
const array2 = [
  [1,1,1],
  [0,0,0],
  [2,0,1]
];
console.log("Input: " + JSON.stringify(array1) + ", Output: " + infection(array1));
console.log("Input: " + JSON.stringify(array2) + ", Output: " + infection(array2));