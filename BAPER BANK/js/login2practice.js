
// step-1: add click event handler with the sbmit button
const submitButton = document.getElementById('login-submit');
submitButton.addEventListener('click', function () {
    // console.log('click submit button');


    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    // console.log('click email name');
    const userEmail = emailField.value;
    // console.log(userEmail);



    // step-3: get the user password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    // console.log('click password');
    const userPassWord = passwordField.value;
    // console.log('than than');


    // DANGER: Do not verify email password on the client side
    // step-4: verify email and password
    if (userEmail == 'aziz01911267760@gmail.com' && userPassWord == '01911267760') {
        console.log('valid user');
        window.location.href = 'banking.html';
    }
    else {
        alert('invalid user');
    }
})




// document.getElementById('login-submit').addEventListener('click', function () {
//     // console.log('clicked me please');

//     // get the user email
//     const emailField = document.getElementById('user-email');
//     // console.log(emailField.value);
//     emailField.value;

//     // get the user password
//     const passwordField = document.getElementById('user-password');
//     console.log(passwordField.value);
//     passwordField.value;

//     // check email and password
//     if (emailField.value == 'aziz01911267760@gmail.com' && passwordField.value == 'secret') {
//         // console.log('valid user');
//         window.location.href = 'banking.html';
//     }
// })