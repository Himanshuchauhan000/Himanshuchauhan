const para = document.querySelector('p');
// if we want the first p tag we can jst get it like this. check the console
console.log(para);

// suppose we want to select a div with the class error then we can do so like this
const div = document.querySelector('div.error');
console.log(div);

//* suppose we do not know the selector -> go to the document and rt click -> copy selector

// if we want all the p tags and not just one then we use this

const paras = document.querySelectorAll('p');

// this is stored in a nodeList. nodeList is not an array but we can use some methods of the array like
// we can use forEach or access each element by [] brackets

// check the nodeList
console.log(paras);

paras.forEach(e=>{
    console.log(e);
})


// other ways to grab elements

// 1. getElementById : note: the id in html should be unique and no duplicates should exist
const title = document.getElementById('page-title');
console.log(title);

// 2. get by className. This gives a html collection. we can still access the element with [] but cannot use forEach
const paras1 = document.getElementsByClassName('para')
console.log(paras1);


// 3 getElement by tag name. this again stores it in a html collection.

const tag = document.getElementsByTagName('p');
console.log(tag);


// now we can do somth with grabbing the nodes!


