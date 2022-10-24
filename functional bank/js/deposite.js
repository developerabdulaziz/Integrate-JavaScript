
// ---------------------------- utilities.js file nicher tinta function niye jawa hoise -------------------- //

/* 
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}


function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

 */



document.getElementById('btn-deposite').addEventListener('click', function () {
    /*
        1. get the element by id
        2. get the value from the element
        3. convert string value to a number
        4.
    */

    const newDepositeAmount = getInputFieldValueById('deposite-field');

    /*
        1.get previous deposite total by id
    */
    const previousDepositeTotal = getTextElementValueById('deposite-total');


    // calculate new deposite total
    const newDepositeTotal = previousDepositeTotal + newDepositeAmount;

    // set deposite total value
    setTextElementValueById('deposite-total', newDepositeTotal);


    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})