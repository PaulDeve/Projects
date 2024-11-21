
int main() {
    int num, i;
    bool esPrimo = true;
    cout << "Ingresa un número: ";
    cin >> num;
    if (num <= 1) {
        esPrimo = false;
    } else {
        for (i = 2; i <= num / 2; ++i) {
            if (num % i == 0) {
                esPrimo = false;
                break;
            }
        }
    }
    if (esPrimo) {
        cout << num << " es un número primo." << endl;
    } else {
        cout << num << " no es un número primo." << endl;
    }
    return 0;
}