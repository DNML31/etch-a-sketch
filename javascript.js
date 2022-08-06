let theGrid;
let block;


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

function btnPress () {

    let container = document.getElementsByClassName('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        num = prompt("How big do you want the grid?");
        makeGrid(num);

    });

}
btnPress();