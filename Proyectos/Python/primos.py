import tkinter as tk
from tkinter import messagebox

def es_primo(numero):
    if numero <= 1:
        return False
    if numero <= 3:
        return True
    if numero % 2 == 0 or numero % 3 == 0:
        return False
    i = 5
    while i * i <= numero:
        if numero % i == 0 or numero % (i + 2) == 0:
            return False
        i += 6
    return True

def verificar_primo():
    numero = int(entry_numero.get())
    if es_primo(numero):
        messagebox.showinfo("Resultado", f"{numero} es un número primo.")
    else:
        messagebox.showinfo("Resultado", f"{numero} no es un número primo.")

# Crear la ventana
ventana = tk.Tk()
ventana.title("Verificador de Números Primos")

# Crear etiqueta
etiqueta = tk.Label(ventana, text="Ingrese un número:")
etiqueta.pack()

# Crear campo de entrada
entry_numero = tk.Entry(ventana)
entry_numero.pack()

# Crear botón
boton_verificar = tk.Button(ventana, text="Verificar", command=verificar_primo)
boton_verificar.pack()

# Ejecutar la aplicación
ventana.mainloop()
