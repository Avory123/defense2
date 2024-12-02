document.getElementById("navigateButton").onclick = function () {
  window.location.href = "index.html";
  alert("Logging Out... Going Back to the Main Page")
};


  var xValues = ["Sept", "Oct", "Nov", "Dec", "Jan"];
  var yValues = [26000, 27000, 28000, 29000, 28500];
  var barColors =["#8B4513", "green", "red", "orange", "yellow"];  // Use hex code for brown
  
  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Total of Students Attended in every Month"
      }
    }
  });
  
  

  