const { update } = require("lodash");

const WeatherController = (() =>{
    const weatherObject = {};
    const key = "22ce53886cae9b24e4fbed0d6b8438bb";
    const location = document.querySelector(".search-location");
    const name = document.querySelector(".name");
    const mainArr = [document.querySelector(".temp"),
                    document.querySelector(".feels_like"),
                    document.querySelector(".temp_min"),
                    document.querySelector(".temp_max"),
                    document.querySelector(".pressure"), 
                    document.querySelector(".humidity")]
    const mainKeys = ["temp", "feels_like", "temp_min", "temp_max", "pressure", "humidity"];

    
    const weatherArr = [document.querySelector(".weather"), document.querySelector(".description")];
    const weatherKeys = ["main", "description"]

    const windArr = [document.querySelector(".speed"),
                    document.querySelector(".degree")];
    const windKeys = ["speed", "deg"];
    
    
    weatherObject.getLocation = async function(){

        try{
            const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+location.value+"&units=imperial&APPID=" + key);
            const data = await response.json();
            
            updateInformation(data);
        } catch(err){
            console.error("Error Idiot!" + err);
            //TODO: Handle Error
        }
        
    };
    const updateInformation = (newData) =>{
        console.log(newData.main)
        
        for(let i = 0; i < weatherKeys.length; i++){
            weatherArr[i].textContent = newData.weather[0][weatherKeys[i]];
        }
        for(let i = 0; i < windKeys.length; i++){
            windArr[i].textContent = newData.wind[windKeys[i]];
        }
        for(let i = 0; i < mainKeys.length; i++){
            mainArr[i].textContent = newData.main[mainKeys[i]];
        }
        name.textContent = newData.name;
    };

    return weatherObject;
})();
module.exports = WeatherController