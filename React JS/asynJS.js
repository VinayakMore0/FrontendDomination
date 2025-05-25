// setTimeout(function () {
//   console.log("Hey");
// }, 6000);

// var interval = setInterval(function () {
//   console.log("Yooo");
// }, 4000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 10000);

// fetch(`https://randomuser.me/api/`)
//   .then((raw) => raw.json())
//   .then((readable) => console.log(readable.results[0].gender));

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//   .then((raw) => raw.json())
//   .then((res) => console.log(res));

// axios.get(`https://randomuser.me/api/`)
// .then(result => console.log(result.data.results[0])
// )

// const paper = new Promise(function(resolve, reject) {
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(res => {
//         if(res.results[0].gender === "male") resolve();
//         else reject();
//     });
// })

// paper
// .then(function() {
//     console.log("hara button daba");
// })
// .catch(function() {
//     console.log("lal button daba");
// })


// function getData(url, callback) {
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callback(result);
//     })
// }
// getData("https://randomuser.me/api/", function(result){
//     console.log(result.results[0].gender, result.results[0].email, result.results[0].name.first);
// })



// async function abcd() {
//     let a = await fetch(`https://randomuser.me/api/`);
//     a = await a.json();
//     console.log(a);
// }
// abcd();


// function dataFetcher(url, callback) {
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callback(result);
//     })
// }
// dataFetcher("https://randomuser.me/api/", function(result){
//     console.log(result);
// })

// function dataFetcher(){
//     const parchi = new Promise(function(resolve, reject) {
//         fetch(url)
//         .then(raw => raw.json())
//         .then(result => {
//             resolve(result);
//         })
//     })
//     return parchi;
// }
// dataFetcher("https://randomuser.me/api/")
// .then(function(result){
//     console.log(result);
// })

// async function dataFetcher(url) {
//     let data = await fetch(url);
//     let result = await data.json;
//     return result;
// }
// async function asyncFunc() {
//     const data = await dataFetcher("https://randomuser.me/api/");    
//     console.log(data);
// }
// asyncFunc();



// function* printNums() {
//     console.log("started");
//     yield 1;
//     console.log("1 started");
//     yield 2;
//     console.log("2 started");
//     yield 3;
// }
// const ans = printNums();
// console.log(ans.next());
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next());

// function* allNums() {
//     for(let i = 1; i < 11; i++) {
//         yield i;
//     } 
// }
// const gen = allNums();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


var nums = Array.from({length: 10000}, (_, b) => b+1);
const worker = new Worker("worker.js");
worker.postMessage(nums);
worker.onmessage = function(data) {
    console.log(data.data);
}


