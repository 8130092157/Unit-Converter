
const input = document.querySelector("#input");
const unit = document.querySelector("#unit");

const convert = () => {

    const value = input.value;
    const unitValue = unit.value;
    const output = document.querySelector("#output");

    (value !== "") ? 
      output.style.display = "block" : output.style.display = "none";

    switch(unitValue) {
        case "lbs":
            convertLbs(value);
            break;
        case "grams":
            convertGrams(value);
            break;
    }
}  

const c1 = document.querySelector("#c-1");
const c2 = document.querySelector("#c-2");
const c3 = document.querySelector("#c-3");

const convertLbs = value => {
    c1.querySelector('h4').textContent="Grams:"
    c2.querySelector('h4').textContent="Kilograms:"
    c3.querySelector('h4').textContent="Ounces:"

    c1.querySelector('div').textContent= value * 453.592
    c2.querySelector('div').textContent= value * 453.592 / 1000
    c3.querySelector('div').textContent= value * 16
}

const convertGrams = value => {
    c1.querySelector('h4').textContent="kilograms:"
    c2.querySelector('h4').textContent="Ounces:"
    c3.querySelector('h4').textContent="Lbs:"

    c1.querySelector('div').textContent= value * 1000;
    c2.querySelector('div').textContent= value * 0.035274;
    c3.querySelector('div').textContent= value * 0.00220462;
}

input.addEventListener("input", convert);
unit.addEventListener("input", convert);