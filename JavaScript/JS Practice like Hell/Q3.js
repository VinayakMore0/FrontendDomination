var form = document.querySelector("form");
var UserName = document.querySelector("#UserName");
var Password = document.querySelector("#Password");
var err1 = document.querySelector("#error1");
var err2 = document.querySelector("#error2");


// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     var nameValue = UserName.value;
//     var passValue = Password.value;

//     if(nameValue === "") {
//         err1.textContent = "UserName should Not Empty";
//         err1.style.color = "crimson";
//         throw new Error("UserName is Empty.");
//     } else {
//         err1.textContent = "";
//     }

//     if(passValue === "") {
//         err2.textContent = "Password should Not Empty";
//         err2.style.color = "crimson";
//         throw new Error("Password is Empty.");
//     } else {
//         err2.textContent = "";
//     }

// });

// OR

var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

// form.addEventListener("submit", function(ev) {
//     ev.preventDefault();
//     inps.forEach(function(elem) {
//         if(elem.value === '') {
//             h4.textContent = 'Error, some field is blank.';
//             h4.style.color = "red";
//         } else {
//             h4.textContent = "";
//         }
//     })
// });

// OR

form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    for(var i = 0; i < inps.length; i++) {
        if(inps[i].value.trim() === '') {
            h4.textContent = "Error, some fields are blank."
            h4.style.color = "crimson"
            break;
        }
    }
});

