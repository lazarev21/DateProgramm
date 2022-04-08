export {container, outputResultOnUI}

const container = document.querySelector('.container');

function outputResultOnUI (result) {
    document.querySelector('.hours-count').innerHTML = result.hours
    document.querySelector('.days-count').innerHTML = result.days
    document.querySelector('.years-count').innerHTML = result.years
}