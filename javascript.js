const row = document.querySelector('.container');
const linebreak = document.createElement('br');

function makeRow (num) {


    for(i = 0; i < num; i++) {
        const myRow = document.createElement('div');
        myRow.classList.add('gridblock');
        row.appendChild(myRow);
    }

}

function makeGrid (num) {
    
    makeRow(3);
    row.appendChild(linebreak);
        // const column = document.querySelector('.container');
        // column.appendChild(linebreak);
        makeRow(3);
        
        
        // const myCol = document.createElement('div');
        // myCol.classList.add('gridblock');
        // myCol.textContent = makeRow (2);
        // column.appendChild(myCol);

}

makeGrid(3);

// function makeGrid (num) {
//     for(j = 0; j < num; j++) {
        
//         makeRow(num);

//         const line = document.querySelector('.gridrow');
//         const grid = document.createElement('div');

//         for(k = 0; k < num; k++){
//             makeRow(num);
//         }

//         grid.classList.add('grid');
//         line.appendChild(grid);
//     }

// }

// makeGrid(3);