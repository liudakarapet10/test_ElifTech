const name = localStorage.getItem('bankName');
const rate = localStorage.getItem('interestRate');
const loan = localStorage.getItem('maximumLoan');
const payment = localStorage.getItem('minimumDownPayment');
const term = localStorage.getItem('loanTerm');
const number = localStorage.getItem('number')


console.log(localStorage)
let keys = Object.keys(localStorage);
console.log(keys)

const parName = document.querySelector('.name');
const parRate = document.querySelector('.rate');
const parLoan = document.querySelector('.loan');
const parPayment = document.querySelector('.payment');
const parTerm = document.querySelector('.term');

parName.innerHTML = name;
parRate.innerHTML = rate;
parLoan.innerHTML = loan;
parPayment.innerHTML = payment;
parTerm.innerHTML = term;

let p;
let n;
let m;
const form = document.querySelector('.bankForm');
const r = rate / 100;
const conteinerManthlyPayment = document.querySelector('.conteinerManthlyPayment');



form.addEventListener('submit', saveValue)

function saveValue(e){
    e.preventDefault() 

    p =+form.querySelector('#amountBororwed').value;
    n =+form.querySelector('#numberOfMonths').value;

    conteinerManthlyPayment.innerHTML = `
    <p>Amount Borrowed</p>
    <p>${p}</p>
    <p>Number of months of payment</p>
    <p>${n}</p>
    <button class='countBtn'>Count</button>
    <p class='titleMonthyPayment'>Your monthyPayment</p>
    <p class='monthlyPayment'><p>
    `

    form.reset();
}


conteinerManthlyPayment.addEventListener('click', getMonthlyPayment)

function getMonthlyPayment(e){
    if(!e.target.classList.contains('countBtn')){ 
        return;
    }
    const countBtn = e.target;
    const parMonthlyPayment = document.querySelector('.monthlyPayment');
    const titleMonthyPayment = document.querySelector('.titleMonthyPayment');

    countBtn.innerHTML ='Counted'
    m = Math.ceil(p * (r/12) * ((1 + r/12) ** n) / (((1 + r/12) ** n)-1));
    titleMonthyPayment.style.display = 'block';
    parMonthlyPayment.innerHTML = m;
  
}











