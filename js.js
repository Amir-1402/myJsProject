function addClass() {
    className = document.getElementById('classInput').value;
   document.getElementById('text').className = className;
}
function changeButton() {
    const button = document.getElementById('clickButton');
    button.textContent = 'Clicked!';
    button.classList.add('disabled-button');
}
function toggleVisibility(elementId) {
       element = document.getElementById(elementId);
       if (element.classList.contains('visible')) {
           element.classList.remove('visible');
           element.classList.add('hidden');
       } else {
           element.classList.remove('hidden');
           element.classList.add('visible');
       }
   }