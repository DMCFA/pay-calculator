//get document variables
const form = document.querySelector('form')
const hours = document.getElementById('hours')
const pay = document.getElementById('pay')
const payLabel = document.querySelector('label[for=total]')

//add event listener to form
form.addEventListener('submit', e => {
    e.preventDefault()
    setTimeout(() => {
        totalPay(pay.value, hours.value)
    }, 1000)
})

//function to calculate the pay and show it on the browser
const totalPay = (pay, hours) => {
    const total = pay * hours
    payLabel.textContent = `Your total pay will be: £${total}`
}

//add & remove button class for exit animation

btn.addEventListener('click', () => {
    const btn = document.querySelector('button')
        btn.classList.add('btnScale')
        setTimeout(() => {
            btn.classList.remove('btnScale')
        }, 2000)
})

//change labels text if screen is smaller than 460px

window.addEventListener('resize', () => {
    if (window.screen.width < 460) {
        const hoursWorked = document.querySelector('label[for=hours]')
        const hourPay = document.querySelector('label[for=pay]')
        hoursWorked.textContent = 'hours worked'
        hourPay.textContent = 'hourly pay'
    }
})


