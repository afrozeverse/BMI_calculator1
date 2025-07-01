function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height");
    height = height.value / 100;
    let age = document.getElementById("age").value;
    let result = document.getElementById("result");
    if (weight == 0 || height == 0 || age == 0) {
        window.alert("Empty field");
        return;
    }
    let t = weight / (Math.pow(height, 2))
    t = parseFloat(t.toFixed(2));
    result.value = t;
    let output = document.getElementById("finalResult");

    if (t < 18.8) {
        output.innerHTML = "Underweight";
        output.style.color = "#62b6cbe8";
    }
    else if (t > 18.8 && t < 24.9) {
        output.innerHTML = "Normal Weight";
        output.style.color = "#157f20d8";
    }
    else if (t > 24 && t < 29.9) {
        output.innerHTML = "Overweight";
        output.style.color = "#e8861ee5";
    }
    else {
        output.innerHTML = "Obese";
        output.style.color = "rgba(255, 0, 0, 0.774)";
    }
}
function reset() {
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");
    let age = document.getElementById("age");
    let result = document.getElementById("result");
    let output = document.getElementById("finalResult");
    weight.value = null;
    height.value = null;
    age.value = null;
    result.value = null;
    output.style.color="black";
    output.innerHTML = "-----";
}