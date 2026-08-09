let search_city = document.querySelector(".search_city");
let input_city = document.querySelector("input");

let city_box = document.querySelector(".city_box");
let temp_box = document.querySelector(".temp_box");
let humidity_box = document.querySelector(".humidity_box");
let wind_box = document.querySelector(".wind_box");
let icon_box = document.querySelector(".icon");

const API_KEY = "YOUR_API_KEY";


search_city.addEventListener("click", () => {

    let city = input_city.value;
    input_city.value = "";

    city_box.innerText = city.toUpperCase();

    let url =
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${"5a826781ff842476b06679d78ce0e744"}`;


    fetch(url)

        .then(res => res.json())

        .then(data => {

            let latitude = data[0].lat;
            let longitude = data[0].lon;


            let weather_url =
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${"5a826781ff842476b06679d78ce0e744"}`;


            return fetch(weather_url);
        })

        .then(response => response.json())

        .then(weather => {

            let real_temp =
                (weather.main.temp - 273.15).toFixed(2) + "°C";

            temp_box.innerText = real_temp;

            humidity_box.innerText =
                weather.main.humidity + " %";

            wind_box.innerText =
                weather.wind.speed + " m/s";


            let icon = weather.weather[0].icon;

            let image = document.createElement("img");

            image.src =
                `https://openweathermap.org/img/wn/${icon}@2x.png`;

            image.alt =
                weather.weather[0].description;

            icon_box.innerHTML = "";

            icon_box.appendChild(image);


            console.log(weather);
        })

        .catch(error => {

            temp_box.innerText = "__";
            humidity_box.innerText = "__ %";
            wind_box.innerText = "__ m/s";

            city_box.innerText = "City Not Found";

            icon_box.innerHTML = "";

            console.error("ERROR:", error);
        });
});




// let search_city = document.querySelector(".search_city")
// let input_city = document.querySelector("input");
// let city_box = document.querySelector(".city_box")
// let temp_box = document.querySelector(".temp_box")
// let humidity_box = document.querySelector(".humidity_box")
// let wind_box = document.querySelector(".wind_box")


// search_city.addEventListener("click",()=>{
//     let city = input_city.value;
//     city_box.innerText = city.toUpperCase();
//     console.log(city);
//     let url=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${"5a826781ff842476b06679d78ce0e744"}`
//     fetch(url)
//     .then( res=>res.json())
//     .then(data=>{
//         let latitude = data[0].lat;
//         let longitude = data[0].lon;
//         let url_temp =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${"5a826781ff842476b06679d78ce0e744"}`
//         fetch(url_temp)
//         .then(response=>response.json())
//         .then(temp=>{
//             real_temp = (temp.main.temp-273.15).toFixed(2)+"°C";
//             temp_box.innerText = real_temp;
//             humidity_box.innerText = temp.main.humidity+" %";
//             wind_box.innerText = temp.wind.speed+" m/s";
            
//             console.log();
//             console.log(temp);
//             console.log(temp.weather[0].icon)
//         })
        
//     })
//     .catch(error => {
//         temp_box.innerText = "__";
//         humidity_box.innerText = "__"+" %";
//         wind_box.innerText = "__"+" m/s";
//         city_box.innerText = "City Not Found";
//         console.error("ERROR HAI")
//     }
//         )
// })