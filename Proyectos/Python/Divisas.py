from forex_python.converter import CurrencyRates

# Crear una instancia del conversor de divisas
c = CurrencyRates()

# Definir las monedas y la cantidad que deseas convertir
amount = 100  # Cambia esto a la cantidad que quieras convertir
from_currency = "USD"
to_currency = "EUR"

# Realizar la conversión
result = c.convert(from_currency, to_currency, amount)

print(f"{amount} {from_currency} es igual a {result} {to_currency}")