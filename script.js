// ==========================================
// 1. CONTROLE DO POP-UP (MODAL) DE INSCRIÇÃO
// ==========================================
const modal = document.getElementById('modal-inscricao');
const botoesCard = document.querySelectorAll('.btn-card');
const btnFechar = document.querySelector('.btn-fechar');
const campoAcaoVisivel = document.getElementById('acao-visivel');

botoesCard.forEach(botao => {
    botao.addEventListener('click', function() {
       
        const cardPai = this.closest('.card');
        
        const tituloAcao = cardPai.querySelector('h3').innerText;
        const cidadeAcao = cardPai.getAttribute('data-cidade');
        
        if (campoAcaoVisivel) {
            campoAcaoVisivel.value = `${tituloAcao} (${cidadeAcao})`;
        }
        if (modal) {
            modal.style.display = 'flex';
        }
    });
});

// Fecha o pop-up ao clicar no 'X'
if (btnFechar) {
    btnFechar.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

// Fecha o pop-up se clicar fora do quadro
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// ==========================================
// 2. ENVIO DO FORMULÁRIO DE VOLUNTÁRIOS
// ==========================================
const formVoluntario = document.getElementById('form-voluntario');

if (formVoluntario) {
    formVoluntario.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const nomeAcao = document.getElementById('acao-visivel').value;

        alert(`Olá, ${nome}!\nSua inscrição para "${nomeAcao}" foi realizada com sucesso! 🌍🌱`);
        
        this.reset();
        modal.style.display = 'none';
    });
}


// ==========================================
// 3. FILTRO DINÂMICO DE CARDS POR CIDADE
// ==========================================
const filterCidade = document.getElementById('filtro-cidade');

if (filterCidade) {
    filterCidade.addEventListener('change', function() {
        const cidadeSelecionada = this.value;
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const cidadeCard = card.getAttribute('data-cidade');
            
            // Se selecionar 'todos' ou a cidade do card coincidir, mostra o card. Caso contrário, esconde.
            if (cidadeSelecionada === 'todos' || cidadeCard === cidadeSelecionada) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none';  
            }
        });
    });
}


// ==========================================
// 4. ENVIO DO FORMULÁRIO DE INSTITUIÇÕES
// ==========================================
const formInstituicao = document.getElementById('form-instituicao');

if (formInstituicao) {
    formInstituicao.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const nomeInst = document.getElementById('nome-inst').value;
        
        alert(`Parabéns! A instituição "${nomeInst}" foi pré-cadastrada com sucesso.\nNossa equipe analisará os dados ecológicos fornecidos! 🏢🌱`);
        
        this.reset();
    });
}

// modo escuro
const btnTema = document.getElementById('btn-tema');

if (btnTema) {
    btnTema.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            btnTema.innerText = '☀️';
        } else {
            btnTema.innerText = '🌙';
        }
    });
}

const campoBusca = document.getElementById('busca-texto');
const msgVazia = document.getElementById('mensagem-sem-resultados'); 

if (campoBusca) {
    campoBusca.addEventListener('input', function() {
        const termoBusca = this.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        let temResultado = false; 

        cards.forEach(card => {
            const titulo = card.querySelector('h3').innerText.toLowerCase();
            // ==========================================
// 5. MODO ESCURO
// ==========================================
const btnTema = document.getElementById('btn-tema');

if (btnTema) {
    btnTema.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        btnTema.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';

        //  MELHORIA: Toast ao trocar o tema
        const modo = document.body.classList.contains('dark-mode') ? 'escuro 🌙' : 'claro ☀️';
        mostrarToast(`Modo ${modo} ativado!`, 2000);
    });
}


// ==========================================
// 6. BUSCA POR TEXTO
// ==========================================
const campoBusca = document.getElementById('busca-texto');
const msgVazia = document.getElementById('mensagem-sem-resultados');

if (campoBusca) {
    campoBusca.addEventListener('input', function () {
        const termoBusca = this.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        let temResultado = false;

        cards.forEach(card => {
            const titulo = card.querySelector('h3').innerText.toLowerCase();

            if (titulo.includes(termoBusca)) {
                card.style.display = 'block';
                temResultado = true;
            } else {
                card.style.display = 'none';
            }
        });

        if (msgVazia) {
            msgVazia.style.display = temResultado ? 'none' : 'block';
        }
    });
}


// ==========================================
// 7. BOTÃO COMPARTILHAR
// ==========================================
const botoesShare = document.querySelectorAll('.btn-share');

botoesShare.forEach(botao => {
    botao.addEventListener('click', function () {
        const cardPai = this.closest('.card');
        const tituloAcao = cardPai.querySelector('h3').innerText;
        const cidadeAcao = cardPai.getAttribute('data-cidade');

        const textoParaCopiar = `Olha essa ação incrível no EcoVoluntário: ${tituloAcao} em ${cidadeAcao}! Participe!`;

        navigator.clipboard.writeText(textoParaCopiar).then(() => {
            //  MELHORIA: Toast no lugar do alert
            mostrarToast('📋 Texto copiado! Agora é só colar para seus amigos.', 3000);
        });
    });
});

            if (titulo.includes(termoBusca)) {
                card.style.display = 'block';
                temResultado = true; 
            } else {
                card.style.display = 'none';
            }
        });
        if (msgVazia) {
            if (temResultado) {
                msgVazia.style.display = 'none';
            } else {
                msgVazia.style.display = 'block';
            }
        }
    });
}


const botoesShare = document.querySelectorAll('.btn-share');

botoesShare.forEach(botao => {
    botao.addEventListener('click', function() {
        const cardPai = this.closest('.card');
        const tituloAcao = cardPai.querySelector('h3').innerText;
        const cidadeAcao = cardPai.getAttribute('data-cidade'); 
        });
    });


    // ==========================================
//  MELHORIA: MENU HAMBÚRGUER (MOBILE)
// ==========================================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('aberto');
    });

    // Fecha o menu ao clicar em um link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('aberto');
        });
    });
}


// ==========================================
//  MELHORIA: SCROLL SUAVE NOS LINKS DA NAVBAR
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) {
            e.preventDefault();
            alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


// ==========================================
//  MELHORIA: ANIMAÇÃO DE ENTRADA DOS CARDS
//    ao aparecerem na tela (Intersection Observer)
// ==========================================
const cardsParaAnimar = document.querySelectorAll('.card');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cardsParaAnimar.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede a página de recarregar
    
    // Aqui você integraria com o backend futuramente
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
    
    this.reset(); // Limpa os campos do formulário
});



