const input = document.getElementById("enterTemp");
const farenTemp = document.getElementById("toFarenheit");
const celTemp = document.getElementById("toCelcius");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
let temp;

convert = () => {
  if (toFarenheit.checked) {
    temp = Number(input.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (toCelcius.checked) {
    temp = Number(input.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "select an unit1";
  }
};
