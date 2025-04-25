const myObserver = new IntersectionObserver((efeitos) => {
    efeitos.forEach((efeito) => { 
        if(efeito.isIntersecting === true){
            
            efeito.target.classList.add('show')

        }

        else{
            efeito.target.classList.remove('show')
        }
    })
});

const sections = document.querySelectorAll('.hidden');

sections.forEach((section) =>
    myObserver.observe(section)
)
document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden, .team-photo");

    const observerfoto = new IntersectionObserver(
        (fotos) => {
            fotos.forEach((foto) => {
                if (foto.isIntersecting) {
                    foto.target.classList.add("show");
                }
                else{
                    foto.target.classList.remove("show");
                }
            });
        },
        {

        }
    );

    hiddenElements.forEach((el) => observerfoto.observe(el));
});


// saiba mais da galerinha

let perfis = document.querySelectorAll('.team-photo');
let main = document.querySelector('main');

perfis.forEach(perfil => {
    perfil.addEventListener('click', () => {
        let existingCard = document.querySelector('.profile-card');
        if (existingCard) {
            existingCard.classList.remove('show-card');
            setTimeout(() => existingCard.remove(), 500);
        }

        let informacao = document.createElement('div');
        informacao.classList.add('profile-card');

        informacao.innerHTML = `
            <h2>${perfil.dataset.name}</h2>
            <h4>${perfil.dataset.role}</h4>
            <p>${perfil.dataset.description}</p>
            <img src="${perfil.dataset.img}" alt="${perfil.dataset.name}" class="profile-photo" />
            <button class="close-btn">Fechar</button>
        `;

        main.appendChild(informacao);

        // Força o repaint antes de aplicar a animação
        requestAnimationFrame(() => {
            informacao.classList.add('show-card');
        });

        let closeButton = informacao.querySelector('.close-btn');
        closeButton.addEventListener('click', () => {
            informacao.classList.remove('show-card');
            setTimeout(() => informacao.remove(), 500);
        });
    });
});
