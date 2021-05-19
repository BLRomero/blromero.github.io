
// To manipulate an element inside the DOM, you first need to select it and store a reference to it inside a variable
const link = document.querySelector("a");

// First of all, let's change the text inside the link by updating the value of the Node.textContent property
link.textContent = 'Mozilla Developer Network';

// We should also change the URL the link is pointing to, so that it doesn't go to the wrong place when it is clicked on
link.href = 'https://developer.mozilla.org';

//let's start by grabbing a reference to our <section> element
const sect = document.querySelector("section");

// create a new paragraph using Document.createElement() and give it some text content 
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

// append the new paragraph at the end of the section using Node.appendChild():
sect.appendChild(para);

// add a text node to the paragraph the link sits inside, to round off the sentence nicely. First we will create the text node using Document.createTextNode():
const text = document.createTextNode(' — the premier source for web development knowledge.');

// grab a reference to the paragraph the link is inside, and append the text node to it:
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

// to move the paragraph with the link inside it to the bottom of the section,
sect.appendChild(linkPara);

// Removing a node is pretty simple as well, at least when you have a reference to the node to be removed and its parent. 
// sect.removeChild(linkPara);

// When you want to remove a node based only on a reference to itself, which is fairly common, you can use ChildNode.remove():
// linkPara.remove();

// This method is not supported in older browsers. They have no method to tell a node to remove itself, so you'd have to do the following.
// linkPara.parentNode.removeChild(linkPara);

// to add inline styles directly onto elements you want to dynamically style. This is done with the HTMLElement.style property, which contains inline styling information for each element in the document. You can set properties of this object to directly update element styles. 
// these lines are indeed adding inline styles to the document:
// para.style.color = 'white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';

// general HTML manipulation — Element.setAttribute() — this takes two arguments, the attribute you want to set on the element, and the value you want to set it to. In this case we will set a class name of highlight on our paragraph:
para.setAttribute('class', 'highlight');