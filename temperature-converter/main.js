// Function to convert temperature
function convertTemperature() {
  const inputTemperature = document.getElementById("inputTemperature").value;
  const selectFromUnit = document.getElementById("selectFromUnit").value;
  const selectToUnit = document.getElementById("selectToUnit").value;
  let result;

  if (selectFromUnit === "celsius" && selectToUnit === "fahrenheit") {
    result = celsiusToFahrenheit(inputTemperature);
  } else if (selectFromUnit === "celsius" && selectToUnit === "kelvin") {
    result = celsiusToKelvin(inputTemperature);
  } else if (selectFromUnit === "fahrenheit" && selectToUnit === "celsius") {
    result = fahrenheitToCelsius(inputTemperature);
  } else if (selectFromUnit === "fahrenheit" && selectToUnit === "kelvin") {
    result = fahrenheitToKelvin(inputTemperature);
  } else if (selectFromUnit === "kelvin" && selectToUnit === "celsius") {
    result = kelvinToCelsius(inputTemperature);
  } else if (selectFromUnit === "kelvin" && selectToUnit === "fahrenheit") {
    result = kelvinToFahrenheit(inputTemperature);
  } else {
    result = "Invalid conversion";
  }

  document.getElementById("result").textContent = result;
}

// Conversion functions
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return `Result : ${fahrenheit.toFixed(2)}°F`;
}

function celsiusToKelvin(celsius) {
  const kelvin = parseFloat(celsius) + 273.15;
  return `Result : ${kelvin.toFixed(2)}K`;
}

function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((parseFloat(fahrenheit) - 32) * 5) / 9;
  return `Result : ${celsius.toFixed(2)}°C`;
}

function fahrenheitToKelvin(fahrenheit) {
  const kelvin = ((parseFloat(fahrenheit) - 32) * 5) / 9 + 273.15;
  return `Result : ${kelvin.toFixed(2)}K`;
}

function kelvinToCelsius(kelvin) {
  const celsius = parseFloat(kelvin) - 273.15;
  return `Result : ${celsius.toFixed(2)}°C`;
}

function kelvinToFahrenheit(kelvin) {
  const fahrenheit = ((parseFloat(kelvin) - 273.15) * 9) / 5 + 32;
  return `Result : ${fahrenheit.toFixed(2)}°F`;
}

// Function to reset input fields and result
function resetFields() {
  document.getElementById("inputTemperature").value = "";
  document.getElementById("selectFromUnit").selectedIndex = 0;
  document.getElementById("selectToUnit").selectedIndex = 0;
  document.getElementById("result").textContent = "";
}
