// 2020-12-30
function lakeSizeIterative(map) {
  let maxSize = 0;
  let visitedMap = [];
  let exploredRoute = [];
  for (const row in map) {
    visitedMap.push([]);
    exploredRoute.push([]);
    for (const column in row) {
      visitedMap[row].push(false);
      exploredRoute[row].push(false);
    }
  }
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++){
      area = exploreLake(map, visitedMap, exploredRoute, i, j);
      if (area > maxSize) {
        maxSize = area;
      }
    }
  }
  return maxSize;
}

function exploreLake(map, visitedMap, exploredRoute, row, column) {
  if (row < 0 || row >= map.length) {
    return 0;
  } 

  if (column < 0 || column >= map[row].length) {
    return 0;
  }

  if (!isLake(map[row][column])) {
    visitedMap[row][column] = true;
    return 0;
  }

  if (visitedMap[row][column]) {
    return 0;
  }

  if (exploredRoute[row][column]) {
    return 0;
  } 
    
  exploredRoute[row][column] = true;
  let area = 1;
  let upperRow = row - 1;
  let lowerRow = row + 1;
  let leftColumn = column - 1;
  let rightColumn = column + 1;

  area += exploreLake(map, visitedMap, exploredRoute, upperRow, column);
  area += exploreLake(map, visitedMap, exploredRoute, lowerRow, column);
  area += exploreLake(map, visitedMap, exploredRoute, row, rightColumn);
  area += exploreLake(map, visitedMap, exploredRoute, row, leftColumn);

  for (let i = 0; i < exploredRoute.length; i++) {
    for (let j = 0; j < exploredRoute[i].length; j++){
      if (exploredRoute[i][j]){
        visitedMap[i][j] = true;
      }
    }
  }

  return area;
}

function isLake(value) {
  if (value === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(
  lakeSizeIterative([
    [0, 0],
    [0, 0],
  ])
);

console.log(
  lakeSizeIterative([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(
  lakeSizeIterative([
    [0, 1, 0],
    [0, 0, 0],
    [1, 1, 1],
  ])
);