const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
 // Add event listener to "Nicole Ann" h1 element
 const nicoleAnn = document.querySelector("h1");
 nicoleAnn.addEventListener("click", function() {
     // Toggle visibility of the h2 element
     if (h2.style.display === "none") {
         h2.style.display = "block";
     } else {
         h2.style.display = "none";
     }
 });