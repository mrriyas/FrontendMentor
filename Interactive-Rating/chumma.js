
const ratingActivity = () => {
    const ratingButton = document.querySelectorAll(".numberButtons div");
    const submitButton = document.querySelector("#submitButton");
    const ratingWindow = document.querySelector(".ratingWindow");
    const thanksWindow = document.querySelector(".thankyouMessage");
    const resultSpan = document.querySelector("#resultMessage span");
     console.log(ratingButton);
     console.log(submitButton);
     console.log(ratingWindow); 
     console.log(thanksWindow);
     console.log(resultSpan);
     
     let lastClickedButton = null;
    
    
     
     
     ratingButton.forEach((button)=>{
    
        button.addEventListener("click", () => {
            // Reset the previous clicked button to default color and style
            if (lastClickedButton && lastClickedButton !== button) {
              lastClickedButton.style.backgroundColor = "var(--secondary)";
              lastClickedButton.style.color = "var(--LightGrey)";
              console.log("if 1")
          
            }
      
      
            if (lastClickedButton === button) {

              button.style.backgroundColor = "var(--secondary)";
              button.style.color = "var(--LightGrey)";
              lastClickedButton = null;
              console.log("if 2");
            } else {
          
              console.log(lastClickedButton);
              button.style.backgroundColor = "var(--Orange)";
              button.style.color = "white";
              lastClickedButton = button;
              
              console.log("else");
              console.log(lastClickedButton);
            }
          });
     });

     submitButton.addEventListener("click", ()=>{
       if (lastClickedButton) {
        ratingWindow.classList.add("hide");
        thanksWindow.classList.remove("hide");
        resultSpan.innerText = lastClickedButton.innerText;
        
       }
    
     })
};
ratingActivity();



