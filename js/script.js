const nameInput = document.querySelector('#name')
const jobRole = document.querySelector('#title')
const otherJobRole = document.querySelector('#other-job-role')
const design = document.querySelector('#design')
const color = document.querySelector('#color')
const jsPuns = document.querySelector('option[data-theme="js puns"]')
const heartJS = document.querySelector('option[data-theme="heart js"]')
const jsPunsTheme = document.querySelector('option[value="js puns"]')
const heartJStheme = document.querySelector('option[value="heart js"]')

nameInput.focus()
otherJobRole.style.visibility = 'hidden'
color.disabled = true

jobRole.addEventListener('change', (e) => {
  if (e.target.value.toLowerCase() === 'other') {
    otherJobRole.style.visibility = 'visible'
  } else {
    otherJobRole.style.visibility = 'hidden'
  }
})
