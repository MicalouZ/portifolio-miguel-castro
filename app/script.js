const btnToggle = document.querySelector('.header-switch input')
const body = document.querySelector('body')

const github = document.getElementById('github')
const linkedin = document.getElementById('linkedin')

btnToggle.addEventListener('click', () => {
    body.classList.toggle('modo-escuro')
    const modoEscuroAtivo = body.classList.contains('modo-escuro')

    if (modoEscuroAtivo){
        github.src = "./img/github-alternative.svg"
        linkedin.src = "./img/linkedin-alternative.svg"
    }
    else {
        github.src = "./img/github.svg"
        linkedin.src = "./img/linkedin.svg"
    }
})

