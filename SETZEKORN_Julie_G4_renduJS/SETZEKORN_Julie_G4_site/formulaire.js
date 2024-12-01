// formulaire
// && = et || = ou 

let form = document.querySelector('form')
form.addEventListener('submit', function (formSubmit) {
    formSubmit.preventDefault();
    console.log('Envoi du form detecté!')

    let pseudo = document.querySelector('#pseudo')
    if (pseudo.value.length < 6) {
        pseudo.classList.add('message-error')
        console.log("invalide")
    } else {
        pseudo.classList.add('message-success')
        pseudo.classList.remove('message-error')
        console.log(pseudo.value) }

    let name = document.querySelector('#name')
    if (name.value.length < 2) {
        name.classList.add('message-error')
        console.log("invalide")
    } else {
        name.classList.add('message-success')
        name.classList.remove('message-error')
        console.log(name.value)
    }
    
    let firstname = document.querySelector('#firstname')
    if (firstname.value.length < 2) {
        firstname.classList.add('message-error')
        console.log("invalide")
    } else {
        firstname.classList.add('message-success')
        firstname.classList.remove('message-error')
        console.log(firstname.value)
    }

    let email = document.querySelector('#email')
    if (email.value == '') {
        email.classList.add('message-error')
        console.log("invalide")
    } else {
        email.classList.add('message-success')
        email.classList.remove('message-error')
        console.log(email.value)
    }

    let password = document.querySelector('#password')
    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );
    if (password.value.length<8 && passCheck.test(password.value) == false) {
        console.log("invalide")
        password.classList.add('message-error')
    } else {
        password.classList.add('message-success')
        password.classList.remove('message-error')
        console.log("valide")
    }
    
    let password2 = document.querySelector('#password2')
    if (password2.value != password.value) {
        console.log("invalide")
        password2.classList.add('message-error')
    } else {
        console.log("valide")
        password2.classList.add('message-success')
        password2.classList.remove('message-error')
    }

})