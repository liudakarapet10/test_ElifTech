const form = document.querySelector('#form');
const table = document.querySelector("#table");
const localStorage = window.localStorage;
let openBtnIndex = 0 ;
let arrayBank = [];



form.addEventListener("submit", addBank);

function addBank(e){
    e.preventDefault() 

    const bankName = document.forms["form"]["bankName"].value;
    const interestRate = document.forms["form"]["interestRate"].value;
    const maximumLoan = document.forms["form"]["maximumLoan"].value;
    const minimumDownPayment = document.forms["form"]["minimumDownPayment"].value;
    const loanTerm = document.forms["form"]["loanTerm"].value;



    if( bankName == null || bankName == "" , interestRate == null || interestRate == "", maximumLoan == null || maximumLoan == "" , minimumDownPayment == null || minimumDownPayment == "", loanTerm == null || loanTerm == ""){
        alert('Fill out the form')
        return false;
     }


        table.innerHTML += `
          <tr>
          <td class='bName'>${bankName}</td>
          <td class='iRate'>${interestRate}</td>
          <td class='mLoan'>${maximumLoan}</td>
          <td class='mPayment'>${minimumDownPayment}</td>
          <td class='lTerm'>${loanTerm}</td>
          <td><button class='delateBtn'>Delate</button><button class="editBtn">Edit</button><button class='openBtn' date-row='${++openBtnIndex}' onclick="window.open('/bank.html'); return false">Open Bank</Button></td> 
          </tr>
        `; 

        let bank = {
            number: openBtnIndex,
            bankName: bankName,
            interestRate: interestRate,
            maximumLoan: maximumLoan,
            minimumDownPayment: minimumDownPayment,
            loanTerm: loanTerm
        }

        arrayBank.push(bank);

       window.localStorage.setItem('arrayBank', JSON.stringify(arrayBank))
       console.log(arrayBank)
       
        form.reset();   
  }

  table.addEventListener('click', delateBank)

  function delateBank(e){
      if(!e.target.classList.contains('delateBtn')){ 
          return;
      }
      const delateBtn = e.target;
      delateBtn.closest('tr').remove();

      localStorage.removeItem('bankName');
      localStorage.removeItem('interestRate');
      localStorage.removeItem('maximumLoan');
      localStorage.removeItem('minimumDownPayment');
      localStorage.removeItem('loanTerm');
      console.log(localStorage);
  }


  table.addEventListener('click', editRow)


  function editRow(e){  
     if(!e.target.classList.contains('editBtn')){
         return;
     }
     const editBtn = e.target;
     const tr = editBtn.closest('tr');

     editBtn.innerHTML = 'Save'

    tr.querySelector('.bName').innerHTML = bankName.value;
    tr.querySelector('.iRate').innerHTML = interestRate.value;
    tr.querySelector('.mLoan').innerHTML = maximumLoan.value;
    tr.querySelector('.mPayment').innerHTML = minimumDownPayment.value;
    tr.querySelector('.lTerm').innerHTML = loanTerm.value;
    
    form.reset();
    
  }










  














