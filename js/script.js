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
const emailInput = document.querySelector('#email')
const cardNumInput = document.querySelector('#cc-num')
const zipInput = document.querySelector('#zip')
const cvvInput = document.querySelector('#cvv')
const form = document.querySelector('form[action="index.html"]')
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
let totalCost = 0

nameInput.focus()
otherJobRole.style.display = 'none'
colors.disabled = true
document.querySelector('option[value="credit-card"]').selected = true
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

form.addEventListener('submit', (e) => {
  const name = nameInput.value
  const email = emailInput.value
  const cardNum = cardNumInput.value
  const zip = zipInput.value
  const cvv = cvvInput.value
  const nameTest = /^[a-z]+$/.test(name)
  const emailTest = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email)
  const cardNumTest = /^\d{13,16}$/.test(cardNum)
  const zipTest = /^\d{5}$/.test(zip)
  const cvvTest = /^\d{3}$/.test(cvv)

  if (!nameTest || !emailTest || !cardNumTest || !zipTest || !cvvTest) {
    e.preventDefault()
  }

  for (let i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[0].checked &&
      !checkboxes[1].checked &&
      !checkboxes[2].checked &&
      !checkboxes[3].checked &&
      !checkboxes[4].checked &&
      !checkboxes[5].checked &&
      !checkboxes[6].checked) {
      e.preventDefault()
    }
  }

  console.log(nameTest)
  console.log(emailTest)
  console.log(cardNumTest)
  console.log(zipTest)
  console.log(cvvTest)
})
