let block;
let theGrid;

function makeGrid (x) {
    x = prompt("how many blocks in the grid?");
    for(i = 0; i < x; i++) {
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

let answer = document.getElementById('container').hasChildNodes();
let container = document.getElementById('container');
    
if (answer == true) {
    while (container.firstChild) {
    container.removeChild(container.firstChild);
    }
} else {
    makeGrid();
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