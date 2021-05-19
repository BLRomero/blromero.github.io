// let's grab a reference to the div, and then grab the width and height of the viewport (the inner window, where your document is displayed) and store them in variables — these two values are handily contained in the Window.innerWidth and Window.innerHeight properties. 
const div = document.querySelector('div');
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;
// we'll dynamically alter the width and height of the div to equal that of the viewport.
div.style.width = winWidth + 'px';
div.style.height = winHeight + 'px';

// How about we use an event so that the div resizes as we resize the window? The Window object has an event available on it called resize, which is fired every time the window is resized — let's access that via the Window.onresize event handler and rerun our sizing code each time it changes
window.onresize = function() {
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
  div.style.width = winWidth + 'px';
  div.style.height = winHeight + 'px';
}