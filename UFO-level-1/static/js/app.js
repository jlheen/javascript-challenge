// from data.js
var tableData = data;

// select the table body
var tBody = d3.select("tbody")

// print to the console to ensure proper execution
console.log(tBody)

function makeTable(data) {
    tBody.html("");

    // Step 1: loop through `data` and console.log each UFO sighting record
    data.forEach((tableRow) => {
        // console.log(sightings);
        // Step 2: Use d3 to append one table row `tr` for each UFO sighting record
        var row = tBody.append("tr");

        // Step 3: Use `Object.entries` to console.log each sightings value
        Object.entries(tableRow).forEach(function([key, value]) {
            console.log(key, value);
            // Step 4: Append a cell to the row for each value (datetime, city, state, country, shape, durationMinutes, comments)
            var cell = row.append("td");
            cell.text(value);
        });

    });

};

function handleClick() {
    // if "enter" or "space" are pressed
    if(d3.event.keyCode === 32 || d3.event.keyCode === 13) 
    {console.log("Congrats, you pressed enter or space")};
    var date = d3.select("#datetime").property("value");
    var filteredData = tableData;
    filteredData = filteredData.filter(row => row.datetime === date);
    makeTable(filteredData);
    console.log("Filtered on datetime")
}

makeTable(tableData)

// filter table on "Filter Table" button click
d3.selectAll("#filter-btn").on("click", handleClick);
// filter table on pressing "return" button
// why does this function refresh the page?
d3.selectAll(".form-control").on("keypress", handleClick);



