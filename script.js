// document.getElementById('section1').addEventListener('click', function() {
//     document.getElementById('content1').scrollIntoView({ behavior: 'smooth' });
// });

// document.getElementById('section2').addEventListener('click', function() {
//     document.getElementById('content2').scrollIntoView({ behavior: 'smooth' });
// });
// document.getElementById('section2').addEventListener('click', function() {
//     document.getElementById('content2').scrollIntoView({ behavior: 'smooth' });
// });
// document.getElementById('section2').addEventListener('click', function() {
//     document.getElementById('content2').scrollIntoView({ behavior: 'smooth' });
// });
// document.getElementById('section2').addEventListener('click', function() {
//     document.getElementById('content2').scrollIntoView({ behavior: 'smooth' });
// });
// Add more event listeners for additional sections
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}
document.addEventListener('DOMContentLoaded', function () {
    // Get all keys and sections
    var keys = document.querySelectorAll('.key');
    var sections = document.querySelectorAll('.section');

    // Add click event listeners to each key
    keys.forEach(function (key) {
        key.addEventListener('click', function () {
            // Get the corresponding section id
            var note = this.getAttribute('data-note');
            var sectionId = 'content' + note;

            // Get the target section element
            var targetSection = document.getElementById(sectionId);

            // Scroll to the target section
            if (targetSection) {
                var navbarHeight = document.getElementById('piano').offsetHeight;
                var targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get all keys and sections
    var keys = document.querySelectorAll('.key');
    
    // Define a mapping from each note to a section ID
    var noteSectionMapping = {
        "C": "content1",
        // "Db": "content3",
        // "D": "content4",
        // "Eb": "content5",
         "E": "content2",
        "F": "content4",
        // "Gb": "content8",
        "G": "content5",
        // "Ab": "content10",
         "A": "content6",
        // "Bb": "content12",
         //"B": "content6"
    };

    // Add click event listeners to each key
    keys.forEach(function (key) {
        key.addEventListener('click', function () {
            // Get the corresponding section id based on the clicked key's note
            var note = this.getAttribute('data-note');
            var sectionId = noteSectionMapping[note];

            // Get the target section element
            var targetSection = document.getElementById(sectionId);

            // Scroll to the target section
            if (targetSection) {
                var navbarHeight = document.getElementById('piano').offsetHeight;
                var targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }
  
  /**
  * Utility function to update the button text and aria-label.
  */
  function updateButton({ buttonEl, isDark }) {
    const newCta = isDark ? "p" : "f";
    // use an aria-label if you are omitting text on the button
    // and using a sun/moon icon, for example
    buttonEl.setAttribute("aria-label", newCta);
    buttonEl.innerText = newCta;
  }
  
  /**
  * Utility function to update the theme setting on the html tag
  */
  function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
  }
  
  
  /**
  * On page load:
  */
  
  /**
  * 1. Grab what we need from the DOM and system settings on page load
  */
  const button = document.querySelector("[data-theme-toggle]");
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  
  /**
  * 2. Work out the current site settings
  */
  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
  
  /**
  * 3. Update the theme setting and button text accoridng to current settings
  */
  updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
  updateThemeOnHtmlEl({ theme: currentThemeSetting });
  
  /**
  * 4. Add an event listener to toggle the theme
  */
  button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  
    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });
  
    currentThemeSetting = newTheme;
  });

document.addEventListener('DOMContentLoaded',function(event){
// array with texts to type in typewriter
var dataText = [ "Coding.  Piano.  Innovation."];

// type one text in the typwriter
// keeps calling itself until the text is finished
function typeWriter(text, i, fnCallback) {
// chekc if text isn't finished yet
if (i < (text.length)) {
  // add next character to h1
 document.querySelector(".container-moving").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

  // wait for a while and call this function again for next character
  setTimeout(function() {
    typeWriter(text, i + 1, fnCallback)
  }, 100);
}
// text finished, call callback if there is a callback function
else if (typeof fnCallback == 'function') {
  // call callback after timeout
  setTimeout(fnCallback, 700);
}
}
// start a typewriter animation for a text in the dataText array
function StartTextAnimation(i) {
 if (typeof dataText[i] == 'undefined'){
    setTimeout(function() {
      StartTextAnimation(0);
    }, 20000);
 }
 // check if dataText[i] exists
if (i < dataText[i].length) {
  // text exists! start typewriter animation
 typeWriter(dataText[i], 0, function(){
   // after callback (and whole text has been animated), start next text
   StartTextAnimation(i + 1);
 });
}
}
// start the text animation
StartTextAnimation(0);
});


