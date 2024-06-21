// ========= change background header =======
const scrollHeader= ()=>{
    const header= document.getElementById('header')
    this.scrollY >= 50? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// show scrollup
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// scroll section active link
const sections = document.querySelectorAll('section[id]')
const scrollActive = ()=>{
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

// scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '68px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal('.home__data, .products__data, .steps__content, .footer__container')
sr.reveal('.home__img', {origin:'bottom'})
sr.reveal('.products__card', {interval: 100})
sr.reveal('.about__img, .testimonial__img', {origin: 'right'})
sr.reveal('.about__data, .testimonial__data', {origin: 'left'})