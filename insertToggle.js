// Get all elements with the "toggle-button" class
const toggleButtons = document.querySelectorAll(".insert-toggle");

// Function to toggle the state of an element (open/close) with smooth transition
function toggleElement(targetElement) {
    const isHidden = targetElement.classList.contains("close");

    // Hide all elements except the target with smooth transition
    document.querySelectorAll(".close").forEach((element) => {
        if (element !== targetElement) {
            element.classList.add("close"); // Hide the element
            element.classList.remove("open"); // Close previously open elements
        }
    });

    // Toggle the state of the target element
    targetElement.classList.toggle("close", !isHidden);
    targetElement.classList.toggle("open", isHidden);

    // Set focus to the input field when opening the search bar
    if (isHidden) {
        const inputField = targetElement.querySelector("input[type='search']");
        if (inputField) {
            inputField.focus();
        }
    }
}

toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const targetIds = this.getAttribute("data-target").split(" ");
        targetIds.forEach((targetId) => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                toggleElement(targetElement);
            }
        });
    });
});

// Add event listener to the document to close elements when a click occurs outside of open elements
document.addEventListener("click", function (event) {
    const targetElements = Array.from(document.querySelectorAll(".open"));
    const clickedOutsideAllTargets = targetElements.every((element) => {
        return !element.contains(event.target) && !event.target.closest(".toggle-button");
    });

    if (clickedOutsideAllTargets) {
        targetElements.forEach((element) => {
            element.classList.remove("open"); // Close open elements
            element.classList.add("close"); // Hide elements
        });
    }
});
