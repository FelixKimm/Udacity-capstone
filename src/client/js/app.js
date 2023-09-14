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

    return { latitude, longitude };

  } catch (error) {
    console.log(error);
  }
}

// WeatherBit
const printWeather = document.getElementById('weather-bit');

async function weatherBitFun(latitude, longitude, startDate, endDate) {
  if (latitude && longitude) {
    const weatherKey = 'bfb73eeaffcb4f1abf2bb159679f0130';
    const weatherBitAPI = 'https://api.weatherbit.io/v2.0/forecast/daily?' + `start_date=${startDate}` + `&end_date=${endDate}` + `&lat=${latitude}&lon=${longitude}&key=` +weatherKey;
    
    try {
      const res = await fetch(weatherBitAPI);
      const data = await res.json();

      console.log(data)
      printWeather.innerHTML = 'Max Temperature of departure day: ' + data.data[0].max_temp + '<br>Min Temperature of departure day: ' + data.data[0].min_temp;

    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('Latitude and Longitude are not defiened yet, enter a city name first')
  }
}

// pixabay

async function pixabayFun(cityName) {
  const pixabayKey = '39387791-48323a0dae01b238a51127799';
  let encodedCityName = encodeURIComponent(cityName);
  let pixabayAPI = `https://pixabay.com/api/?key=${pixabayKey}&q=${encodedCityName}`;

  try {
    const res = await fetch(pixabayAPI);
    const data = await res.json();

    console.log(data)

    if (data.hits && data.hits.length > 0) {
      const printImg = data.hits;
      console.log(printImg);

      const putPixabayImage = document.getElementById('image-place');
      putPixabayImage.src = printImg[0].webformatURL

    } else {
      alert('No images found!')
    }

  } catch (error) {
    console.log(error);
  }
}

// Event Listener
document.getElementById('generate').addEventListener('click', async () => {

  const cityName = document.getElementById('zip').value;
  const { latitude, longitude } = await geoNamesFun(cityName);
  
  let startDate = document.getElementById('calendar-start').value;
  let endDate = document.getElementById('calendar-end').value;

  weatherBitFun(latitude, longitude, startDate, endDate);

  document.getElementById('image-place').style.display = 'block';

  pixabayFun(cityName);
});

export { geoNamesFun, weatherBitFun, pixabayFun }