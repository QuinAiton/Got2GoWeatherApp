The goal of this exercise is to create a small web widget that will use data received from an API
to display the current weather in either Miami, New York, or Los Angeles.
Please use either Vue.js or React as your front-end JavaScript/TypeScript framework.

The widget needs to have the following components:
[x] Retrieve data from https://openweathermap.org/api
[x] Display the current weather in either Miami, New York, or Los Angeles
[x] Name of the selected city (default: Miami).
[x] Current temperature in the selected city (eg. 60°F).
[x] An icon representing the weather condition in the city.
[x] A dropdown menu which allows the user to change the selected city (Miami, New York,
or Los Angeles).
[x] (Optional) Instead of defaulting to Miami, auto-detect the user's location.

Please use the free version of the Open Weather API (https://openweathermap.org/api) to
retrieve the weather data. Documentation explaining authentication, usage, and weather
condition icon selection is available on their website.

To run:
yarn && yarn start

to keep in mind:

1. default is to users browser location
2. since it would be weird for this location to no longer be selectable after selecting a new location I added it to the dropdown as well
3. I did not know if I should be writing tests for everything, so for the sake of time I decided to not write tests, but I am happy to write them if required
