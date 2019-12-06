var APIkey = "3fc6abd45549271dc494fafbdad4de6e";
let WeatherID = ""





$("#submitBtn").on("click", function(event){

event.preventDefault();

var inputText = $("#cityName").val();
console.log(inputText);
var queryURLtoday = "https://api.openweathermap.org/data/2.5/weather?q=" + inputText + ",US&appid=3fc6abd45549271dc494fafbdad4de6e";

$.ajax({
url: queryURLtoday,
method: "GET"
}).then(function(response){
console.log(APIkey)
console.log(queryURLtoday);




$(".cityName").text(response.name);
$(".temp").text("Temp: " + Math.floor(((response.main.temp - 273.15) * 1.80 + 32)) + "°F");
$(".humidity").text("Humidity: " + response.main.humidity + "%");
$(".weatherIcon").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
$(".windSpeed").text("Windspeed: "  + response.wind.speed + "MPH");
$(".date").text(((moment().month()) + 1 )+ "/" + (moment().date()) + "/" + (moment().year()))
});
var queryURLfiveday = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputText + ",US&appid=3fc6abd45549271dc494fafbdad4de6e";
$.ajax({
url: queryURLfiveday,
method: "GET"

}).then(function(response){
console.log(queryURLfiveday);
console.log(response);
//temps for five day
$(".dayonetemp").text("Temp: " + Math.floor(((response.list[0].main.temp - 273) *1.80 +32)) + "°F");
$(".daytwotemp").text("Temp: " + Math.floor(((response.list[8].main.temp - 273) *1.80 +32)) + "°F");
$(".daythreetemp").text("Temp: " + Math.floor(((response.list[16].main.temp - 273) *1.80 +32)) + "°F");
$(".dayfourtemp").text("Temp: " + Math.floor(((response.list[24].main.temp - 273) *1.80 +32)) + "°F");
$(".dayfivetemp").text("Temp: " + Math.floor(((response.list[32].main.temp - 273) *1.80 +32)) + "°F");

//humidity for five day
$(".dayonehumidity").text("Humidity: " + response.list[0].main.humidity + "%");
$(".daytwohumidity").text("Humidity: " + response.list[8].main.humidity + "%");
$(".daythreehumidity").text("Humidity: " + response.list[16].main.humidity + "%");
$(".dayfourhumidity").text("Humidity: " + response.list[24].main.humidity + "%");
$(".dayfivehumidity").text("Humidity: " + response.list[32].main.humidity + "%");

//windspeed for five day
$(".dayonewindspeed").text("Windspeed: " + response.list[0].wind.speed + "MPH");
$(".daytwowindspeed").text("Windspeed: " + response.list[8].wind.speed + "MPH");
$(".daythreewindspeed").text("Windspeed: " + response.list[16].wind.speed + "MPH");
$(".dayfourwindspeed").text("Windspeed: " + response.list[24].wind.speed + "MPH");
$(".dayfivewindspeed").text("Windspeed: " + response.list[32].wind.speed + "MPH");

//weather icon for five day
$(".dayoneicon").attr("src", "https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
$(".daytwoicon").attr("src", "https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png");
$(".daythreeicon").attr("src", "https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png");
$(".dayfouricon").attr("src", "https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png");
$(".dayfiveicon").attr("src", "https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png");

//dates for five day
$(".dateone").text(((moment().month()) + 1 )+ "/" + ((moment().date()) + 1) + "/" + (moment().year()));
$(".datetwo").text(((moment().month()) + 1 )+ "/" + ((moment().date()) + 2) + "/" + (moment().year()));
$(".datethree").text(((moment().month()) + 1 )+ "/" + ((moment().date()) + 3) + "/" + (moment().year()));
$(".datefour").text(((moment().month()) + 1 )+ "/" + ((moment().date()) + 4) + "/" + (moment().year()));
$(".datefive").text(((moment().month()) + 1 )+ "/" + ((moment().date()) + 5) + "/" + (moment().year()));

$(".fiveday").text(response.city.name) ;





})
})
function renderButtons(){
    var NameCity = [""];
        $(".history").empty();
    
    for (var i = 0; i < NameCity;)
    
    a.addClass("NameCity");
    a.attr("data-name", NameCity[i] );
    a.text(NameCity[i]);
    $(".history").append(a);
    
    }
renderButtons();
