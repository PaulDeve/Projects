document.getElementById('ejecutar').addEventListener('click', function() {
    const codigo = document.getElementById('code').value;
    try {
        const resultado = eval(codigo);
        document.getElementById('resultado').innerText = resultado;
    } catch (error) {
        document.getElementById('resultado').innerText = 'Error: ' + error.message;
    }
});
