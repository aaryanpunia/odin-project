// Slider JS
const slider = document.getElementById('canvasSetter');
const sliderOutput = document.getElementById('sliderOut');
sliderOutput.value = slider.value;

slider.addEventListener('input', function() {
    sliderOutput.value = slider.value;
})

// Canvas JS
const canvas = document.getElementById('container');

function canvasClear() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
}

function canvasCreator(side) {
    let totalSqrs = side * side;
    let childSqr = (480 / side);
    canvas.style = `grid-template-columns: repeat(${side}, auto);grid-template-rows: repeat(${side}, auto);`
    for (let i = 0; i < totalSqrs; i++) {
        let block = document.createElement('div');
        canvas.appendChild(block);
        block.style = `width: ${childSqr}px; height: ${childSqr}px; display: inline; min-width: 0; min-height: 0;`;
        block.onmouseover = function() {
            block.style = "background-color: black"
        }
    }
}

slider.oninput = () => {
    canvasClear();
    canvasCreator(slider.value);
}

// clear button 

const clearButton = document.getElementById('clearBtn');

clearButton.onclick = function() {
    var nodes = canvas.getElementsByTagName("div");
    for(var i=0; i<nodes.length; i++) {
        nodes[i].style = 'background-color: white';
    }
}


