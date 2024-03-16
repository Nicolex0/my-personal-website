const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

// Add event listener to "Nicole Ann" h1 element
const nicoleAnn = document.querySelector("h1");

// Toggle function to show/hide content
function toggleContent() {
    const h2 = document.querySelector("h2");
    h2.style.display = h2.style.display === "none" ? "block" : "none";
}

nicoleAnn.addEventListener("click", toggleContent);
