const APIkey = 'caedc3880dded376b8777ec4072a1cca';
const dayjsAPI = 'path/to/dayjs/dayjs.min.js';
let searchInput = document.getElementById('search');
let searchBtn = document.getElementById('search-button');
let cityName = document.getElementById('city-name');
let currentTemp = document.getElementById('temperature');
let currentWind = document.getElementById('wind');
let currentHumid = document.getElementById('humidity');
let currentWeatherIcon = document.getElementById('weather-icon');
let savedCities = document.getElementById('savedCities');
let searchHistory = JSON.parse(localStorage.getItem('savedCities')) || []
let buttonContainer = document.getElementById("savedCities")

let forecastDateOne = document.getElementById('dateOne');
let forecastOneIcon = document.getElementById('weatherIconOne');
let forecastOneTemperature = document.getElementById('tempDayOne');
let forecastOneWind = document.getElementById('windDayOne');
let forecastOneHumidity = document.getElementById('humidityDayOne');

let forecastDateTwo = document.getElementById('dateTwo');
let forecastTwoIcon = document.getElementById('weatherIconTwo');
let forecastTwoTemperature = document.getElementById('tempDayTwo');
let forecastTwoWind = document.getElementById('windDayTwo');
let forecastTwoHumidity = document.getElementById('humidityDayTwo');

let forecastDateThree = document.getElementById('dateThree');
let forecastThreeIcon = document.getElementById('weatherIconThree');
let forecastThreeTemperature = document.getElementById('tempDayThree');
let forecastThreeWind = document.getElementById('windDayThree');
let forecastThreeHumidity = document.getElementById('humidityDayThree');

let forecastDateFour = document.getElementById('dateFour');
let forecastFourIcon = document.getElementById('weatherIconFour');
let forecastFourTemperature = document.getElementById('tempDayFour');
let forecastFourWind = document.getElementById('windDayFour');
let forecastFourHumidity = document.getElementById('humidityDayFour');

let forecastDateFive = document.getElementById('dateFive');
let forecastFiveIcon = document.getElementById('weatherIconFive');
let forecastFiveTemperature = document.getElementById('tempDayFive');
let forecastFiveWind = document.getElementById('windDayFive');
let forecastFiveHumidity = document.getElementById('humidityDayFive');

//Below collects the city the user has searched
function collectUserInput() {
    let city = searchInput.value.trim();
    getLocationCoordinates(city)
}

//Can I stick the check to ensure the city is valid in the function above?


