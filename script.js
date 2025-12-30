/* --- CONSTANTES E DADOS --- */

// HTML das Páginas
const contentInicio = `
    <div class="hero-section">
        <img src="https://descarbonizesolucoes.com.br/blog/wp-content/uploads/2024/12/engenharia-instalacao-paineis-solares-campo-aberto.webp" alt="Energia Solar" class="hero-image">
        <div class="hero-text">ENERGIA LIMPA<br>POR UM MUNDO MAIS SUSTENTÁVEL</div>
    </div>
    <div class="content-section">
        <h1>Por um mundo mais sustentável</h1>
        <p>A iGreen Energy é uma empresa brasileira, fundada em dezembro de 2021 em Uberlândia (MG), que atua no setor de energia renovável. O grande diferencial dela é a democratização da energia solar, permitindo que pessoas comuns e empresas tenham desconto na conta de luz sem precisar gastar um centavo com a compra ou instalação de placas solares.</p>
        <p>O objetivo central da iGreen é a democratização da energia limpa. A empresa busca remover as barreiras que impedem o cidadão comum de ser sustentável (como o alto custo de painéis ou a falta de telhado próprio).</p>
        <ul>
            <li><strong>Transição Energética:</strong> Acelerar a substituição de fontes fósseis por renováveis, injetando energia limpa na rede nacional através de suas mais de 250 usinas parceiras.</li>
            <li><strong>Conscientização:</strong> Transformar o ato de "pagar o boleto de luz" em uma ação de impacto ambiental positivo.</li>
            <li><strong>Metas de Impacto:</strong> Reduzir toneladas de emissão de CO2 no planeta, com o objetivo de alcançar 1 milhão de clientes conectados até o final de 2025.</li>
        </ul>

        <h1>Produtos Oferecidos</h1>
        <p>A iGreen diversificou seu portfólio para além da energia solar, criando um ecossistema de serviços:</p>
        <ul>
            <li><strong>Conexão Green (Energia por Assinatura):</strong> O produto principal. Desconto direto na conta de luz para residências e empresas (baixa tensão) sem necessidade de instalação.</li>
            <li><strong>Conexão Livre:</strong> Solução voltada para grandes empresas e indústrias (alta tensão) que desejam migrar para o Mercado Livre de Energia, com descontos que podem chegar a 30%.</li>
            <li><strong>Conexão Placas:</strong> Para quem prefere ter seu próprio sistema, a iGreen também comercializa a venda e instalação física de painéis solares.</li>
            <li><strong>iGreen Telecom:</strong> Uma operadora de telefonia móvel digital que oferece planos de celular com benefícios como internet que acumula e WhatsApp ilimitado.</li>
            <li><strong>iGreen Club:</strong> Um clube de benefícios e cashback com mais de 30 mil parceiros (varejo, lazer, saúde) exclusivo para clientes.</li>
        </ul>

        <h1>Diferenciais para o Cliente</h1>
        <p>Por que alguém escolheria a iGreen em vez de continuar com a distribuidora comum ou instalar suas próprias placas?</p>
        <ul>
            <li><strong>Risco e Investimento Zero:</strong> Diferente da instalação física, na Conexão Green o cliente não gasta nada. Não há obras, furos no telhado ou manutenção.</li>
            <li><strong>Liberdade Total (Sem Fidelidade):</strong> Um dos maiores atrativos é a ausência de contratos de fidelidade de longo prazo. O cliente pode cancelar o serviço a qualquer momento sem multas (verificando apenas o prazo de aviso prévio).</li>
            <li><strong>Cashback Sustentável:</strong> A iGreen permite que o cliente indique amigos. Essas indicações geram créditos que podem diminuir ainda mais a conta de luz, chegando, em alguns casos, a zerar o valor da fatura.</li>
            <li><strong>Processo 100% Digital:</strong> A adesão é feita em minutos via WhatsApp ou aplicativo, bastando enviar uma foto da conta de luz atual.</li>
            <li><strong>Benefícios Adicionais:</strong> Ao se tornar cliente de energia, você ganha acesso automático ao Clube iGreen, gerando economia também em farmácias, supermercados e lojas online.</li>
        </ul>

        <div class="ia-links">
            <p>Ainda tem dúvidas? Pergunte a qualquer IA da sua confiança!</p>
            <br>
            <a href="https://gemini.google.com/app" target="_blank">Gemini</a> |
            <a href="https://chatgpt.com" target="_blank">ChatGPT</a> |
            <a href="https://copilot.com" target="_blank">Copilot</a>
        </div>
    </div>
`;

