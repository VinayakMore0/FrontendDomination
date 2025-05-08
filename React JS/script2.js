// function Cart() {

// }

// export default Cart;
// // OR
// export function Abcd() {

// }


// var arr = [1,2,3,4,5];
// const ans = arr.map( val => val * 2);
// console.log(arr);
// console.log(ans);

// var state = [11,22,3,4,5,6,7,8,9,10,11,12,13,14];
// state.map(elem => elem > 5 ? elem + 5 : elem);
// console.log(state);

// var arr = [1,2,3,4,5,6];
// const ans = arr.filter(elem => elem>4);

// var arr = [
//     {name: "Vinayak", gender: "male"},
//     {name: "Yash", gender: "male"},
//     {name: "Aaryan", gender: "female"},
// ]
// const ans = arr.filter(elem => elem.gender === "male");
// console.log(ans);

var arr = [
    {products: "iphones", price: 120000},
    {products: "airpods", price: 50000},
    {products: "ipad", price: 70000},
    {products: "munch", price: 5},
]
const ans = arr.filter(elem => elem.price<20);
console.log(ans);

