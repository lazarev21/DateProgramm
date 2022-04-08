import {compareAsc, format} from "../node_modules/data-fns";
import Cookies from 'js-cookie';
import { container, dateInput } from "./view.js";

container.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(dateInput);
    
})
