document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el contexto del canvas
    const ctx = document.getElementById('myChart').getContext('2d');

    // Datos para el gráfico
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril',
                 'Mayo', 'Junio','Julio', 'Agosto',
                 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
        datasets: [
            {
                label: 'Ventas',
                data: [12, 19, 30, 15, 22, 35, 15, 35, 28, 50, 67, 100],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };

    // Configuración para el gráfico
    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Crea un gráfico de barras
    new Chart(ctx, config);
});


