/* =========================================
   NAVEGAÇÃO E INTERFACE GERAL
   ========================================= */

// Função para alternar entre as seções do site (SPA simples)
function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active-section'));

    // Remove classe ativa dos links do menu
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));

    // Mostra a seção desejada
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active-section');
    }

    // Fecha o menu mobile se estiver aberto
    const navUl = document.querySelector('nav ul');
    if (navUl.classList.contains('show')) {
        navUl.classList.remove('show');
    }
    
    // Scroll para o topo
    window.scrollTo(0, 0);
}

// Menu Mobile Toggle
function toggleMobileMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
}

/* =========================================
   MODAIS DE PRODUTOS
   ========================================= */

function openModal(modalId) {
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById(modalId).style.display = 'block';
}

function closeAllModals() {
    document.getElementById('modal-overlay').style.display = 'none';
    const modals = document.querySelectorAll('.modal');
    modals.forEach(m => m.style.display = 'none');
}

// Função auxiliar para abrir o chat vindo de um modal e já definindo contexto se necessário
// No caso atual, o fluxo inicia do zero, mas podemos simular a escolha.
// O prompt pede para reiniciar, então vamos apenas abrir o chat.
function openChatWithContext(context) {
    toggleChatbot();
    // Opcional: Poderia iniciar o chat já selecionando a opção, 
    // mas o requisito pede fluxo padrão. Vamos apenas abrir.
}


/* =========================================
   CHATBOT LOGIC
   ========================================= */

const chatContainer = document.getElementById('chatbot-container');
const chatBody = document.getElementById('chat-body');
const optionsMenu = document.getElementById('chat-options-menu');
const inputPlaceholder = document.getElementById('input-placeholder');

// Variáveis de Estado
let chatState = 'START'; 
let currentFlowData = {}; // Para armazenar dados temporários se necessário

// Constantes de Imagem e Links
const BOT_AVATAR_URL = "https://c.topshort.org/aifacefy/ai_face_generator/template/1.webp";

