import $ from 'jquery';
 
global.jQuery = $;
global.$ = $;

import '../scss/style.scss';

import 'bootstrap';

require.context('../blocks/', true, /\.(png|gif|svg|jpg)$/);
require.context('../img/', true, /\.(png|gif|svg|jpg)$/);

$('#btn-tooltip').tooltip();

var rect1 = document.getElementById('rect1');
rect1.oninput = function() {
    var a = rect1.value;
    let S = a * a;
    var rectresult = document.getElementById('rectresult');
    rectresult.innerHTML = "Результат: " + S;
}

var circle1 = document.getElementById('circle1');
circle1.oninput = function() {
    var R = circle1.value;
    let S = Math.PI * R * R;
    var rectresult = document.getElementById('circleresult');
    rectresult.innerHTML = "Результат: " + S;
}

var ellipse1 = document.getElementById('ellipse1');
var ellipse2 = document.getElementById('ellipse2');
ellipse1.oninput = function () {
    var a = ellipse1.value;
    var b = ellipse2.value;
    let S = Math.PI * a * b;
    var rectresult = document.getElementById('ellipseresult');
    rectresult.innerHTML = "Результат: " + S;
}
ellipse2.oninput = function () {
    var a = ellipse1.value;
    var b = ellipse2.value;
    let S = Math.PI * a * b;
    var rectresult = document.getElementById('ellipseresult');
    rectresult.innerHTML = "Результат: " + S;
}

var parallelogram1 = document.getElementById('parallelogram1');
var parallelogram2 = document.getElementById('parallelogram2');
parallelogram1.oninput = function () {
    var a = parallelogram1.value;
    var h = parallelogram2.value;
    let S = a * h;
    var rectresult = document.getElementById('parallelogramresult');
    rectresult.innerHTML = "Результат: " + S;
}
parallelogram2.oninput = function () {
    var a = parallelogram1.value;
    var h = parallelogram2.value;
    let S = a * h;
    var rectresult = document.getElementById('parallelogramresult');
    rectresult.innerHTML = "Результат: " + S;
}

var trapecia1 = document.getElementById('trapecia1');
var trapecia2 = document.getElementById('trapecia2');
var trapecia3 = document.getElementById('trapecia3');
trapecia1.oninput = function () {
    var a = trapecia1.value;
    var b = trapecia2.value;
    var h = trapecia3.value;
    let S = (1 / 2) * (+a + +b) * h;
    console.log(a+b);
    var rectresult = document.getElementById('trapeciaresult');
    rectresult.innerHTML = "Результат: " + S;
}
trapecia2.oninput = function () {
    var a = trapecia1.value;
    var b = trapecia2.value;
    var h = trapecia3.value;
    let S = (1 / 2) * (+a + +b) * h;
    console.log(a+b);
    var rectresult = document.getElementById('trapeciaresult');
    rectresult.innerHTML = "Результат: " + S;
}
trapecia3.oninput = function () {
    var a = trapecia1.value;
    var b = trapecia2.value;
    var h = trapecia3.value;
    let S = (1 / 2) * (+a + +b) * h;
    console.log(a+b);
    var rectresult = document.getElementById('trapeciaresult');
    rectresult.innerHTML = "Результат: " + S;
}

var triangle1 = document.getElementById('triangle1');
var triangle2 = document.getElementById('triangle2');
triangle1.oninput = function () {
    var a = triangle1.value;
    var h = triangle2.value;
    let S = (1 / 2 ) * a * h;
    var rectresult = document.getElementById('triangleresult');
    rectresult.innerHTML = "Результат: " + S;
}
triangle2.oninput = function () {
    var a = triangle1.value;
    var h = triangle2.value;
    let S = (1 / 2 ) * a * h;
    var rectresult = document.getElementById('triangleresult');
    rectresult.innerHTML = "Результат: " + S;
}