// grab the html elements
const imgbox = document.getElementById("input");
const tempbox = document.getElementById("temp");
const weatherinfo = document.getElementById("weatherinfo");
const humidity = document.getElementById("humidity")
const cloudPercent = document.getElementById("cloud%")
const windSpeed = document.getElementById("wind")
const btn = document.getElementById("btn");
let val = document.getElementById("input1");
var img = document.getElementById("myImg");

//api key's 
const keys = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "22247dff10mshad88d7d49ec5f8fp1f29b1jsn644ba66f1e41",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

//function that fetch data
const  getweather = async () => {
    const city = val.value
    const data = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, keys)
        .then(response => response.json())

    

    const tempInC = data.current.temp_c
    const howIsWeather = data.current.condition.text
    const icon = data.current.condition.icon
    const humiduty = data.current.humidity
    const cloud = data.current.cloud
    const windInKph = data.current.wind_kph
    

    
    tempbox.innerHTML = `${tempInC} &nbsp  &#8451`
    humidity.innerHTML= `&#127777  &nbsp  ${humiduty} `
    cloudPercent.innerHTML = `&#9729 &nbsp ${cloud}`
    windSpeed.innerHTML = `&nbsp &nbsp  &nbsp &nbsp &#128168 &nbsp ${windInKph} kph`
    weatherinfo.innerHTML = howIsWeather
    img.src = icon

}


// button click listenr to fetch ans show data
btn.addEventListener("click" , () => {
  getweather()
})

