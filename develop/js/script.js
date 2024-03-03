
const APIkey = 'caedc3880dded376b8777ec4072a1cca';
let city = 'Paris';
let coordinates;
let latitude;
let longitude;


function getWeather() {
    let translateWeatherURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`
    fetch(translateWeatherURL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            latitude = data[0].lat;
            longitude = data[0].lon;
            let openWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
            fetch(openWeatherURL)
                .then(response => {
                    return console.log(response.json());
                })
        })

    // .then(data => {
    //     console.log(data);
    //     .catch(error => {
    //         console.error('There is an Error', error);
    //     });
    // })

};
getWeather();
