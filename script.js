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
        if(type === 'Placas') handlePlacasSolares();
        if(type === 'Solar') handleAluguelTelhado();
        if(type === 'Green') handleDescontoFatura();
        if(type === 'Telecom') handleTelecom();
        if(type === 'Trabalhe') handleTrabalheConosco();
    }, 600);
}

// --- CHATBOT ---

// URLs
const WA_BASE = "https://wa.me/5584920039738";
const LINK_CADASTRO_DESCONTO = 'https://igreenconection-off.github.io/IGREENCONECTION/';
const WA_DUVIDAS_CADASTRO = `${WA_BASE}?text=Ol%C3%A1!%20J%C3%A1%20fiz%20o%20cadastro%20do%20desconto%20na%20fatura%20e%20desejo%20tirar%20d%C3%BAvidas.`;
const WA_AJUDA_CADASTRO = `${WA_BASE}?text=Ol%C3%A1!%20Desejo%20me%20cadastrar%20para%20obter%20o%20desconto%20na%20fatura%20de%20energia.%20Tentei%20s%C3%B3%20e%20n%C3%A3o%20consegui.`;
const WA_NOVO_CHIP = `${WA_BASE}?text=Ol%C3%A1!%20Desejo%20contratar%20um%20novo%20chip%20iGreen%20Telecom,%20pode%20me%20ajudar?`;
const WA_PORTABILIDADE = `${WA_BASE}?text=Ol%C3%A1!%20Desejo%20solicitar%20a%20portabilidade%20do%20meu%20n%C3%BAmero%20para%20a%20iGreen%20Telecom.%20Pode%20me%20ajudar?`;
const WA_SUPORTE_TELECOM = `https://wa.me/558001830080?text=Ol%C3%A1!%20J%C3%A1%20sou%20cliente%20iGreen%20Telecom%20e%20desejo%20suporte.`;
const LINK_BOT_PLACAS_SOLARES = 'https://igreenconection-off.github.io/conex-oplacasesolar/';
const WA_TRABALHE_CONOSCO = `${WA_BASE}?text=Ol%C3%A1!%20Desejo%20me%20tornar%20um%20franquiado%20e%20trabalhar%20com%20a%20iGreen%20Energy.`;
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScr9672uki_uqqJlm5DefPYFzpxGV-JVxqLmh4S_S6IP2N6Bg/viewform?usp=dialog';

const MENU_PRINCIPAL_BTN = { text: 'Voltar ao Início', action: startChat };

function toggleChat() {
    const container = document.getElementById('chatbot-container');
    const messagesDiv = document.getElementById('chat-messages');
    
    container.classList.toggle('chatbot-closed');
    
    // Verificação mais robusta: se não tem filhos (mensagens), inicia o chat
    if (!container.classList.contains('chatbot-closed')) {
        if (messagesDiv.children.length === 0) {
            startChat();
        }
    }
}

function restartChat() {
    startChat();
}

// Adicionar mensagem do BOT
function addBotMessage(text, delay = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            const chatMessages = document.getElementById('chat-messages');
            const div = document.createElement('div');
            div.className = 'message bot-message';
            div.innerHTML = `<img src="https://c.topshort.org/aifacefy/ai_face_generator/template/1.webp" class="bot-avatar-small"> ${text}`;
            chatMessages.appendChild(div);
            // Scroll removed as requested
            resolve();
        }, delay);
    });
}

// Adicionar mensagem do USUÁRIO
function addUserMessage(text) {
    const chatMessages = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = 'message user-message';
    div.innerText = text;
    chatMessages.appendChild(div);
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

// --- FLUXOS DO CHAT ---

function startChat() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = '';
    clearOptions();
    
    // Delay curto para garantir renderização
    addBotMessage("Olá, seja bem-vindo(a) à iGreen Energy. Sobre o que vamos conversar hoje?", 300).then(() => {
        addOptions([
            { text: 'Conexão placas (Compra)', action: handlePlacasSolares },
            { text: 'Conexão Solar (Aluguel)', action: handleAluguelTelhado },
            { text: 'Conexão green (Desconto)', action: handleDescontoFatura },
            { text: 'Conexão telecom', action: handleTelecom },
            { text: 'Trabalhe conosco', action: handleTrabalheConosco }
        ]);
    });
}

// Fluxo Desconto / Quiz
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
    addBotMessage("Entendi. Neste caso, o benefício só pode ser solicitado diretamente pelo titular da conta. Peça para o titular entrar em contato!", 0).then(() => addOptions([MENU_PRINCIPAL_BTN]));
}
function handleEnd_ValorBaixo() {
    addUserMessage('Não');
    clearOptions();
    addBotMessage("Neste momento, o benefício é válido apenas para contas acima de R$150 mensais. Se sua conta aumentar futuramente, nos procure!", 0).then(() => addOptions([MENU_PRINCIPAL_BTN]));
}
function handleEnd_BaixaRenda() {
    addUserMessage('Sim');
    clearOptions();
    addBotMessage("Neste momento, nosso benefício é exclusivo para quem não está inscrito no programa Baixa Renda (NIS).", 0).then(() => addOptions([MENU_PRINCIPAL_BTN]));
}

function handleFinal_Formulario() {
    addUserMessage('Não');
    clearOptions();
    addBotMessage("Perfeito! Você atende a todos os requisitos. Preencha os campos abaixo e clique em prosseguir.").then(() => {
        const chatMessages = document.getElementById('chat-messages');
        const div = document.createElement('div');
        div.className = 'form-container';
        div.innerHTML = `<iframe src="${FORM_URL}">Carregando...</iframe>`;
        chatMessages.appendChild(div);

        addBotMessage("Já enviou os dados? Se sim, clique em prosseguir.", 1000).then(() => {
            addOptions([{ text: 'PROSSEGUIR', action: handleProceedToLink }]);
        });
    });
}

function handleProceedToLink() {
    addUserMessage('PROSSEGUIR');
    clearOptions();
    addBotMessage("Obrigado! Redirecionando para o cadastro final...").then(() => {
        setTimeout(() => window.location.href = LINK_CADASTRO_DESCONTO, 2000);
    });
}

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

function handlePlacasSolares() {
    addUserMessage('Conexão Placas');
    clearOptions();
    addBotMessage('Para comprar seu sistema solar, clique abaixo para conferir os requisitos com nosso time especializado.').then(() => {
        addOptions([
            { text: 'Conferir Requisitos', action: handleSolarRedirect },
            MENU_PRINCIPAL_BTN
        ]);
    });
}

function handleAluguelTelhado() {
    addUserMessage('Conexão Solar');
    clearOptions();
    addBotMessage('Para gerar sua própria energia sem investimento (aluguel de telhado), verifique os requisitos clicando abaixo.').then(() => {
        addOptions([
            { text: 'Conferir Requisitos', action: handleSolarRedirect },
            MENU_PRINCIPAL_BTN
        ]);
    });
}

function handleSolarRedirect() {
    addUserMessage('Conferir Requisitos');
    clearOptions();
    addBotMessage('Redirecionando...').then(() => {
        setTimeout(() => window.location.href = LINK_BOT_PLACAS_SOLARES, 1500);
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

// Isso garante que o site carregue apenas quando o HTML estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    renderHome();
});
