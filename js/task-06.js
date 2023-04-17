
const textInput = document.getElementById('validation-input');

textInput.addEventListener('blur', () => {
 const inputValue = textInput.value;
  const numlength = textInput.dataset.length;

  if (inputValue.length === parseInt(numlength)) {
   textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
});