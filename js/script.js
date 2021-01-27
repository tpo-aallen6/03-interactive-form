const nameInput = document.querySelector('#name')
const jobRole = document.querySelector('#title')
const otherJobRole = document.querySelector('#other-job-role')
const design = document.querySelector('#design')
const colors = document.querySelector('#color')
const registerActivity = document.querySelector('#activities')
const activityCost = document.querySelector('#activities-cost')
const payMethod = document.querySelector('#payment') // may not need
const creditCard = document.querySelector('#credit-card')
const payPal = document.querySelector('#paypal')
const bitCoin = document.querySelector('#bitcoin')
let totalCost = 0

nameInput.focus()
otherJobRole.style.display = 'none'
colors.disabled = true
document.querySelector('option[value="credit-card"]').selected = true
// payMethod.children[1].selected = true
payPal.style.display = 'none'
bitCoin.style.display = 'none'

jobRole.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
    otherJobRole.style.display = ''
  } else {
    otherJobRole.style.display = 'none'
  }
})

design.addEventListener('change', (e) => {
  colors.disabled = false
  if (e.target.value === 'js puns') {
    for (let i = 0; i < colors.length; i++) {
      const theme = colors[i].getAttribute('data-theme')
      if (theme === e.target.value) {
        colors[i].style.display = ''
        colors[i].selected = true
      } else {
        colors[i].style.display = 'none'
        colors[i].selected = false
      }
    }
  } else if (e.target.value === 'heart js') {
    for (let i = 0; i < colors.length; i++) {
      const theme = colors[i].getAttribute('data-theme')
      if (theme === e.target.value) {
        colors[i].style.display = ''
        colors[i].selected = true
      } else {
        colors[i].style.display = 'none'
        colors[i].selected = false
      }
    }
  }
})

registerActivity.addEventListener('change', (e) => {
  const dataCost = +(e.target.getAttribute('data-cost'))
  // need to disable conflicting times for checkboxes
  if (e.target.checked === true) {
    totalCost += dataCost
  } else {
    totalCost -= dataCost
  }
  activityCost.innerHTML = `Total: $${totalCost}`
  console.log(totalCost)
})

payMethod.addEventListener('change', (e) => {
  if (e.target.value === 'credit-card') {
    creditCard.style.display = ''
    payPal.style.display = 'none'
    bitCoin.style.display = 'none'
  } else if (e.target.value === 'paypal') {
    creditCard.style.display = 'none'
    payPal.style.display = ''
    bitCoin.style.display = 'none'
  } else if (e.target.value === 'bitcoin') {
    creditCard.style.display = 'none'
    bitCoin.style.display = ''
    payPal.style.display = 'none'
  }
})
