'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    var translation = str;

    // Si la palabra original es un palindromo
    //ninguna regla cuenta
    // se devuelve la misma palabra intercalando mayusculas y minusculas

    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    if (str == reverse(str)) {
        return minMay(str);
    }

    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;

        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            //Asignar y  Hacer el If en una sola línea
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }

        return translation;
    }

    
    //Si la palabra termina en "ar", se le quitan esos dos caracteres

    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }

    //Si la palabra empieza con "z", se le añaden "pe" al final

    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    // si la palabra tiene más de 10 letras partir a la mitad y añadir un "-"
    var ancho = translation.length;

    if (ancho >= 10) {
        var firstHalf = translation.slice(0, Math.round(ancho / 2));
        var secondHalf = translation.slice(Math.round(ancho / 2));
        translation = firstHalf + '-' + secondHalf;
    }

    return translation;
}