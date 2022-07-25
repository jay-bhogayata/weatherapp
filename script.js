const imgbox = document.getElementById("input");
const tempbox = document.getElementById("temp");
const weatherinfo = document.getElementById("weatherinfo");
var img = document.getElementById("myImg");
const btn = document.getElementById("btn");
let val = document.getElementById("input1");




const getweather = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "22247dff10mshad88d7d49ec5f8fp1f29b1jsn644ba66f1e41",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};




const  getdata = async () => {
    const city = val.value
    const data = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,getweather)
        .then(response => response.json())

    

    const tempInC = data.current.temp_c
    const howIsWeather = data.current.condition.text
    const icon = data.current.condition.icon
    const humiduty = data.current.humidity
    const cloud = data.current.cloud
    const windInKph = data.current.wind_kph
    const windDir = data.current.wind_dir
    const preassure = data.current.pressure_mb

    // console.log(
    //     `
    //     ${tempInC}
    //     ${howIsWeather}
    //     ${humiduty}
    //     ${cloud}
    //     ${windInKph}
    //     ${windDir}
    //     ${preassure}

    //     `
    // )
    tempbox.innerHTML = `${tempInC}  &#8451`
    weatherinfo.innerHTML = howIsWeather
    img.src = icon

}

btn.addEventListener("click" , () => {
    console.log(val.value)
    getdata()
})

