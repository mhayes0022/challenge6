# What's the Weather?

## Page Description

This is a searchable weather application. Across the top of the page is the title: What's the Weather?
On the left side of the page is the search section. When you enter a city name into the search bar and click the submit button,
the application sends the city name to the OpenWeather API and retrieves the weather information for that city. If the user submits a blank search bar, the page will send an alert that the user must enter a city. Below the submit button is the search history section. Each time you submit a valid city, a button is created with that city name in the search history section. When you click on one of these buttons, 
that city is resubmitted to the API, and its weather is displayed again. The main section of the page is devoted to the weather results. The top portion displays the searched city name, and below that its weather conditions including current temperature, wind speed, and humidity. It also displays an icon representing current weather conditions in that city. Below the current weather section is the five day forecast section. It displays the forecasted weather conditions for the searched city for the next five days. There are five columns, one for each day. At the top of each column is the date for the forecast, the temperature, wind speed, humidity, and a weather icon corresponding with the weather conditions for that day. If you close the page and return to it later, the previously searched cities remain in the search history section.

## Website Link


## Website Screenshot


## Credits
This application was coded entirely by me. However, I received guidance and feedback from a tutor through the University of Minnesota, as well as from the TAs for the fullstack coding bootcamp through the University of Minnesota. In particular, the tutor was very helpful in regards to the storeInLocalStorage function, and the TAs helped give advice for ways to clean up the code. Additionally, the AI the University of Minnesota provides for the use of coding bootcamp students was helpful in pointing me in the right direction for how to convert the unix timestamp within the API response into a day/month format. 

## License

MIT License

Copyright (c) 2023 mhayes0022

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


