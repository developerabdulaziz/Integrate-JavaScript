function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
//just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// handle event using anonymous function
const tealButton = document.getElementById('make-teal-button');
// console.log(tealButton);
tealButton.onclick = function makeTeal() {
    document.body.style.backgroundColor = 'teal';
}



//handle by using add eventlisenter
const goldenButton = document.getElementById('make-goldenrod');
// console.log(goldenButton);
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}


// addEventlishtener
const hotPinkButton = document.getElementById('make-hotPink');
// console.log(hotPinkButton);
hotPinkButton.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'hotpink';
})


// direct shortcut
document.getElementById('light-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})