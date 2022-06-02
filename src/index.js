import WeatherController from "./weatherController";
import _ from 'lodash';
import './style.css'

const search = document.querySelector(".search-btn");



search.addEventListener('click', ()=>{
    console.log("??")
    WeatherController.getLocation();
})
const img_credit = document.createElement("div");
img_credit.textContent = "Image by Pixabay@pexels.com"
