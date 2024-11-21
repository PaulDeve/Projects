
document.getElementById('sorteoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    realizarSorteo();
});

function realizarSorteo() {
    const numParticipantes = document.getElementById('numParticipantes').value;
    const resultadoDiv = document.getElementById('resultado');

    if (numParticipantes > 0) {
        let contador = 0;
        resultadoDiv.classList.add('spin');

        const intervalo = setInterval(() => {
            contador++;
            const numeroAleatorio = Math.floor(Math.random() * numParticipantes) + 1;
            resultadoDiv.innerText = `El número elegido es : ${numeroAleatorio}`;
            
            if (contador > 30) { 
                clearInterval(intervalo);
                resultadoDiv.classList.remove('spin');
            }
        }, 100); // Intervalo de tiempo en milisegundos entre cambios
    } else {
        resultadoDiv.innerText = 'Por favor, ingrese un número válido.';
    }
}


