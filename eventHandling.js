let input = document.getElementById("input");
let button = document.getElementById("button");
let output = document.getElementById("output");

const displayOutput = () => {
  let text = input.value;
  output.innerHTML = text;
};

button.addEventListener("click", displayOutput);
