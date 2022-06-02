import WeatherController from "./weatherController";
import _ from 'lodash';
import './style.css'

const search = document.querySelector(".search-btn");
const search_field = document.querySelector(".search-location")


search.addEventListener('click', ()=>{
    WeatherController.getLocation();
})
search_field.addEventListener('keydown', (e)=>{handle(e)});
function handle(e){
    console.log("???")
    if(e.keyCode === 13){
        WeatherController.getLocation();
    }
}
const img_credit = document.createElement("div");
img_credit.textContent = "Image by Pixabay@pexels.com"
