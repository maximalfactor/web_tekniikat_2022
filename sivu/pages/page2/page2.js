let popUp = new bootstrap.Modal(document.querySelector(".modal"));

document.querySelector(".fluid-container button").addEventListener("click", () => {
    popUp.show();
})

document.querySelector(".modal button").addEventListener("click", () => {
    popUp.hide();
})
