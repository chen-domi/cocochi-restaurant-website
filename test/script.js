const dropDownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");
dropDownButton.addEventListener("click", (event) => {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", (event) => {
    if (!event.target.matches("#dropdownButton")) {
        dropdownContent.style.display = "none"
    }
});

