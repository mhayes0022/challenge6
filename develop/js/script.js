const APIkey = 'caedc3880dded376b8777ec4072a1cca';
let city = 'Paris';


function getWeather() {
    let translateWeatherURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`
    fetch(translateWeatherURL)
        .then(response => response.json())
        .then(data => {
            latitude = data[0].lat;
            longitude = data[0].lon;

            let openWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
            return fetch(openWeatherURL)
        })
        .then (response => response.json())
        .then(data => {
            let currentTemp = data.list[0].main.temp;
            console.log(currentTemp);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

};
getWeather();



//$('#temperature').textContent = currentTemp;