const contentSobre = `
    <div class="content-section">
        <h1>Quem somos?</h1>
        
        <h2>1. Missão, Visão e Valores</h2>
        <p><strong>Missão:</strong> Enriquecer vidas e impactar o mundo com sustentabilidade, transformando a vida das pessoas através de uma energia limpa, barata e prática.</p>
        <p><strong>Visão:</strong> Ser uma referência global em sustentabilidade, com a meta ousada de alcançar 1 milhão de clientes satisfeitos até 2025.</p>
        <p><strong>Valores:</strong> Fé, Prosperidade e Sustentabilidade.</p>

        <h2>2. Como Funciona (O Produto Principal)</h2>
        <p>O carro-chefe da empresa é a Energia Solar por Assinatura (Energia Compartilhada).</p>
        <ul>
            <li><strong>Geração:</strong> A iGreen possui ou faz parcerias com grandes "fazendas solares" que geram energia limpa.</li>
            <li><strong>Injeção:</strong> Essa energia é injetada na rede da concessionária local (como Cemig, Enel ou CPFL).</li>
            <li><strong>Crédito:</strong> A energia gerada vira créditos que são abatidos diretamente na sua conta de luz.</li>
            <li><strong>Benefício:</strong> O cliente recebe um desconto (que geralmente varia de 10% a 15%) no valor da energia, sem precisar de obras, instalação ou fidelidade contratual.</li>
        </ul>

        <h2>3. Principais Ações e Diferenciais</h2>
        <p>A iGreen opera em um modelo de Gestão Compartilhada, focado no mundo digital:</p>
        <ul>
            <li><strong>Acesso 100% Digital:</strong> Todo o processo de adesão é feito online, apenas com a foto da conta de luz.</li>
            <li><strong>iGreen Club:</strong> Um clube de benefícios que oferece descontos em mais de 30 mil estabelecimentos (farmácias, cinemas, lojas de varejo) para quem é cliente.</li>
            <li><strong>Cashback Sustentável:</strong> Um programa onde o cliente pode indicar amigos e acumular créditos para reduzir ainda mais (ou até zerar) sua própria conta de energia.</li>
        </ul>

        <h2>4. Modelo de Negócio (Licenciados)</h2>
        <p>Além de vender energia, a iGreen funciona através de um modelo de licenciamento. Pessoas podem se tornar "Licenciados iGreen" para comercializar as soluções da empresa.</p>
        <ul>
            <li>O licenciado ganha comissões recorrentes sobre o consumo de energia dos clientes que ele conecta à rede.</li>
            <li>É uma forma de gerar renda passiva ajudando outras pessoas a economizarem.</li>
        </ul>

        <h2>5. Parcerias Estratégicas</h2>
        <p>Para dar robustez à operação, a iGreen possui alianças com gigantes do setor elétrico, como a Comerc Energia e a Vibra Energia, o que garante a entrega e a infraestrutura necessária para as usinas.</p>

        <div class="ia-links">
            <p>Ainda tem dúvidas? Pergunte a qualquer IA da sua confiança!</p>
            <br>
            <a href="https://gemini.google.com/app" target="_blank">Gemini</a> |
            <a href="https://chatgpt.com" target="_blank">ChatGPT</a> |
            <a href="https://copilot.com" target="_blank">Copilot</a>
        </div>
    </div>
`;

