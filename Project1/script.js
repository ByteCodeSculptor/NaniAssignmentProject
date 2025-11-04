// Wait for the entire webpage (DOM) to load before running the script
document.addEventListener("DOMContentLoaded", function() {
  
    // --- 1. Get references to the HTML elements ---
    
    // Get the button
    const generateButton = document.getElementById("generateButton");
    
    // Get the input fields
    const inputName = document.getElementById("inputName");
    const inputID = document.getElementById("inputID");
    const inputRole = document.getElementById("inputRole");
    
    // Get the output elements on the card
    const cardName = document.getElementById("cardName");
    const cardID = document.getElementById("cardID");
    const cardRole = document.getElementById("cardRole");

    // --- 2. Define what happens when the button is clicked ---
    
    // Add a 'click' event listener to the button
    generateButton.addEventListener("click", function() {
        
        // --- 3. Get the values from the input boxes ---
        // .value gets the text the user typed in
        let name = inputName.value;
        let id = inputID.value;
        let role = inputRole.value;

        // --- 4. Update the text on the ID card ---
        // .textContent changes the text inside an element
        
        // If the input is empty, use the default text
        cardName.textContent = name || "Your Name";
        cardID.textContent = "ID: #" + (id || "000000");
        cardRole.textContent = role || "Your Role";
    });
});