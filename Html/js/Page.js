function ejecutarCodigo() {
    var codigo = document.getElementById("codigo").value;
    try {
        var resultado = eval(codigo);
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    } catch (error) {
        document.getElementById("resultado").innerHTML = "Error: " + error.message;
    }
}
