const GAME_WIDTH: number = 50;
const GAME_HEIGHT: number = 100;


function isNeighboutAlive(map, x, y) {
    if (x >= 0 && y >= 0 && x < map.length && y < map[0].length) return map[x][y];
    else return false;
}

function getLivinNeighboursCountForCell(gameMap, x, y): number {
  let livingNeighboursCount: number = 0;
  let coordinates = [[x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y], [x - 1, y - 1], [x - 1, y + 1], [x + 1, y - 1], [x + 1, y + 1]];
    for (let i = 0; i < coordinates.length; i++) {
        if (isNeighboutAlive(gameMap, coordinates[i][0], coordinates[i][1])) livingNeighboursCount++;

    }

  // for (let i = x - 1; i <= x + 1; i++) {
  //   if (i >= 0 && i <= gameMap.length - 1) {
  //     for (let j = y - 1; j <= y + 1; j++) {
  //       if (j >= 0 && j <= gameMap[x].length - 1) {
  //         if (i != x && j != y && gameMap[i][j]) {
  //           livingNeighboursCount++;
  //         }
  //       }
  //     }
  //   }
  // }
  return livingNeighboursCount;
}

function getCellDeadOrAlive(gameMap, horIndex, vertIndex): boolean {
  let isNewCellAlive: boolean = false;
  let livingNeighbourCount: number = getLivinNeighboursCountForCell(gameMap, horIndex, vertIndex);
  if (gameMap[horIndex][vertIndex]) {
    isNewCellAlive = livingNeighbourCount == 2 || livingNeighbourCount == 3;
  } else {
    isNewCellAlive = livingNeighbourCount == 3;
  }
  return isNewCellAlive;
}

function getRandomDeadOrAliveState(): boolean {
  return (Math.random() > .5) ? true : false;
}

function createGameMap(): boolean[][] {
  let gameMap: boolean[][] = new Array();
  for (let i = 0; i < GAME_WIDTH; i++) {
    gameMap[i] = [];
    for (let j = 0; j < GAME_HEIGHT; j++) {
      gameMap[i][j] = getRandomDeadOrAliveState();
    }
  }
  return gameMap;
}

function updateGameMap(gameMap): boolean[][] {
  let newLifeCycleMap: boolean[][] = createGameMap();
  for (let i = 0; i < gameMap.length; i++) {
    for (let j = 0; j < gameMap[i].length; j++) {
      newLifeCycleMap[i][j] = getCellDeadOrAlive(gameMap, i, j);
    }
  }
  return newLifeCycleMap;
}

function renderCellState(isCellAlive): string {
  return (isCellAlive) ? '%' : ' ';
}

function waitForNewCycle(waitTime) {
  let stop = new Date().getTime();
  while (new Date().getTime() < stop + waitTime) {
    ;
  }
}

function drawGameMap(map) {
  let output: string = '';
  for (let i = 0; i <= map.length - 1; i++) {
    for (let j = 0; j <= map[i].length - 1; j++) {
      output += renderCellState(map[i][j]);
    }
    output += '\n';
  }
  waitForNewCycle(500);
  console.log(output);
}

function startGameOfLife() {
  let map: boolean[][] = createGameMap();
  while (true) {
    drawGameMap(map);
    map = updateGameMap(map);
  }
}

startGameOfLife();