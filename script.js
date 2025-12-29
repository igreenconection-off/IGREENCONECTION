// --- DADOS DO CONTEÚDO (HTML STRINGS) ---

const homeContent = `
    <section class="hero-section">
        <img src="https://descarbonizesolucoes.com.br/blog/wp-content/uploads/2024/12/engenharia-instalacao-paineis-solares-campo-aberto.webp" alt="Energia Solar" class="hero-img">
        <div class="hero-text">
            ENERGIA LIMPA<br>POR UM MUNDO MAIS SUSTENTÁVEL
        </div>
    </section>
    <div class="content-wrapper">
        <h2>Por um mundo mais sustentável</h2>
        <p>A iGreen Energy é uma empresa brasileira, fundada em dezembro de 2021 em Uberlândia (MG), que atua no setor de energia renovável. O grande diferencial dela é a democratização da energia solar, permitindo que pessoas comuns e empresas tenham desconto na conta de luz sem precisar gastar um centavo com a compra ou instalação de placas solares.</p>
        <p>O objetivo central da iGreen é a democratização da energia limpa. A empresa busca remover as barreiras que impedem o cidadão comum de ser sustentável.</p>
        
        <h3>Transição Energética</h3>
        <p>Acelerar a substituição de fontes fósseis por renováveis, injetando energia limpa na rede nacional através de suas mais de 250 usinas parceiras.</p>
        
        <h3>Conscientização</h3>
        <p>Transformar o ato de "pagar o boleto de luz" em uma ação de impacto ambiental positivo.</p>
        
        <h3>Metas de Impacto</h3>
        <p>Reduzir toneladas de emissão de CO2 no planeta, com o objetivo de alcançar 1 milhão de clientes conectados até o final de 2025.</p>

        <br>
        <h2>Produtos Oferecidos</h2>
        <p>A iGreen diversificou seu portfólio para além da energia solar, criando um ecossistema de serviços:</p>
        <ul>
            <li><strong>Conexão Green (Energia por Assinatura):</strong> O produto principal. Desconto direto na conta de luz.</li>
            <li><strong>Conexão Livre:</strong> Solução voltada para grandes empresas e indústrias (alta tensão).</li>
            <li><strong>Conexão Placas:</strong> Venda e instalação física de painéis solares.</li>
            <li><strong>iGreen Telecom:</strong> Uma operadora de telefonia móvel digital.</li>
            <li><strong>iGreen Club:</strong> Um clube de benefícios e cashback.</li>
        </ul>

        <br>
        <h2>Diferenciais para o Cliente</h2>
        <p><strong>Risco e Investimento Zero:</strong> Na Conexão Green o cliente não gasta nada.</p>
        <p><strong>Liberdade Total:</strong> Sem contratos de fidelidade de longo prazo.</p>
        <p><strong>Cashback Sustentável:</strong> Indique amigos e gere créditos na conta.</p>
        <p><strong>Processo 100% Digital:</strong> Adesão feita em minutos.</p>

        <div class="ai-links">
            <p>Ainda tem dúvidas? Pergunte a qualquer IA da sua confiança!</p>
            <br>
            <a href="https://gemini.google.com/app" target="_blank">Gemini</a>
            <a href="https://chatgpt.com" target="_blank">ChatGPT</a>
            <a href="https://copilot.com" target="_blank">Copilot</a>
        </div>
    </div>
`;

