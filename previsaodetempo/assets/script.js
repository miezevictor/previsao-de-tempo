function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '4fe6ab8be2ac38a5b534f52f95938f1c'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Cidade não encontrada');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const weatherCondition = translateWeatherDescription(data.weather[0].description);
            const maxTemperature = data.main.temp_max;
            const sunriseTimestamp = data.sys.sunrise * 1000;
            const sunsetTimestamp = data.sys.sunset * 1000;
            const sunriseTime = new Date(sunriseTimestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            const sunsetTime = new Date(sunsetTimestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
            <div class="clima">
                
            </div>
            <p>A temperatura em <b>${city}</b> é de </p>
            <p class="temperatura">${temperature}°C</p>
            <div class="row">
                <div class="row_content">
                    <p>Temperatura Máxima do Dia:<br> ${maxTemperature}°C</p>
                </div>
                <div class="row_content">
                    <p>Condição do tempo:<br> ${weatherCondition}</p>
                </div>
                <div class="row_content">
                    <p>Humidade:<br> ${humidity}%</p>
                </div>
                <div class="row_content">
                    <p>Velocidade do Vento:<br> ${windSpeed} m/s</p>
                </div>
                <div class="row_content">
                    <p>Hora Local:<br> ${getCurrentTime()}</p>
                </div>
                <div class="row_content">
                    <p>Nascer do Sol:<br> ${sunriseTime}</p>
                </div>
                <div class="row_content">
                    <p>Pôr do Sol:<br> ${sunsetTime}</p>
                </div>
            </div>
            `;

            // Altera a cor de fundo com base na temperatura
            if (temperature > 25) {
                body.style.background = `linear-gradient(to bottom right, #38bb5b, #cd8c13)`; // Vermelho
                
            } else if (temperature > 15) {
                body.style.background = `linear-gradient(to bottom right, #00aaff, #ffffff)`;
            } else {
                body.style.backgroundColor = '#87ceeb'; // Azul
            }
        })
        .catch(error => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>${error.message}</p>`;
            weatherInfo.style.backgroundColor = '#ff6347'; // Vermelho (erro)
        });

    // Função para obter a hora local
    function getCurrentTime() {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        return `${hour}:${minute < 10 ? '0' : ''}${minute}`;
    }

    function translateWeatherDescription(description) {
        switch (description.toLowerCase()) {
            case 'clear sky':
                return 'Céu Limpo';
            case 'few clouds':
                return 'Poucas Nuvens';
            case 'scattered clouds':
                return 'Nuvens Dispersas';
            case 'broken clouds':
                return 'Nuvens Quebradas';
            case 'overcast clouds':
                return 'Nublado';
            case 'light rain':
                return 'Chuva Leve';
            case 'moderate rain':
                return 'Chuva Moderada';
            case 'heavy intensity rain':
                return 'Chuva Intensa';
            // Adicione mais casos conforme necessário
            default:
                return description;
        }
    }
    // Função para renderizar os dados da previsão do tempo armazenados localmente
    function renderStoredWeatherData(data) {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
        <p>A temperatura em ${data.city} é de ${data.temperature}°C</p>
        <p>Temperatura Máxima do Dia: ${data.maxTemperature}°C</p>
        <p>Umidade: ${data.humidity}%</p>
        <p>Velocidade do Vento: ${data.windSpeed} m/s</p>
        <p>Clima: ${data.weatherDescription}</p>
        <img src="${data.iconUrl}" alt="Condição climática">
        <p>Hora Local: ${data.sunriseTime}</p>
        <p>Nascer do Sol: ${data.sunriseTime}</p>
        <p>Pôr do Sol: ${data.sunsetTime}</p>
    `;

        // Calcula a cor com base na temperatura
        const color = calculateColor(data.temperature);

        // Aplica o gradiente de cor ao fundo da div weatherInfo
        weatherInfo.style.background = `linear-gradient(to bottom, ${color} 0%, #f0f0f0 100%)`;
    }

    // Tenta carregar os dados da última consulta armazenados localmente quando a página é carregada
    window.addEventListener('load', () => {
        const storedData = JSON.parse(localStorage.getItem('weatherData'));
        if (storedData) {
            renderStoredWeatherData(storedData);
        }
    });
}
