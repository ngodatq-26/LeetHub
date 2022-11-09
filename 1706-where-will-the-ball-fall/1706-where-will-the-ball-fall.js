/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    result = [];
    for (let i = 0; i < grid[0].length; i ++) {
        result[i] = findBottom(0, i, grid);
    }
    
    return result;
};

var findBottom = function(row, col, grid) {
    if(row === grid.length) {
        return col;
    }
    
    var nextColumn = col + grid[row][col];
    if (nextColumn < 0 ||
                nextColumn > grid[0].length - 1 ||
                grid[row][col] != grid[row][nextColumn]) {
            return -1;
        }
    return findBottom(row + 1, nextColumn, grid);
}