// Estrutura de Mensagens e Fluxos
const flow = {
    'START': {
        msg: "Olá, seja bem-vindo(a) à iGreen Energy. Sobre o que vamos conversar hoje?",
        options: [
            { label: "Conexão placas", next: "PLACAS_START" },
            { label: "Conexão Solar", next: "SOLAR_START" },
            { label: "Conexão green", next: "GREEN_START" },
            { label: "Conexão telecom", next: "TELECOM_START" },
            { label: "Trabalhe conosco", next: "TRABALHE_START" }
        ]
    },

    // --- CONEXÃO GREEN ---
    'GREEN_START': {
        msg: "Conexão green, entendido! O que exatamente você quer falar sobre o assunto?",
        options: [
            { label: "Receber desconto agora", next: "GREEN_Q1_TITULAR" },
            { label: "Já fiz o cadastro, preciso tirar dúvidas", action: "link_support_duvidas" },
            { label: "Não consegui fazer o cadastro sozinho(a)", action: "link_support_ajuda" }
        ]
    },
    'GREEN_Q1_TITULAR': {
        msg: "Antes de liberar seu desconto exclusivo na fatura de energia, preciso confirmar alguns requisitos da lei 14300. Você é o titular da fatura?",
        options: [
            { label: "Sim", next: "GREEN_Q2_VALOR" },
            { label: "Não", next: "GREEN_FAIL_TITULAR" }
        ]
    },
    'GREEN_FAIL_TITULAR': {
        msg: "Entendi. Neste caso, o benefício só pode ser solicitado diretamente pelo titular da conta. Peça para o titular entrar em contato!",
        options: [] // Fim
    },
    'GREEN_Q2_VALOR': {
        msg: "Ótimo! Agora me diga: O valor da sua conta de energia é acima de R$150 por mês?",
        options: [
            { label: "Sim", next: "GREEN_Q3_NIS" },
            { label: "Não", next: "GREEN_FAIL_VALOR" }
        ]
    },
    'GREEN_FAIL_VALOR': {
        msg: "Neste momento, o benefício é válido apenas para contas acima de R$150 mensais. Se sua conta aumentar futuramente, nos procure!",
        options: []
    },
    'GREEN_Q3_NIS': {
        msg: "Só mais uma pergunta: O seu CPF está cadastrado no programa Baixa Renda/NIS junto à concessionária de energia?",
        options: [
            { label: "Sim", next: "GREEN_FAIL_NIS" },
            { label: "Não", next: "GREEN_SUCCESS_FORM" }
        ]
    },
    'GREEN_FAIL_NIS': {
        msg: "Neste momento, nosso benefício é exclusivo para quem não está inscrito no programa Baixa Renda (NIS).",
        options: []
    },
    'GREEN_SUCCESS_FORM': {
        msg: "Perfeito! Você atende a todos os requisitos. Preencha os campos abaixo e clique em prosseguir.<br><br><a href='https://docs.google.com/forms/d/e/1FAIpQLScr9672uki_uqqJlm5DefPYFzpxGV-JVxqLmh4S_S6IP2N6Bg/viewform?usp=dialog' target='_blank' class='chat-link'>ABRIR FORMULÁRIO</a>",
        options: [
            { label: "Enviei", action: "redirect_contract" }
        ]
    },

    // --- CONEXÃO TELECOM ---
    'TELECOM_START': {
        msg: "Conexão telecom, que legal! Sobre o que exatamente você deseja falar?",
        options: [
            { label: "Contratar um novo chip iGreen", action: "link_new_chip" },
            { label: "Fazer portabilidade para iGreen", action: "link_portability" },
            { label: "Já sou cliente, preciso de suporte", action: "link_support_telecom" }
        ]
    },

    // --- CONEXÃO PLACAS ---
    'PLACAS_START': {
        msg: "Que legal! Para comprar placas solares é necessário cumprir os requisitos de contratação. Vou te fazer algumas perguntas para confirmar os requisitos. Você concorda em contratar uma geração a partir de 250KW, mesmo que seu consumo seja inferior?",
        options: [
            { label: "Sim", next: "PLACAS_FORM" },
            { label: "Não", next: "PLACAS_FAIL" },
            { label: "Já comprei as placas, desejo suporte", next: "PLACAS_SUPPORT" }
        ]
    },
    'PLACAS_FAIL': {
        msg: "Desculpe, no momento não podemos atendê-lo.",
        options: []
    },
    'PLACAS_FORM': {
        msg: "Excelente! Para prosseguir, preencha o formulário abaixo, e um de nossos atendentes entrará em contato com você por whatsapp para fazer um orçamento.<br><br><a href='https://docs.google.com/forms/d/e/1FAIpQLSfuDWoYH004Av4L0Lp0FByLwidwbooL08QcYOpeKyZZK40lBQ/viewform?usp=dialog' target='_blank' class='chat-link'>ABRIR FORMULÁRIO</a>",
        options: []
    },
    'PLACAS_SUPPORT': {
        msg: "Que bom! Você já é cliente. Para obter suporte, fale conosco por whatsapp.",
        options: [
            { label: "Contatar suporte no whatsapp", action: "link_placas_support" }
        ]
    },

    // --- CONEXÃO SOLAR ---
    'SOLAR_START': {
        msg: "Você deseja alugar o telhado?",
        options: [
            { label: "Sim", next: "SOLAR_EXPLAIN" },
            { label: "Já aluguei meu telhado, preciso de suporte", next: "SOLAR_SUPPORT_ALREADY" }
        ]
    },
    'SOLAR_SUPPORT_ALREADY': {
        msg: "Muito bem, vamos lá! Para ter acesso ao suporte especializado, clique em contatar suporte no whatsapp.",
        options: [
            { label: "Contatar suporte no whatsapp", action: "link_solar_support" }
        ]
    },
    'SOLAR_EXPLAIN': {
        msg: "Que legal! Vou te explicar brevemente como funciona. Nós temos a conexão solar como uma modalidade de aquisição do sistema solar fotovoltaico alternativa, onde nós instalamos o sistema solar completo na sua residência, e durante um período determinado (normalmente 6 anos) esse sistema gera energia para nós.<br><br>Enquanto isso, você continuará pagando sua energia normalmente, mas com um desconto de até 15%, e sem pagar bandeiras tarifárias. Ao final do período estipulado, o sistema solar será 100% seu.<br><br>É importante ressaltar que neste procedimento, nós não vamos te pagar um valor mensal pelo aluguel do seu telhado, pois o pagamento pelo tempo de aluguel será justamente o sistema solar completo.<br><br>Deseja prosseguir e verificar os requisitos de contratação?",
        options: [
            { label: "Sim", next: "SOLAR_Q1_CONSUMO" },
            { label: "Não", next: "SOLAR_BYE" }
        ]
    },
    'SOLAR_BYE': {
        msg: "Sem problemas, estamos à disposição!",
        options: []
    },
    'SOLAR_Q1_CONSUMO': {
        msg: "Excelente! Para saber se você tem direito à contratação, vou te fazer algumas perguntinhas. Primeiramente, o local possui um consumo de no mínimo 300 reais por mês em fatura?",
        options: [
            { label: "Sim", next: "SOLAR_Q2_TITULAR" },
            { label: "Não", next: "SOLAR_FAIL" }
        ]
    },
    'SOLAR_FAIL': {
        msg: "Sinto muito, você não cumpre os requisitos.",
        options: []
    },
    'SOLAR_Q2_TITULAR': {
        msg: "Excelente! Você é o titular da fatura?",
        options: [
            { label: "Sim", next: "SOLAR_FORM" },
            { label: "Não", next: "SOLAR_FAIL_TITULAR" }
        ]
    },
    'SOLAR_FAIL_TITULAR': {
        msg: "Sinto muito. Melhor pedir que o titular entre em contato conosco.",
        options: []
    },
    'SOLAR_FORM': {
        msg: "Maravilha. Preencha o formulário a seguir para que nossa equipe técnica possa entrar em contato com você para solicitar as informações necessárias para gerar uma proposta.<br><br><a href='https://docs.google.com/forms/d/e/1FAIpQLSeMbhNi0g7YWbJAGp9M5OqXj5JMcNhk4ukiDgHZcplra0aAbA/viewform?usp=dialog' target='_blank' class='chat-link'>ABRIR FORMULÁRIO</a>",
        options: []
    },

    // --- TRABALHE CONOSCO ---
    'TRABALHE_START': {
        msg: "Que legal, você deseja fazer parte da família iGreen Energy! Atualmente nós trabalhamos com regime de franquia. Uma franquia, é uma filial da empresa que você pode comprar e administrar de forma independente. Você se torna parte de nós e nós vamos te fornecer os treinamentos necessários para trabalhar conosco. Você pode construir sua renda passiva conosco e receber uma 'aposentadoria' para sempre! Quer saber como? Contate a nossa equipe de suporte clicando em 'contatar suporte no whatsapp'.",
        options: [
            { label: "Contatar suporte no whatsapp", action: "link_trabalhe" }
        ]
    }
};

