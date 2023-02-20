
document.getElementById('calculate-btn').addEventListener('click', function(){
    // console.log('clicked')
    const income= document.getElementById('income').value;
    const food= document.getElementById('food').value;
    const rent= document.getElementById('rent').value;
    const clothes= document.getElementById('clothes').value;
    if (
        income < 0 ||
        income == "" ||
        food < 0 ||
        food == "" ||
        rent < 0 ||
        rent == "" ||
        clothes < 0 ||
        clothes == ""
      ) {
        alert("Inputs must be positive numbers");
        return;
      }

    const totalexpense= parseFloat(food)+parseFloat(rent)+parseInt(clothes)
    const balance= parseFloat(income)-totalexpense
    // const expense= document.getElementById('total-expense')
    // const remainingBalance= document.getElementById('balance')
    // expense.innerText= totalexpense;
    // remainingBalance.innerText=balance;

    if (totalexpense > income) {
        alert("Expenses cannot be more than income");
      } 
      else {
    
        // view total expense and balance
         document.getElementById("total-expense").innerText = totalexpense;
         document.getElementById("balance").innerText = balance;
      }
    }
)
// saving part
document.getElementById('save-btn').addEventListener('click',function(){
    const savePercentage = document.getElementById('save').value;
    if (savePercentage < 0 ||
        savePercentage == "") {
        alert("Provide positive saving value");
      }
      
    const income= document.getElementById('income').value;
    const savingAmount = parseFloat(savePercentage / 100) * parseFloat(income);
    // console.log(typeof savingAmount)
    // const savingamount = document.getElementById('saving-amount')
    // savingamount.innerText=savingAmount;

     // calculate remaining balance
  const balance =  document.getElementById("balance").innerText ;
  const remainingBalance = parseFloat(balance) - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
    
})
