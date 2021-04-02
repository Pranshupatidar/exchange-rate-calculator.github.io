const curr_one = document.getElementById('currency-one');
const curr_two = document.getElementById('currency-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch API and calculate currency
function calculate(){
    const c_one = curr_one.value;
    const c_two = curr_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${c_one}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[c_two];
        rateEl.innerText = `1 ${c_one} = ${rate} ${c_two}`;
        amount_two.value = (amount_one.value*rate).toFixed(2);
    });
}

//Event listeners
curr_one.addEventListener('change',calculate);
curr_two.addEventListener('change',calculate);
amount_one.addEventListener('input',calculate);
amount_two.addEventListener('input',calculate);
swap.addEventListener('click', () => {
    const temp = curr_one.value;
    curr_one.value = curr_two.value; 
    curr_two.value = temp;
    calculate();
})

calculate();