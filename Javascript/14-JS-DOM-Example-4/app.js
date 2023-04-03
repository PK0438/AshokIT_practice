const numberBoxElement = document.querySelector("#req-number");
const rangeSelectElement = document.querySelector("#multiplier");
const initialNumberElement = document.querySelector("#number");
const multiplierElement = document.querySelector("#multi");
const resultElement = document.querySelector("#result");

/**
 * input event on number box
 */
numberBoxElement.addEventListener('input', (event) => {
    if (event.target.value.length > 0) {
        initialNumberElement.textContent = event.target.value;
    } else {
        initialNumberElement.textContent = "1";
    }
    calculate();
})
/**
 * input event on range select
 */
rangeSelectElement.addEventListener('input', (event) => {
    multiplierElement.textContent = event.target.value;
    calculate();
})

/**
 * calculate
 */
const calculate = () => {
    const initialValue = Number(initialNumberElement.textContent);
    const multiplier = Number(multiplierElement.textContent);
    const result = initialValue * multiplier;
    resultElement.textContent = result.toString();
};