const billInput = document.getElementById("billAmount");
const tipInput = document.getElementById("tipAmount")
const calculateBtn = document.getElementById("calculate");
const resetBtn = document.getElementById('reset');
const tipContainer = document.querySelector('.tipContainer');

window.addEventListener('load', () => {
    let amount = JSON.parse(localStorage.getItem('completeBill'));
   console.log("things to work with:", amount)
   for (let i = 0; i < amount.length; i++){
       result = +amount[i];
    //    console.log(result);
       newResult = result.toFixed(2)
       const newH4 = document.createElement('h4')
       newH4.innerHTML = `${newResult}`
       tipContainer.appendChild(newH4);
   }
})


calculateBtn.addEventListener('click', () => {
    let bill = billInput.value;
    let tip = tipInput.value;
    // console.log(bill);
    // console.log(tip);

    if(!bill && !tip){
        alert("Please provide bill and tip amount")
    } else {
        newBillAmount(Number(bill), Number(tip))
        // use Number() to denote a number going through function
        // or use "+" in front of parameter to make it pass as a number
    }
})

resetBtn.addEventListener('click', () => {
    alert("You clicked the reset btn")
})

newBillAmount = (bill, tip) =>{
    let tipAmt = tip / 100;
    // console.log(tipAmt)
    let newNumber = bill + (bill * tipAmt)
    let finalBill = newNumber.toFixed(2)
    // console.log("new bill amount:", finalBill)

    localFunction(finalBill)
}

localFunction = (number) => {
    // check to see if there is an existing entry in local storage
    // if not, then create the completeBill array
    if(!localStorage.getItem("completeBill")){
        let billArray = []
        billArray.push(number);
        const str = JSON.stringify(billArray)
        localStorage.setItem('completeBill', str)
    } else {
        // if there is, get the content by parsing the string and returning it as an object
        // then pushing the new number into the 'existingArray'
        // finally setting the localStorage again with the new data and stringifying it 
       let existingArray = JSON.parse(localStorage.getItem('completeBill'));
       existingArray.push(number)
       localStorage.setItem('completeBill', JSON.stringify(existingArray));
    }

    addMe()
}

addMe = () => {
    // get the data from localStorage
    // iterate through it to then append each to the HTML
   let amount = JSON.parse(localStorage.getItem('completeBill'));
   console.log("things to work with:", amount)
   for (let i = 0; i < amount.length; i++){
       result = +amount[i];
    //    console.log(result);
       newResult = result.toFixed(2)
       const newH4 = document.createElement('h4')
       newH4.innerHTML = `${newResult}`
       tipContainer.appendChild(newH4);
   }

}