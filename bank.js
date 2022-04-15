const name = localStorage.getItem('bankName');
const rate = localStorage.getItem('interestRate');
const loan = localStorage.getItem('maximumLoan');
const payment = localStorage.getItem('minimumDownPayment');
const term = localStorage.getItem('loanTerm');

const countBtn = document.querySelector('.count');


const parName = document.querySelector('.name');
const parRate = document.querySelector('.rate');
const parLoan = document.querySelector('.loan');
const parPayment = document.querySelector('.payment');
const parTerm = document.querySelector('.term');

let outputAmount;

parName.innerHTML = name;
parRate.innerHTML = rate;
parLoan.innerHTML = loan;
parPayment.innerHTML = payment;
parTerm.innerHTML = term;


// const inputValue = parseInt(inputAmount,10);
// console.log(inputValue)
// const ratePercent = parseInt(parRate.textContent,10);
// console.log(ratePercent)
// outputAmount = (inputValue / 100) * ratePercent;
// console.log(outputAmount)

console.log(typeof +inputAmount);

countBtn.addEventListener('click', outputSum)


function outputSum(){
    const inputAmount = document.querySelector('#inputAmount').value;
    const par = document.querySelector('.outputAmount');
     console.log(inputValue)
     const ratePercent = parseInt(parRate.textContent,10);
     console.log(ratePercent)
     outputAmount = (+inputAmount / 100) * ratePercent;
     par.innerHTML = outputAmount;    
}





