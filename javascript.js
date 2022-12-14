let block;
let theGrid;

function makeGrid () {
    
    let x = prompt("how many blocks per side?");
    let y = x * x;

    let z = (700 / x) + "px";

    if (typeof y === "number") {

        if (x > 100) {
            let x = prompt("please choose a number smaller than 100.")
            let y = x * x;
            makeGrid(y);
        } else {
            for(i = 0; i < y; i++) {

                const theGrid = document.querySelector('#container');
                const block = document.createElement('div');

                block.style.height = z;
                block.style.width = z;

                theGrid.append(block);
                block.addEventListener('mouseenter', ()=> {
                    block.classList.add('change');
                });
            }
        }
        
    } else if (typeof y !== "number") {
        let x = prompt("please enter a number. how many blocks per side?");
        let y = x * x;
        makeGrid(y);
    }
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    let answer = document.getElementById('container');
    let container = document.getElementById('container');
    
    if (answer.hasChildNodes()) {
        while (container.firstChild) {
        container.removeChild(container.firstChild);
        }
        makeGrid();
    } else {
        makeGrid();
        return;
    } 
});