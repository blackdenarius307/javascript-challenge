//Variable that data to shove it in the Tbody
const tableData = data;

//define filtered date for ordering later.
let filteredData = data;

//Select the Tbody to print to
const tbody = d3.select("tbody");

//Select the button for events purposes
const button = d3.select("#filter-btn");

//Select the form to later grab input from
const input = d3.select("#datetime");

const runEnter = () => {
    //Prevent Page from refreshing
    d3.event.preventDefault();
    //Grab The value
    let inputValue = input.property("value");
    //Print the value
    console.log(inputValue);
    //filter the data
    filteredData = data.filter(obj => inputValue === "" || obj.datetime === inputValue);
    console.table(filteredData)
    //Display the new table
    showTable(filteredData);
}

const runSort = (property, order) => {
    d3.event.preventDefault()
    let sortedData = filteredData.sort((a,b) => {
        if (a[property] < b[property]) {
            return -1;
          }
          if (a[property] > b[property]) {
            return 1;
          }
          // a must be equal to b
          return 0;
        }
    );
    if(order === "desc") {
        sortedData = sortedData.reverse()
    }
    showTable(sortedData);
}

//show initial table
function  showTable (data) {
    //clear the table
    tbody.html("");
    data.forEach((data) => {
    let row = tbody.append("tr");
    Object.entries(data).forEach(([key,value])=> {
    let cell = row.append("td");
    cell.text(value);
    })});
}
showTable(data);


//Create Event Handlers
button.on("click", runEnter);
d3.select("#Sort-desc-date").on("click", (() => runSort('datetime', 'desc')));
d3.select("#Sort-asc-date").on("click", (() => runSort('datetime', 'asc')));
d3.select("#Sort-desc-city").on("click", (() => runSort('city', 'desc')));
d3.select("#Sort-asc-city").on("click", (() => runSort('city', 'asc')));
d3.select("#Sort-desc-state").on("click", (() => runSort('state', 'desc')));
d3.select("#Sort-asc-state").on("click", (() => runSort('state', 'asc')));
d3.select("#Sort-desc-shape").on("click", (() => runSort('shape', 'desc')));
d3.select("#Sort-asc-shape").on("click", (() => runSort('shape', 'asc')));
d3.select("#Sort-desc-duration").on("click", (() => runSort('duration', 'desc')));
d3.select("#Sort-asc-duration").on("click", (() => runSort('duration', 'asc')));
d3.select("#Sort-desc-country").on("click", (() => runSort('country', 'desc')));
d3.select("#Sort-asc-country").on("click", (() => runSort('country', 'asc')));
input.on("submit", runEnter);








