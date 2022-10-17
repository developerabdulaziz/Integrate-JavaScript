document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('button clicked');

    // get userEmail
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);

    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassWord = passwordField.value;
    // console.log(userPassWord);


    // check email and password
    if (userEmail == 'sontan@baap.com' && userPassWord == 'secret') {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }

})