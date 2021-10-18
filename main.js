import * as html2canvas from './html2canvas.js';

const inputTextElement = document.getElementById('inputText');
const pElement = document.getElementById('text');
const inputButton = document.getElementById('inputButton');
const imageInput = document.getElementById('imageInput');
const imageSave = document.getElementById('imageSave');

inputButton.addEventListener('click', fillText);
imageInput.addEventListener('change', fillImage);
imageSave.addEventListener('click', saveImage);

function fillText() {
  const inputText = inputTextElement.value;
  pElement.innerHTML = inputText;
}

function fillImage(event) {
  var t = URL.createObjectURL(event.target.files[0]);
  pElement.style.backgroundImage = 'url(' + t + ')';
  //pElement.style.backgroundImage = 'url(' + event.target.files[0].name + ')';
}

function saveImage() {
  html2canvas(pElement).then(function(canvas) {
    document.body.appendChild(canvas);
  });
}