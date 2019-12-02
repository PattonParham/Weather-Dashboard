var APIkey = "3fc6abd45549271dc494fafbdad4de6e";
let WeatherID = ""
var queryURLtoday = "https://api.openweathermap.org/data/2.5/weather?id=4644585&appid=3fc6abd45549271dc494fafbdad4de6e" ;
var queryURLfiveday = "https://api.openweathermap.org/data/2.5/forecast?id=4644585&appid=3fc6abd45549271dc494fafbdad4de6e"
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

})