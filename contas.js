var dinheiro;
scanf("%d", "dinheiro");

var conta1, conta2, conta3;
scanf("%d", "conta1");
scanf("%d", "conta2");
scanf("%d", "conta3");

if (dinheiro >= (conta1 + conta2 + conta3)) {
    printf("%d\n", 3);
} else if (dinheiro >= (conta1 + conta2)) {
    printf("%d\n", 2);
} else if (dinheiro >= (conta1 + conta3)) {
    printf("%d\n", 2);
} else if (dinheiro >= (conta2 + conta3)) {
    printf("%d\n", 2);
} else if (dinheiro >= conta1 || dinheiro >= conta2 || dinheiro >= conta3) {
    printf("%d\n", 1);
} else {
    printf("%d\n", 0);
}

