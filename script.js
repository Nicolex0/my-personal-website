const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
// Function to toggle content visibility
function toggleContent() {
    const h2 = document.querySelector(".content h2");
    const computedStyle = window.getComputedStyle(h2);
    const display = computedStyle.getPropertyValue("display");

    if (display === "none") {
        h2.style.display = "block";
    } else {
        h2.style.display = "none";
    }
}

// Add event listener to "Nicole Ann" h1 element
const nicoleAnn = document.querySelector("h1");
nicoleAnn.addEventListener("click", toggleContent);


