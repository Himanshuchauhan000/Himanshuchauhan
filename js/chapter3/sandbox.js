// grab the first anchor tag
const link = document.querySelector('a');

console.log(link.getAttribute('href'));

// to set the attribute -> takes 2 arguments the attribute and new value

link.setAttribute('href','https://www.amazon.in/');

console.log(link.getAttribute('href'));


const msg = document.querySelector('p');
// this will show the attribute which can be changed by the set attribute
console.log(msg.getAttribute('class'));

msg.setAttribute('class','success')
console.log(msg.getAttribute('class'));

// it is ok it the attribute dosent exist cuz js will create

msg.setAttribute('style','color:green')

// this sets the style attribute and give the color as green!


// usefull if user fils a form and change class to make it green for success and red for fail















// changing css with style. if not sure see the name from msd.style
console.log(msg.style);
msg.style.color = 'red';
msg.style.fontSize = '60px'








