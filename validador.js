function validarRespostaIndex() {
    // OLHAR AQUI É TRAPACEAR E NÃO TEM GRAÇA PARA O JOGO. VOCÊ É UM(A) PERDEDOR(A)!
    var campoResposta = document.forms["respostaForm"]["resposta"].value;
    if (campoResposta == "relogio" || campoResposta == "Sim" || campoResposta == 'sim' || campoResposta == 'yes' || campoResposta == 'Yes') {
        window.location.replace("https://viniciuschagas7.github.io/enigmax/primeira_fase");
        return false;
    } else {
        alert("Sem resposta eu não prossigo.");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/");
        return false;
    }
}

function validarRespostaPrimeiraFase() {
    // OLHAR AQUI É TRAPACEAR E NÃO TEM GRAÇA PARA O JOGO. VOCÊ É UM(A) PERDEDOR(A)!
    var campoResposta = document.forms["respostaForm"]["resposta"].value;
    if (campoResposta == 'Páscoa' || campoResposta == 'páscoa' || campoResposta == 'Pascoa' || campoResposta == 'pascoa') {
        window.location.replace("https://viniciuschagas7.github.io/enigmax/pascoa");
        return false;

    } else {
        alert("Resposta errada!");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/primeira_fase");
        return false;
    }
}

function recomecar() {
    window.location.replace("https://viniciuschagas7.github.io/enigmax/")
}

function validarRespostaPascoa() {
    // OLHAR AQUI É TRAPACEAR E NÃO TEM GRAÇA PARA O JOGO. VOCÊ É UM(A) PERDEDOR(A)!
    var campoResposta = document.forms["respostaForm"]["resposta"].value;
    if (campoResposta == 'day' || campoResposta == 'Day') {
        window.location.replace("https://viniciuschagas7.github.io/enigmax/day");
        return false;

    } else if (campoResposta == 'dia' || campoResposta == 'Dia') {
        alert("A semelhança da semana em português é feira e não day.");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/pascoa");
        return false;

    } else {
        alert("Resposta errada!");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/pascoa");
        return false;
    }
}

function validarRespostaDay() {
    // OLHAR AQUI É TRAPACEAR E NÃO TEM GRAÇA PARA O JOGO. VOCÊ É UM(A) PERDEDOR(A)!
    var campoResposta = document.forms["respostaForm"]["resposta"].value;
    if (campoResposta == 'Mercúrio' || campoResposta == 'mercúrio' || campoResposta == 'Mercurio' || campoResposta == 'mercurio') {
        window.location.replace("https://viniciuschagas7.github.io/enigmax/mercurio");
        return false;

    } else if (campoResposta == '80' || campoResposta == 'oitenta') {
        alert("De qual elemento?");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/day");
        return false;

    } else {
        alert("Resposta errada!");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/day");
        return false;
    }
}

function validarRespostaMercurio() {
    // OLHAR AQUI É TRAPACEAR E NÃO TEM GRAÇA PARA O JOGO. VOCÊ É UM(A) PERDEDOR(A)!
    var campoResposta = document.forms["respostaForm"]["resposta"].value;
    if (campoResposta == "relogio" || campoResposta == "Relogio" || campoResposta == 'relógio' || campoResposta == 'Relógio') {
        window.location.replace("https://viniciuschagas7.github.io/enigmax/relogio");
        return false;
    } else {
        alert("Resposta errada!");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/mercurio");
        return false;
    }
}

function validarRespostaRelogio() {
    // OLHAR AQUI É TRAPACEAR E NÃO TEM GRAÇA PARA O JOGO. VOCÊ É UM(A) PERDEDOR(A)!
    var campoResposta = document.forms["respostaForm"]["resposta"].value;
    if (campoResposta == 'Dr. Facilier' || campoResposta == 'Facilier') {
        window.location.replace("https://viniciuschagas7.github.io/enigmax/facilier");
        return false;
    } else if (campoResposta == 'facilier' || campoResposta == 'dr. facilier') {
        alert("Cadê a gramática?");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/relogio");
        return false;
    } else {
        alert("Resposta errada!");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/relogio");
        return false;
    }
}

function validarRespostaFacilier() {
    // OLHAR AQUI É TRAPACEAR E NÃO TEM GRAÇA PARA O JOGO. VOCÊ É UM(A) PERDEDOR(A)!
    var campoResposta = document.forms["respostaForm"]["resposta"].value;
    if (campoResposta == 'Ordep' || campoResposta == 'ordep' || campoResposta == 'ordeP') {
        window.location.replace("https://viniciuschagas7.github.io/enigmax/sem_nome");
        return false;

    } else if (campoResposta == 'Pedro' || campoResposta == 'pedro') {
        alert("Missa Atnet");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/facilier");
        return false;

    } else {
        alert("Resposta errada!");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/facilier");
        return false;
    }
}

function validarRespostaSemNome() {
    // OLHAR AQUI É TRAPACEAR E NÃO TEM GRAÇA PARA O JOGO. VOCÊ É UM(A) PERDEDOR(A)!
    var campoResposta = document.forms["respostaForm"]["resposta"].value;
    if (campoResposta == 'Barriga' || campoResposta == 'barriga') {
        window.location.replace("https://viniciuschagas7.github.io/enigmax/final");
        return false;

    } else if (campoResposta == 'Toucinho' || campoResposta == 'toucinho' || campoResposta == 'Bacon' || campoResposta == 'bacon') {
        alert("Parabéns! Mas ainda não é a resposta certa.");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/sem_nome");
        return false;

    } else {
        alert("Resposta errada!");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/sem_nome");
        return false;
    }
}

function validarRespostaBarriga() {
    // OLHAR AQUI É TRAPACEAR E NÃO TEM GRAÇA PARA O JOGO. VOCÊ É UM(A) PERDEDOR(A)!
    var campoResposta = document.forms["respostaForm"]["resposta"].value;
    if (campoResposta == 'Pedra Filosofal' || campoResposta == 'pedra filosofal') {
        window.location.replace("https://viniciuschagas7.github.io/enigmax/final");
        return false;

    } else if (campoResposta == 'nicolas flamel' || campoResposta == 'Nicolas Flamel') {
        alert("Está perto! ✡");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/barriga");
        return false;

    } else {
        alert("Resposta errada!");
        window.location.replace("https://viniciuschagas7.github.io/enigmax/barriga");
        return false;
    }
}