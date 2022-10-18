
document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('click');

    const name = document.getElementById('user-name');
    const userName = name.value;

    const email = document.getElementById('user-email');
    const userEmail = email.value;
    console.log(userEmail);

    const password = document.getElementById('user-password');
    const userPassWord = password.value;
    console.log(userPassWord);

    if (userName == 'aziz' && userEmail == 'aziz@gmail.com' && userPassWord == '123') {
        window.location.href = 'https://www.youtube.com/watch?v=6gnCtxlnD9Q';
    }
    else {
        console.log('invalid user');
    }
})



/* ============================= without input name =================================== */
// document.getElementById('login-submit').addEventListener('click', function () {
//     // console.log('button clicked');

//     // get userEmail
//     const emailField = document.getElementById('user-email');
//     const userEmail = emailField.value;
//     console.log(userEmail);

//     // get user password
//     const passwordField = document.getElementById('user-password');
//     const userPassWord = passwordField.value;
//     // console.log(userPassWord);


//     // check email and password
//     if (userEmail == 'sontan@baap.com' && userPassWord == 'secret') {
//         // console.log('valid user');
//         window.location.href = 'tst.html';
//     }

// })