
let monthlyPayment = () 
let continueComputing = "Yes"
while(continueComputing == "Yes"){
  let calculator = prompt("Which calculator do you want to use? (Car loan or Home loan)")
  let amountUse = prompt("What is the loan amount?")
  let timeframeUse = prompt("What is the time frame? (in months for car loan and in either 15 or 30 years for home loan).")
  let interestRateUse = prompt("What is the interest rate (in percentage form)?")
  if(calculator == "Car loan"){
  monthlyPayment = carLoanPayment(amountUse, timeframeUse, interestRateUse)
  alert(`A car loan for $${amountUse} over ${timeframeUse} months at ${interestRateUse}% interest would have a monthly payment of $${monthlyPayment}`)
}

else if(calculator == "Home loan"){
  if (timeframeUse == 15 || timeframeUse == 30){
  monthlyPayment = homeLoanPayment(amountUse,timeframeUse,interestRateUse)
  alert(`A home loan for $${amountUse} over ${timeframeUse} years at ${interestRateUse}% interest would have a monthly payment of $${monthlyPayment}`)  
}

else {
  alert("The timeframe entered is not valid")
  break; 
  } 
}

