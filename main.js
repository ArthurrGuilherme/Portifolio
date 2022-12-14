/*Pre-carregamento*/ 
function loading() {
    document.getElementsByClassName('load')[0].style.display = "none";
    document.getElementsByClassName('loandig')[0].style.display = "block";
}

/*Botão*/ 
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

/*Validação*/ 
function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin@gmail.com" && senha == "admin123"){
        alert('Sucesso');
        location.href = "Blog.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}