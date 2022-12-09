window.onload = function LoadData() {

    initStatesDropdown();
    initParksDropDown();
    document.getElementById("searchButton").addEventListener("click",  runParkTypeSearch);
  

};

function initStatesDropdown() {
    // load the dropdown list with Location Data
    const statesList = document.getElementById("statesList");
    let amountOfStates = locationsArray.length;
   
    for (let i = 0; i < amountOfStates; i++) {
        // create the option element
        let theOption = document.createElement("option");
        // set the text and value of the option you created
        theOption.textContent = locationsArray[i];
        theOption.value = locationsArray[i];
        // append the option as a child of (inside) the
        // select element
        if (statesList) {
        
            statesList.appendChild(theOption); //Adding to the dropdown
        }    
    }
}

function initParksDropDown() {

 // load the dropdown list with Location Data
    const parksList = document.getElementById("parksList");
    let length2 = parkTypesArray.length;

    for (let i = 0; i < length2; i++) {
    // create the option element
    let theOption2 = document.createElement("option");
    // set the text and value of the option you created
    theOption2.textContent = parkTypesArray[i];
    theOption2.value = parkTypesArray[i];
    // append the option as a child of (inside) the
    // select element
    parksList.appendChild(theOption2); //Adding to the dropdown
    }
}


function runSearch()
{
   //Select the selected value from the states list
    const statesList = document.getElementById("statesList");
    const selectedState = statesList.value;
    
//Select the selected value from the parks list
    const parksList = document.getElementById("parksList");
    const selectedParkType = parksList.value
    console.log(selectedState + " - " + selectedParkType);

	


    const filterparks = nationalParksArray.filter(nationalPark => {
        console.log(nationalPark);
        return nationalPark.State == selectedState && 
        nationalPark.LocationName.search(selectedParkType) != -1
    });
    console.log(filterparks);
}

function runParkTypeSearch() {

    const selectedParkTypeFromDropdown = document.getElementById("parksList").value;
    const filterParkTypes = nationalParksArray.filter(park => park.LocationName.search(selectedParkTypeFromDropdown) != -1);
    document.getElementById("parkDiv").innerHTML = `${filterParkTypes.map(nationalParkTemplate).join("")}`;
}

 




 function nationalParkTemplate(park) {
    return `
      <div class="park">
      <h4 class="parkLocationID">${park.LocationID}</h4>
      <h2 class="parkLocationName">${park.LocationName}</h2>
      <h2 class="parkAddress">${park.Address}<br>${park.City}, ${park.State} ${park.ZipCode}</h2>
      <h2 class="parkPhoneFax">Phone #: ${park.Phone} Fax #: ${park.Fax}</h2>
      <h4 class="parkLatLong">Lat: ${park.Latitude} Long: ${park.Longitude}</h4>
      <h4 class="parkLocation">Coordinates: ${park.Location.coordinates}</h4>
      <h4 class="parkLocationType">Type: ${park.Location.type}</h4>
      </div>
    `
  };

   
  
    
    


// function loadMountainData() {
//  document.getElementById("mountains").innerHTML = `
//  <h1 class="app-title"> ${mountainsArray.length} Mountains to climb</h1>
//  ${mountainsArray.map(mountainTemplate).join("")}
//  <p class="footer">These ${mountainsArray.length} mountants were added recently. Check back soon for updates.</p>
// `
// };

/* {/* <script> */
/* var obj = {
    'Students': [{
            "name": "Raj",
             "Age":"15",
            "RollNumber": "123",
            "Marks": "99",
              
        }, {
            "name": "Aman",
             "Age":"14",
            "RollNumber": "223",
            "Marks": "69",
           },
           {
            "name": "Vivek",
             "Age":"13",
            "RollNumber": "253",
            "Marks": "89",
           },
        ]
}; */


// submitButton.addEventListener('click', async () => {

//       });
    
    
    
      
    
    // async function getSunsetForMountain(lat, lng){
    //   let response = await fetch(
    //   `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    //   let data = await response.json();
    //   return data;
    //   }
    
    
        
     
    
    //  var newArray = obj.nationalParksArray.filter(function (el)
// {
//   return el.selectedValue = selectedPark
//          el.RollNumber <= 200 &&
//          el.Marks >= 80 ;
//  }
//  );

    

