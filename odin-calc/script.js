/*  
    Functioning -
        1. Enter number
        2. Enter Operation
        3. After Operation, entering a number causes the old number to dissapear

    Dot -
        1. Enter number
        2. Click dot
        3. Number following dot makes number decimal
        4. Cannot use dot twice

    Entering sub sign before typing number -
        1. After entering sub the number becomes negative

    Clear causes result to become 0

    Del deletes first character
*/

// function operate(num1, num2, operation) {
//     if(operation == "add") {
//         return num1 + num2;
//     }
//     else if(operation == "sub") {
//         return num1 - num2;
//     }
//     else if(operation == "div") {
//         return num1 / num2;
//     }
//     else if(operation == "mul") {
//         return num1 * num2;
//     }
// }

// Calc Buttons
const container = document.getElementById('container-1');
const allButtons = container.children;
const zero = document.getElementById('item-9');
const one = document.getElementById('item-10');
const two = document.getElementById('item-11');
const three = document.getElementById('item-12');
const four = document.getElementById('item-13');
const five = document.getElementById('item-14');
const six = document.getElementById('item-15');
const seven = document.getElementById('item-16');
const eight = document.getElementById('item-17');
const nine = document.getElementById('item-18');
const add = document.getElementById('item-4');
const sub = document.getElementById('item-5');
const mul = document.getElementById('item-6');
const div = document.getElementById('item-7');
const clr = document.getElementById('item-2');
const del = document.getElementById('item-3');
const eql = document.getElementById('item-19');
const dot = document.getElementById('item-8');

// hide 0

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', () => document.getElementById('item-1').type = "text")
}

// Calc Num & Display

zero.addEventListener('click', enterNum);
one.addEventListener('click', enterNum);
two.addEventListener('click', enterNum);
three.addEventListener('click', enterNum);
four.addEventListener('click', enterNum);
five.addEventListener('click', enterNum);
six.addEventListener('click', enterNum);
seven.addEventListener('click', enterNum);
eight.addEventListener('click', enterNum);
nine.addEventListener('click', enterNum);
dot.addEventListener('click', enterNum);

function enterNum() {
    const result = document.getElementById('item-1');
    result.value += this.innerHTML;
}

// + - / * Clr

let globalNum = document.getElementById('item-1');
let operation;
let chain = [];

function numObj(num, opr) {
    this.num = num;
    this.opr = opr;
}

function keepOp() {
    operation = this.value;
    if(globalNum.value == '') {
        chain.push(new numObj(parseFloat(0), operation));
    }
    else {
        chain.push(new numObj(parseFloat(globalNum.value), operation));
        document.getElementById('item-1').value = '';
    }
}

function operate() {
    if (chain.length == 0) {
        return;
    }
    chain.push(new numObj(parseFloat(globalNum.value), ''));
    let result;
    reverse(chain);
    result = chain[0].num;
    console.table(chain); // test
    const len = chain.length - 1;
    for(let i = 0; i < len; i++) {
        if (chain[i + 1].opr == 'add') {
            result += (chain[i + 1].num);
        }
        else if(chain[i + 1].opr == 'sub') {
            result -= (chain[i + 1].num);
        }
        else if(chain[i + 1].opr == 'div') {
            result /= (chain[i + 1].num);
        }
        else if(chain[i + 1].opr == 'mul') {
            result *= (chain[i + 1].num);
        }
        else if(chain[i].opr == "eql") {
            document.getElementById("item-1").value = chain[i];
        }
    }

    document.getElementById('item-1').value = result;
    destroyArr(chain, result, "eql");
}

add.addEventListener('click', keepOp);
sub.addEventListener('click', keepOp);
div.addEventListener('click', keepOp);
mul.addEventListener('click', keepOp);
clr.addEventListener('click', clear);
eql.addEventListener('click', operate);
del.addEventListener('click', deleter);

function clear() {
    destroyArr(chain, 0, "clr");
    document.getElementById('item-1').value = 0;
    console.table(chain);
}

function reverse(arr) {
    for(let i = arr.length - 1; i >= 0; i--) {
        if(i > 0) {
            arr[i].opr = arr[i - 1].opr;
        }
        else {
            arr[i].opr = "";    
        }
    }
}

function destroyArr(arr, startingNum, operator) {
    if (operator == "clr") {
        arr.length = 0;
        globalNum.value = '';
    }
    else {
        arr.length = 0;
        arr.push(new numObj(parseFloat(startingNum), operator));
    }
}

function deleter() {
    currInput = document.getElementById('item-1').value;
    newInput = currInput.substring(0, currInput.length - 1);
    if(newInput == '') {
        document.getElementById('item-1').value = 0;    
    }
    else {
        document.getElementById('item-1').value = newInput;
    }
}


// keyboard

window.addEventListener('keydown', (delKey) => {
    document.getElementById("item-1").type = "text"
    if (delKey.key === "Backspace") {
        clear();
    }
    if (delKey.key === "Enter") {
        operate();
    }
});

