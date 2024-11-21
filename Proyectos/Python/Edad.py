import tkinter as tk
def mostrar_edad():
    edad = entrada_edad.get()
    ventana_resultado = tk.Toplevel(root)
    resultado_label = tk.Label(ventana_resultado, text=f"Tu edad es: {edad}")
    resultado_label.pack()

    root = tk.Tk()
    root.title("Ejercicio")

    etiqueta = tk.Label(root, text="Ingresa tu edad")
    etiqueta.pack()
    entrada_edad = tk.Entry(root)
    entrada_edad.pack()

    boton_mostrar = tk.Button(root, text="Calcular edad", command=mostrar_edad)
    boton_mostrar.pack()

    root.mainloop()