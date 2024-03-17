// Function to toggle content visibility
function toggleContent() {
    const h2 = document.querySelector(".content h2");
    if (h2.style.display === "none" || h2.style.display === "") {
        h2.style.display = "flex";
    } else {
        h2.style.display = "none";
    }
}

// Add event listener to "Nicole Ann" h1 element
const nicoleAnn = document.getElementById("nicoleAnn");
nicoleAnn.addEventListener("click", toggleContent);