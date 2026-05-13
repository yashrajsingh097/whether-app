const input = document.getElementById('cityInput');
const apikey = "17226af73541c100ac34e678a5bd854a";
async function getWeather() {
    const city = input.value;
    const  api =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const data = await fetch(api).then(res => res.json()).then(data => data);
    if(city === ""){
        alert("Please enter a city name");
    }
    if  ( data.cod ==404){
      alert ("city not found! please enter a valid city name");
      return;
    }

    else{
        const weather = document.getElementById('weatherResult');
        if(data.weather[0].description === 'broken clouds'){
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')";
        }else if(data.weather[0].description === 'scattered clouds'){
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')";
        }
        else if(data.weather[0].description === 'clear sky'){
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')";
        }
        else if (data.weather[0].description === 'smoke'){
          document.body.style.backgroundimage = "url('smoke.jpg')";
        }
        weather.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Description: ${data.weather[0].description}</p>
        `;
    }
  }
