var darkmodecheckbox = document.getElementById("darkmodecheckbox");
var isDarkModeOn = false;

// Check if the user has previously set the dark mode
if (localStorage.getItem("isDarkModeOn") === "true") {
  isDarkModeOn = true;
  document.body.classList.add("darkmode");
  darkmodecheckbox.checked = true;
}

darkmodecheckbox.addEventListener("change", function () {
  isDarkModeOn = !isDarkModeOn;
  
  // Check if the dark mode is already on before applying the transition
  if (isDarkModeOn) {
    document.body.classList.toggle("darkmode");
  } else {
    document.body.classList.toggle("darkmode-with-transition");
    setTimeout(function () {
      document.body.classList.toggle("darkmode");
      document.body.classList.toggle("darkmode-with-transition");
    }, 300);
  }
  
  // Store the state of the dark mode in local storage
  localStorage.setItem("isDarkModeOn", isDarkModeOn);
});


const content1 = document.querySelector('#content1');
const content2 = document.querySelector('#content2');
const content3 = document.querySelector('#content3');
const content4 = document.querySelector('#content4');
const content5 = document.querySelector('#content5');
const content6 = document.querySelector('#content6');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');

if (window.location.hash) {
  const anchor = window.location.hash.substr(1);
  const content = document.querySelector(`#${anchor}`);
  if (content) {
    content.classList.add('show');
  }
}

button1.addEventListener('click', () => {
  content6.classList.remove('show');
  content5.classList.remove('show');
  content4.classList.remove('show');
  content3.classList.remove('show');
  content2.classList.remove('show');
  content1.classList.toggle('show');

});

button2.addEventListener('click', () => {
  content6.classList.remove('show');
  content5.classList.remove('show');
  content4.classList.remove('show');
  content3.classList.remove('show');
  content2.classList.toggle('show');
  content1.classList.remove('show');
});

button3.addEventListener('click', () => {
  content6.classList.remove('show');
  content5.classList.remove('show');
  content4.classList.remove('show');
  content3.classList.toggle('show');
  content2.classList.remove('show');
  content1.classList.remove('show');
});

button4.addEventListener('click', () => {
  content6.classList.remove('show');
  content5.classList.remove('show');
  content4.classList.toggle('show');
  content3.classList.remove('show');
  content2.classList.remove('show');
  content1.classList.remove('show');

});

button5.addEventListener('click', () => {
  content6.classList.remove('show');
  content5.classList.toggle('show');
  content4.classList.remove('show');
  content3.classList.remove('show');
  content2.classList.remove('show');
  content1.classList.remove('show');
});

button6.addEventListener('click', () => {
  content6.classList.toggle('show');
  content5.classList.remove('show');
  content4.classList.remove('show');
  content3.classList.remove('show');
  content2.classList.remove('show');
  content1.classList.remove('show');
});