// LINKS EXTERNOS
const LINKS = {
    link_support_duvidas: "https://wa.me/5584920039738?text=Ol%C3%A1!%20J%C3%A1%20fiz%20o%20cadastro%20do%20desconto%20na%20fatura%20e%20desejo%20tirar%20d%C3%BAvidas.",
    link_support_ajuda: "https://wa.me/5584920039738?text=Ol%C3%A1!%20Desejo%20me%20cadastrar%20para%20obter%20o%20desconto%20na%20fatura%20de%20energia.%20Tentei%20s%C3%B3%20e%20n%C3%A3o%20consegui.",
    link_new_chip: "https://wa.me/5584920039738?text=Ol%C3%A1!%20Desejo%20contratar%20um%20novo%20chip%20iGreen%20Telecom,%20pode%20me%20ajudar?",
    link_portability: "https://wa.me/5584920039738?text=Ol%C3%A1!%20Desejo%20solicitar%20a%20portabilidade%20do%20meu%20n%C3%BAmero%20para%20a%20iGreen%20Telecom.%20Pode%20me%20ajudar?",
    link_support_telecom: "https://wa.me/558001830080?text=Ol%C3%A1!%20J%C3%A1%20sou%20cliente%20iGreen%20Telecom%20e%20desejo%20suporte.",
    link_placas_support: "https://api.whatsapp.com/send/?phone=5584920039738&text=Ol%C3%A1%21+J%C3%A1+comprei+as+placas+e+preciso+de+suporte.&type=phone_number&app_absent=0",
    link_solar_support: "https://api.whatsapp.com/send/?phone=5584920039738&text=Ol%C3%A1%21+J%C3%A1+aluguei+meu+telhado+e+preciso+de+suporte.&type=phone_number&app_absent=0",
    link_trabalhe: "https://wa.me/5584920039738?text=Ol%C3%A1!%20Desejo%20me%20tornar%20um%20franquiado%20e%20trabalhar%20com%20a%20iGreen%20Energy%20na%20minha%20cidade.%20Pode%20me%20explicar%20mais%20sobre%20os%20produtos%20que%20a%20empresa%20oferta,%20e%20como%20funciona%20o%20processo%20de%20compra%20da%20franquia?",
    redirect_contract: "https://digital.igreenenergy.com.br/?id=91507&sendcontract=true"
};

