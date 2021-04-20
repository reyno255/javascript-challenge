var tableData = data;

// reference to the table body 
var tbody = d3.select("#myTable");

// loop through each object in tabledata and append a row and cells for each value
tableData.forEach(day => {

  // create a new row
var row = tbody.append("tr");
    Object.values(day).forEach(value => {
      row.append("td").text(value);
    });
  });

  Object.entries(data[0]).forEach(([key, value])=> {
  });


  // Select button
  var button_filter = d3.select("#filter-btn");
  // Select entire form
  var form_filter = d3.select("#form");

  // create event handlers for button click and enter key
  button_filter.on("click", selectFilter);
  form_filter.on("submit",selectFilter);




  // Create functions
  function selectFilter() {
    // Prevent page from refreshing
    d3.event.preventDefault();

  // Select the input element CITY and get raw HTML 
    var inputDate = d3.select("#datetime");
    // Get the value property

    var inputValueDate = inputDate.property("value");


    // City
    var inputDate = d3.select("#city");
    // Get the value property
    var inputValueCity = inputDate.property("value")

    // State
    var inputDate = d3.select("#state");
    // // Get the value property
    var inputValueState = inputDate.property("value");
    //console.log(inputValueState);


    // Shape
    var inputDate = d3.select("#shape");
  // Get the value property
    var inputValueShape = inputDate.property("value");

    var filteredData =  tableData

    if (inputValueDate) {
      filteredData = filteredData.filter(day => day.datetime === inputValueDate);
    }

    if (inputValueCity) {
      filteredData =  filteredData.filter(day => day.city === inputValueCity);
    }

    if (inputValueState) {
      filteredData =  filteredData.filter(day => day.state === inputValueState);

    }

    if (inputValueShape) {
        filteredData =  filteredData.filter(day => day.shape === inputValueShape);
    }
    //
    //

  tbody.html("");
  filteredData.forEach(day => {
      // create a new row
    var row = tbody.append("tr");
        Object.values(day).forEach(value => {
          row.append("td").text(value);
        });
      });

      Object.entries(data[0]).forEach(([key, value])=> {
      });
    };
