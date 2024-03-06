const APIkey = 'caedc3880dded376b8777ec4072a1cca';
//let city;
let searchInput = document.getElementById('search');
let searchBtn = document.getElementById('search-button');
let cityName = document.getElementById('city-name');
let currentTemp = document.getElementById('temperature');
let currentWind = document.getElementById('wind');
let currentHumid = document.getElementById('humidity');
let currentWeatherIcon = document.getElementById('weather-icon');


function getWeather() {
    let city = searchInput.value.trim();
    // function checkForm() {
    //     if (!city) {
    //         throw new Error('There does not appear to be a city with that name')
    //     }
    // };
    
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
            //console.log(iconId);
            let weatherIcon = `https://openweathermap.org/img/wn/${iconId}@2x.png`
            $('#weather-icon').attr('src', weatherIcon);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};

//Below wraps all of the necessary functions that follow the 'search' button being clicked
function searchCity(event) {
    event.preventDefault();
    //getWeather();
}

//Below is the event listener for the search button

searchBtn.addEventListener('click', searchCity);



//get the city input from the search bar
//ISSUE: it appears the when the city is submitted in the search bar, the text stays in the search area. 
//The search function works, but how can I undo that

//save the city input to local storage
//print local storage into search div



// Global variables
// DOM element references
// Add timezone plugins to day.js
// Function to display the search history list.
// Start at end of history array and count down to show the most recent at the top.
// `data-search` allows access to city name when click handler is invoked
// Function to update history in local storage then updates displayed history.
// If there is no search term return the function
// Function to get search history from local storage
// Function to display the current weather data fetched from OpenWeather api.
// Store response data from our fetch request in variables
// Function to display a forecast card given an object from open weather api
// daily forecast.
// variables for data from api
// Create elements for a card
// Add content to elements
// Function to display 5 day forecast.
// Create unix timestamps for start and end of 5 day forecast
// First filters through all of the data and returns only data that falls between one day after the current data and up to 5 days later.
// Then filters through the data and returns only data captured at noon for each day.
// Fetches weather data for given location from the Weather Geolocation
// endpoint; then, calls functions to display current and forecast weather data.
// Don't continue if there is nothing in the search form
// Don't do search if current elements is not a search history button