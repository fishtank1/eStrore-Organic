document.getElementsByClassName('fa-caret-right')[0].classList.add('fa-caret-down');
document.getElementsByClassName('fa-caret-right')[0].classList.remove('fa-caret-right');
document.getElementsByClassName('faq-1')[0].setAttribute("switch", "false");
document.getElementsByClassName('description-txt-1')[0].style.display = 'none';

document.getElementsByClassName('g-faq')[0].addEventListener("click", function(){

    if(document.getElementsByClassName('faq-1')[0].getAttribute("switch") == 'true')
    {
        document.getElementsByClassName('fa-caret-right')[0].classList.add('fa-caret-down');
        document.getElementsByClassName('fa-caret-right')[0].classList.remove('fa-caret-right');
        document.getElementsByClassName('faq-1')[0].setAttribute("switch", "false");
        document.getElementsByClassName('description-txt-1')[0].style.display = 'none';
    }

    else 	
    {
        document.getElementsByClassName('fa-caret-down')[0].classList.add('fa-caret-right');
        document.getElementsByClassName('fa-caret-down')[0].classList.remove('fa-caret-down');
        document.getElementsByClassName('faq-1')[0].setAttribute("switch", "true");
        document.getElementsByClassName('description-txt-1')[0].style.display = 'block';
    }
});