document.addEventListener('DOMContentLoaded', () => {

    // --- REFERÊNCIAS AOS ELEMENTOS DO HTML ---
    const chatMessages = document.getElementById('chat-messages');
    const chatOptions = document.getElementById('chat-options');
    const progressBar = document.getElementById('progress-bar');

    // --- CONSTANTES ---
    const BOT_ICON_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7d1tVe34hH7WxuBvKRlXDF-GetD5U5eWxg&s';
    // Usei a versão "embedded=true" para melhor visualização no iframe
    const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScr9672uki_uqqJlm5DefPYFzpxGV-JVxqLmh4S_S6IP2N6Bg/viewform?embedded=true';
    const FINAL_LINK = 'https://digital.igreenenergy.com.br/?id=91507&sendcontract=true';

    // --- FUNÇÕES AUXILIARES ---

    /** Rola o chat para a última mensagem */
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    /** Limpa todos os botões de opção */
    function clearOptions() {
        chatOptions.innerHTML = '';
    }

    /** Atualiza a barra de progresso */
    function updateProgress(percentage) {
        progressBar.style.width = `${percentage}%`;
    }

    /** Adiciona uma mensagem do BOT ao chat */
    function addBotMessage(message, delay = 500) {
        return new Promise(resolve => {
            setTimeout(() => {
                const msgContainer = document.createElement('div');
                msgContainer.className = 'bot-message-container';

                msgContainer.innerHTML = `
                    <img src="${BOT_ICON_URL}" alt="Bot" class="bot-icon">
                    <div class="message bot-message">${message}</div>
                `;
                chatMessages.appendChild(msgContainer);
                scrollToBottom();
                resolve();
            }, delay);
        });
    }

    /** Adiciona uma mensagem do USUÁRIO ao chat */
    function addUserMessage(message) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message user-message';
        msgDiv.textContent = message;
        chatMessages.appendChild(msgDiv);
        scrollToBottom();
    }

    /** Adiciona os botões de opção */
    function addOptions(options) {
        clearOptions();
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-button';
            // Adiciona classe especial para o botão "PROSSEGUIR"
            if (option.text.toUpperCase() === 'PROSSEGUIR') {
                button.classList.add('proceed-button');
            }
            button.textContent = option.text;
            button.onclick = option.action;
            chatOptions.appendChild(button);
        });
    }

    /** Mostra mensagem de "Atendimento finalizado" e botão de reiniciar */
    function showEndMessage(botMessage) {
        addBotMessage(botMessage).then(() => {
            const endMsg = document.createElement('p');
            endMsg.className = 'end-message';
            endMsg.textContent = 'Atendimento finalizado';
            chatMessages.appendChild(endMsg);
            
            addOptions([{ text: 'Reiniciar Atendimento', action: startChat }]);
            scrollToBottom();
        });
    }

    // --- FLUXO DO CHAT ---

    /** Inicia ou reinicia o chat */
    function startChat() {
        chatMessages.innerHTML = '';
        clearOptions();
        updateProgress(0);

        addBotMessage("Olá! Seja bem-vindo à iGreen Energy. Antes de liberar seu desconto exclusivo na fatura de energia, preciso confirmar alguns requisitos da lei 14300. Pode ser?", 200).then(() => {
            addOptions([{ text: 'Pode ser', action: handleQ1_Titular }]);
        });
    }

    /** 1. Pergunta sobre Titularidade */
    function handleQ1_Titular() {
        addUserMessage('Pode ser');
        updateProgress(25);
        clearOptions();
        addBotMessage("Para prosseguir, você precisa ser o titular da conta de energia. Você é o titular?").then(() => {
            addOptions([
                { text: 'Sim', action: handleQ2_Valor },
                { text: 'Não', action: handleEnd_NaoTitular }
            ]);
        });
    }

    /** 2. Pergunta sobre Valor da Fatura */
    function handleQ2_Valor() {
        addUserMessage('Sim');
        updateProgress(50);
        clearOptions();
        addBotMessage("Ótimo! Agora me diga: O valor da sua conta de energia é acima de R$150 por mês?").then(() => {
            addOptions([
                { text: 'Sim', action: handleQ3_BaixaRenda },
                { text: 'Não', action: handleEnd_ValorBaixo }
            ]);
        });
    }

    /** 3. Pergunta sobre Baixa Renda */
    function handleQ3_BaixaRenda() {
        addUserMessage('Sim');
        updateProgress(75);
        clearOptions();
        addBotMessage("Só mais uma pergunta: O seu CPF está cadastrado no programa Baixa Renda/NIS junto à concessionária de energia?").then(() => {
            addOptions([
                { text: 'Sim', action: handleEnd_BaixaRenda },
                { text: 'Não', action: handleFinal_Formulario }
            ]);
        });
    }

    // --- FINAIS DE ATENDIMENTO (REPROVADOS) ---

    /** Final 1: Não é o titular */
    function handleEnd_NaoTitular() {
        addUserMessage('Não');
        clearOptions();
        updateProgress(25);
        showEndMessage("Entendi. Neste caso, o benefício só pode ser solicitado diretamente pelo titular da conta. Se desejar, peça que o responsável entre em contato.");
    }

    /** Final 2: Valor da conta abaixo de R$150 */
    function handleEnd_ValorBaixo() {
        addUserMessage('Não');
        clearOptions();
        updateProgress(50);
        showEndMessage("Neste momento, o benefício é válido apenas para contas acima de R$150 mensais. Se sua conta aumentar futuramente, será um prazer atender você.");
    }

    /** Final 3: Está no programa Baixa Renda */
    function handleEnd_BaixaRenda() {
        addUserMessage('Sim');
        clearOptions();
        updateProgress(75);
        showEndMessage("Neste momento, nosso benefício é exclusivo para quem não está inscrito no programa Baixa Renda (NIS). Caso sua situação mude, teremos prazer em atender você.");
    }

    // --- FINAL DE ATENDIMENTO (APROVADO) ---

    /** Mostra o formulário e o botão de prosseguir */
    function handleFinal_Formulario() {
        addUserMessage('Não');
        updateProgress(100); // Atinge 100%
        clearOptions();

        addBotMessage("Perfeito! Você atende a todos os requisitos da lei federal 14300 para garantir o desconto. Preencha os campos do formulário abaixo, envie os dados e clique em prosseguir").then(() => {
            
            // Adiciona o iframe do Google Forms
            const formContainer = document.createElement('div');
            formContainer.className = 'form-container';
            formContainer.innerHTML = `<iframe id="google-form" src="${FORM_URL}">Carregando formulário...</iframe>`;
            chatMessages.appendChild(formContainer);
            
            // Adiciona a mensagem final e o botão de prosseguir
            addBotMessage("Já enviou os dados? Se sim, clique em prosseguir.", 300).then(() => {
                addOptions([{ text: 'PROSSEGUIR', action: handleProceedToLink }]);
            });
        });
    }

    /** Redireciona para o link final */
    function handleProceedToLink() {
        // Você pode adicionar um loader ou mensagem aqui se desejar
        addUserMessage('PROSSEGUIR');
        clearOptions();
        addBotMessage("Obrigado! Redirecionando...", 200).then(() => {
            window.location.href = FINAL_LINK;
        });
    }

    // --- INICIA O CHAT QUANDO A PÁGINA CARREGA ---
    startChat();

});
