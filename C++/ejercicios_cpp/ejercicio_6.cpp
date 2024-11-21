
int main() {
    int n, t1 = 0, t2 = 1, siguienteTermino;
    cout << "Ingresa el número de términos: ";
    cin >> n;
    for (int i = 1; i <= n; ++i) {
        cout << t1 << ", ";
        siguienteTermino = t1 + t2;
        t1 = t2;
        t2 = siguienteTermino;
    }
    cout << endl;
    return 0;
}