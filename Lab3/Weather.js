let apiDetails = {
    baseUrl: "https://api.openweathermap.org/data/2.5/",
    apiKey: "7e3f21edee540e6110af347b55eb1ab2"
}

let searchBox = document.querySelector(".search-box");

searchBox.addEventListener("keypress", setCityName)

function setCityName(e) {
    if (e.keyCode == 13) {
        getWeatherData(searchBox.value)
    }
}

function getWeatherData(cityName) {
    fetch(`${apiDetails.baseUrl}weather?q=${cityName}&units=metric&appid=${apiDetails.apiKey}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            displayResult(res);
        })
}

function displayResult(res) {
    let city = document.querySelector(".city");
    city.innerHTML = `${res.name}, ${res.sys.country}`

    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(res.main.temp)}°c`;

    let climate = document.querySelector(".climate");
    climate.innerHTML = res.weather[0].main;

    let modTemp = document.querySelector(".mod-temp");
    modTemp.innerHTML = `${Math.round(res.main.temp_min)}°c / ${Math.round(res.main.temp_max)}°c`;

    let date = document.querySelector(".date");
    date.innerText = getDateInfo();

}

function getDateInfo() {
    let todaysDate = new Date();
    let daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${daysArr[todaysDate.getDay()]} ${todaysDate.getDate()} ${monthArr[todaysDate.getMonth()]} ${todaysDate.getFullYear()}`
}



