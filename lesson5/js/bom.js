// step4
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// step5
button.onclick = function(){
  let myChapter = input.value;
  input.value = "";

  const listChapter = document.

  // step6a
  createElement('li');
  // const listText = document.createElement('span');

   // step6b
  const listBtn = document.createElement('button');

   // step6c
   listChapter.appendChild(listText);
  listText.textContent = myChapter;
  listChapter.appendChild(listBtn);

  // fix to be a red x step 6d
  listBtn.textContent = "Delete";

// step6e????

  // step6f
  list.appendChild(listChapter);

  // step 6g
  listBtn.onclick = function(e){
    list.removeChild(listChapter);
  }
  // step 6h
  input.focus();
}
