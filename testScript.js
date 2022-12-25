// let typename = document.getElementById('input');
// let nametext = document.getElementById('textName');
// const display = () => {
//     nametext.innerText = typename.value ;
// }

// const factorial = (num) => {
//     let fact = 1;
//     for(i=1;i<=num;i++){
//         fact = fact * i;
//     }
//     return fact;
// } 
// document.writeln("Factorial: "+factorial(prompt("Enter a number: ")));

// const ask= (question,yes,no) => (confirm(question))?yes():no();  -----> Terenary operator done by chakka vish

// function ask(question,yes,no){
//     if(confirm(question)){
//         yes();
//     }
//     else{
//         no();
//     }


// const ask= (question,yes,no) => (confirm(question))?yes():no();
// let showOk = () => alert("You Agreed");
// let showCancle = () => alert("you cancled the execution");
// ask("Do you agree?",showOk,showCancle);


// Arrays\

// let arr = ["🍎","🍌","🍆",'🍊','🍇'];
// console.log("Array length: "+arr.length);
// console.log(arr);
// console.log(arr = arr.concat("🍐"));

// arr.splice(2,2,"complex","language");
// console.log(arr);

// Map function

let map = new Map();
map.set(139,"vishnu");
map.set(137,"junaid");
// console.log(map.has(139));
console.log(map);

// Set

let set = new Set();
set.add(137,"junid");
console.log(set);

class clock {

    constructor(templete){
        this.templete=templete;
    }

    render(){
        let date = new Date();
        let hour = date.getHours;
        console.log(hour);
    }
}









