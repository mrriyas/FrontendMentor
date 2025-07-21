// Function to handle the rating activity
const ratingActivity = () => {
  // Select all rating buttons
  const ratingButtons = document.querySelectorAll(".numberButtons div");
  
  // Select the submit button and other required elements
  const submitBtn = document.querySelector("#submitButton");
  
  // Select the thank-you message and rating window
  const ratingWindow = document.querySelector(".ratingWindow");
  const thankyouMessage = document.querySelector(".thankyouMessage");
  
  // Get the span to display the selected rating
  const resultSpan = document.querySelector("#resultMessage span");
  
  // Variable to keep track of the last clicked rating
  let lastClickedButton = null;

  // Add event listeners to each rating button
  ratingButtons.forEach((button) => {
  
  




    button.addEventListener("click", () => {
      // Reset the previous clicked button to default color and style
      if (lastClickedButton && lastClickedButton !== button) {
        lastClickedButton.style.backgroundColor = "var(--secondary)";
        lastClickedButton.style.color = "var(--LightGrey)";
    
      }

      // Toggle the selection state for the clicked button
      if (lastClickedButton === button) {
        // Deselect by setting styles to default, allowing hover
        button.style.backgroundColor = "var(--secondary)";
        button.style.color = "var(--LightGrey)";
        lastClickedButton = null;
      } else {
        // Set styles for the selected button
        button.style.backgroundColor = "var(--Orange)";
        button.style.color = "white";
        lastClickedButton = button;
      }
    });
    
  });

  // Single event listener for the submit button
  submitBtn.addEventListener("click", () => {
    if (lastClickedButton) {
      ratingWindow.classList.add("hide");
      thankyouMessage.classList.remove("hide");
      resultSpan.innerText = lastClickedButton.innerText;
    } else {
      console.warn("Please select a rating before submitting.");
    }
  });
};

// Initialize the rating activity
document.addEventListener("DOMContentLoaded", ratingActivity);
