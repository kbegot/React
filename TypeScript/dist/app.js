"use strict";
var user = { firstname: 'Kévin', age: 20 };
var animal = { firstname: 'Nesko', age: 20 };
var a = 'Salut tout le monde';
var n = 11;
var b = true;
var d = null;
var array = ['abc', 'def', 'ghi'];
var date = new Date();
var sb = function (e) { };
function printId(id) {
    console.log(id.toString());
}
function identity(arg) {
    return arg;
}
var aa = identity(3); // aa de type any. aa à perdue le type rentrer en parametre 
function identity2(arg) {
    return arg;
}
var bb = identity2(3); // number va remplacer ArgType et docn va comprendre que le parametre est un number
var bc = identity2(3); // peut aussi le comprendre tout seul
var compteur = document.querySelector('#compteur');
var i = 0;
var increment = function (e) {
    e.preventDefault();
    i++;
    var span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