//Below fetches API data as longitude and latitude 
function getLocationCoordinates(city) {
    let translateWeatherURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`
    fetch(translateWeatherURL)
        .then(response => response.json())
        .then(data => {
            let latitude = data[0].lat;
            let longitude = data[0].lon;

            getCurrentWeather(latitude, longitude)
            getFiveDayForecast(latitude, longitude)
        })
};


//Below gets the 5 day forecast from the Open Weather API
function getFiveDayForecast(lat, lon) {
    let openWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`;

    fetch(openWeatherURL).then((res) => res.json())
        .then(data => {
            //forecast information for tomorrow
            let unixDateOne = data.list[0].dt;
            let iconIdOne = data.list[0].weather[0].icon;
            let weatherIconOne = `https://openweathermap.org/img/wn/${iconIdOne}@2x.png`
            forecastOneIcon.setAttribute('src', weatherIconOne);
            forecastOneTemperature.innerHTML = ('Temperature: ' + data.list[0].main.temp);
            forecastOneWind.innerHTML = ('Wind Speed: ' + data.list[0].wind.speed);
            forecastOneHumidity.innerHTML = ('Humidity: ' + data.list[0].main.humidity);

            //forecast information for the day after tomorrow
            let unixDateTwo = data.list[8].dt;
            let iconIdTwo = data.list[8].weather[0].icon;
            let weatherIconTwo = `https://openweathermap.org/img/wn/${iconIdTwo}@2x.png`
            forecastTwoIcon.setAttribute('src', weatherIconTwo);
            forecastTwoTemperature.innerHTML = ('Temperature: ' + data.list[8].main.temp);
            forecastTwoWind.innerHTML = ('Wind Speed: ' + data.list[8].wind.speed);
            forecastTwoHumidity.innerHTML = ('Humidity: ' + data.list[8].main.humidity);

            //forecast information for three days from now
            let unixDateThree = data.list[16].dt;
            let iconIdThree = data.list[16].weather[0].icon;
            let weatherIconThree = `https://openweathermap.org/img/wn/${iconIdThree}@2x.png`
            forecastThreeIcon.setAttribute('src', weatherIconThree);
            forecastThreeTemperature.innerHTML = ('Temperature: ' + data.list[16].main.temp);
            forecastThreeWind.innerHTML = ('Wind Speed: ' + data.list[16].wind.speed);
            forecastThreeHumidity.innerHTML = ('Humidity: ' + data.list[16].main.humidity);

            //forecast information for four days from now
            let unixDateFour = data.list[24].dt;
            let iconIdFour = data.list[24].weather[0].icon;
            let weatherIconFour = `https://openweathermap.org/img/wn/${iconIdFour}@2x.png`
            forecastFourIcon.setAttribute('src', weatherIconFour);
            forecastFourTemperature.innerHTML = ('Temperature: ' + data.list[24].main.temp);
            forecastFourWind.innerHTML = ('Wind Speed: ' + data.list[24].wind.speed);
            forecastFourHumidity.innerHTML = ('Humidity: ' + data.list[24].main.humidity);

            //forecast information for five days from now
            let unixDateFive = data.list[32].dt;
            let iconIdFive = data.list[32].weather[0].icon;
            let weatherIconFive = `https://openweathermap.org/img/wn/${iconIdFive}@2x.png`
            forecastFiveIcon.setAttribute('src', weatherIconFive);
            forecastFiveTemperature.innerHTML = ('Temperature: ' + data.list[32].main.temp);
            forecastFiveWind.innerHTML = ('Wind Speed: ' + data.list[32].wind.speed);
            forecastFiveHumidity.innerHTML = ('Humidity: ' + data.list[32].main.humidity);

            convertDates(unixDateOne, unixDateTwo, unixDateThree, unixDateFour, unixDateFive);
            //console.log(data.list);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Below translates the dates of the five day weather forecast from unix to month, day format
function convertDates(unixDateOne, unixDateTwo, unixDateThree, unixDateFour, unixDateFive) {
    forecastDateOne.innerHTML = dayjs.unix(unixDateOne).format('MMMM DD');
    forecastDateTwo.innerHTML = dayjs.unix(unixDateTwo).format('MMMM DD');
    forecastDateThree.innerHTML = dayjs.unix(unixDateThree).format('MMMM DD');
    forecastDateFour.innerHTML = dayjs.unix(unixDateFour).format('MMMM DD');
    forecastDateFive.innerHTML = dayjs.unix(unixDateFive).format('MMMM DD');
}




//Below gets the current weather from the Open Weather API
function getCurrentWeather(lat, lon) {
    let openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`;

    fetch(openWeatherURL).then((res) => res.json())
        .then(data => {
            storeInLocalStorage(data.name)

            //console.log(data);
            cityName.innerHTML = data.name;
            currentTemp.innerHTML = 'Temperature: ' + data.main.temp;
            currentWind.innerHTML = ('Wind Speed: ' + data.wind.speed);
            currentHumid.innerHTML = ('Humidity: ' + data.main.humidity);
            let iconId = data.weather[0].icon;
            let weatherIcon = `https://openweathermap.org/img/wn/${iconId}@2x.png`
            currentWeatherIcon.setAttribute('src', weatherIcon);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}





//Below wraps together the necessary functions that follow the 'search' button being clicked
function searchCity(event) {
    event.preventDefault();
    collectUserInput()
}

//Below is the event listener for the search button
searchBtn.addEventListener('click', searchCity);


//Below adds items to the local storage array of saved cities
function storeInLocalStorage(x) {
    //below gets rid of duplicate cities in local storage array
    if (searchHistory.includes(x)) {
        return
    }
    searchHistory.push(x)
    localStorage.setItem('savedCities', JSON.stringify(searchHistory));
    searchHistoryBtns()
}

//Below creates buttons for city in local storage
function searchHistoryBtns() {
    buttonContainer.innerHTML = ''
    searchHistory.forEach(createBtns);

    function createBtns(y) {
        const createEl = document.createElement("button");
        createEl.textContent = y;
        createEl.classList.add('biggerCityBtns', 'cityBtns');
        createEl.addEventListener('click', function () {
            getLocationCoordinates(this.textContent)
        })
        buttonContainer.appendChild(createEl);
    }
}

searchHistoryBtns();


// Start at end of history array and count down to show the most recent at the top.
// If there is no search term return the function
// First filters through all of the data and returns only data that falls between one day after the current data and up to 5 days later.
// Then filters through the data and returns only data captured at noon for each day.
// Don't continue if there is nothing in the search form

//TO DO:
//what hours do I set the forecast to get? Is there a way to have it filter to always retrieve noon?
//display today's date at top of current forecast
//contingency for if a non city is searched
//styling
//current weather section collapses funny in smaller screen sizes