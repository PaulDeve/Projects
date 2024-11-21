import turtle

# Configuración inicial
t = turtle.Turtle()
t.speed(1)  # Velocidad de dibujo

# Función para dibujar un pétalo
def dibujar_petalo():
    t.color("red")
    t.begin_fill()
    t.circle(50, 60)
    t.left(120)
    t.circle(50, 60)
    t.end_fill()

# Dibuja varios pétalos para formar una flor
for _ in range(6):
    dibujar_petalo()
    t.left(60)

# Dibuja el tallo
t.color("green")
t.width(5)
t.right(90)
t.forward(200)

# Cierra la ventana al hacer clic
turtle.exitonclick()
