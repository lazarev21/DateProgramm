
import { intervalToDuration } from 'date-fns';
//import Cookies from 'js-cookie'; 
import { container, outputResultOnUI } from "./view.js";


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

