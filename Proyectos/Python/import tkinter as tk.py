import tkinter as tk

class Temporizador:
    def __init__(self, master):
        self.master = master
        self.master.title("Temporizador")
        
        # Variables para el temporizador
        self.tiempo_transcurrido = 0
        self.en_curso = False
        
        # Etiqueta para mostrar el tiempo
        self.label_tiempo = tk.Label(master, text="00:00:00", font=("Arial", 24))
        self.label_tiempo.pack(pady=20)
        
        # Botones para iniciar, pausar y reiniciar
        self.boton_iniciar = tk.Button(master, text="Iniciar", command=self.iniciar, font=("Arial", 14))
        self.boton_iniciar.pack(side=tk.LEFT, padx=10)
        
        self.boton_pausar = tk.Button(master, text="Pausar", command=self.pausar, font=("Arial", 14))
        self.boton_pausar.pack(side=tk.LEFT, padx=10)
        
        self.boton_reiniciar = tk.Button(master, text="Reiniciar", command=self.reiniciar, font=("Arial", 14))
        self.boton_reiniciar.pack(side=tk.LEFT, padx=10)
        
        # Temporizador
        self.actualizar_tiempo()
    
    def iniciar(self):
        # Inicia o reanuda el temporizador
        if not self.en_curso:
            self.en_curso = True
            self.actualizar_tiempo()
    
    def pausar(self):
        # Pausa el temporizador
        self.en_curso = False
    
    def reiniciar(self):
        # Reinicia el temporizador
        self.en_curso = False
        self.tiempo_transcurrido = 0
        self.label_tiempo.config(text="00:00:00")
    
    def actualizar_tiempo(self):
        # Si el temporizador está en curso, incrementa el tiempo transcurrido
        if self.en_curso:
            self.tiempo_transcurrido += 1
            minutos, segundos = divmod(self.tiempo_transcurrido, 60)
            horas, minutos = divmod(minutos, 60)
            
            # Formatea el tiempo para mostrarlo como hh:mm:ss
            tiempo_formateado = f"{horas:02}:{minutos:02}:{segundos:02}"
            self.label_tiempo.config(text=tiempo_formateado)
            
            # Llama a esta función después de un segundo
            self.master.after(1000, self.actualizar_tiempo)
        else:
            # Si el temporizador no está en curso, no actualizamos el tiempo
            return

# Crear la ventana principal
root = tk.Tk()

# Crear una instancia del temporizador
temporizador = Temporizador(root)

# Iniciar el loop principal de la interfaz gráfica
root.mainloop()
