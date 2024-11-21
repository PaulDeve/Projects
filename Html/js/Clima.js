// Inserta tu clave de API de OpenWeather aquí
const apiKey = '518353760f195f81210fc31328e86eeb';

// Obtén referencias a los elementos del DOM
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherDiv = document.getElementById('weather');

// Función para obtener el clima actual
async function getWeather() {
    try {
        // Obtén la ubicación del usuario
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Realiza una solicitud a la API de OpenWeather
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);

            // Si la solicitud es exitosa, muestra los datos del clima
            if (response.ok) {
                const data = await response.json();
                const weatherHTML = `
                    <p>Ciudad: ${data.name}</p>
                    <p>Temperatura: ${data.main.temp}°C</p>
                    <p>Clima: ${data.weather[0].description}</p>
                `;
                weatherDiv.innerHTML = weatherHTML;
            } else {
                weatherDiv.innerHTML = '<p>Error al obtener datos del clima.</p>';
            }
        }, (error) => {
            weatherDiv.innerHTML = '<p>No se pudo obtener la ubicación.</p>';
        });
    } catch (error) {
        weatherDiv.innerHTML = '<p>Error al obtener datos del clima.</p>';
    }
}

// Agrega un event listener al botón
getWeatherBtn.addEventListener('click', getWeather);
