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
$(".temp").text(response.main.temp)
$(".humidity").text(response.main.humidity)
$(".weatherIcon").text(response.weather[0])//maybe .image? didn't work
$(".windSpeed").text(response.wind.speed)

});

$.ajax({
url: queryURLfiveday,
method: "GET"

}).then(function(response){
console.log(queryURLfiveday);
console.log(response);
//temps for five day
$(".dayonetemp").text(response.list[0].main.temp)
$(".daytwotemp").text(response.list[8].main.temp)
$(".daythreetemp").text(response.list[16].main.temp)
$(".dayfourtemp").text(response.list[24].main.temp)
$(".dayfivetemp").text(response.list[32].main.temp)

//humidity for five day
$(".dayonehumidity").text(response.list[0].main.humidity)
$(".daytwohumidity").text(response.list[8].main.humidity)
$(".daythreehumidity").text(response.list[16].main.humidity)
$(".dayfourhumidity").text(response.list[24].main.humidity)
$(".dayfivehumidity").text(response.list[32].main.humidity)

//windspeed for five day
$(".dayonewindspeed").text(response.list[0].wind.speed)
$(".daytwowindspeed").text(response.list[8].wind.speed)
$(".daythreewindspeed").text(response.list[16].wind.speed)
$(".dayfourwindspeed").text(response.list[24].wind.speed)
$(".dayfivewindspeed").text(response.list[32].wind.speed)

$(".fiveday").text(response.city.name) ;




})
})