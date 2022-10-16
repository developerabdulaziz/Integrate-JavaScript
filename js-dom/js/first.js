// console.log('this is my first file');

// explore getElementsByClassName
const blogs = getElementsByClassName('blog');
for (const blog of blogs) {
    blog.style.border = '2px solid red';
    blog.style.borderRadius = '10px';
    blog.style.margin = '5px';
    console.log(blog);
}

