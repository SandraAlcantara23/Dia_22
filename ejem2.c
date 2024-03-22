#include <stdio.h>

int main() {
    int num, i;
    unsigned long long factorial = 1;

    printf("Ingrese un número entero positivo: ");
    scanf("%d", &num);

    // Calcular el factorial
    for (i = 1; i <= num; ++i) {
        factorial *= i;
    }

    printf("Factorial de %d = %llu\n", num, factorial);
    return 0;
}
