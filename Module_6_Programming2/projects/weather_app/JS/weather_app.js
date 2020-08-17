window.addEventListener('load', () => {
let lon;
let lat;
let weather_info = document.querySelector('.weather_info');
let weather_degress = document.querySelector('.weather_degress');
let city = document.querySelector('.city');

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
       lon = position.coords.longitude;
       lat = position.coords.latitude;

       const api = `http://api.openweathermap.org/data/2.5/weather?lat=40.82742560228191&lon=-73.9380998421948&units=imperial&appid=f11f8024d2fd92a5460b3dccb63b9b49`;
        fetch(api)
            .then(response => {
                return response.json();
            })
                .then(data => {
                    console.log(data);
                     const {temp, humidity, temp_max} = data.main;
                    weather_info.textContent = humidity;
                     weather_degress.textContent = temp;
                        city.textContent = temp_max ;
            });
    });
    
    }
        
    });




















// http://api.openweathermap.org/data/2.5/weather?lat=40.82742560228191&lon=-73.9380998421948&appid=f11f8024d2fd92a5460b3dccb63b9b49