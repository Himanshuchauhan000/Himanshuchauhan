// get the first page and change the text

// const para = document.querySelector('p'); // gets first apra on the page
// // to get the inner text we use-> it is a property not a method hence no () 

// para.innerText = 'WE just changed the text';

// what if i want to change several tags at once

// const paras = document.querySelectorAll('p');

// // cycle through the paras node list and we cycle through each of them and we show on console. To update
// paras.forEach(para=>{
//     console.log(para.innerText)
//     para.innerText += ' Text Added';
// });





// // What if i want to change to whole html and not just the text. lets do it for the div

// const content = document.querySelector('.content');
// // we can access the html by using innerHtml

// content.innerHTML = '<h2>This is a new H2</h2>';

// // this will replace the html in content with the new html if we want ot append use  += inseted of =









// // example
// // imagin we got an array from a database and we want to cycle through the db and put in the content

// const content = document.querySelector('.content');

// const people = ['adam','ram','shayam'];

// people.forEach(person=>{
//     content.innerHTML += `<p>${person}</p>`;
// })

// // for each person we fire the callback and we append to the html. we add an extra p tag.


// next about getting the attribtes