const aboutContent = `
    <div class="content-wrapper">
        <h2>Quem somos?</h2>
        
        <h3>1. Missão, Visão e Valores</h3>
        <p><strong>Missão:</strong> Enriquecer vidas e impactar o mundo com sustentabilidade.</p>
        <p><strong>Visão:</strong> Ser uma referência global em sustentabilidade, meta de 1 milhão de clientes até 2025.</p>
        <p><strong>Valores:</strong> Fé, Prosperidade e Sustentabilidade.</p>

        <h3>2. Como Funciona (O Produto Principal)</h3>
        <p>O carro-chefe da empresa é a Energia Solar por Assinatura.</p>
        <ul>
            <li><strong>Geração:</strong> Parcerias com grandes "fazendas solares".</li>
            <li><strong>Injeção:</strong> Energia injetada na rede da concessionária local.</li>
            <li><strong>Crédito:</strong> Energia vira créditos abatidos na sua conta.</li>
        </ul>

        <h3>3. Principais Ações e Diferenciais</h3>
        <p>Gestão Compartilhada 100% digital, Clube de Benefícios e Cashback Sustentável.</p>

        <h3>4. Modelo de Negócio (Licenciados)</h3>
        <p>O licenciado ganha comissões recorrentes sobre o consumo de energia dos clientes.</p>

        <h3>5. Parcerias Estratégicas</h3>
        <p>Alianças com gigantes como Comerc Energia e Vibra Energia.</p>

        <div class="ai-links">
            <p>Ainda tem dúvidas? Pergunte a qualquer IA da sua confiança!</p>
            <br>
            <a href="https://gemini.google.com/app" target="_blank">Gemini</a>
            <a href="https://chatgpt.com" target="_blank">ChatGPT</a>
            <a href="https://copilot.com" target="_blank">Copilot</a>
        </div>
    </div>
`;

const productsData = [
    {
        title: "CONEXÃO PLACAS",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVz9ROZvxxP7SW82EPzwoP2V3OP5AQgmpDA&s",
        desc: "Compre seu kit completo de sistema solar fotovoltaico para sua casa! <a href='#' onclick='openChatWithOption(\"Placas\"); return false;'>Fale conosco!</a>"
    },
    {
        title: "CONEXÃO SOLAR",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lJe8N58Lf37wVVf0YmNfcD1c4WN-7HDbig&s",
        desc: "Gere energia sem investimentos! Alugamos seu telhado e a usina será sua no fim do contrato. <a href='#' onclick='openChatWithOption(\"Solar\"); return false;'>Fale conosco!</a>"
    },
    {
        title: "CONEXÃO LIVRE",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8boxAOqBvav8PMtGG0hUtKgS_stsm3oYlYA&s",
        desc: "Solução para grandes empresas (alta tensão) migrarem para o Mercado Livre. <a href='https://wa.me/5584920039738' target='_blank'>Fale conosco!</a>"
    },
    {
        title: "CONEXÃO GREEN",
        img: "https://blog.corsolar.com.br/wp-content/uploads/2022/06/o-que-e-energia-solar.jpg",
        desc: "Energia por assinatura com desconto de até 15% sem obras. <a href='#' onclick='openChatWithOption(\"Green\"); return false;'>Fale conosco!</a>"
    },
    {
        title: "CONEXÃO TELECOM",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFNAlVKJWDNtfErOMrSpZKu8nEYoPUYKKOw&s",
        desc: "Operadora digital com internet que acumula e WhatsApp ilimitado. <a href='#' onclick='openChatWithOption(\"Telecom\"); return false;'>Fale conosco!</a>"
    },
    {
        title: "TRABALHE CONOSCO",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVchOpxDF6JYLgLdMByr1tBnqN4dDeqZN5Q&s",
        desc: "Seja um licenciado iGreen e gere renda passiva. <a href='#' onclick='openChatWithOption(\"Trabalhe\"); return false;'>Fale conosco!</a>"
    }
];

