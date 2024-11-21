
int main() {
    int a, b, temp;
    cout << "Ingresa el valor de a: ";
    cin >> a;
    cout << "Ingresa el valor de b: ";
    cin >> b;
    temp = a;
    a = b;
    b = temp;
    cout << "Después del intercambio, a = " << a << ", b = " << b << endl;
    return 0;
}