// Funções de Controle do Chat
function toggleChatbot() {
    const isVisible = chatContainer.style.display === 'flex';
    
    if (!isVisible) {
        chatContainer.style.display = 'flex';
        // Se estiver vazio, inicia
        if(chatBody.children.length === 0) {
            processState('START');
        }
    } else {
        chatContainer.style.display = 'none';
        closeOptions();
    }
}

function restartChat() {
    chatBody.innerHTML = '';
    closeOptions();
    processState('START');
}

function toggleOptions() {
    // Só abre se tiver opções disponíveis para o estado atual
    if (optionsMenu.innerHTML !== '') {
        const isDisplayed = optionsMenu.style.display === 'block';
        optionsMenu.style.display = isDisplayed ? 'none' : 'block';
    }
}

function closeOptions() {
    optionsMenu.style.display = 'none';
}

function appendMessage(text, isBot) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.classList.add(isBot ? 'bot-msg' : 'user-msg');
    
    if(isBot) {
        msgDiv.innerHTML = `<img src="${BOT_AVATAR_URL}" class="bot-icon-msg"><span>${text}</span>`;
    } else {
        msgDiv.innerText = text;
    }

    chatBody.appendChild(msgDiv);
    
    // O requisito diz: "Não adicione a função de rolar para a ultima mensagem"
    // Portanto, removemos o scrollTo.
}

function processState(stateKey) {
    const state = flow[stateKey];
    if (!state) return;

    // Adiciona mensagem do bot
    // Pequeno delay para naturalidade
    setTimeout(() => {
        appendMessage(state.msg, true);
        
        // Configura opções
        setupOptions(state.options);
    }, 500);
}

function setupOptions(options) {
    optionsMenu.innerHTML = '';
    
    if (!options || options.length === 0) {
        inputPlaceholder.innerText = "Fim do atendimento.";
        return;
    }

    inputPlaceholder.innerText = "Escolha uma opção...";

    options.forEach(opt => {
        const div = document.createElement('div');
        div.classList.add('chat-option-item');
        div.innerText = opt.label;
        div.onclick = () => handleOptionClick(opt);
        optionsMenu.appendChild(div);
    });
}

function handleOptionClick(option) {
    // 1. Mostra a escolha do usuário
    appendMessage(option.label, false);
    
    // 2. Fecha menu
    closeOptions();
    inputPlaceholder.innerText = ""; // Limpa placeholder enquanto processa

    // 3. Ação: Link ou Próximo Estado
    if (option.action) {
        // Se for um link de redirecionamento direto (Contrato)
        if (option.action === 'redirect_contract') {
             setTimeout(() => {
                appendMessage("Redirecionando...", true);
                window.location.href = LINKS[option.action];
             }, 800);
             return;
        }

        // Se for mensagem de suporte com link (WhatsApp)
        if (LINKS[option.action]) {
            setTimeout(() => {
                const link = LINKS[option.action];
                appendMessage(`Clique abaixo para falar com o suporte:<br><a href="${link}" target="_blank" class="chat-link">CONTATAR SUPORTE NO WHATSAPP</a>`, true);
                // Encerra opções
                setupOptions([]);
            }, 800);
        }
    } else if (option.next) {
        processState(option.next);
    }
}