const contactData = [
    { name: "Instagram", img: "https://p2.trrsf.com/image/fget/cf/500/0/images.terra.com/2025/06/20/1675662044-logomarca-do-instagram.png", link: "https://instagram.com/igreenconection" },
    { name: "Tiktok", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KGWusbkg_VTakXR1MIIJlHzj3lwC4avJDg&s", link: "https://tiktok.com/@igreen.conection?_r=1&_t=ZS-92dQ9cUoxHd" },
    { name: "Kwai", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOt4ALubwTRk7pFR3okML4QHlVCOCcn8CdGw&s", link: "https://kwai-video.com/u/@igreenconection/DusCc03g" },
    { name: "Facebook", img: "https://mundodrix.com.br/site/wp-content/uploads/2021/10/facebook.jpg", link: "https://facebook.com/share/1GzdF41XRm/" },
    { name: "WhatsApp", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbU8Wu5nGR_FNf86byCyjsC6no2hcA_LmZg&s", link: "https://wa.me/5584920039738" }
];

// --- FUNÇÕES DE NAVEGAÇÃO ---

function renderHome() {
    const appContent = document.getElementById('app-content');
    if (appContent) {
        appContent.innerHTML = homeContent;
        closeMobileMenu();
    }
}

function renderAbout() {
    const appContent = document.getElementById('app-content');
    appContent.innerHTML = aboutContent;
    closeMobileMenu();
}

function renderProducts() {
    const appContent = document.getElementById('app-content');
    let html = '<h2>Nossos Produtos</h2><div class="products-grid">';
    productsData.forEach((prod, index) => {
        html += `
            <div class="card" onclick="openProductModal(${index})">
                <img src="${prod.img}" alt="${prod.title}">
                <div class="card-title">${prod.title}</div>
            </div>
        `;
    });
    html += '</div>';
    appContent.innerHTML = html;
    closeMobileMenu();
}

function renderContact() {
    const appContent = document.getElementById('app-content');
    let html = '<h2>Contate-nos</h2><div class="contact-list">';
    contactData.forEach(contact => {
        html += `
            <a href="${contact.link}" target="_blank" class="contact-band">
                <img src="${contact.img}" alt="${contact.name}">
            </a>
        `;
    });
    html += '</div>';
    appContent.innerHTML = html;
    closeMobileMenu();
}

function openBlog() {
    window.location.href = "https://igreenenergy.com.br/blog"; 
}

function toggleMobileMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function closeMobileMenu() {
    const menu = document.querySelector('.menu');
    if (menu) menu.classList.remove('active');
}

// --- MODAIS ---

function openProductModal(index) {
    const prod = productsData[index];
    const modal = document.getElementById('product-modal');
    const bodyText = document.getElementById('modal-body-text');
    
    bodyText.innerHTML = `<h3>${prod.title}</h3><p>${prod.desc}</p>`;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

function openChatWithOption(type) {
    closeModal();
    const chatContainer = document.getElementById('chatbot-container');
    
    // Se estiver fechado, abre
    if (chatContainer.classList.contains('chatbot-closed')) {
        toggleChat();
    }

    // Delay para garantir que o chat abriu e carregou
    setTimeout(() => {
        if(type === 'Placas') handleSetorSolar();
        if(type === 'Solar') handleSetorSolar();
        if(type === 'Green') handleDescontoFatura();
        if(type === 'Telecom') handleTelecom();
        if(type === 'Trabalhe') handleTrabalheConosco();
    }, 600);
}

// --- CHATBOT CONSTANTES ---

const WA_BASE = "https://wa.me/5584920039738";

// Links de Redirecionamento e Suporte
const LINK_CADASTRO_DESCONTO = 'https://digital.igreenenergy.com.br/?id=91507&sendcontract=true';
const WA_NOVO_CHIP = `${WA_BASE}?text=Ol%C3%A1!%20Desejo%20contratar%20um%20novo%20chip%20iGreen%20Telecom,%20pode%20me%20ajudar?`;
const WA_PORTABILIDADE = `${WA_BASE}?text=Ol%C3%A1!%20Desejo%20solicitar%20a%20portabilidade%20do%20meu%20n%C3%BAmero%20para%20a%20iGreen%20Telecom.%20Pode%20me%20ajudar?`;
const WA_SUPORTE_TELECOM = `https://wa.me/558001830080?text=Ol%C3%A1!%20J%C3%A1%20sou%20cliente%20iGreen%20Telecom%20e%20desejo%20suporte.`;
const WA_TRABALHE_CONOSCO = `${WA_BASE}?text=Ol%C3%A1!%20Desejo%20me%20tornar%20um%20franquiado%20e%20trabalhar%20com%20a%20iGreen%20Energy.`;

// Novos Links Suporte Solar/Placas
const WA_SUPORTE_PLACAS = `${WA_BASE}?text=Ol%C3%A1!%20J%C3%A1%20comprei%20as%20placas%20e%20preciso%20de%20suporte.`;
const WA_SUPORTE_ALUGUEL = `${WA_BASE}?text=Ol%C3%A1!%20J%C3%A1%20aluguei%20meu%20telhado%20e%20preciso%20de%20suporte.`;

// Formulários Google
const FORM_CONEXAO_GREEN = 'https://docs.google.com/forms/d/e/1FAIpQLScr9672uki_uqqJlm5DefPYFzpxGV-JVxqLmh4S_S6IP2N6Bg/viewform?usp=dialog';
const FORM_COMPRA_PLACAS = 'https://docs.google.com/forms/d/e/1FAIpQLSfuDWoYH004Av4L0Lp0FByLwidwbooL08QcYOpeKyZZK40lBQ/viewform?usp=dialog';
const FORM_ALUGUEL_TELHADO = 'https://docs.google.com/forms/d/e/1FAIpQLSeMbhNi0g7YWbJAGp9M5OqXj5JMcNhk4ukiDgHZcplra0aAbA/viewform?usp=dialog';


const MENU_PRINCIPAL_BTN = { text: 'Voltar ao Início', action: startChat };

// --- FUNÇÕES BÁSICAS DO CHAT ---

function toggleChat() {
    const container = document.getElementById('chatbot-container');
    const messagesDiv = document.getElementById('chat-messages');
    
    container.classList.toggle('chatbot-closed');
    
    if (!container.classList.contains('chatbot-closed')) {
        if (messagesDiv.children.length === 0) {
            startChat();
        }
    }
}

function restartChat() {
    startChat();
}
function closeChat(event) {
    if (event) event.stopPropagation(); // Impede conflitos de clique
    const container = document.getElementById('chatbot-container');
    container.classList.add('chatbot-closed');
}

function addBotMessage(text, delay = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            const chatMessages = document.getElementById('chat-messages');
            const div = document.createElement('div');
            div.className = 'message bot-message';
            div.innerHTML = `<img src="https://c.topshort.org/aifacefy/ai_face_generator/template/1.webp" class="bot-avatar-small"> ${text}`;
            chatMessages.appendChild(div);
            // Auto scroll suave
            chatMessages.scrollTop = chatMessages.scrollHeight;
            resolve();
        }, delay);
    });
}

