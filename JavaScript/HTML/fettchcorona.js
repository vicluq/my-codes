 window.onload = function givetime() {

    setInterval(function () {

        let date1 = new Date
        
        let sec = date1.getSeconds(); let min = date1.getMinutes()
        let hour = date1.getHours(); let day = date1.getDate()
        let month = date1.getMonth(); let montArray = ["Janeiro", 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Agosto', 'Setembro']
        

        if(min < 10 && sec < 10) {document.getElementById("time").innerHTML = `Dia ${day} de ${montArray[month]}, ${hour}:0${min}:0${sec}`}
        else if(min < 10) {document.getElementById("time").innerHTML = `Dia ${day} de ${montArray[month]}, ${hour}:0${min}:${sec}`} 
        else if(sec < 10) {document.getElementById("time").innerHTML = `Dia ${day} de ${montArray[month]}, ${hour}:${min}:0${sec}`}
        else {document.getElementById("time").innerHTML = `Dia ${day} de ${montArray[month]}, ${hour}:${min}:${sec}`} 
        } , 1000)
} 


//API DATA REQUEST AND FETCH
let coronaStats =
  "https://corona.lmao.ninja/v2/countries/Brazil?yesterday=true&strict=true";

fetch(coronaStats)
  
  .then(function (response) {
    return response.json();
  })
  
  .then(function (data) {
    console.log(data);

    let CoronaData = data;
    console.log(CoronaData.cases);
    usingData(CoronaData);
  })
  
  .catch((erro) => console.log("could not proceed: ", erro));


function usingData(data) {
  
    let Corona = data;
  console.log(Corona);

  setInterval(function() {document.getElementById("totalcases").innerHTML = `${Corona.cases}`}, 4000)
  setInterval(function() {document.getElementById("activecases").innerHTML = `${Corona.active}`}, 4000)
  setInterval(function() {document.getElementById("casestoday").innerHTML = `${Corona.todayCases}`}, 4000)
  setInterval(function() {document.getElementById("totaldeaths").innerHTML = `${Corona.deaths}`}, 4000)
  setInterval(function() {document.getElementById("todaydeaths").innerHTML = `${Corona.todayDeaths}`}, 4000)
  setInterval(function() {document.getElementById("recover").innerHTML = `${Corona.recovered}`}, 4000)


}
