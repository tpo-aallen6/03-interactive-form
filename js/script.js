/**
* Treehouse Techdegree: Adam Allen
* FSJS Project 3 - Interactive Form
 */

/**
 * Global variables
 */

const nameInput = document.querySelector('#name')
const jobRole = document.querySelector('#title')
const otherJobRole = document.querySelector('#other-job-role')
const design = document.querySelector('#design')
const colors = document.querySelector('#color')
const registerActivity = document.querySelector('#activities')
const payMethod = document.querySelector('#payment')
const payPal = document.querySelector('#paypal')
const bitCoin = document.querySelector('#bitcoin')
const form = document.querySelector('form[action="index.html"]')
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
let totalCost = 0

/**
 *  Default behavior on page load. Name field in focus, other job role
 *  hidden, color field disabled, credit card set as default payment
 *  method, paypal and bitcoin payment options hidden.
 */

nameInput.focus()
otherJobRole.style.display = 'none'
colors.disabled = true
document.querySelector('option[value="credit-card"]').selected = true
payPal.style.display = 'none'
bitCoin.style.display = 'none'

/**
 * Displays the other job role field only when other job role is selected
 */

jobRole.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
    otherJobRole.style.display = ''
  } else {
    otherJobRole.style.display = 'none'
  }
})

/**
 * Enables the color dropdown menu when a theme is selected
 * Only the matching colors appear for the selected theme
 */

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

/**
 * Allows for the selection of activities
 * Updates the total cost for each selected activity and
 * prevents the selection of activities in the same time slot as
 * a previously selected activity.
 */

registerActivity.addEventListener('change', (e) => {
  const dataCost = +(e.target.getAttribute('data-cost'))
  const time = e.target.getAttribute('data-day-and-time')
  const activityCost = document.querySelector('#activities-cost')

  if (e.target.checked === true) {
    totalCost += dataCost
  } else {
    totalCost -= dataCost
  }

  for (let i = 0; i < checkboxes.length; i++) {
    const timeUnavailable = checkboxes[i].getAttribute('data-day-and-time')

    if (time === timeUnavailable && e.target !== checkboxes[i]) {
      checkboxes[i].disabled = true

      if (e.target.checked) {
        checkboxes[i].disabled = true
      } else {
        checkboxes[i].disabled = false
      }
    }
  }
  activityCost.innerHTML = `Total: $${totalCost}`
})

/**
 * Changes the visibility of payment options based on payment selection
 */

payMethod.addEventListener('change', (e) => {
  const creditCard = document.querySelector('#credit-card')

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

/**
 * Enables focus on activities that are checked or tabbed through and
 * blur on unchecked activities
 */

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('focus', (e) => {
    if (!e.target.checked) {
      checkboxes[i].parentNode.className = 'focus'
    } else {
      e.target.parentNode.className = ''
    }
  })

  checkboxes[i].addEventListener('blur', (e) => {
    if (e.target.checked) {
      checkboxes[i].parentNode.className = 'focus'
    } else {
      e.target.parentNode.className = ''
    }
  })
}

/**
 * Form validation on submit to see if the required fields are
 * properly filled in. Regex tests determine if there are any
 * invalid required fields and displays or hides the error message
 * accordingly. Submission only works when all required fields are
 * properly filled in and at least one activity is selected.
 */

form.addEventListener('submit', (e) => {
  const name = nameInput.value
  const emailInput = document.querySelector('#email')
  const email = emailInput.value
  const cardNumInput = document.querySelector('#cc-num')
  const cardNum = cardNumInput.value
  const zipInput = document.querySelector('#zip')
  const cvvInput = document.querySelector('#cvv')
  const zip = zipInput.value
  const cvv = cvvInput.value
  const nameTest = /^[a-z]+$/i.test(name)
  const emailTest = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email)
  const cardNumTest = /^\d{13,16}$/.test(cardNum)
  const zipTest = /^\d{5}$/.test(zip)
  const cvvTest = /^\d{3}$/.test(cvv)

  if (!nameTest || !emailTest) {
    e.preventDefault()

    if (!nameTest) {
      document.querySelector('#name-hint').style.display = 'block'
    } else {
      document.querySelector('#name-hint').style.display = 'none'
    }

    if (!emailTest) {
      document.querySelector('#email-hint').style.display = 'block'
    } else {
      document.querySelector('#email-hint').style.display = 'none'
    }
  } else {
    document.querySelector('#name-hint').style.display = 'none'
    document.querySelector('#email-hint').style.display = 'none'
  }

  if (document.querySelector('option[value="credit-card"]').selected) {
    if (!cardNumTest || !zipTest || !cvvTest) {
      e.preventDefault()

      if (!cardNumTest) {
        document.querySelector('#cc-hint').style.display = 'block'
      } else {
        document.querySelector('#cc-hint').style.display = 'none'
      }

      if (!zipTest) {
        document.querySelector('#zip-hint').style.display = 'block'
      } else {
        document.querySelector('#zip-hint').style.display = 'none'
      }

      if (!cvvTest) {
        document.querySelector('#cvv-hint').style.display = 'block'
      } else {
        document.querySelector('#cvv-hint').style.display = 'none'
      }
    } else {
      document.querySelector('#cc-hint').style.display = 'none'
      document.querySelector('#zip-hint').style.display = 'none'
      document.querySelector('#cvv-hint').style.display = 'none'
    }
  }

  if (!checkboxes[0].checked &&
    !checkboxes[1].checked &&
    !checkboxes[2].checked &&
    !checkboxes[3].checked &&
    !checkboxes[4].checked &&
    !checkboxes[5].checked &&
    !checkboxes[6].checked) {
    e.preventDefault()
    document.querySelector('#activities-hint').style.display = 'block'
  } else {
    document.querySelector('#activities-hint').style.display = 'none'
  }
})

// form validation in real time for exceeds !-- fix this
