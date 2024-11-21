import matplotlib.pyplot as plt

# Configurar estilo oscuro
plt.style.use('dark_background')

# Datos
etiquetas = ['A', 'B', 'C', 'D']
valores = [10, 20, 15, 25]

# Colores personalizados para las barras
colores = ['orange', 'lime', 'cyan', '#FF69B4']

# Crear gráfico de barras
plt.bar(etiquetas, valores, color=colores)

# Personalizar el gráfico
plt.title('Gráfico de Barras')
plt.xlabel('Categorías')
plt.ylabel('Valores')

# Mostrar el gráfico
plt.show()

