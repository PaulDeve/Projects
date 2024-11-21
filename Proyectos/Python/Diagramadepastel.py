import matplotlib.pyplot as plt

#color de la interfaz
plt.style.use('dark_background')

# Datos ficticios
lenguajes = ['HTML', 'CSS', 'JavaScript']

# Datos para cada variable
popularidad = [30, 30, 40]

# Función para crear gráficos de pastel
def crear_grafico_pastel(variable, datos, colores):
    plt.figure(figsize=(8, 8))
    plt.pie(datos, labels=lenguajes, autopct='%1.1f%%', colors=colores)
    plt.title(f'Gráfico circular de {variable}')
    plt.show()

# Colores para los gráficos
colores = ['#FF6347', '#FFD700', '#4ECDC4']

# Crear gráficos circulares
crear_grafico_pastel('Popularidad', popularidad, colores)


import tkinter as tk
print ("no se ejecutó");