function printer() {
    var writer = document.getElementsByClassName('wordin__ms-txt')[0].value;

    document.getElementsByClassName('ms-field')[1].innerHTML = '<pre>' + writer + '</pre>';
}

document.getElementsByClassName('wordin__ms-key')[0].addEventListener('click', printer);
document.getElementsByClassName('wordin__ms-txt')[0].addEventListener('', printer);