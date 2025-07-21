window.addEventListener('DOMContentLoaded', async () => {
    const idDisplay = document.getElementById("idDisplay");
    const result = document.getElementById("result");
    const button = document.getElementById("button");
    
    const fetchData = async () => {
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            const json = await response.json(); 
            idDisplay.innerText = `#${json.slip.id}`;
            result.innerText = `"${json.slip.advice}"`;
        } catch (error) {
            console.error("error message:", error);
        }
    };
    await fetchData();
    button.addEventListener("click", fetchData);
});





/*
window.addEventListener('DOMContentLoaded',FetchData);
const idDisplay = document.querySelector("#idDisplay");
const result = document.querySelector("#result");
const button = document.querySelector("#button");
console.log(idDisplay,result,button);

const FetchData = async () =>  {
    const response = await fetch("https://api.adviceslip.com/advice");
    console.log(response);
    const json = await response.json();
    console.log(json);
    
    idDisplay.innerText = `${json.slip.id}`;
    result.innerText = `"${json.slip.advice}"`;

}
button.addEventListener('click',FetchData); */

/*
window.addEventListener('DOMContentLoaded',async ()=> {
    const idDisplay = document.getElementById("idDisplay");
    const result = document.getElementById("result");
    const button = document.getElementById("button");
    
    const Data = async () => {
        try{
            const response = await fetch("https://api.adviceslip.com/advice");
            const json = response.json();
            idDisplay.innerText = `#${json.slip.id}`;
            result.innerText =`"${json.slip.advice}"`;
        }
        catch (error){
            console.error("error message:",error);
        }
       
         
    };
    await Data();
    
    button.addEventListener("click",Data);
});

*/








