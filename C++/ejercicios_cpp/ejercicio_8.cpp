
int main() {
    int num1, num2, num3;
    cout << "Ingresa tres números: ";
    cin >> num1 >> num2 >> num3;
    if (num1 >= num2 && num1 >= num3) {
        cout << "El número mayor es: " << num1 << endl;
    } else if (num2 >= num1 && num2 >= num3) {
        cout << "El número mayor es: " << num2 << endl;
    } else {
        cout << "El número mayor es: " << num3 << endl;
    }
    return 0;
}