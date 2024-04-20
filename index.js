var dayInput = document.getElementById("day-input");
var monthInput = document.getElementById("month-input");
var yearInput = document.getElementById("year-input");
var inputs = document.querySelectorAll("input");
var labels = document.querySelectorAll("label");
var outputData = document.querySelectorAll(".output-date");

var days = document.getElementById("days");
var months = document.getElementById("months");
var years = document.getElementById("years");

var button = document.getElementById("btn-submit");
var outputDay = document.getElementById("days");
var errorMessage = document.querySelectorAll(".error-message");

var date = new Date();
var currentDay = date.getDate();
var currentMonth = date.getMonth() + 1;
var currentYear = date.getFullYear();

// errorMessage
function displayErrorMessage() {
  for (i = 0; i < errorMessage.length; i++) {
    errorMessage[i].style.display = "block";
  }
}
// error Border and Label
function errorInputBorder() {
  inputs.forEach(function (input) {
    input.classList.add("input-warning");
  });
  labels.forEach(function (label) {
    label.classList.add("label-warning");
  });
}

//Eventlistener
button.addEventListener("click", function (e) {
  var day = parseInt(dayInput.value);
  var month = parseInt(monthInput.value);
  var year = parseInt(yearInput.value);

  // Output
  function displayOutput() {
    var yearsDifference = currentYear - year;
    var monthsDifference = currentMonth - month;
    var daysDifference = currentDay - day;

    if (daysDifference < 0) {
      monthsDifference--;
      var daysInBirthMonth = new Date(year, month, 0).getDate();
      daysDifference += daysInBirthMonth;
    }
    if (monthsDifference < 0) {
      yearsDifference--;
      monthsDifference += 12;
    }

    days.textContent = daysDifference;
    months.textContent = monthsDifference;
    years.textContent = yearsDifference;
  }

  if (
    isNaN(day) ||
    day === "" ||
    day > 31 ||
    isNaN(month) ||
    month === "" ||
    month > 12 ||
    isNaN(year) ||
    year === ""
  ) {
    displayErrorMessage();
    errorInputBorder();
  } else {
    displayOutput();
    if (month > currentMonth || (month === currentMonth && day > currentDay)) {
      years.textContent = Math.floor(currentYear - year) - 1;
    }
  }
});
