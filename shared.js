let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton =document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let  ctaButton = document.querySelector('.main-nav__item--cta');
/*console.dir(selectPlanButtons);*/
//console.dir(backdrop.style['background-image']);

/*backdrop.style.display = 'block';*/

for (let i=0; i<selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        //modal.style.display = 'block';
        
        backdrop.style.display="block";
        modal.classList.add('open');
        setTimeout(function() {
            backdrop.classList.add('open');        
        }, 10);
        //backdrop.classList.add('open');(remove)
    });
}


    backdrop.addEventListener('click', function () {
        mobileNav.style.display = 'none';
        mobileNav.classList.remove('open');
        closeModal();
    });

    if (modalNoButton) {
        modalNoButton.addEventListener('click', closeModal);
    }

    function closeModal(){
        if(modal){
           modal.classList.remove('open');
        }
        backdrop.classList.remove('open');
        setTimeout(function() {
            backdrop.style.display = "none";    
        }, 200);
    }


    toggleButton.addEventListener('click', function () {
        mobileNav.style.display = 'block';
        mobileNav.classList.add('open'); 
        backdrop.style.display = 'block';
        setTimeout(function() {
            backdrop.classList.add('open');        
        }, 10);
       
    });





