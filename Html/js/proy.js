// Obtener elementos del DOM
const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const preview = document.getElementById("preview");

// Función para actualizar la vista previa
function updatePreview() {
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = `<script>${jsCode.value}</script>`;

    const fullCode = `${html}${css}${js}`;
    preview.srcdoc = fullCode;
}

// Escuchar cambios en los textarea
htmlCode.addEventListener("input", updatePreview);
cssCode.addEventListener("input", updatePreview);
jsCode.addEventListener("input", updatePreview);

// Actualizar la vista previa al cargar la página
updatePreview();

// Obtener el botón de ejecutar
const runButton = document.getElementById("run-button");

// Función para ejecutar el código
function runCode() {
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = `<script>${jsCode.value}</script>`;

    const fullCode = `${html}${css}${js}`;
    preview.srcdoc = fullCode;
}

// Escuchar el clic en el botón de ejecutar
runButton.addEventListener("click", runCode);

// Actualizar la vista previa al cargar la página
updatePreview();

