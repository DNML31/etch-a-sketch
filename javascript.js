

function makeRow () {

    for(i = 0; i < 11; i++) {
        const grid = document.querySelector('.grid');
        const myRow = document.createElement('div');
        grid.classList.add('.grid');
        grid.appendChild(myRow);
    }
}

makeRow();