

class ChristmasTree:
    def __init__(self, rows, animation_duration):
        self.rows = rows
        self.animation_duration = animation_duration
        self.fig, self.ax = plt.subplots()
        self.ax.set_aspect('equal')
        self.ax.set_xlim(0, rows)
        self.ax.set_ylim(0, 1.1 * (rows + rows**2//2))
        self.rectangles = []
        self.text = None

    def add_row(self, y):
        for x in range(self.rows):
            rectangle = Rectangle((x, y), 1, 1)
            self.ax.add_patch(rectangle)
            self.rectangles.append(rectangle)
            y += 1
        self.rows -= 1

    def animate(self, i):
        for j, rectangle in enumerate(self.rectangles):
            if i % self.animation_duration == j % self.animation_duration:
                rectangle.set_edgecolor('green')
            else:
                rectangle.set_edgecolor('none')

        if i == self.animation_duration * len(self.rectangles):
            self.text = self.ax.text(0.5, 0.5, 'Merry Christmas!', horizontalalignment='center', verticalalignment='center', fontsize=18, color='red')
            self.ax.add_artist(self.text)

    def display(self):
        while self.rows > 0:
            self.add_row(self.rows)

        anim = FuncAnimation(self.fig, self.animate, frames=range(self.animation_duration * len(self.rectangles) + 1), interval=100, repeat=False)
        plt.show()

if __name__ == '__main__':
    tree = ChristmasTree(5, 10)
    tree.display()