const APIkey = 'caedc3880dded376b8777ec4072a1cca';
let city = 'London';


function getWeather() {
    let translateWeatherURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`
    fetch(translateWeatherURL)
        .then(response => response.json())
        .then(data => {
            latitude = data[0].lat;
            longitude = data[0].lon;

            let openWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`;
            return fetch(openWeatherURL)
        })
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            $('#city-name').text(data.city.name);
            $('#temperature').text('Temperature: ' + data.list[0].main.temp);
            $('#wind').text('Wind Speed: ' + data.list[0].wind.speed);
            $('#humidity').text('Humidity: ' + data.list[0].main.humidity);
            let iconId = data.list[1].weather[0].icon;
            console.log(iconId);
            let weatherIcon = `https://openweathermap.org/img/wn/${iconId}@2x.png`
            $('#weather-icon').attr('src', weatherIcon);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};
//getWeather();

