// GeoNames
async function geoNamesFun(cityName) {
  const geoNamesKey = 'felixkimm';
  const geoNamesAPI = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=1&username=${geoNamesKey}`;
  
  try {
    const res = await fetch(geoNamesAPI);
    const data = await res.json();

    const latitude = data.geonames[0].lat;
    const longitude = data.geonames[0].lng;
    const countryName = data.geonames[0].countryName;

    document.getElementById('alt').innerHTML = `Latitude: ${latitude}`;
    document.getElementById('lng').innerHTML = `Longitude: ${longitude}`;
    document.getElementById('country-name').innerHTML = `Country: ${countryName}`;

  } catch (error) {
    console.log(error);
  }
}


// WeatherBit
const printWeather = document.getElementById('weather-bit');

async function weatherBitFun(cityName) {
  const weatherKey = 'bfb73eeaffcb4f1abf2bb159679f0130';
  const weatherBitAPI = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName},NC&key=${weatherKey}`;

  try {
    const res = await fetch(weatherBitAPI);
    const data = await res.json();

    console.log(data)

  } catch (error) {
    console.log(error)
  }
  
  // fetch(weatherBitAPI)
  //   .then( res => {
  //     return res.json()
  //   })
  //   .then( data => {
  //     console.log(data)
  //   })
  //   .catch( error => {
  //     console.log(error)
  //   })

}

weatherBitFun();

// Event Listener
document.getElementById('generate').addEventListener('click', () => {
  const cityName = document.getElementById('zip').value;
  geoNamesFun(cityName);
});

console.log("teste4")

export { geoNamesFun, weatherBitFun }