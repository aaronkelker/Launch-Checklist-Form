// Write your JavaScript code here!

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then( function(response) {
       response.json()
        .then( function(json) {

         function getRandomInt(min, max) {
            min = Math.ceil(0);
            max = Math.floor(5);
            randNum = Math.floor(Math.random() * (max-min) + min);
            return randNum
         }
         getRandomInt()
          const div = document.getElementById("missionTarget");
          div.innerHTML = `
          <h2>Mission Destination</h2>
             <ol>
                <li>Name: ${json[randNum].name}</li>
                <li>Diameter: ${json[randNum].diameter}</li>
                <li>Star: ${json[randNum].star}</li>
                <li>Distance: ${json[randNum].distance}</li>
                <li>Moons: ${json[randNum].moons}
             </ol>
             <img class= "avatar" src="${json[randNum].image}">
          `;
       });
    });
 });


window.addEventListener("load", function(){

    let form = document.querySelector("form")

    form.addEventListener("submit", function(event) {
        event.preventDefault();
 
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
       

        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        window.alert("You must enter all fields.");
        event.preventDefault();
          };
        
        if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
            window.alert("You have entered an incorrect name format. Names may only include letters")
            event.preventDefault();
        }

        if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            window.alert("You have entered an incorrect number format. Fuel Level and Cargo Mass may only include numbers.")
            event.preventDefault();
        }

         else if(fuelLevel.value < 10000  || cargoMass.value > 10000) {
           launchStatus.style.color = "red";
           faultyItems.style.visibility = "visible";
           let newLaunchStatus = document.getElementById("launchStatus");
           newLaunchStatus.innerHTML = "Shuttle not ready for launch";
           let newPilotStatus = document.getElementById("pilotStatus");
           newPilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
           let newCopilotStatus = document.getElementById("copilotStatus");
           newCopilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;

           if (cargoMass.value > 10000) {
            let newCargoStatus = document.getElementById("cargoStatus");
            newCargoStatus.innerHTML = "Cargo mass too high for launch"
           }

           if (fuelLevel.value < 10000) {
            let newFuelStatus = document.getElementById("fuelStatus");
            newFuelStatus.innerHTML = "Fuel level too low for launch"
           }
        }

        else {
           faultyItems.style.visibility = "visible";
           launchStatus.style.color = "green";
           let newLaunchStatus = document.getElementById("launchStatus");
           newLaunchStatus.innerHTML = "Shuttle is ready for launch";
           let newPilotStatus = document.getElementById("pilotStatus");
           newPilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
           let newCopilotStatus = document.getElementById("copilotStatus");
           newCopilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;
        }
    });
});