function addUserMessage(text) {
    const chatMessages = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = 'message user-message';
    div.innerText = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function clearOptions() {
    const optionsContainer = document.getElementById('options-container');
    const inputPlaceholder = document.getElementById('input-placeholder');
    
    optionsContainer.innerHTML = '';
    optionsContainer.style.display = 'none';
    if(inputPlaceholder) inputPlaceholder.innerText = "Escolha uma opção...";
}

function addOptions(options) {
    const optionsContainer = document.getElementById('options-container');
    clearOptions();
    
    options.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.innerText = opt.text;
        div.onclick = () => {
            toggleOptions(); 
            opt.action();
        };
        optionsContainer.appendChild(div);
    });
}

function toggleOptions() {
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer.innerHTML === '') return;
    
    const isVisible = optionsContainer.style.display === 'block';
    optionsContainer.style.display = isVisible ? 'none' : 'block';
}

// Função auxiliar para exibir formulários (iframe)
function addForm(url) {
    const chatMessages = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = 'form-container';
    div.innerHTML = `<iframe src="${url}">Carregando...</iframe>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função auxiliar para mensagem final
function showEndMessage(msg) {
    addBotMessage(msg).then(() => {
        addOptions([MENU_PRINCIPAL_BTN]);
    });
}

// --- FLUXOS DO CHAT ---

function startChat() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = '';
    clearOptions();
    
    addBotMessage("Olá, seja bem-vindo(a) à iGreen Energy. Sobre o que vamos conversar hoje?", 300).then(() => {
        addOptions([
            { text: 'Conexão placas (Compra)', action: handleSetorSolar },
            { text: 'Conexão Solar (Aluguel)', action: handleSetorSolar },
            { text: 'Conexão green (Desconto)', action: handleDescontoFatura },
            { text: 'Conexão telecom', action: handleTelecom },
            { text: 'Trabalhe conosco', action: handleTrabalheConosco }
        ]);
    });
}

// ==========================================
//   FLUXO 1: CONEXÃO GREEN (DESCONTO)
// ==========================================

function handleDescontoFatura() {
    addUserMessage('Conexão Green (Desconto)');
    clearOptions();
    addBotMessage("Antes de liberar seu desconto exclusivo na fatura de energia, preciso confirmar alguns requisitos da lei 14300. Pode ser?", 500).then(() => {
        addOptions([{ text: 'Pode ser', action: handleQ1_Titular }]);
    });
}

function handleQ1_Titular() {
    addUserMessage('Pode ser');
    clearOptions();
    addBotMessage("Para prosseguir, você precisa ser o titular da conta de energia. Você é o titular?", 500).then(() => {
        addOptions([
            { text: 'Sim', action: handleQ2_Valor },
            { text: 'Não', action: handleEnd_NaoTitular }
        ]);
    });
}

function handleQ2_Valor() {
    addUserMessage('Sim');
    clearOptions();
    addBotMessage("Ótimo! Agora me diga: O valor da sua conta de energia é acima de R$150 por mês?", 500).then(() => {
        addOptions([
            { text: 'Sim', action: handleQ3_BaixaRenda },
            { text: 'Não', action: handleEnd_ValorBaixo }
        ]);
    });
}

function handleQ3_BaixaRenda() {
    addUserMessage('Sim');
    clearOptions();
    addBotMessage("Só mais uma pergunta: O seu CPF está cadastrado no programa Baixa Renda/NIS junto à concessionária de energia?", 500).then(() => {
        addOptions([
            { text: 'Sim', action: handleEnd_BaixaRenda },
            { text: 'Não', action: handleFinal_Formulario }
        ]);
    });
}

function handleEnd_NaoTitular() {
    addUserMessage('Não');
    clearOptions();
    showEndMessage("Entendi. Neste caso, o benefício só pode ser solicitado diretamente pelo titular da conta. Peça para o titular entrar em contato!");
}
function handleEnd_ValorBaixo() {
    addUserMessage('Não');
    clearOptions();
    showEndMessage("Neste momento, o benefício é válido apenas para contas acima de R$150 mensais. Se sua conta aumentar futuramente, nos procure!");
}
function handleEnd_BaixaRenda() {
    addUserMessage('Sim');
    clearOptions();
    showEndMessage("Neste momento, nosso benefício é exclusivo para quem não está inscrito no programa Baixa Renda (NIS).");
}

function handleFinal_Formulario() {
    addUserMessage('Não');
    clearOptions();
    addBotMessage("Perfeito! Você atende a todos os requisitos. Preencha os campos abaixo e clique em prosseguir.").then(() => {
        addForm(FORM_CONEXAO_GREEN);
        addBotMessage("Já enviou os dados? Se sim, clique em prosseguir.", 1000).then(() => {
            addOptions([{ text: 'PROSSEGUIR', action: handleProceedToLink }]);
        });
    });
}

function handleProceedToLink() {
    addUserMessage('PROSSEGUIR');
    clearOptions();
    addBotMessage("Obrigado! Redirecionando para o cadastro final...").then(() => {
        // Link Atualizado conforme solicitado
        setTimeout(() => window.location.href = LINK_CADASTRO_DESCONTO, 2000);
    });
}

// ==========================================
//   FLUXO 2: SETOR SOLAR (PLACAS E ALUGUEL)
// ==========================================

function handleSetorSolar() {
    // Pode vir tanto de "Placas" quanto de "Solar"
    clearOptions();
    addBotMessage("Olá, bem-vindo à iGreen Energy. Este é o setor exclusivo para conexão placas e conexão solar. Sobre o que você deseja falar hoje?", 200).then(() => {
        addOptions([
            { text: 'Compra de placas solares', action: handleCompraStart },
            { text: 'Já comprei as placas solares. Desejo suporte', action: handleCompraSuporte },
            { text: 'Desejo alugar meu telhado', action: handleAluguelStart },
            { text: 'Já aluguei meu telhado. Preciso de suporte.', action: handleAluguelSuporte }
        ]);
    });
}

// --- Ramo 1: Compra de Placas ---
function handleCompraStart() {
    addUserMessage('Compra de placas solares');
    clearOptions();
    addBotMessage('Que legal! Para comprar placas solares é necessário cumprir os requisitos de contratação. Vou te fazer algumas perguntas para confirmar os requisitos. Você concorda em contratar uma geração a partir de 250KW, mesmo que seu consumo seja inferior?').then(() => {
        addOptions([
            { text: 'Sim', action: handleCompraPagamento },
            { text: 'Não', action: handleCompraNao }
        ]);
    });
}

function handleCompraNao() {
    addUserMessage('Não');
    clearOptions();
    showEndMessage('Desculpe, no momento não podemos atendê-lo.');
}

function handleCompraPagamento() {
    addUserMessage('Sim');
    clearOptions();
    addBotMessage('Que maravilha! E qual método de pagamento deseja utilizar?').then(() => {
        addOptions([
            { text: 'A vista', action: () => handleCompraShowForm('A vista') },
            { text: 'Financiamento direto com bancos parceiros', action: () => handleCompraShowForm('Financiamento direto com bancos parceiros') },
            { text: 'No cartão de crédito', action: () => handleCompraShowForm('No cartão de crédito') },
            { text: 'Financiamento com meu banco', action: () => handleCompraShowForm('Financiamento com meu banco') }
        ]);
    });
}

function handleCompraShowForm(paymentMethod) {
    addUserMessage(paymentMethod);
    clearOptions();
    let message = '';

    if (paymentMethod === 'A vista') {
        message = 'Excelente opção! Com pagamento a vista é tudo mais fácil e rápido, reduz muitas etapas no processo.';
    } else if (paymentMethod === 'No cartão de crédito') {
        message = 'Legal! O pagamento com cartão de crédito é feito em até 21x com juros.';
    } else { // Financiamentos
        message = 'Muito bem. Esta opção de pagamento requer alguns procedimentos para garantir o financiamento.';
    }
    
    message += ' Para prosseguir, preencha o formulário abaixo, e um de nossos atendentes entrará em contato com você por whatsapp para fazer um orçamento.';

    addBotMessage(message).then(() => {
        addForm(FORM_COMPRA_PLACAS);
        addOptions([
            { text: 'Reiniciar Atendimento', action: startChat }
        ]);
    });
}

// --- Ramo 2: Suporte Placas ---
function handleCompraSuporte() {
    addUserMessage('Já comprei as placas solares. Desejo suporte');
    clearOptions();
    addBotMessage('Que bom! Você já é cliente. Para obter suporte, fale conosco por whatsapp.').then(() => {
        addOptions([
            { text: 'Contatar suporte no whatsapp', action: () => window.location.href = WA_SUPORTE_PLACAS }
        ]);
    });
}

// --- Ramo 3: Aluguel de Telhado ---
function handleAluguelStart() {
    addUserMessage('Desejo alugar meu telhado');
    clearOptions();
    addBotMessage('Que legal! Já sabe como funciona?').then(() => {
        addOptions([
            { text: 'Sim', action: handleAluguelSabeSim },
            { text: 'Não', action: handleAluguelSabeNao }
        ]);
    });
}

function handleAluguelSabeNao() {
    addUserMessage('Não');
    clearOptions();
    addBotMessage(
        'Vou te explicar brevemente. Nós temos a conexão solar como uma modalidade de aquisição do sistema solar fotovoltaico alternativa, onde nós instalamos o sistema solar completo na sua residência, e durante um período determinado (normalmente 6 anos) esse sistema gera energia para nós.' +
        '<br><br>Enquanto isso, você continuará pagando sua energia normalmente, mas com um desconto de até 15%, e sem pagar bandeiras tarifárias. Ao final do período estipulado, o sistema solar será 100% seu.' +
        '<br><br>É importante ressaltar que neste procedimento, nós não vamos te pagar um valor mensal pelo aluguel do seu telhado, pois o pagamento pelo tempo de aluguel será justamente o sistema solar completo.' +
        '<br><br>Deseja prosseguir e verificar os requisitos de contratação?'
    ).then(() => {
        addOptions([
            { text: 'Sim', action: handleAluguelCheckConsumo },
            { text: 'Não', action: handleAluguelEndSemProblemas }
        ]);
    });
}

function handleAluguelSabeSim() {
    addUserMessage('Sim');
    clearOptions();
    // Pula direto para a verificação de requisitos
    handleAluguelCheckConsumo();
}

function handleAluguelEndSemProblemas() {
    addUserMessage('Não');
    clearOptions();
    showEndMessage('Sem problemas! Estamos à sua disposição.');
}

function handleAluguelCheckConsumo() {
    // Lógica para não duplicar mensagem 'Sim' se o user acabou de clicar nela
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages.lastChild && chatMessages.lastChild.textContent !== 'Sim') {
        // Se a última mensagem não foi 'Sim' (veio do fluxo 'SabeNao'), simular o 'Sim'
        // Mas se veio de 'SabeSim', o user já clicou.
        // Simplificando: o bot apenas pergunta.
    }
    
    clearOptions();
    addBotMessage('Excelente! Para saber se você tem direito à contratação, vou te fazer algumas perguntinhas. Primeiramente, o local possui um consumo de no mínimo 300 reais por mês em fatura?').then(() => {
        addOptions([
            { text: 'Sim', action: handleAluguelCheckTitular },
            { text: 'Não', action: handleAluguelEndNaoCumpre }
        ]);
    });
}

function handleAluguelEndNaoCumpre() {
    addUserMessage('Não');
    clearOptions();
    showEndMessage('Sinto muito, você não cumpre os requisitos.');
}

function handleAluguelCheckTitular() {
    addUserMessage('Sim');
    clearOptions();
    addBotMessage('Excelente! Você é o titular da fatura?').then(() => {
        addOptions([
            { text: 'Sim', action: handleAluguelShowForm },
            { text: 'Não', action: handleAluguelEndNaoTitular }
        ]);
    });
}

function handleAluguelEndNaoTitular() {
    addUserMessage('Não');
    clearOptions();
    showEndMessage('Sinto muito. Melhor pedir que o titular entre em contato conosco.');
}

function handleAluguelShowForm() {
    addUserMessage('Sim');
    clearOptions();
    addBotMessage('Maravilha. Preencha o formulário a Seguir para que nossa equipe técnica possa entrar em contato com você para Solicitar as informações necessárias para gerar uma proposta.').then(() => {
        addForm(FORM_ALUGUEL_TELHADO);
        addOptions([
            { text: 'Reiniciar Atendimento', action: startChat }
        ]);
    });
}

// --- Ramo 4: Suporte Aluguel ---
function handleAluguelSuporte() {
    addUserMessage('Já aluguei meu telhado. Preciso de suporte.');
    clearOptions();
    addBotMessage('Muito bem, vamos lá! Para ter acesso ao suporte especializado, clique em contatar suporte no whatsapp.').then(() => {
        addOptions([
            { text: 'Contatar suporte no whatsapp', action: () => window.location.href = WA_SUPORTE_ALUGUEL }
        ]);
    });
}

// ==========================================
//   OUTROS FLUXOS (TELECOM / TRABALHE)
// ==========================================

function handleTelecom() {
    addUserMessage('Conexão Telecom');
    clearOptions();
    addBotMessage('iGreen Telecom! Sobre o que você deseja falar?').then(() => {
        addOptions([
            { text: 'Contratar novo chip', action: () => window.location.href = WA_NOVO_CHIP },
            { text: 'Fazer portabilidade', action: () => window.location.href = WA_PORTABILIDADE },
            { text: 'Já sou cliente (Suporte)', action: () => window.location.href = WA_SUPORTE_TELECOM },
            MENU_PRINCIPAL_BTN
        ]);
    });
}

function handleTrabalheConosco() {
    addUserMessage('Trabalhe Conosco');
    clearOptions();
    addBotMessage('Que legal! Para saber sobre nosso modelo de franquia e renda passiva, contate nossa equipe no WhatsApp.').then(() => {
        addOptions([
            { text: 'Contatar no WhatsApp', action: () => window.location.href = WA_TRABALHE_CONOSCO },
            MENU_PRINCIPAL_BTN
        ]);
    });
}

// --- INICIALIZAÇÃO DO SITE ---

document.addEventListener('DOMContentLoaded', () => {
    renderHome();
});
