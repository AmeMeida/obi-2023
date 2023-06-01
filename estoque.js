var qntTipos;
scanf("%d", "qntTipos");

var qntTamanhos;
scanf("%d", "qntTamanhos");

var estoque = Array(qntTipos);

for (var tipo = 0; tipo < qntTipos; tipo++) {
    estoque[tipo] = Array(qntTamanhos);
}

for (var tipo = 0; tipo < qntTipos; tipo++) {
    for (var tamanho = 0; tamanho < qntTamanhos; tamanho++) {
        var quantidade;
        scanf("%d", "quantidade");
        estoque[tipo][tamanho] = quantidade;
    }
}

var qntPedidos;
scanf("%d", "qntPedidos");

var vendas = 0;

for (var pedidos = 0; pedidos < qntPedidos; pedidos++) {
    var tipo;
    scanf("%d", "tipo");

    var tamanho;
    scanf("%d", "tamanho");

    if (estoque[tipo - 1][tamanho - 1] <= 0)
        continue;

    estoque[tipo - 1][tamanho - 1] = estoque[tipo - 1][tamanho - 1] - 1;
    vendas++;
}

printf("%d", vendas);
