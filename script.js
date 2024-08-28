const avance = document.querySelectorall( '.btn-proximo');

avance. forEach( button =>  {
    button.addeventlistener('click' function(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'passo-' + this.getAttribute ('data-proximo')

        atual.classList.remove ('ativo')
        document.getElementById ('proximopasso')
    })

} )