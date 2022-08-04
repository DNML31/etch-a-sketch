
const linebreak = document.createElement('br');
const theGrid = document.querySelector('.container');
const theGridChild = document.querySelector('.grid');

function makeRow (x) {
    for(i = 0; i < x; i++) {
        const myRow = document.createElement('div');
        myRow.classList.add('gridblock'); //this class is red blocks
        theGrid.append(myRow);
        // theGrid.append(linebreak);
    }
}


function makeGrid (x, y) {
    for(j = 0; j < y; j++) {
        makeRow(x);
        const myCol = document.createElement('div');
        myCol.classList.add('gridrock'); //this class is blue blocks
        theGridChild.append(myCol);
    }
}
makeGrid(4, 4);



// function makeGrid (x, y) {
//     for(j = 0; j < y; j++) {
//         makeRow(x);
//         const myGrid = document.createElement('div');
//         myGrid.classList.add('gridblock');
//         theGrid.append(myGrid);

//     }
// }

// makeGrid(2, 2);