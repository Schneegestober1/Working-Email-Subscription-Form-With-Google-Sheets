const scriptURL = 'https://script.google.com/macros/s/AKfycbxW4H8XyMb-OdMEWvzlojOnia66jwtmYoFiUD49tY7D76e3IvM_t_0_zw_RC3DkGKR57A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = 'Thank You For Subscribing'
        setTimeout(()=> {
            msg.innerHTML = ''
        }, 3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
