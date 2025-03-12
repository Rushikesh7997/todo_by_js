    const scriptURL = 'https://script.google.com/macros/s/AKfycbzyZgH0ly8m9Fs-RDD7ucemoLSjGx2rKc0dGkFgPpWIwJxV7qeDsThivh7jbjCKHyciLg/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Thank You for Subscribing!"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
    })
