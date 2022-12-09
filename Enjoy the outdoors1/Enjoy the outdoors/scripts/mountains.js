window.onload = function LoadData() {

    
    loadMountainData();
	initMountainsDropDown();
    document.getElementById("searchButton").addEventListener("click", runSearch);
  

};

function initMountainsDropDown() {

	// load the dropdown list with Location Data
	   const mountainsList = document.getElementById("mountainsListDropDown");
	   let length3 = mountainsArray.length;
   
	   for (let i = 0; i < length3; i++) {
	   // create the option element
	   let theOption3 = document.createElement("option");
	   // set the text and value of the option you created
       console.log(mountainsArray[i].name);
	   theOption3.textContent = mountainsArray[i].name;
	   theOption3.value = mountainsArray[i].name;
	   // append the option as a child of (inside) the
	   // select element
	   mountainsList.appendChild(theOption3); //Adding to the dropdown
	   }
	}


    function runSearch()
{
    //Select the selected value from the mountains list
    const selectedMountainFromDropdown = document.getElementById("mountainsListDropDown").value;
    
    //filter the array based on the selected value from dropdown
    const filtermountains = mountainsArray.filter(mountain => mountain.name == selectedMountainFromDropdown);


    // const filterparks = nationalParksArray.filter(mountain => {
    //     return nationalParksArray.states.includes('Kentucky')
    //     });
        
//     var newArray = obj.nationalParksArray.filter(function (el)
// {
//   return el.selectedValue = selectedPark
//          el.RollNumber <= 200 &&
//          el.Marks >= 80 ;
 //}

    // Run the load the Mountaindata again with the filtered array as an input
    document.getElementById("mountains").innerHTML = `
    <h1 class="app-title"> ${filtermountains.length} Mountains to climb</h1>
    ${filtermountains.map(mountainTemplate).join("")}
    <p class="footer">These ${filtermountains.length} mountants were added recently. Check back soon for updates.</p>
  `
   
};

function mountainTemplate(mountain) {
    // let mySunrise = getSunsetForMountain(`${mountain.coords.lat},${mountain.coords.lng}`);
     
     return `
       <div class="mountain">
       <img class="mountain-photo" src="images/${mountain.img}">
       <h2 class="mountain-name">${mountain.name} <span class="species">(${mountain.elevation} feet)</span></h2>
       <h4 class="mountain-desc">${mountain.desc} </h4>
       <p><strong>Effort:</strong> ${mountain.effort}</p>
       <strong>Coordinates:</strong> lat: ${mountain.coords.lat} lng: ${mountain.coords.lng}
     
       </div>
       `;
   }

function loadMountainData() {
    document.getElementById("mountains").innerHTML = `
    <h1 class="app-title"> ${mountainsArray.length} Mountains to climb</h1>
    ${mountainsArray.map(mountainTemplate).join("")}
    <p class="footer">These ${mountainsArray.length} mountants were added recently. Check back soon for updates.</p>
  `
};
   


var myArray = new Array("Mt. Washington","Mt. Jefferson","Mt. Monroe","Mt. Madison","Mt. Lafayette","Mt. Lincoln",
"South Twin","Carter Dome","Mt. Moosilauke","Mt. Eisenhower","North Twin","Mt. Carrigain","Mt. Bond","Middle Carter","West Bond",
"Mt. Garfield","Mt. Liberty","South Carter","Wildcat Mountain","Mt. Hancock","South Kinsman","Mt. Field","Mt. Osceola","Mt. Flume",
"South Hancock","Mt. Pierce","North Kinsman","Mt. Willey","Zealand Mountain","North Tripyramid","East Osceola","Middle Tripyramid",
"Cannon Mountain","Wildcat D","Mt. Hale","Mt. Jackson","Mt. Tom","Mt. Moriah","Mt. Passaconaway","Owl's Head","Galehead Mountain",
"Mt. Whiteface","Mt. Waumbek","Mt. Isolation","Mt. Tecumseh",
);


// Get dropdown element from DOMttt
var dropdown = document.getElementById("mountainsListDropDown");

// Loop through the array
for (var i = 0; i < myArray.length; ++i) {
// Append the element to the end of Array list
dropdown[dropdown.length] = new Option(myArray[i], myArray[i]);
}

function listMountain() {
let dropValue = document.getElementById("mountainsListDropDown").value;
let id = dropValue.replace(" ", "").replace(".","")
document.getElementById(id).scrollIntoView()
}

// Get the button:
let mybutton = document.getElementById("myBn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}