

const submitButton = document.getElementById('login-submit');
submitButton.addEventListener('click', function () {
    // console.log('click submit button');

    // get the user email
    const emailField = document.getElementById('user-email');
    // console.log('click email name');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get the user password
    const passwordField = document.getElementById('user-password');
    // console.log('click password');
    const userPassWord = passwordField.value;
    // console.log('than than');


    // check email and password
    if (userEmail == 'aziz01911267760@gmail.com' && userPassWord == '01911267760') {
        window.location.href = 'banking.html';
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