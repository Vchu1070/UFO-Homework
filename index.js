var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
$searchBtn.addEventListener("click", handleSearchButtonClick);

var ufoDataFiltered = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for(var i = 0 ; i < ufoDataFiltered.length; i++ ) {
        var ufo = ufoDataFiltered[i];
        var fields = Object.keys(ufo);
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = ufo[field];
        }
    }
}

function handleSearchButtonClick(){
    var filterDate = $dateInput.value.trim().toLowerCase();  
    ufoDataFiltered = dataSet.filter (function(ufo){
        var ufoCountry = ufo.datetime.toLowerCase();
        return ufoCountry === filterDate; 
    });
    renderTable();
}

renderTable();


    