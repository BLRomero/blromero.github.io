// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Create a function that will run in response to the button being clicked.
button.onclick = function() {

  // Inside the function body, start off by storing the current value of the input element in a variable.
  let myItem = input.value;
  input.value = "";
  // Next, empty the input element by setting its value to an empty string — ''. (Done above)

  // Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  // Append the span and the button as children of the list item.
listItem.appendChild(listText);
listText.textContent = myItem;
listItem.appendChild(listBtn);

// Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
listBtn.textContent = "Delete";

// Append the list item as a child of the list.
list.appendChild(listItem);

// Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
listBtn.onclick = function(e){
  list.removeChild(listItem);
}

// Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
input.focus();





}