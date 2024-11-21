import tkinter as tk
from tkinter import messagebox

class ToDoListApp:
    def __init__(self, root):
        self.root = root
        self.root.title("To-Do List App")
        self.root.geometry("400x300")

        self.tasks = []

        self.task_var = tk.StringVar()
        self.task_entry = tk.Entry(self.root, textvariable=self.task_var, font=('Arial', 14))
        self.task_entry.grid(row=0, column=0, padx=10, pady=10, columnspan=2, sticky="we")

        add_button = tk.Button(self.root, text="Agregar tarea", command=self.add_task, font=('Arial', 12))
        add_button.grid(row=0, column=2, padx=10, pady=10, sticky="we")

        self.task_listbox = tk.Listbox(self.root, font=('Arial', 12), selectmode=tk.SINGLE)
        self.task_listbox.grid(row=1, column=0, padx=10, pady=10, columnspan=2, sticky="nsew")

        complete_button = tk.Button(self.root, text="Marcar como completada", command=self.complete_task, font=('Arial', 12))
        complete_button.grid(row=1, column=2, padx=10, pady=10, sticky="we")

        delete_button = tk.Button(self.root, text="Eliminar tarea", command=self.delete_task, font=('Arial', 12))
        delete_button.grid(row=2, column=0, padx=10, pady=10, columnspan=2, sticky="we")

        self.root.grid_rowconfigure(1, weight=1)
        self.root.grid_columnconfigure(0, weight=1)

    def add_task(self):
        new_task = self.task_var.get()
        if new_task:
            self.tasks.append(new_task)
            self.task_listbox.insert(tk.END, new_task)
            self.task_var.set("")
        else:
            messagebox.showwarning("Advertencia", "Por favor, ingrese una tarea.")

    def complete_task(self):
        selected_index = self.task_listbox.curselection()
        if selected_index:
            completed_task = self.tasks.pop(selected_index[0])
            self.task_listbox.delete(selected_index)
            messagebox.showinfo("Completada", f"Tarea completada: {completed_task}")
        else:
            messagebox.showwarning("Advertencia", "Por favor, seleccione una tarea para marcar como completada.")

    def delete_task(self):
        selected_index = self.task_listbox.curselection()
        if selected_index:
            deleted_task = self.tasks.pop(selected_index[0])
            self.task_listbox.delete(selected_index)
            messagebox.showinfo("Eliminada", f"Tarea eliminada: {deleted_task}")
        else:
            messagebox.showwarning("Advertencia", "Por favor, seleccione una tarea para eliminar.")

if __name__ == "__main__":
    root = tk.Tk()
    app = ToDoListApp(root)
    root.mainloop()
