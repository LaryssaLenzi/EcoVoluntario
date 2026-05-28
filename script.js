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

if (campoBusca) {
    campoBusca.addEventListener('input', function() {
        const termoBusca = this.value.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const titulo = card.querySelector('h3').innerText.toLowerCase();
            
            if (titulo.includes(termoBusca)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

const botoesShare = document.querySelectorAll('.btn-share');

botoesShare.forEach(botao => {
    botao.addEventListener('click', function() {
        const cardPai = this.closest('.card');
        const tituloAcao = cardPai.querySelector('h3').innerText;
        const cidadeAcao = cardPai.getAttribute('data-cidade');
        
        const textoParaCopiar = `Olha essa ação incrível no EcoVoluntário: ${tituloAcao} em ${cidadeAcao}! Participe!`;
        
        navigator.clipboard.writeText(textoParaCopiar).then(() => {
            alert('Texto da ação copiado! Agora é só colar para seus amigos.');
        });
    });
});