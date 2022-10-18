



/* ================================================= */
document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('click deposit button');

    const depositInput = document.getElementById('deposit-input');
    // console.log('click deposit input');

    const depositInputValue = depositInput.value;
    const depositInputAmount = parseFloat(depositInputValue);
    // console.log(depositInputAmount);





    //------------ deposit total ------------
    const depositTotal = document.getElementById('deposit-total');

    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);

    const depositTotalTk = depositTotalAmount + depositInputAmount;

    depositTotal.innerText = depositTotalTk;


    //------------ Balance total ------------

    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    const balanceAmount = balanceTotalAmount + depositTotalTk;
    balanceTotal.innerText = balanceAmount;

    depositInput.value = '';
})



const withdrawButton = document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('click withdraw button');

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    // console.log('withdrawInputText');
    const withdrawInputResult = parseFloat(withdrawInputText);



    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalTextAmount = parseFloat(withdrawTotalText);



    const withdrawTotalResult = withdrawTotalTextAmount + withdrawInputResult;

    withdrawTotal.innerText = withdrawTotalResult;



    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    const Amount = balanceTotalAmount - withdrawTotalResult;
    balanceTotal.innerText = Amount;



    withdrawInput.value = '';
})