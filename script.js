var APIkey = "3fc6abd45549271dc494fafbdad4de6e";
let WeatherID = ""


var queryURLtoday = "https://api.openweathermap.org/data/2.5/weather?q=" + inputText + ",US&appid=3fc6abd45549271dc494fafbdad4de6e";
var queryURLfiveday = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputText + ",US&appid=3fc6abd45549271dc494fafbdad4de6e";
var inputText = $("#cityName").val();
console.log(inputText)

$("#submitBtn").on("click", function(event){

event.preventDefault();

$.ajax({
url: queryURLtoday,
method: "GET"
}).then(function(response){
console.log(APIkey)
console.log(queryURLtoday);

console.log(response);

$(".cityName").text(response.name)
$(".temp").text("Temp: " + ((response.main.temp - 273.15) * 1.80 + 32))
$(".humidity").text("Humidity: " + response.main.humidity)
$(".weatherIcon").text(response.weather[0])//maybe .image? didn't work
$(".windSpeed").text("Windspeed: " + response.wind.speed)

});

$.ajax({
url: queryURLfiveday,
method: "GET"

}).then(function(response){
console.log(queryURLfiveday);
console.log(response);
//temps for five day
$(".dayonetemp").text("Temp: " + ((response.list[0].main.temp - 273) *1.80 +32))
$(".daytwotemp").text("Temp: " + ((response.list[8].main.temp - 273) *1.80 +32))
$(".daythreetemp").text("Temp: " + ((response.list[16].main.temp - 273) *1.80 +32))
$(".dayfourtemp").text("Temp: " + ((response.list[24].main.temp - 273) *1.80 +32))
$(".dayfivetemp").text("Temp: " + ((response.list[0].main.temp - 273) *1.80 +32))

//humidity for five day
$(".dayonehumidity").text("Humidity: " + response.list[0].main.humidity)
$(".daytwohumidity").text("Humidity: " + response.list[8].main.humidity)
$(".daythreehumidity").text("Humidity: " + response.list[16].main.humidity)
$(".dayfourhumidity").text("Humidity: " + response.list[24].main.humidity)
$(".dayfivehumidity").text("Humidity: " + response.list[32].main.humidity)

//windspeed for five day
$(".dayonewindspeed").text("Windspeed: " + response.list[0].wind.speed)
$(".daytwowindspeed").text("Windspeed: " + response.list[8].wind.speed)
$(".daythreewindspeed").text("Windspeed: " + response.list[16].wind.speed)
$(".dayfourwindspeed").text("Windspeed: " + response.list[24].wind.speed)
$(".dayfivewindspeed").text("Windspeed: " + response.list[32].wind.speed)

$(".fiveday").text(response.city.name) ;




})
})