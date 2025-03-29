let kd;
function calculate() {
  const FV = document.querySelector('.js-face-value').value;
  const interestRate = document.querySelector('.js-interest-rate').value;
  const NSV = document.querySelector('.js-net-sales-value').value;
  const T = document.querySelector('.js-text-rate').value;

  if(T){
    I = FV * (interestRate/100);
    kd = (((I*(1-(T/100))) / NSV)*100).toFixed(2);
  } else {
    I = FV * (interestRate/100);
    kd = ((I / NSV) * 100).toFixed(2);
  }
  
  document.querySelector('.result').innerHTML = `Cost of Debt : ${kd}%`;
}
