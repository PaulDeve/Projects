
int main() {
    int num, digitos = 0;
    cout << "Ingresa un número: ";
    cin >> num;
    while (num != 0) {
        num /= 10;
        ++digitos;
    }
    cout << "El número tiene " << digitos << " dígitos." << endl;
    return 0;
}