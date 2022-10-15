console.log('I am from summary js file');

/*
const blogs = document.getElementsByTagName('p');
console.log(blogs);
*/

/*
const blogs = document.getElementsByTagName('p');
for (const blog of blogs) {
    console.log(blog);
}
*/



const blogs = document.getElementsByTagName('p');
for (const blog of blogs) {
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white';
    blog.style.padding = '10px';
}



const Ratione = document.getElementById('special-blog');
// Ratione.innerText = 'Small Ratione';
Ratione.innerHTML = `
< h4 > Special inner html</h4 >
        <div>
            <ul>
                <li>ami pari</li>
                <li>Lol inside</li>
            </ul>
        </div>
`


const friends = document.getElementById('friends');
console.log(friends.childNodes);
console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);



// create Element 
const friend = document.createElement('li');
friend.innerText = 'Friends-11';
friends.appendChild(friend);