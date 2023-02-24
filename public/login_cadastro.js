let nome = document.getElementById("insira_nome");
let confirme_email = document.getElementById("confirme_email");
let senha = document.getElementById("senha");
let texto = document.getElementById("texto");

document.getElementById("registro").addEventListener("click", function () {
    if (nome.style.display === 'flex') {
        nome.style.display = 'none';
        confirme_email.style.display = 'none';
        senha.style.display = 'flex';
    } else {
        nome.style.display = 'flex';
        confirme_email.style.display = 'flex';
        senha.style.display = 'flex';
    }
    texto.style.display = 'none';
});


document.getElementById("senha_esquecida").addEventListener("click", function () {
    if (senha.style.display === 'none') {
        senha.style.display = 'flex';
        confirme_email.style.display = 'none';
        nome.style.display = 'none';
        texto.style.display = 'none';
    } else {
        senha.style.display = 'none';
        confirme_email.style.display = 'flex';
        nome.style.display = 'none';
        texto.style.display = 'flex';
    }
});

