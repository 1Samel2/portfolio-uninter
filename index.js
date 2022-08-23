const btn = document.getElementById("btnTop")  /* exportei o id da pasta html para usar aqui  */

btn.addEventListener("click", function(){    /* um click para validar quando eu clicar no botão ao apertar a function roda o script  */
    window.scrollTo(0,0)
})

document.addEventListener('scroll',ocultar)  /* addEventListener() registra uma única espera de evento em um único alvo */

function ocultar(){
    if(window.scrollY > 10){     /*   if para validar se está no local que eu quero aí ativar o efeito  */
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"     /* caso dá else ele não valida e deixa um display none para o css não exibir o conteúdo na tela  */
    }
}

ocultar()