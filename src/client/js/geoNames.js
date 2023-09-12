// async function geoNamesFun(cityName) {
//   const geoNamesKey = 'felixkimm';
//   const geoNamesAPI = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=1&username=${geoNamesKey}`;
  
//   try {
//     const res = await fetch(geoNamesAPI);
//     const data = await res.json();

//     const latitude = data.geonames[0].lat;
//     const longitude = data.geonames[0].lng;
//     const countryName = data.geonames[0].countryName;

//     document.getElementById('alt').innerHTML = `Latitude: ${latitude}`;
//     document.getElementById('lng').innerHTML = `Longitude: ${longitude}`;
//     document.getElementById('country-name').innerHTML = `Country: ${countryName}`;

//   } catch (error) {
//     console.log(error);
//   }
// }

// document.getElementById('generate').addEventListener('click', () => {
//   const cityName = document.getElementById('zip').value;
//   geoNamesFun(cityName);
// });

// export { geoNamesFun }