// Dados dos Produtos
const productsData = [
    { title: "CONEXÃO PLACAS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVz9ROZvxxP7SW82EPzwoP2V3OP5AQgmpDA&s", id: "placas" },
    { title: "CONEXÃO SOLAR", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lJe8N58Lf37wVVf0YmNfcD1c4WN-7HDbig&s", id: "solar" },
    { title: "CONEXÃO LIVRE", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8boxAOqBvav8PMtGG0hUtKgS_stsm3oYlYA&s", id: "livre" },
    { title: "CONEXÃO GREEN", img: "https://blog.corsolar.com.br/wp-content/uploads/2022/06/o-que-e-energia-solar.jpg", id: "green" },
    { title: "CONEXÃO TELECOM", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFNAlVKJWDNtfErOMrSpZKu8nEYoPUYKKOw&s", id: "telecom" },
    { title: "TRABALHE CONOSCO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVchOpxDF6JYLgLdMByr1tBnqN4dDeqZN5Q&s", id: "trabalhe" }
];

const contentContato = `
    <div class="contact-container">
        <h1 style="text-align:center; padding: 20px 0; color:#122b15;">Contate-nos</h1>
        
        <div class="contact-strip" onclick="window.open('https://instagram.com/igreenconection', '_blank')">
            <img src="https://p2.trrsf.com/image/fget/cf/500/0/images.terra.com/2025/06/20/1675662044-logomarca-do-instagram.png" alt="Instagram">
        </div>

        <div class="contact-strip" onclick="window.open('https://tiktok.com/@igreen.conection?_r=1&_t=ZS-92dQ9cUoxHd', '_blank')">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KGWusbkg_VTakXR1MIIJlHzj3lwC4avJDg&s" alt="TikTok">
        </div>

        <div class="contact-strip" onclick="window.open('https://kwai-video.com/u/@igreenconection/DusCc03g', '_blank')">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOt4ALubwTRk7pFR3okML4QHlVCOCcn8CdGw&s" alt="Kwai">
        </div>

        <div class="contact-strip" onclick="window.open('https://facebook.com/share/1GzdF41XRm/', '_blank')">
            <img src="https://mundodrix.com.br/site/wp-content/uploads/2021/10/facebook.jpg" alt="Facebook">
        </div>

        <div class="contact-strip" onclick="window.open('https://wa.me/5584920039738', '_blank')">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbU8Wu5nGR_FNf86byCyjsC6no2hcA_LmZg&s" alt="WhatsApp">
        </div>
    </div>
`;

/* --- LÓGICA DE NAVEGAÇÃO --- */

const mainContent = document.getElementById('main-content');
const mobileNav = document.getElementById('mobileNav');

function navegar(pagina) {
    mainContent.innerHTML = ''; // Limpa conteúdo

    if (pagina === 'inicio') {
        mainContent.innerHTML = contentInicio;
    } else if (pagina === 'sobre') {
        mainContent.innerHTML = contentSobre;
    } else if (pagina === 'produtos') {
        renderProdutos();
    } else if (pagina === 'contato') {
        mainContent.innerHTML = contentContato;
    }
    
    // Rola para o topo
    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    if (mobileNav.style.display === 'flex') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'flex';
    }
}

function renderProdutos() {
    let html = '<div class="products-grid">';
    productsData.forEach(prod => {
        html += `
            <div class="product-card" onclick="abrirModalProduto('${prod.id}')">
                <img src="${prod.img}" alt="${prod.title}">
                <div class="product-title">${prod.title}</div>
            </div>
        `;
    });
    html += '</div>';
    mainContent.innerHTML = html;
}

/* --- LÓGICA DO MODAL DE PRODUTOS --- */

function abrirModalProduto(id) {
    const modal = document.getElementById('product-modal');
    const body = document.getElementById('modal-body');
    let content = '';

    // Função auxiliar para abrir o chat a partir do modal
    // Note: usamos onclick="fecharModalProduto(); toggleChat();" para UX fluida
    
    switch(id) {
        case 'placas':
            content = `<p>A conexão placas é o meio pelo qual você pode comprar o seu kit completo de sistema solar fotovoltaico para sua casa e gerar sua própria energia! Deseja realizar uma simulação agora? <span class="modal-link" onclick="fecharModalProduto(); toggleChat();">Fale conosco!</span></p>`;
            break;
        case 'solar':
            content = `<p>A conexão solar é o meio pelo qual você pode adquirir seu próprio sistema solar fotovoltaico e gerar sua própria energia sem investimentos! Nós faremos a vistoria, instalação e também garantiremos que o sistema gerará energia do começo ao fim. No início alugaremos o seu telhado por um período determinado a partir de 6 anos. Durante esse tempo, seu telhado gerará energia para nós, e você continuará pagando sua energia normal, como se não tivesse usina solar em casa, porém com um bom desconto, e sem pagar bandeiras tarifárias. Ao fim do período estipulado, a mini usina solar instalada na sua casa será 100% sua! Gostou da ideia? <span class="modal-link" onclick="fecharModalProduto(); toggleChat();">Fale conosco!</span></p>`;
            break;
        case 'livre':
            content = `<p>Solução voltada para grandes empresas e indústrias (alta tensão) que desejam migrar para o Mercado Livre de Energia, com descontos que podem chegar a 30%.</p><br><a href="https://wa.me/5584920039738" target="_blank" class="modal-link">Fale conosco!</a>`;
            break;
        case 'green':
            content = `<p>A conexão green é o jeito de você economizar na sua fatura sem investir absolutamente nada! Você pode realizar o cadastro conosco e garantir a sua portabilidade, e assim, a energia consumida na sua casa será abatida pelos nossos créditos de energia gerados pelas nossas fazendas de energia solar. Desse modo, você poderá pagar sua energia com um desconto de até 15%, livre das bandeiras tarifárias e ainda participa de um programa de indicações, onde cada amigo indicado que for aprovado pode reduzir ainda mais a sua fatura, podendo até zerar a sua conta! Ficou interessado? <span class="modal-link" onclick="fecharModalProduto(); toggleChat();">Fale conosco!</span></p>`;
            break;
        case 'telecom':
            content = `<p>Uma operadora de telefonia móvel digital que oferece planos de celular com benefícios como internet que acumula e WhatsApp ilimitado. A operadora digital em nuvem iGreen Telecom se conecta com as torres de telefonia móvel mais próximas, garantindo que você tenha sempre sinal até nos lugares mais distantes! Internet rapida, conexão de longo alcance e internet que acumula, tudo numa operadora só! Ficou interessado? <span class="modal-link" onclick="fecharModalProduto(); toggleChat();">Fale conosco!</span></p>`;
            break;
        case 'trabalhe':
            content = `<p>Além de vender energia, a iGreen funciona através de um modelo de licenciamento. Pessoas podem se tornar "Licenciados iGreen" para comercializar as soluções da empresa.</p><br><p>O licenciado ganha comissões recorrentes sobre o consumo de energia dos clientes que ele conecta à rede. É uma forma de gerar renda passiva ajudando outras pessoas a economizarem.</p><br><h3>5. Parcerias Estratégicas</h3><p>Para dar robustez à operação, a iGreen possui alianças com gigantes do setor elétrico, como a Comerc Energia e a Vibra Energia. Ficou interessado? <span class="modal-link" onclick="fecharModalProduto(); toggleChat();">Fale conosco!</span></p>`;
            break;
    }

    body.innerHTML = content;
    modal.style.display = 'flex';
}

function fecharModalProduto() {
    document.getElementById('product-modal').style.display = 'none';
}

/* --- LÓGICA DO CHATBOT --- */

const chatContainer = document.getElementById('chat-container');
const chatBody = document.getElementById('chat-body');
const selectText = document.getElementById('select-text');
const customOptions = document.getElementById('custom-options');

// Variável para armazenar o estado atual da conversa
let chatState = null;

function toggleChat() {
    if (chatContainer.classList.contains('hidden')) {
        chatContainer.classList.remove('hidden');
        if (chatBody.children.length === 0) {
            iniciarChat();
        }
    } else {
        chatContainer.classList.add('hidden');
    }
}

function reiniciarChat() {
    chatBody.innerHTML = '';
    iniciarChat();
}

function addMessage(text, type, isHtml = false) {
    const row = document.createElement('div');
    row.classList.add('message-row', type);
    
    // Se for bot, adicionar avatar
    if (type === 'bot') {
        const avatar = document.createElement('img');
        avatar.src = 'https://c.topshort.org/aifacefy/ai_face_generator/template/1.webp';
        avatar.classList.add('chat-avatar-small');
        row.appendChild(avatar);
    }

    const bubble = document.createElement('div');
    bubble.classList.add('chat-bubble', type);
    
    if (isHtml) {
        bubble.innerHTML = text;
    } else {
        bubble.textContent = text;
    }

    row.appendChild(bubble);
    chatBody.appendChild(row);

    // NOTA: Conforme pedido, NÃO fazemos scroll automático para o fundo.
}

function setOptions(options) {
    customOptions.innerHTML = '';
    if (options.length === 0) {
        selectText.textContent = "Fim da conversa.";
        selectText.style.color = "#ccc";
        // Desabilita clique
        return;
    }

    selectText.textContent = "Escolha uma opção...";
    selectText.style.color = "#888";

    options.forEach(opt => {
        const div = document.createElement('div');
        div.classList.add('custom-option');
        div.textContent = opt.label;
        div.onclick = () => {
            handleUserChoice(opt);
            toggleOpcoes(); // fecha menu
        };
        customOptions.appendChild(div);
    });
}

function toggleOpcoes() {
    customOptions.classList.toggle('open');
}

// -- FLUXO DA CONVERSA --

function iniciarChat() {
    addMessage("Olá, seja bem-vindo(a) à iGreen Energy. Sobre o que vamos conversar hoje?", 'bot');
    setOptions([
        { label: "Conexão Green", action: "green_start" },
        { label: "Conexão Telecom", action: "telecom_start" },
        { label: "Conexão Placas", action: "placas_start" },
        { label: "Conexão Solar", action: "solar_start" },
        { label: "Trabalhe Conosco", action: "trabalhe_start" }
    ]);
}

function handleUserChoice(choice) {
    // 1. Exibir mensagem do usuário
    addMessage(choice.label, 'user');

    // 2. Lógica do Bot baseada na action
    setTimeout(() => {
        processarAcao(choice.action);
    }, 500); // Pequeno delay natural
}

function processarAcao(action) {
    switch (action) {
        // --- CONEXÃO GREEN ---
        case "green_start":
            addMessage("Conexão green, entendido! O que exatamente você quer falar sobre o assunto?", 'bot');
            setOptions([
                { label: "Receber desconto agora", action: "green_desconto" },
                { label: "Já fiz o cadastro, preciso tirar dúvidas", action: "green_duvidas" },
                { label: "Não consegui fazer o cadastro sozinho(a)", action: "green_ajuda" }
            ]);
            break;
        
        case "green_desconto":
            addMessage("Antes de liberar seu desconto exclusivo na fatura de energia, preciso confirmar alguns requisitos da lei 14300. Você é o titular da fatura?", 'bot');
            setOptions([
                { label: "Sim", action: "green_titular_sim" },
                { label: "Não", action: "green_titular_nao" }
            ]);
            break;

        case "green_titular_nao":
            addMessage("Entendi. Neste caso, o benefício só pode ser solicitado diretamente pelo titular da conta. Peça para o titular entrar em contato!", 'bot');
            setOptions([]);
            break;

        case "green_titular_sim":
            addMessage("Ótimo! Agora me diga: O valor da sua conta de energia é acima de R$150 por mês?", 'bot');
            setOptions([
                { label: "Sim", action: "green_valor_sim" },
                { label: "Não", action: "green_valor_nao" }
            ]);
            break;

        case "green_valor_nao":
            addMessage("Neste momento, o benefício é válido apenas para contas acima de R$150 mensais. Se sua conta aumentar futuramente, nos procure!", 'bot');
            setOptions([]);
            break;

        case "green_valor_sim":
            addMessage("Só mais uma pergunta: O seu CPF está cadastrado no programa Baixa Renda/NIS junto à concessionária de energia?", 'bot');
            setOptions([
                { label: "Sim", action: "green_nis_sim" },
                { label: "Não", action: "green_nis_nao" }
            ]);
            break;

        case "green_nis_sim":
            addMessage("Neste momento, nosso benefício é exclusivo para quem não está inscrito no programa Baixa Renda (NIS).", 'bot');
            setOptions([]);
            break;

        case "green_nis_nao":
            addMessage("Perfeito! Você atende a todos os requisitos. Preencha os campos abaixo e clique em prosseguir.", 'bot');
            // Formulario embedded
            const formGreen = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScr9672uki_uqqJlm5DefPYFzpxGV-JVxqLmh4S_S6IP2N6Bg/viewform?embedded=true" class="iframe-container">Loading...</iframe>`;
            addMessage(formGreen, 'bot', true);
            
            setTimeout(() => {
                addMessage("Já enviou os dados? Se sim, clique em prosseguir.", 'bot');
                setOptions([
                    { label: "Enviei", action: "green_finalizar" }
                ]);
            }, 1000);
            break;
        
        case "green_finalizar":
            window.open("https://digital.igreenenergy.com.br/?id=91507&sendcontract=true", "_blank");
            addMessage("Redirecionando...", 'bot');
            setOptions([]);
            break;

        case "green_duvidas":
            addMessage(`Que legal! Nossa equipe de suporte terá prazer em te atender. <br><a href="https://wa.me/5584920039738?text=Ol%C3%A1!%20J%C3%A1%20fiz%20o%20cadastro%20do%20desconto%20na%20fatura%20e%20desejo%20tirar%20d%C3%BAvidas." target="_blank" style="color:#007bff; font-weight:bold;">Clique aqui para contatar suporte no WhatsApp</a>`, 'bot', true);
            setOptions([]);
            break;

        case "green_ajuda":
            addMessage(`Calma! Vai dar tudo certo. Nossa equipe de suporte no whatsapp está disponível para te auxiliar agora com isso. <br><a href="https://wa.me/5584920039738?text=Ol%C3%A1!%20Desejo%20me%20cadastrar%20para%20obter%20o%20desconto%20na%20fatura%20de%20energia.%20Tentei%20s%C3%B3%20e%20n%C3%A3o%20consegui." target="_blank" style="color:#007bff; font-weight:bold;">Clique aqui para contatar suporte no WhatsApp</a>`, 'bot', true);
            setOptions([]);
            break;


        // --- CONEXÃO TELECOM ---
        case "telecom_start":
            addMessage("Conexão telecom, que legal! Sobre o que exatamente você deseja falar?", 'bot');
            setOptions([
                { label: "Contratar um novo chip iGreen", action: "telecom_novo" },
                { label: "Fazer portabilidade para iGreen", action: "telecom_port" },
                { label: "Já sou cliente, preciso de suporte", action: "telecom_suporte" }
            ]);
            break;

        case "telecom_novo":
            addMessage(`Que legal! Para fazer a contratação do seu chip iGreen, entre em contato com a nossa central especializada de suporte ao consumidor. <br><a href="https://wa.me/5584920039738?text=Ol%C3%A1!%20Desejo%20contratar%20um%20novo%20chip%20iGreen%20Telecom,%20pode%20me%20ajudar?" target="_blank" style="color:#007bff; font-weight:bold;">Clique aqui para contatar suporte no WhatsApp</a>`, 'bot', true);
            setOptions([]);
            break;
        
        case "telecom_port":
            addMessage(`Que legal! Para solicitar a portabilidade do seu chip para a iGreen, entre em contato com a nossa central especializada. <br><a href="https://wa.me/5584920039738?text=Ol%C3%A1!%20Desejo%20solicitar%20a%20portabilidade%20do%20meu%20n%C3%BAmero%20para%20a%20iGreen%20Telecom.%20Pode%20me%20ajudar?" target="_blank" style="color:#007bff; font-weight:bold;">Clique aqui para contatar suporte no WhatsApp</a>`, 'bot', true);
            setOptions([]);
            break;

        case "telecom_suporte":
            addMessage(`Que legal! Temos uma central exclusiva para solução de problemas para os clientes. <br><a href="https://wa.me/558001830080?text=Ol%C3%A1!%20J%C3%A1%20sou%20cliente%20iGreen%20Telecom%20e%20desejo%20suporte." target="_blank" style="color:#007bff; font-weight:bold;">Clique aqui para contatar suporte no WhatsApp</a>`, 'bot', true);
            setOptions([]);
            break;


        // --- CONEXÃO PLACAS ---
        case "placas_start":
            addMessage("Que legal! Para comprar placas solares é necessário cumprir os requisitos de contratação. Vou te fazer algumas perguntas para confirmar os requisitos. Você concorda em contratar uma geração a partir de 250KW, mesmo que seu consumo seja inferior?", 'bot');
            setOptions([
                { label: "Sim", action: "placas_sim" },
                { label: "Não", action: "placas_nao" },
                { label: "Já comprei as placas, desejo suporte", action: "placas_suporte" }
            ]);
            break;

        case "placas_nao":
            addMessage("Desculpe, no momento não podemos atendê-lo.", 'bot');
            setOptions([]);
            break;
        
        case "placas_sim":
            addMessage("Excelente! Para prosseguir, preencha o formulário abaixo, e um de nossos atendentes entrará em contato com você por whatsapp para fazer um orçamento.", 'bot');
            const formPlacas = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfuDWoYH004Av4L0Lp0FByLwidwbooL08QcYOpeKyZZK40lBQ/viewform?embedded=true" class="iframe-container">Loading...</iframe>`;
            addMessage(formPlacas, 'bot', true);
            setOptions([]);
            break;
        
        case "placas_suporte":
            addMessage(`Que bom! Você já é cliente. Para obter suporte, fale conosco por whatsapp. <br><a href="https://api.whatsapp.com/send/?phone=5584920039738&text=Ol%C3%A1%21+J%C3%A1+comprei+as+placas+e+preciso+de+suporte.&type=phone_number&app_absent=0" target="_blank" style="color:#007bff; font-weight:bold;">Contatar suporte no whatsapp</a>`, 'bot', true);
            setOptions([]);
            break;


        // --- CONEXÃO SOLAR ---
        case "solar_start":
            addMessage("Você deseja alugar o telhado?", 'bot');
            setOptions([
                { label: "Sim", action: "solar_sim" },
                { label: "Já aluguei meu telhado, preciso de suporte", action: "solar_suporte" }
            ]);
            break;

        case "solar_suporte":
            addMessage(`Muito bem, vamos lá! Para ter acesso ao suporte especializado, clique abaixo. <br><a href="https://api.whatsapp.com/send/?phone=5584920039738&text=Ol%C3%A1%21+J%C3%A1+aluguei+meu+telhado+e+preciso+de+suporte.&type=phone_number&app_absent=0" target="_blank" style="color:#007bff; font-weight:bold;">Contatar suporte no whatsapp</a>`, 'bot', true);
            setOptions([]);
            break;

        case "solar_sim":
            addMessage("Que legal! Vou te explicar brevemente como funciona. Nós temos a conexão solar como uma modalidade de aquisição do sistema solar fotovoltaico alternativa, onde nós instalamos o sistema solar completo na sua residência, e durante um período determinado (normalmente 6 anos) esse sistema gera energia para nós.\n\nEnquanto isso, você continuará pagando sua energia normalmente, mas com um desconto de até 15%, e sem pagar bandeiras tarifárias. Ao final do período estipulado, o sistema solar será 100% seu.\n\nÉ importante ressaltar que neste procedimento, nós não vamos te pagar um valor mensal pelo aluguel do seu telhado, pois o pagamento pelo tempo de aluguel será justamente o sistema solar completo.\n\nDeseja prosseguir e verificar os requisitos de contratação?", 'bot');
            setOptions([
                { label: "Sim", action: "solar_requisitos_sim" },
                { label: "Não", action: "solar_requisitos_nao" }
            ]);
            break;

        case "solar_requisitos_nao":
            addMessage("Sem problemas, estamos à disposição!", 'bot');
            setOptions([]);
            break;

        case "solar_requisitos_sim":
            addMessage("Excelente! Para saber se você tem direito à contratação, vou te fazer algumas perguntinhas. Primeiramente, o local possui um consumo de no mínimo 300 reais por mês em fatura?", 'bot');
            setOptions([
                { label: "Sim", action: "solar_300_sim" },
                { label: "Não", action: "solar_300_nao" }
            ]);
            break;
        
        case "solar_300_nao":
            addMessage("Sinto muito, você não cumpre os requisitos.", 'bot');
            setOptions([]);
            break;

        case "solar_300_sim":
            addMessage("Excelente! Você é o titular da fatura?", 'bot');
            setOptions([
                { label: "Sim", action: "solar_titular_sim" },
                { label: "Não", action: "solar_titular_nao" }
            ]);
            break;

        case "solar_titular_nao":
            addMessage("Sinto muito. Melhor pedir que o titular entre em contato conosco.", 'bot');
            setOptions([]);
            break;

        case "solar_titular_sim":
            addMessage("Maravilha. Preencha o formulário a seguir para que nossa equipe técnica possa entrar em contato com você para solicitar as informações necessárias para gerar uma proposta.", 'bot');
            const formSolar = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeMbhNi0g7YWbJAGp9M5OqXj5JMcNhk4ukiDgHZcplra0aAbA/viewform?embedded=true" class="iframe-container">Loading...</iframe>`;
            addMessage(formSolar, 'bot', true);
            setOptions([]);
            break;


        // --- TRABALHE CONOSCO ---
        case "trabalhe_start":
            addMessage(`Que legal, você deseja fazer parte da família iGreen Energy! Atualmente nós trabalhamos com regime de franquia. Uma franquia, é uma filial da empresa que você pode comprar e administrar de forma independente. Você se torna parte de nós e nós vamos te fornecer os treinamentos necessários para trabalhar conosco. Você pode construir sua renda passiva conosco e receber uma "aposentadoria" para sempre! Quer saber como? <br><a href="https://wa.me/5584920039738?text=Ol%C3%A1!%20Desejo%20me%20tornar%20um%20franquiado%20e%20trabalhar%20com%20a%20iGreen%20Energy%20na%20minha%20cidade.%20Pode%20me%20explicar%20mais%20sobre%20os%20produtos%20que%20a%20empresa%20oferta,%20e%20como%20funciona%20o%20processo%20de%20compra%20da%20franquia?" target="_blank" style="color:#007bff; font-weight:bold;">Contatar suporte no whatsapp</a>`, 'bot', true);
            setOptions([]);
            break;
    }
}

// Inicializa o site na página inicial
navegar('inicio');
