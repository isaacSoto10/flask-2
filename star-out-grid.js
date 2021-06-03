// Return the [x, y] position of the star
function findStar(grid) {
    // Loop over all of the rows (y axis)
    for (let y = 0; y < grid.length; y++) {
        // Does the row's columns contain a star?
        // This'll be -1 if there is no star in the row,
        // otherwise it'll be the index of the column that contains the star.
        let x = grid[y].indexOf("*");

        // If we have a star (if not, we'll loop over to the next row)
        if (x > -1) {
            return {x: x, y: y};
        }
    }
}

// Given an [x, y] position and a grid, star out the row and column that
// intersect at the [x, y] position.
function starOut(grid, coords) {

    // Make a copy of the grid (mutation / side effects are bad!)
    // Returning here will of course exit the function and make the
    // outer loop stop running :)
    return grid.map((row, y)=>{
        // Create a clone of the current row in the map
    
        // If it's our current row (the one with the star in it)
        // make the row just all stars
        if (y == coords.y) return new Array(row.length).fill("*");
        
        // If it's not, loop through the row.
        // Return the cell if it's not in the star's column
        // Return a "*" character for that column.
        else return row.map((item, col)=> col == coords.x ? "*" : item);
    });
}

// The function you want, which combines the two tasks together!
function starOutGrid(grid) {
    return starOut(grid, findStar(grid));
}

console.log(starOutGrid([
    ["*", "B", "C"],
    ["D", "E", "*"],
    ["G", "H", "I"],
  ]))