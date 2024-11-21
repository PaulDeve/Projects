
class AnimatedText(tk.Tk):
    def _init_(self):
        super()._init_()
        self.title("Letras Animadas")
        self.canvas = tk.Canvas(self, width=400, height=200)
        self.canvas.pack()
        self.text_id = self.canvas.create_text(200, 100, text="Paul", font=("Arial", 24))
        self.dx = 2  # Velocidad horizontal

    def animate(self):
        self.canvas.move(self.text_id, self.dx, 0)
        self.after(10, self.animate)  # Llama a la función cada 10 milisegundos

        # Rebote en los bordes
        text_bbox = self.canvas.bbox(self.text_id)
        if text_bbox[0] <= 0 or text_bbox[2] >= self.canvas.winfo_width():
            self.dx *= -1

if _name_ == "_main_":
    app = AnimatedText()
    app.animate()
    app.mainloop()