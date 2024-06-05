var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#button');
var city = document.querySelector('#cityoutput');
var desc = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik = "509a0077ffdd3636186efea500d91879";

function convertion(val){
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
        .then(res => res.json()).then(data => {
            var nameval = data['name'];
            var description = data['weather']['0']['description'];
            var temperature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];


            city.innerHTML=`Weather of <span>${nameval}</span>`;
            temp.innerHTML=`Temperature: <span>${convertion(temperature)} C</span>`;
            wind.innerHTML=`Wind Speed: <span>${wndspeed} km/h</span>`;
            desc.innerHTML=`Sky Conditions: <span>${description}</span>`;
    })
        .catch(err => alert('You entered Wrong City Name'));
})