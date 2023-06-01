var qntSaloes;
scanf("%d", "qntSaloes");

var qntTuneis;
scanf("%d", "qntTuneis");

var tuneis = Array(qntSaloes);

function connectsTo(salao1, salao2) {
    var salaoTuneis = salao1.toString().split(",");

    for (var i = 0; i < salaoTuneis.length; i++) {
        if (salaoTuneis[i] == salao2) return true;
    }

    return false;
}

function connect(salao1, salao2) {
    if (!connectsTo(salao1, salao2))
        salao1 = salao1 + "," + salao2.toString();

    return salao1;
}

for (var i = 0; i < qntTuneis; i++) {
    var salao1;
    scanf("%d", "salao1");

    var salao2;
    scanf("%d", "salao2");

    if (!tuneis[salao1]) {
        tuneis[salao1] = salao2.toString();
    } else {
        tuneis[salao1] = connect(tuneis[salao1], salao2);
    }
    

    if (!tuneis[salao2]) {
        tuneis[salao2] = salao1.toString();
    } else {
        tuneis[salao1] = connect(tuneis[salao2], salao1);
    }
}

var qntSugestoes;
scanf("%d", "qntSugestoes");

var sugestoesValidas = 0;

var sugestoes;

scanf("%s ", "sugestoes");
printf("%s\n", sugestoes);

scanf("%s ", "sugestoes");
printf("%s\n", sugestoes);

/* for (var sugestao = 0; sugestao < qntSugestoes; sugestao++) {

    var salaoAnterior;
    while (true) {
        var salao;
        scanf("%c", salao);

        if (salao == ' ')  continue;
        if (salao == '\n') {
            sugestoesValidas++;
            break;
        }
        salao = parseInt(salao, 10);

        printf("%s\n", tuneis[salao1]);

        if (!connectsTo(tuneis[salao1], salao2)) break;
        else printf("connects!");

        salaoAnterior = salao;
    }
} */ 

printf("%d", sugestoesValidas);
