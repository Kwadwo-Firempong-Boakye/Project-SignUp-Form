const form = document.querySelector("form");
const pass = document.querySelectorAll(".error");
const message = document.querySelectorAll(".passError");


// function debounce (func, delay) {
//     let timeout;
     
//     return (...args) => {
//         clearTimeout(timeout)

//         timeout = setTimeout(() => {
//             func(...args)
//         }, delay)
//     }
// }

function checkPassMatch () {
    if ((pass[0].value !== pass[1].value) && pass[0].value.length > 0) {
        pass[1].setCustomValidity("Make sure your passwords match each other");
        pass[1].reportValidity();
        console.log("Yup")
    } else {
        pass[1].setCustomValidity("");
    }
};
    
    



pass[1].addEventListener("input", checkPassMatch)




// form.addEventListener("submit", (e) => {

//     passMatch = (pass[0].value === pass[1].value) && pass[0].value.length !== 0;

//     if(!passMatch) {
//         e.preventDefault()
//         message.forEach((item) => {
//             item.textContent = "Make sure your passwords match";
//         })
//     }

// })





