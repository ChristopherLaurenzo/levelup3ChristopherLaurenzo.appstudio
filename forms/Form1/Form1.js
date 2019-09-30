
let monthlyPayment = (0) 
let continueComputing = "Yes"
while(continueCalc == "Yes"){
  let calculator = prompt("Which calculator do you want to use? (Car loan or Home loan)")
  let timeframeUse = prompt("What is the time frame? (in months for car loan and in either 15 or 30 years for home loan).")
  let interestRateUse = prompt("What is the interest rate (in percentage form)?")
  let amountUse = prompt("What is the loan amount?")

Function carLoanPayment(amountUse, timeframeUse, interestRateUse){
  monthlyInterest = (interestRateUse/12)/100
  divEnd = ((1+monthlyInterest)**timeframe - 1)/(monthlyInterest*(1+monthlyInterest)
  carPayment = amount/divEnd
  return carPayment
}

Function homeLoanPayment(amountUse, timeframeUse, interestRateUse){
  monthlyInterest = (interestRateUse/12)/100
  yearMonth = timeframeUse*12
  divEnd = ((1+monthlyInterest)**yearMonth-1)/(monthlyInterest*(1+monthlyInterest)
  homePayment = amount/divEnd
}

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

