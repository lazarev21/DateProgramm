
import { intervalToDuration } from "../node_modules/date-fns";
//import Cookies from 'js-cookie'; 
import { container } from "./view.js";


container.addEventListener('submit', function (event) {
    event.preventDefault();
    const dateInput = document.querySelector('.input').value;
    durationFromInterval(dateInput)
   
    
})

function durationFromInterval(dateInput) {
    const result = intervalToDuration({
        start: new Date(),
        end: new Date(dateInput)
      });
      outputResultOnUI(result)

}

function outputResultOnUI (result) {
    document.querySelector('.hours-count').innerHTML = result.hours
    document.querySelector('.days-count').innerHTML = result.days
    document.querySelector('.years-count').innerHTML = result.years
}