// ==============================================================================
//                              CACHING OBJECTS
// ==============================================================================

let button_equals = document.getElementById('equalBtn');
let button_multi = document.getElementById('multiBtn');
let button_divi = document.getElementById('diviBtn');
let button_minus = document.getElementById('minusBtn');
let button_plus = document.getElementById('plusBtn');

let button_clear = document.getElementById('clearBtn');
let button_delete = document.getElementById('delBtn');

let button_dot = document.getElementById('dotBtn');

let outandin = document.getElementById('inputTxt');


let num_1 = document.getElementById('oneBtn');
let num_2 = document.getElementById('twoBtn');
let num_3 = document.getElementById('threeBtn');
let num_4 = document.getElementById('fourBtn');
let num_5 = document.getElementById('fiveBtn');
let num_6 = document.getElementById('sixBtn');
let num_7 = document.getElementById('sevenBtn');
let num_8 = document.getElementById('eightBtn');
let num_9 = document.getElementById('nineBtn');
let num_0 = document.getElementById('zeroBtn');

// ==============================================================================
//                              EVENT LISTENERS
// ==============================================================================

button_clear.addEventListener('click', clearAll);
button_delete.addEventListener('click', clearOne);
button_dot.addEventListener('click', addDot);
button_equals.addEventListener('click', solveAll);

button_divi.addEventListener('click', function () {
    operand('/');
});
button_minus.addEventListener('click', function () {
    operand('-');
});
button_multi.addEventListener('click', function () {
    operand('*');
});
button_plus.addEventListener('click', function () {
    operand('+');
});

num_0.addEventListener('click', function () {
    newnumber(0);
});
num_1.addEventListener('click', function () {
    newnumber(1);
});
num_2.addEventListener('click', function () {
    newnumber(2);
});
num_3.addEventListener('click', function () {
    newnumber(3);
});
num_4.addEventListener('click', function () {
    newnumber(4);
});
num_5.addEventListener('click', function () {
    newnumber(5);
});
num_6.addEventListener('click', function () {
    newnumber(6);
});
num_7.addEventListener('click', function () {
    newnumber(7);
});

num_8.addEventListener('click', function () {
    newnumber(8);
});

num_9.addEventListener('click', function () {
    newnumber(9);
});

// ==============================================================================
//                              LOGIC
// ==============================================================================

function clearAll() {
    outandin.value = '';
}

function clearOne() {

    let valuein = outandin.value;
    var valuearray = valuein.split(' ');

    if (valuearray.length <= 1) {
        outandin.value = valuein.substr(0, valuein.length - 1);
    } else {
        outandin.value = valuein.substr(0, valuein.length - 3);
    }
}

function addDot() {
    let valuein = outandin.value;
    var valuearray = valuein.split(' ');

    if (valuearray.length == 1) {
        let dotcheck = valuein.split('.');
        if (dotcheck.length == 1) {
            outandin.value = outandin.value + ".";
        }
    }

    if (valuearray.length == 3) {
        let dotcheck = valuearray[2].split('.');
        if (dotcheck.length == 1) {
            outandin.value = outandin.value + ".";
        }
    }

}

function solveAll() {

    let valuein = outandin.value;
    var valuearray = valuein.split(' ');

    if (valuearray.length == 3) {

        switch (valuearray[1]) {

            case '+':
                outandin.value = Number(valuearray[0]) + Number(valuearray[2]);
                break;
            case '-':
                outandin.value = Number(valuearray[0]) - Number(valuearray[2]);
                break;
            case '*':
                outandin.value = Number(valuearray[0]) * Number(valuearray[2]);
                break;
            case '/':
                outandin.value = Number(valuearray[0]) / Number(valuearray[2]);
                break;
        }
    }
}

function operand(sign) {

    let valuein = outandin.value;
    var valuearray = valuein.split(' ');
    if (valuearray.length <= 2) {
        outandin.value = outandin.value + " " + sign + " ";
    }
}

function newnumber(number) {
    outandin.value = outandin.value + number;
}