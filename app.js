const Climate = document.getElementById("Climate");
const Consumption = document.getElementById("Consumption");
const Resources = document.getElementById("Resources");
const People = document.getElementById("People");

Climate.onclick = () => {
    document.body.style.backgroundImage = ('url(https://i1.faceprep.in/prograd-junior/climate-change-bg.png')
    document.body.style.backgroundSize = "100% 100%"
    Climate.style.backgroundColor = "#f80ed"
    Consumption.style.backgroundColor = "transparent"
    Resources.style.backgroundcolor = "transparent"
    People.style.backgroundColor = "transparent"
    document.getElementById("amount").innerHTML = "2,911,3443,321"
    document.getElementById("cause").innerHTML = "Tons of CO2 emitted in the atmosphere"

}



Consumption.onclick = () => {
    document.body.style.backgroundImage = ('url(https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')
    document.body.style.backgroundSize = "100% 100%"
    Climate.style.backgroundColor = "transparent"
    Consumption.style.backgroundColor = "#27ae60"
    Resources.style.backgroundcolor = "transparent"
    People.style.backgroundColor = "transparent"
    document.getElementById("amount").innerHTML = "878,262,909"
    document.getElementById("cause").innerHTML = "Tons of food wasted or lost"
}


//first change - Change consumption to resources
Resources.onclick = () => {
    //Second Change - Change the background
    document.body.style.backgroundImage = ('url(https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')
    document.body.style.backgroundSize = "100% 100%"
    Climate.style.backgroundColor = "transparent"
    Consumption.style.backgroundColor = "transparent"
    //Change the button to the transparent
    Resources.style.backgroundcolor = "#transparent"
    //Change the button color
    People.style.backgroundColor = "eb5757"
    //Change the content
    document.getElementById("amount").innerHTML = "59,859,183,999"
    document.getElementById("cause").innerHTML = "Tons of minerals"

}