// cabeçalho para incluir printf, scanf e fgets
// em programas javascript

var scanf_stub = require('scanf-printf-obi').scanf,
    printf_stub = require('scanf-printf-obi').sprintf,
    fgets_stub = require('scanf-printf-obi').fgets

function scanf(format) {
    var res = scanf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
    eval(res);
}

function printf(args){
    var res = printf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
    process.stdout.write(res);
}

function fgets(args){
    var res = fgets_stub.apply(this, Array.prototype.slice.call(arguments, 0));
    eval(res);
}
// final de cabeçalho

var qntComandos;
var comandos = [];

scanf("%d", "qntComandos");


for (var i = 0; i < qntComandos; i++) {
    var comando;
    scanf("%s", "comando");
    comandos.push(comando);
    //comandos[i] = comando;
}

// %f - float
// %s - string
// %c - char
// %d ou %i - int

var menor = 0;
for (var i = 0; i < comandos.length; i++) {
    if (menor > comandos[i]) {
        menor = comandos[i]
    }
}
