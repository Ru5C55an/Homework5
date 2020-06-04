import $ from 'jquery';
 
global.jQuery = $;
global.$ = $;

import '../scss/style.scss';

import 'bootstrap';

require.context('../blocks/', true, /\.(png|gif|svg|jpg)$/);
require.context('../img/', true, /\.(png|gif|svg|jpg)$/);

$('#btn-tooltip').tooltip();

var rect1 = document.getElementById('rect1');
var rectresult = document.getElementById('rectresult');
rect1.oninput = function() {
    var a = rect1.value;
    let S = a * a;
    if (a < 0) {
        alert('Нельзя вводить отрицательные числа');
        rectresult.innerHTML = "Результат: ";
        rect1.value = undefined; 
    }
    else {
        rectresult.innerHTML = "Результат: " + S;
    }
}

var circle1 = document.getElementById('circle1');
var circleresult = document.getElementById('circleresult');
circle1.oninput = function() {
    var R = circle1.value;
    let S = Math.PI * R * R;
    if (R < 0) {
        alert('Нельзя вводить отрицательные числа');
        circleresult.innerHTML = "Результат: ";
        circle1.value = undefined; 
    }
    else {
        circleresult.innerHTML = "Результат: " + S;
    }
    
}

var ellipse1 = document.getElementById('ellipse1');
var ellipse2 = document.getElementById('ellipse2');
var ellipseresult = document.getElementById('ellipseresult');
ellipse1.oninput = function () {
    var a = ellipse1.value;
    var b = ellipse2.value;
    let S = Math.PI * a * b;
    if (a < 0) {
        alert('Нельзя вводить отрицательные числа');
        ellipseresult.innerHTML = "Результат: ";
        ellipse1.value = undefined; 
    }
    else ellipseresult.innerHTML = "Результат: " + S;
}
ellipse2.oninput = function () {
    var a = ellipse1.value;
    var b = ellipse2.value;
    let S = Math.PI * a * b;
    if (b < 0) {
        alert('Нельзя вводить отрицательные числа');
        ellipseresult.innerHTML = "Результат: ";
        ellipse2.value = undefined; 
    }
    else ellipseresult.innerHTML = "Результат: " + S;
}

var parallelogram1 = document.getElementById('parallelogram1');
var parallelogram2 = document.getElementById('parallelogram2');
var parallelogramresult = document.getElementById('parallelogramresult');
parallelogram1.oninput = function () {
    var a = parallelogram1.value;
    var h = parallelogram2.value;
    let S = a * h;
    if (a < 0) {
        alert('Нельзя вводить отрицательные числа');
        parallelogramresult.innerHTML = "Результат: ";
        parallelogram1.value = undefined; 
    } else parallelogramresult.innerHTML = "Результат: " + S;
}
parallelogram2.oninput = function () {
    var a = parallelogram1.value;
    var h = parallelogram2.value;
    let S = a * h;
    if (h < 0) {
        alert('Нельзя вводить отрицательные числа');
        parallelogramresult.innerHTML = "Результат: ";
        parallelogram2.value = undefined; 
    }
    else parallelogramresult.innerHTML = "Результат: " + S;
}

var trapecia1 = document.getElementById('trapecia1');
var trapecia2 = document.getElementById('trapecia2');
var trapecia3 = document.getElementById('trapecia3');
var trapeciaresult = document.getElementById('trapeciaresult');
trapecia1.oninput = function () {
    var a = trapecia1.value;
    var b = trapecia2.value;
    var h = trapecia3.value;
    let S = (1 / 2) * (+a + +b) * h;
    if (a < 0) {
        alert('Нельзя вводить отрицательные числа');
        trapeciaresult.innerHTML = "Результат: ";
        trapecia1.value = undefined; 
    }
    else trapeciaresult.innerHTML = "Результат: " + S;
}
trapecia2.oninput = function () {
    var a = trapecia1.value;
    var b = trapecia2.value;
    var h = trapecia3.value;
    let S = (1 / 2) * (+a + +b) * h;
    if (b < 0) {
        alert('Нельзя вводить отрицательные числа');
        trapeciaresult.innerHTML = "Результат: ";
        trapecia2.value = undefined; 
    }
    else trapeciaresult.innerHTML = "Результат: " + S;
}
trapecia3.oninput = function () {
    var a = trapecia1.value;
    var b = trapecia2.value;
    var h = trapecia3.value;
    let S = (1 / 2) * (+a + +b) * h;
    if (h < 0) {
        alert('Нельзя вводить отрицательные числа');
        trapeciaresult.innerHTML = "Результат: ";
        trapecia3.value = undefined; 
    }
    else trapeciaresult.innerHTML = "Результат: " + S;
}

var triangle1 = document.getElementById('triangle1');
var triangle2 = document.getElementById('triangle2');
var triangleresult = document.getElementById('triangleresult');
triangle1.oninput = function () {
    var a = triangle1.value;
    var h = triangle2.value;
    let S = (1 / 2 ) * a * h;
    if (a < 0) {
        alert('Нельзя вводить отрицательные числа');
        triangleresult.innerHTML = "Результат: ";
        triangle1.value = undefined; 
    }
    else triangleresult.innerHTML = "Результат: " + S;
}
triangle2.oninput = function () {
    var a = triangle1.value;
    var h = triangle2.value;
    let S = (1 / 2 ) * a * h;
    if (h < 0) {
        alert('Нельзя вводить отрицательные числа');
        triangleresult.innerHTML = "Результат: ";
        triangle2.value = undefined; 
    }
    else triangleresult.innerHTML = "Результат: " + S;
}