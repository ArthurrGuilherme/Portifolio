/*Pre-carregamento*/ 
function loading() {
    document.getElementsByClassName('load')[0].style.display = "none";
    document.getElementsByClassName('loandig')[0].style.display = "block";
}

window.addEventListener('scroll', function(){
    let scroll = this.document.querySelector('.scrolltop')
        scroll.classList.toggle('active', window.scrollY > 450)
})

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}