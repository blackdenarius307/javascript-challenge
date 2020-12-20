//Variable that data
var tableData = data;

//Select the Tbody
var tbody = d3.select("tbody");

//Select the button
var button = d3.select("#filter-btn");

//Select the form
var input = d3.select("#datetime");

console.log(input);
console.log(button);
console.log(tbody);

//Create Event Handlers
button.on("click", runEnter);
input.on("submit", runEnter);

//const getTheInputWhenDone


function runEnter() {
    //Prevent Page from refreshing
    d3.event.preventDefault();

    //Grab The value
    var inputValue = input.property("value");

    //Print the value
    console.log(inputValue)

}

const showTable = data.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key,value])=> {
        var cell = row.append("td");
        cell.text(value);
    });
}); 