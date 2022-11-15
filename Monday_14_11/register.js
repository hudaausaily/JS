let tex = document.getElementById("text");
let em = document.getElementById("email");
let pas = document.getElementById("pass");
let num = document.getElementById("number");



// window.localStorage.setItem("Name" ,text.value);
// window.localStorage.setItem("E-mail" , email.value);
// window.localStorage.setItem("Password" , pass.value);
// window.localStorage.setItem("Phone Number" ,number.value);

function sayone(event) {
        window.localStorage.setItem("Name" ,text.value);
window.localStorage.setItem("E-mail" , email.value);
window.localStorage.setItem("Password" , pass.value);
window.localStorage.setItem("Phone Number" ,number.value);
}

function saytow(ele) {
        if (localStorage.getItem("E-mail") == logem.value 
        && localStorage.getItem("Password") == logpass.value) {
        
                console.log("Amro");
        }
}