const selectElement = document.querySelector("#lang-select");
selectElement.addEventListener('change', (event) => {
    document.querySelector('#lang-option').textContent = event.target.value;
});