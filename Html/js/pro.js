document.getElementById('run').addEventListener('click', function () {
    const code = document.getElementById('code').value;
    try {
        const result = eval(code);
        document.getElementById('output').textContent = result;
    } catch (error) {
        document.getElementById('output').textContent = error.message;
    }
});
