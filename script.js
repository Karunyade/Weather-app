
const apikey="2e34571972cfc6565ad992332291a5e5";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input") //to select input and button
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon");// to get the weather icon
async function checkweather(city)
{//pass city to update detail
   const response = await fetch(apiurl + city + `&appid=${apikey}`);
   if(response.status==404)
   {
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";//to diplay error msg when 404 is passed
   }
   else
   {
   var data= await response.json();
  
   document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
   document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
   document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
   if(data.weather[0].main =="Clouds")
   {
    //to check if weather main ==clound then change image by weathericon using src same to others
    weatherIcon.src="images/clouds.png";
   }
   else if(data.weather[0].main =="Clear")
   {
    weatherIcon.src="images/clear.png";
   }
   else if(data.weather[0].main =="Rain")
   {
    weatherIcon.src="images/rain.png";
   }
   else if(data.weather[0].main =='Drizzle')
   {
    weatherIcon.src="images/drizzle.png";
   }
   else if(data.weather[0].main =='Mist')
   {
    weatherIcon.src="images/mist.png";
   }
   document.querySelector(".weather").style.display="block";//to display detail when info is in search bar is click
   
   document.querySelector(".error").style.display="none";//if 404 error is not passed then make it as none
  }
}
searchBtn.addEventListener("click",()=>{
    // it return  the city info in the input field
    checkweather(searchBox.value);//pass the  to checkweather in async function
})