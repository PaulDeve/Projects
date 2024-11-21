import tkinter as tk
from tkinter import messagebox

# Función para buscar una palabra en el diccionario
def buscar_palabra():
    palabra = entrada_palabra.get().lower()  # Obtener la palabra del usuario y convertirla a minúsculas
    if palabra in diccionario:
        significado = diccionario[palabra]
        messagebox.showinfo("Significado", f"El significado de '{palabra}' es: {significado}")
    else:
        messagebox.showwarning("Advertencia", f"No se encontró el significado de '{palabra}' en el diccionario.")

# Función para agregar una nueva palabra al diccionario
def agregar_palabra():
    palabra = entrada_nueva_palabra.get().lower()  # Obtener la nueva palabra del usuario y convertirla a minúsculas
    significado = entrada_significado.get()
    diccionario[palabra] = significado
    messagebox.showinfo("Éxito", f"La palabra '{palabra}' ha sido agregada al diccionario.")

# Crear la ventana principal
ventana = tk.Tk()
ventana.title("Diccionario")

# Crear el diccionario inicial
diccionario = {
    "python": "Un lenguaje de programación de alto nivel",
    "programación": "El proceso de escribir código para crear programas de computadora",
    "diccionario": "Una colección de palabras y sus significados"
}

# Etiqueta y entrada para buscar una palabra en el diccionario
etiqueta_buscar = tk.Label(ventana, text="Buscar palabra:")
etiqueta_buscar.grid(row=0, column=0, padx=5, pady=5)
entrada_palabra = tk.Entry(ventana)
entrada_palabra.grid(row=0, column=1, padx=5, pady=5)
boton_buscar = tk.Button(ventana, text="Buscar", command=buscar_palabra)
boton_buscar.grid(row=0, column=2, padx=5, pady=5)

# Etiquetas y entradas para agregar una nueva palabra al diccionario
etiqueta_nueva_palabra = tk.Label(ventana, text="Nueva palabra:")
etiqueta_nueva_palabra.grid(row=1, column=0, padx=5, pady=5)
entrada_nueva_palabra = tk.Entry(ventana)
entrada_nueva_palabra.grid(row=1, column=1, padx=5, pady=5)
etiqueta_significado = tk.Label(ventana, text="Significado:")
etiqueta_significado.grid(row=2, column=0, padx=5, pady=5)
entrada_significado = tk.Entry(ventana)
entrada_significado.grid(row=2, column=1, padx=5, pady=5)
boton_agregar = tk.Button(ventana, text="Agregar", command=agregar_palabra)
boton_agregar.grid(row=2, column=2, padx=5, pady=5)

# Ejecutar el bucle principal de la interfaz gráfica
ventana.mainloop()
