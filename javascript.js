

function makeGrid (x) {
   
    const theGrid = document.querySelector('.container');

    for(i = 0; i < x; i++) {
        const block = document.createElement('div');
        theGrid.append(block);
        block.addEventListener('mouseenter', ()=> {
            block.classList.add('change');
        });
    }


}

makeGrid(256); 


