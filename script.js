const BillAmount = document.getElementById("billAmount");
const TipPercent = document.getElementById("tipAmount");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonAmount = document.getElementById("perPersonTotal");

let NoOfPeople = Number(numberOfPeopleDiv.innerHTML);

const calculate = () => {
    let billTotal = Number(BillAmount.value);
    let tip = Number(TipPercent.value);
    let totalBill = billTotal + (billTotal * (tip/100))
    let perPersonTotal = totalBill / NoOfPeople
    perPersonAmount.innerText = `₹${perPersonTotal.toFixed(2)}`;
}
const increasePeople = () => {
    numberOfPeopleDiv.innerText = ++NoOfPeople
    calculate()
  }
  const decreasePeople = () => {
    if (NoOfPeople <= 1) {
      return
    }
    else {
      numberOfPeopleDiv.innerText = --NoOfPeople
    }
    calculate()
  }