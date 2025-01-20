// Array de objetos representando os cursos
const cursos = [
    {
        nome: "Construção Civil",
        descricao: "A construção civil é o setor responsável por projetar, construir e manter edificações e infraestruturas, como casas, prédios, estradas e pontes, sendo essencial para o desenvolvimento urbano e econômico.",
        imagem: "Images/C.Civil/construcao-de-casas-principais-erros.png",
        link: "construcao_civil.html",
    },
    {
        nome: "Desenho Projectista",
        descricao: "Desenho projectista é a área que envolve a criação de desenhos técnicos e detalhados usados para projectar peças, estruturas (construção civil), sistemas e outros projectos.",
        imagem: "Images/Desenhador Projectista/Desenhador Projectista.png",
        link: "desenho_projectista.html",
    },
    {
        nome: "Electricidade",
        descricao: "O curso de Electricida é uma forma de energia fundamental para o mundo moderno, ou seja ela desempenha um papel crucial no desenvolvimento econômico e tecnológico. É deveras uma das áreas mais importantes no mundo.",
        imagem:"Images/Electricidade/Electricidade.png",
        link: "electricidade.html",
    },
    {
        nome: "Electrónica",
        descricao: "Eletrônica é o ramo da ciência e tecnologia que estuda e aplica circuitos e dispositivos que controlam o fluxo de electricidade, processa sinais e realizam funções comocomunicação, controle e automação.",
        imagem: "Images/Electrónica/Electrónica.jpg",
        link: "electronica.html",
    },
    {
        nome: "Energia Renovável",
        descricao: "A energia renovável é aquela gerada a partir de fontes naturais que se renovam contimuamente, como o sol, o vento, a água e a biomassa. São fontes abundantes, acessíveis em diversas regiões do mundo.",
        imagem: "Images/E.Renovável/Energia Renovável.jfif",
        link: "energia_renovavel.html",
    },
    {
        nome: "Informática",
        descricao: "A informática tem desempenhado um papel essencial na transformação da sociedade, contribuindo em diversas áreas, possibilitando a criação de redes de comunicação globais, como a internet e as redes sociais.",
        imagem: "Images/Informática/Informática.jpg",
        link: "informática.html",
    },
    {
        nome: "Manuntenção Industrial",
        descricao: "Manutenção Industrial é o conjunto de práticas focadas em garantir o desempenho, segurança e durabilidade de equipamentos e instalações em ambientes industriais.",
        imagem:"Images/M.Industrial/Manunteção Industrial.jpg",
        link:"manuntecao_industrial.html",
    },
    {
        nome: "Máquinas e Motores",
        descricao: "Máquinas e Motores são fundamentais para o progresso tecnológico e industrial. Eles possibilitam a produção em grande escala, impulsionam a mobilidade global e contribuem no desenvolvimento de tecnologias avançadas.",
        imagem: "Images/M.M/Máquinas e Motores.jpg",
        link: "maquinas_e_motores.html",
    },
    {
        nome: "Metalomecânica",
        descricao: "A metalomecânica é o ramo da indústria que trabalha com a fabricação e montagem de peças e estruturas metálicas. Engloba processos como corte, soldagem, moldagem, e usinagem de metais.",
        imagem: "Images/Metalomecânica/Metalomecânica.jpg",
        link: "metalomecanica.html",
    },
    // Adicione mais cursos conforme necessário
];
function gerarCursos() {
    const cursosContainer = document.getElementById('cursos');

    cursos.forEach(curso => {
        const cursoDiv = document.createElement('div');
        cursoDiv.classList.add('lista');

        cursoDiv.innerHTML = `
            <a href="${curso.link}"><img class="imgcurso" src="${curso.imagem}" alt=""></a>
            <h2>${curso.nome}</h2>
            <p>${curso.descricao}</p>
        `;

        cursosContainer.appendChild(cursoDiv);
    });
}

// Chama a função para gerar os cursos na página
gerarCursos();
