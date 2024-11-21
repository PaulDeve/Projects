// Selecciona el elemento <canvas> en tu HTML
// Obtener el contexto del canvas
const ctx = document.getElementById('myChart').getContext('2d');

// Crear un nuevo gráfico de línea
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
            label: 'Ventas',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'blue',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
