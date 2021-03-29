let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton =document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
/*console.dir(selectPlanButtons);*/
//console.dir(backdrop.style['background-image']);

/*backdrop.style.display = 'block';*/

for (let i=0; i<selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        //modal.style.display = 'block';
      //  backdrop.style.display = 'block';
        //modal.classList.add('open');(remove)
        //backdrop.classList.add('open');(remove)

        modal.className='open';

    });
}


    backdrop.addEventListener('click', function () {
        mobileNav.style.display = 'none';
        backdrop.style.display = 'none';
        modal.style.display = 'none';

    });

    modalNoButton.addEventListener('click', function(){
        backdrop.style.display = 'none';
        modal.style.display = 'none';
    });


    toggleButton.addEventListener('click', function () {
        mobileNav.style.display = 'block';
        backdrop.style.display = 'block';
    });



