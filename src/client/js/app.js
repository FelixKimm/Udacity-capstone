/* Global Variables */
const apiKey = "&APPID=2b9fca96cb25ae2a5dd127933b86f9f9&units=metric";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1)+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener
document.getElementById('generate').addEventListener('click', () => {

  const zip = document.getElementById('zip').value
  const feelings = document.getElementById('feelings').value

  getData(apiURL, zip, apiKey)
    .then( data => {
      postData('/addData', {
        temperature: data.main.temp,
        date: newDate,
        feel: feelings
      });
    })
    .then(() => retrieveData())
});

// Async GET
const getData = async(apiURL, zip, apiKey) => {
    const res = await fetch(apiURL+zip+apiKey)

    try {
        const data = await res.json();
        return data;
    } catch(error) {
        console.log('error', error);
    }
}


// Async POST
const postData = async ( url = '', data = {}) => {
    const res = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },  
      body: JSON.stringify(data), 
    });
  
    try {
        const newData = await res.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
  }

// Update UI
const retrieveData = async () =>{
  const request = await fetch('/all');
  try {
    const allData = await request.json()
    document.getElementById('temp').innerHTML = Math.round(allData.temperature)+ ' degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById('date').innerHTML =allData.date;
  }
  catch(error) {
    console.log('error', error);
  }
 }

 export { getData, postData, retrieveData}