function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  function checkPrime() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    const number = parseInt(numberInput);
  
    if (isNaN(number)) {
      resultElement.innerText = "Por favor, ingrese un número válido.";
      return;
    }
  
    if (isPrime(number)) {
      resultElement.innerText = `${number} es un número primo.`;
    } else {
      resultElement.innerText = `${number} no es un número primo.`;
    }
  }
  