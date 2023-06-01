var qntLances;
scanf("%d", "qntLances");

var maiorLance = 0;
var dono;

for (var tipo = 0; tipo < qntLances; tipo++) {
    var pessoa;
    
    scanf("%s", "pessoa");
    // printf("%s\n", pessoa);

    var valor;
    scanf("%d", "valor");
    // printf("%s\n", valor);

    if (maiorLance < valor) {
        maiorLance = valor;
        dono = pessoa;
    }
}

printf("%s\n%d\n", dono, maiorLance);
