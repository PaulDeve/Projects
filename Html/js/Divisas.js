document.getElementById("convert").addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const exchangeRates = {
        USD: 1,
        EUR: 0.85,
    };

    const result = (amount * exchangeRates[toCurrency]) / 
    exchangeRates[fromCurrency];

    document.getElementById("result").innerHTML = `
    ${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
});
