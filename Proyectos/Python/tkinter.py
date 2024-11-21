import tkinter as tk

class ClickCounterApp:
    def __init__(self, root):
        self.root = root
        self.click_count = 0
        
        self.label = tk.Label(root, text="Número de clics: 0")
        self.label.pack(pady=10)
        
        self.button = tk.Button(root, text="¡Haz clic aquí!", command=self.increment_click)
        self.button.pack(pady=5)
        
    def increment_click(self):
        self.click_count += 1
        self.label.config(text="Número de clics: {}".format(self.click_count))

def main():
    root = tk.Tk()
    root.title("Contador de clics")
    app = ClickCounterApp(root)
    root.mainloop()

if __name__ == "__main__":
    main()
