


document.getElementById('calculate-btn').addEventListener('click', function () {
    const clothes = document.getElementById('clothes');
    const clothesFieldString = clothes.value;
    const clothesFieldNumber = parseInt(clothesFieldString);


    const rent = document.getElementById('rent');
    const rentFieldString = rent.value;
    const rentFieldNumber = parseInt(rentFieldString);


    const food = document.getElementById('food');
    const foodFieldString = food.value;
    const foodFieldNumber = parseInt(foodFieldString);

    // calculate three products total price 
    const threeProductPrice = clothesFieldNumber + rentFieldNumber + foodFieldNumber;
    const threeProductPriceNumber = parseInt(threeProductPrice);

    // find the Total Expensive 
    const totalExpensive = document.getElementById('total-expense');
    totalExpensive.innerText = threeProductPriceNumber;


    // income
    const income = document.getElementById('income');
    const incomeField = income.value;
    const incomeAmount = parseInt(incomeField);


    // // Balance
    const balance = document.getElementById('balance');
    const balanceNumber = balance.innerText;

    // calculate income and balace
    const balanceTotal = incomeAmount - threeProductPriceNumber;
    balance.innerText = balanceTotal;

})

function calculateSavings() {
    const save = document.getElementById('save');
    const saveField = save.value;
    const saveNumber = parseInt(saveField);

    // saving amount
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = savingAmount.innerText;
    const savingAmountNumber = parseInt(savingAmountText);


    // income
    const income = document.getElementById('income');
    const incomeField = income.value;
    const incomeAmount = parseInt(incomeField);

    // calculate saving amount and save and income
    const calculate = incomeAmount * saveNumber / 100;

    savingAmount.innerText = calculate;



    const balance = document.getElementById('balance');
    const balanceNumber = balance.innerText;
    const balanceAmount = parseInt(balanceNumber);
    // console.log(balance2);
    // console.log(savingAmountNumber);

    const remaining = document.getElementById('remaining-balance');
    const result = balanceAmount - parseInt(savingAmount.innerText);
    remaining.innerText = result;

}





