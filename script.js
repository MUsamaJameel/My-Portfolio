const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const logoLink = document.querySelector('header .logo');
const menuIcon = document.querySelector('#menu-icon');
const dayMood = document.querySelector('#day-mood');
const navBar = document.querySelector('header nav');

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});

dayMood.addEventListener('click', ()=>{
    dayMood.classList.toggle('bxs-moon');
    document.body.classList.toggle('day-mood')
    
});

const activePage = ()=> {
    const barsBox = document.querySelector('.bars-box');
    const header = document.querySelector('header');

    header.classList.remove('active');
    setTimeout(()=>{
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    barsBox.classList.remove('active');
    setTimeout(()=>{
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
};

navLinks.forEach((link, idx) => {
link.addEventListener('click', ()=>{
    if(!link.classList.contains('active')) {
        activePage();

        link.classList.add('active');

        setTimeout(()=>{
sections[idx].classList.add('active');
        },1100);
    };
});
});

logoLink.addEventListener('click',()=>{
    if(!navLinks[0].classList.contains('active')){
        activePage();

       navLinks[0].classList.add('active');

       setTimeout(()=>{
        sections[0].classList.add('active');
        },1100)
    }
})


const resumeBtns = document.querySelectorAll('.resume-btn');


resumeBtns.forEach(function (btn, idx) {
    btn.addEventListener('click', function () {
        const resumeDetail = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(function (btn) {
            btn.classList.remove('active');
        })
        btn.classList.add('active');

        resumeDetail.forEach(function (detail) {
            detail.classList.remove('active');
        })
        resumeDetail[idx].classList.add('active');
    })


})

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right')
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left')

let index = 0;

const activePortfolio = () =>{
    const imgSlider = document.querySelector('.portfolio-carousel .img-slider')

    const portfolioDetails = document.querySelectorAll('.portfolio-details')

    imgSlider.style.transform = `translateX(calc(${index * -100}% - ${index *2}rem))`

    portfolioDetails.forEach(detail =>{
        detail.classList.remove('active')
    })
    portfolioDetails[index].classList.add('active')
}

arrowRight.addEventListener('click',()=>{
    if(index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index=5;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
})
arrowLeft.addEventListener('click',()=>{
    if(index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index=0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
})




