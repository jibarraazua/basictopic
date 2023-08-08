let value;
let windowValue = document.getElementById("windowValue");
const buttonsElementsContainer = document.getElementById("buttonsElementsContainer");
const match = ["AC","DEL","="];
let result;


// Eval is not recommended , but this project is small and eval can be used without any problems;


const ButtonsAction = (e) => {
    value = e.target.value;
    (match.includes(value) || value === undefined) ? value = "" : windowValue.innerHTML += value.toString();
    try {
        if(e.target.value === "=") {
            result = eval(windowValue.innerHTML);
            windowValue.innerHTML = result;
        }
        
    } catch (error) {
        windowValue.innerHTML = "Syntax Error";
    }
    
    
    if(e.target.value === "AC")  windowValue.innerHTML = "";
    if(e.target.value === "DEL") {
        let deletedString = windowValue.innerHTML.substring(0 , windowValue.innerHTML.length - 1);
        windowValue.innerHTML = deletedString;
    }

}


buttonsElementsContainer.addEventListener("click" , ButtonsAction);