var APIkey = "3fc6abd45549271dc494fafbdad4de6e";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + APIkey;

$.ajax({
url: queryURL,
method: "GET"
}).then(function(response){

console.log(queryURL);
console.log(response);





});