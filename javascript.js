
function makeGrid (x) {
    
    for(i = 0; i < x; i++) {
        const theGrid = document.querySelector('.container');
        const myRow = document.createElement('div');
        myRow.classList.add('block'); 
        theGrid.append(myRow);
    }
}

makeGrid(256); 
