import tkinter as tk

def convertir_a_fahrenheit():
    celsius = float(entry_celsius.get())
    fahrenheit = (celsius * 9/5) + 32
    label_resultado.config(text=f"{celsius} grados Celsius son {fahrenheit} grados Fahrenheit")

# Crear la ventana
ventana = tk.Tk()
ventana.title("Convertidor de Celsius a Fahrenheit")

# Crear y posicionar elementos
label_celsius = tk.Label(ventana, text="Grados Celsius:")
label_celsius.grid(row=0, column=0)

entry_celsius = tk.Entry(ventana)
entry_celsius.grid(row=0, column=1)

boton_convertir = tk.Button(ventana, text="Convertir", command=convertir_a_fahrenheit)
boton_convertir.grid(row=1, column=0, columnspan=2)

label_resultado = tk.Label(ventana, text="")
label_resultado.grid(row=2, column=0, columnspan=2)

# Ejecutar la aplicación
ventana.mainloop()
