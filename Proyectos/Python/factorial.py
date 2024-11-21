import sys
from PyQt5.QtWidgets import QApplication, QWidget, QLabel, QLineEdit, QPushButton, QVBoxLayout

class FactorialApp(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.setWindowTitle('Factorial App')

        self.label_n = QLabel('n:')
        self.label_factorial = QLabel('Factorial (n):')

        self.lineEdit_n = QLineEdit()
        self.lineEdit_n.setReadOnly(True)
        self.lineEdit_factorial = QLineEdit()
        self.lineEdit_factorial.setReadOnly(True)

        self.btn_siguiente = QPushButton('Siguiente')
        self.btn_siguiente.clicked.connect(self.calcular_factorial)

        vbox = QVBoxLayout()
        vbox.addWidget(self.label_n)
        vbox.addWidget(self.lineEdit_n)
        vbox.addWidget(self.label_factorial)
        vbox.addWidget(self.lineEdit_factorial)
        vbox.addWidget(self.btn_siguiente)

        self.setLayout(vbox)

        self.n = 1  # Inicializamos n en 1

    def calcular_factorial(self):
        factorial = 1
        for i in range(1, self.n + 1):
            factorial *= i
        self.lineEdit_n.setText(str(self.n))
        self.lineEdit_factorial.setText(str(factorial))
        self.n += 1  # Incrementamos n para la próxima vez

if __name__ == '__main__':
    app = QApplication(sys.argv)
    factorial_app = FactorialApp()
    factorial_app.show()
    sys.exit(app.exec_())
