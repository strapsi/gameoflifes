
function createRandomState() {
    return Math.random() < 0.5 ? false : true;
}

function createMap(sizeX, sizeY) {
    var map = new Array();

    for (var i = 0; i < sizeX; i++) {
        map.push(new Array());
        for (var n = 0; n < sizeY; n++)
            map[i].push(createRandomState());
    }
    return map;
}

function drawMap(map) {
    let output = '';
    for (let i = 0; i < map.length; i++) {
        for (let n = 0; n < map[i].length; n++) {
            output += map[i][n] ? '*' : ' ';
        }
        output += '\n';
    }
    console.log(output);
}

function isNeighboutAlive(map, x, y) {
    if (x >= 0 && y >= 0 && x < map.length && y < map[0].length) return map[x][y];
    else return false;
}

function calculateAmountOfLivingNeighbors(map, x, y) {
    let count = 0;
    let coordinates = [[x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y], [x - 1, y - 1], [x - 1, y + 1], [x + 1, y - 1], [x + 1, y + 1]];

    for (let i = 0; i < coordinates.length; i++)
        if (isNeighboutAlive(map, coordinates[i][0], coordinates[i][1])) count++;

    return count;
}

function setDeadOrAlive(isAlive, neighboursCount) {
    if (isAlive) return neighboursCount >= 2 && neighboursCount <= 3;
    else return neighboursCount == 3;

}

function calculateLifeCycle(map) {
    let newMap = createMap(map.length, map[0].length);

    for (let i = 0; i < map.length; i++) {
        for (let n = 0; n < map[0].length; n++) {
            let amountOfLivingNeighbors = calculateAmountOfLivingNeighbors(map, i, n);
            newMap[i][n] = setDeadOrAlive(map[i][n], amountOfLivingNeighbors);
        }
    }
    return newMap;
}

// sleep
function waitForNewCycle(waitTime) {
    let stop = new Date().getTime();
    while (new Date().getTime() < stop + waitTime) {
        ;
    }
}

function gameCycle(map) {
    while (true) {
        drawMap(map);
        map = calculateLifeCycle(map);
        waitForNewCycle(500);
    }
}

function gameoflife(sizeX, sizeY) {
    var map = createMap(sizeX, sizeY);

    gameCycle(map);
}

gameoflife(40, 80);
