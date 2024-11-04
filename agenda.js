const horarios = document.getElementById('horarios');
const mensagem = document.getElementById('mensagem');

horarios.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const horario = e.target.value;
        mensagem.innerText = `Agendado com sucesso! Horário: ${horario}`;
        e.target.disabled = true;
    }
});

