// 1
// // Scenario
// var obj = {};
// obj.name.first;

// // Conditional Chainning
// var obj = {};
// obj?.name?.first;

//2
// const getUser = document.querySelector("#getUser");

// function getNewUser() {
//   fetch("https://randomuser.me/api/")
//     .then((raw) => raw.json())
//     .then((result) => {
//       const { name, email, gender, picture } = result.results[0];
//       document.querySelector(
//         "#parent"
//       ).innerHTML += `<div class="card w-60 p-4 rounded-xl bg-zinc-800">
//                 <div class="w-20 h-20 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
//                     <img class="w-full h-full object-cover" src="${picture.large}" alt="${name.first}">
//                 </div>
//                 <h3 class="font-semibold text-2xl">${name.first}</h3>
//                 <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
//                 <h6 class="text-sm opacity-40">${email}</h6>
//                 <p class="mt-5 text-xs font-semibold opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus odit sequi laboriosam?</p>
//             </div>`;
//     });
// }

// getUser.addEventListener("click", function () {
//   getNewUser();
// });

//3
// const block = document.querySelector("#block");
// const unblock = document.querySelector("#unblock");

// block.addEventListener("click", function() {
//     localStorage.setItem("block", true);
//     show();
// })

// unblock.addEventListener("click", function() {
//     localStorage.setItem("block", false);
//     show();
// })

// function show() {
//     if (localStorage.getItem("block") === 'false') {
//         document.querySelector("#status span").textContent = "Not Blocked"
//     } else {
//         document.querySelector("#status span").textContent = "Blocked"
//     }
// }

// show();

//4
// document.querySelector("#hide")
// .addEventListener("click", function () {
// //   document.body.classList.add("overflow-hidden");
//     document.body.classList.toggle("overflow-hidden");
// });


//5
document.querySelector("#show").addEventListener("mouseenter", function() {
    document.querySelector(".tooltip").style.display = "initial";
})

document.querySelector("#show").addEventListener("mouseleave", function() {
    document.querySelector(".tooltip").style.display = "none";
})

