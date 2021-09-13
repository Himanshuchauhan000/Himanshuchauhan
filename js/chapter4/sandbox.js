// we want to chage classes from error to success

const content = document.querySelector('p');

// this will log all the class that the elemet has
console.log(content.classList);

// to add

content.classList.remove('error')
content.classList.add('success')