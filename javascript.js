let block;
let theGrid;

function makeGrid (x) {
    x = prompt("how many blocks per side?");
    let y = x * x;
    for(i = 0; i < y; i++) {
        const theGrid = document.querySelector('#container');
        const block = document.createElement('div');
        theGrid.append(block);
        block.addEventListener('mouseenter', ()=> {
            block.classList.add('change');
        });
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

//	*element.querySelectorAll(selectors) returns a “nodelist” containing 
// references to all of the matches of the selectors
// try referencing all previous divs and remove them before adding
// new ones.

// 1 - queryselectorall (divs or class that divs share)
// 2 - delete them
// 3 - re-create blocks with the new number



// anonymous functions - can be stored in variable

// const funkyFunction = function(music, isWhiteBoy) {
//     if (isWhiteBoy) {
//       console.log('Play: ' +  music);
//     }
//   }