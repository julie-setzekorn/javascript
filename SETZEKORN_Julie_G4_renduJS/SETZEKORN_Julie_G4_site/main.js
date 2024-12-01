//dark mode/Light mode

var image = document.getElementById('logo')
image.src = "img site/logo-sombre.png"

var input = document.querySelector('#dark-mode')
input.addEventListener('click', function () {

    var body = document.querySelector('body')

    body.classList.toggle('dark-mode')
    body.classList.toggle('light-mode')

    if (body.classList.contains('dark-mode')) {
        image.src = "img site/logo-sombre.png";
    }
    else {
        image.src = "img site/logo.png";
    }
})


//tabs

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', function () {
       
        switch (tab) {
            case 'tabAgenda':
                document.getElementById('Agenda').classList.add('active');
                break;
            case 'tabPratique':
                document.getElementById('Pratique').classList.add('active');
                break;
            case 'tabDestinations':
                document.getElementById('Destinations').classList.add('active');
                break;
        }
    });
});
