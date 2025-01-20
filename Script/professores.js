const teachers = [

    { name: 'Alexandre Poba', img: 'Images/Professores/Alexandre Poba.jpg', curso: 'Matemática',link:'alexandre_poba.html', discipline: 'Matemática', classes: ['Décima Primeira', 'Décima Segunda'] },
    { name: 'Carolina Ana', img: 'Images/Professores/Mulher.jpg', curso: 'Empreendedorismo',link:'carolina_ana.html', discipline: 'Empreendedorismo', classes: ['Décima primeira'] },
    { name: 'Celso Vasconcelos', img: 'Images/Professores/Celso Vasconselos.jpg',link:'celso_vasconcelos.html', curso: 'Inglês', discipline: 'Inglês', classes: ['Décima'] },
    { name: 'Cláudia Abrãao', img: 'Images/Professores/Cláudia Abrãao.jpg', curso: 'FAI' ,link:'claudia_abraao.html',discipline: 'FAI', classes: ['Décima', 'Décima Terceira'] },
    { name: 'Felicidade Casimiro', img: 'Images/Professores/Mulher.jpg', curso: 'Ed.Física',link:'felicidade_casimiro.html', discipline: 'Ed.Física', classes: ['Décima Primeira'] },
    { name: 'Filemon Muanda', img: 'Images/Professores/Filemon Muanda.jpg', curso: 'Electrotecnia',link:'filemon_muanda.html', discipline: 'Electrotecnia', classes: ['Décima Primeira'] },
    { name: 'Hilário Luemba', img: 'Images/Professores/Hilário Luemba.jpg', curso: 'TREI',link:'hilario_luemba.html', discipline: 'TREI', classes: ['Décima Segunda'] },
    { name: 'Inês Filipe', img: 'Images/Professores/Inês Filipe.jpg', curso: 'Química',link:'ines_filipe.html', discipline: 'Química', classes: ['Décima Primeira'] },
    { name: 'Joaquim Diolo', img: 'Images/Professores/Homem.jpg', curso: 'Empreendedorismo',link:'joaquim_diolo.html', discipline: 'Empreendedorismo', classes: ['Décima Primeira, Décima Segunda'] },
    /*{ name: 'João Chocolate', img: 'Images/Professores/Homem.jpg', curso: 'SEAC', discipline: '<strong>Disciplina: </strong>SEAC', classe: [''] },*/
    { name: 'Joel Simples', img: 'Images/Professores/Joel Simples.jpg', curso: 'Inglês',link:'joel_simples.html', discipline: 'Inglês', classes: ['Décima Primeira'] },
    {name: 'José Mampumpo', img: 'Images/Professores/José Mampumbo.jpg', curso: 'Matemática',link:'jose_mampumbo.html', discipline: 'Matemática', classes: ['Décima Segunda'] },
    { name: 'José Vaba', img: 'Images/Professores/Homem.jpg', curso: 'SEAC', discipline: 'SEAC',link:'jose_vaba.html', classes: ['Décima, Décima Primeira, Décima Segunda'] },
    { name: 'Luís Sibi', img: 'Images/Professores/Homem.jpg', curso: 'OGI',link:'luis_sibi.html', discipline: 'OGI', classes: ['Décima Segunda'] },
    { name: 'Mateus Kanga', img: 'Images/Professores/Mateus Kanga.jpg', curso: 'DP',link:'mateus_kanga.html', discipline: 'DP', classes: ['Décima Primeira, Décima Segunda'] },
    { name: 'Mateus Púcuta', img: 'Images/Professores/Homem.jpg', curso: 'Língua Portuguesa',link:'mateus_pucuta.html', discipline: 'Língua Portuguesa', classes: ['Décima Primeira'] },
    { name: 'Natividade Gouveia', img: 'Images/Professores/Natividade Gouveia.jpg', curso: 'FAI',link:'natividade_gouveia.html', discipline: 'FAI', classes: ['Décima'] },
    { name: 'Silvana Capita', img: 'Images/Professores/Silvana Capita.jpg', curso: 'TIC',link:'silvana_capita.html', discipline: 'TIC', classes: ['Décima'] },
    { name: 'Wagnel Sambo', img: 'Images/Professores/Wagnel Sambo.jpg', curso: 'TLP', link:'wagnel_sambo.html',discipline: 'TLP', classes: ['Décima', 'Décima Primeira'] },/*
    { name: 'Abel Barros', img: 'Images/Professores/Homem.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: ['Décima'] },
    { name: 'Adão Ngoma', img: 'Images/Professores/Homem.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: ['Décima'] },
    // Continue adicionando "classe" para cada item


    { name: 'Afonsso Macosso', img: 'Images/Professores/Homem.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classes: ['Décimasegunda']},
    { name: 'Afonso Lembe', img: 'Images/Professores/Homem.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classes: ['Décima segunda'] },
     /*
    { name: 'Aguinaldo Muel', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>' },*/
     /*
    { name: 'Alberto Mavungo', img: 'Images/Professores/Homem.jpg',curso: '', discipline: '<strong>Disciplina: </strong>' },
    { name: 'Alberto Macosso', img: 'Images/Professores/Homem.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classes: ['Décima'] },
    */{ name: 'Alexandre Vela', img: 'Images/Professores/Alexandre Vela .jpg',curso: 'Matemática',link:'alexandre_vela.html', discipline: '<strong>Disciplina: </strong>',classes: ['Décima segunda'] },
    /*{ name: 'Alfredo Pambo', img: 'Images/Professores/Homem.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classes: ['Décima'] },
    { name: 'Alice Bioco', img: 'Images/Professores/Mulher.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },*/
    { name: 'Abrósio SantosSechie II', img: 'Images/Professores/Ambrósio .jpg',curso: 'Ed.Física',link:'ambrosio_II.html', discipline: 'Ed.Física',classes: ['Décima, Décima Primeira'] },/*
    { name: 'Ambrósio Luís', img: 'Images/Professores/Homem.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Ana Gime', img: 'Images/Professores/Mulher.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Ana Sambo', img: 'Images/Professores/Mulher.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Anabela Casimiro', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'André Nhiendo', img: 'Images/Professores/Homem.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'André Manuel', img: 'Images/Professores/Homem.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'André Macaia', img: 'Images/Professores/Homem.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Angelino Luemba', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'António Chimpanzo II', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'António Chicala', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'António Pedro', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'António Chocolate', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'António Tundanga', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Arlindo Milando', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Bento Chiaca', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Bernado Dundo', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Bilouga Rodrigues', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Bonifácio Morais', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Carlos da Silva', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Carlos Vemba', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Carlos Gomes', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Casimiro Gime', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Casimiro Toco', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Celso Ferreira', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Cisolina Luemba', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Clemente Cuilo', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Clemente Nhangui Cuilo', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'David Bumba', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Desidério Mavungo', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Dilândua Pedro', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Domingos Duli', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Domingos Tovo', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Domingos Manuel', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Domingos Pulaco', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Domingos Gingo', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Elsa Capita', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    { name: 'Ester Mavungo', img: 'Images/Professores/.jpg',curso: '', discipline: '<strong>Disciplina: </strong>',classe: [''] },
    

    
    { name: 'Felicidade Casimiro', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Fernando Ngoma', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Filipe Tati', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Filomão Quicombo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Florisberto Santos', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Francisco Tati', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Francisco Matundo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Francisco Dunge', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Francisco Mavungo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Francisco Bazonga', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Gabriel Macaia', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Genuíno Gomes', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'João Macosso', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'João Baco', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'João Chocolate', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'João Puindi', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'João Macongo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'João Quinha', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'João Mombo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'João Nguimbi', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'João Chimbuca', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Joaquim Toco', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Jhon Silva', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'José Chiuima', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'José Bungo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'José Matombe', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'José Buange', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'José Macaia', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'José Muanda', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'José Mavinga', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'José Vaba', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'José Basto', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'José Bilasso', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Julieta Miranda', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Júlio Vemba', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Justino Zau', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Kelson Binda', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Lídia José', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Lourenço Ntotó', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Luís Badienga', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Luís Bachi', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Mabolosi Rafael', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Madalena Luemba', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Malúndama Romuald', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Manuel Malaca', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Marcos D´Assunção', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Maria Sumbo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Maria Sibi', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Maria Lino', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Maria Francisco', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Maria Munda', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Maria Maria Bazonga', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Maria Libuili', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Marileusa Conde', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Marisa Dundo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Marta Chimpanzo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Marta Zembo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Mateus Ncusso', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Mateus Padi', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Maurício Puati', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Maurício Gimbi', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Mgomloemb Jonathan', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Miguel Pezo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Márcia Lucas', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Nasson Chasi', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Natacha António', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Nlando Massuma', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Nsilulu João de Deus', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Olga Paixão', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Osvaldo Sumbo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Pascoal Barros', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Pascoal Ngoma', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Paulo Macolo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Paulo Barros', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Paulo Luemba', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Pedro Barros', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Pedro Guala', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Pelagia Bote', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Roland Bakala', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Ruben Luemba', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Sandra de Jesus', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Sango Gilberto', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Sebastião Marcos', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Sebastião Luzolo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Sérgio Calufuelo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Sónia Cuango', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Teresa Vicente', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Teresa Domingos', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Tiago Sense', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Tomás Maiúco', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Valdir Chimpanzo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Vasco Mendonce', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Vicente Lutumbo', img: 'Images/Professores/.jpg', curso: '', discipline: '<strong>Disciplina: </strong>', classe: [''] },
    { name: 'Vicente Kubaia', img: 'Images/Professores/.jpg',curso: '', discipline: '',classe: [''] },
    { 
        name: 'Victor Mavungo', img: 'Images/Professores/.jpg', curso: 'Matemática', discipline: 'Matemática', classes: ['Décima']},
    { name: 'Victor Serafim', img: 'Images/Professores/.jpg', curso: 'Português', discipline: 'Português', classes: ['Décima Primeira']},
    { name: 'Walder Abrão', img: 'Images/Professores/.jpg', curso: 'Física', discipline: 'Física', classes: ['Décima']},
    { name: 'Zilda Silva', img: 'Images/Professores/.jpg', curso: 'Inglês', discipline: 'Inglês', classes: ['Décima primeira']},*/
];

const filtroCurso = document.getElementById('filtroCurso');
const filtroClasse = document.getElementById('filtroClasse');
const teachersList = document.getElementById('teachersList');
const NomeNãoEncontrado = document.getElementById('NomeNãoEncontrado');

// Função para exibir professores
function displayTeachers(teachersToShow) {
    teachersList.innerHTML = teachersToShow.map(teacher => `
        <div class="teacher" style="height: 250px;">
            <img src="${teacher.img}" alt="${teacher.name}">
            <div class="teacher-name">${teacher.name}</div>
            <div class="teacher-discipline"><strong>Disciplina:</strong> ${teacher.discipline}</div>
            <div class="teacher-classes"><strong>Classes:</strong> ${teacher.classes.join(', ')}</div>
        </div>
    `).join('');
    
    NomeNãoEncontrado.style.display = teachersToShow.length === 0 ? 'block' : 'none';
}

// Função para filtrar professores por curso e classe
function filterTeachers() {
    const selectedCurso = filtroCurso.value;
    const selectedClasse = filtroClasse.value;

    const filteredTeachers = teachers.filter(teacher => {
        const matchesCurso = selectedCurso === 'Todos' || teacher.curso === selectedCurso;
        const matchesClasse = selectedClasse === 'Todas' || teacher.classes.includes(selectedClasse);
        return matchesCurso && matchesClasse;
    });

    displayTeachers(filteredTeachers);
}

// Eventos para atualizar a lista ao mudar os filtros
filtroCurso.addEventListener('change', filterTeachers);
filtroClasse.addEventListener('change', filterTeachers);

// Exibir todos os professores ao carregar a página
displayTeachers(teachers);

suggestions.addEventListener('click', (e) => {
    if (e.target.classList.contains('suggestion-item')) {
        Pesquisa.value = e.target.textContent;
        const selectedTeacher = teachers.filter(teacher => teacher.name === e.target.textContent);
        displayTeachers(selectedTeacher);
        suggestions.innerHTML = '';
    }
});
function displayTeachers(teachersToShow) {
    teachersList.innerHTML = teachersToShow.map(teacher => `
        <div class="teacher" style="height: 250px; display: flex; flex-direction: column; align-items: center; text-align: center;">
            <a href="${teacher.link || '#'}">
                <img src="${teacher.img}" alt="${teacher.name}" style="display: block; margin: 0 auto;">
            </a>
            <div class="teacher-name">${teacher.name}</div>
            <div class="teacher-discipline"><strong>Disciplina:</strong> ${teacher.discipline}</div>
            <div class="teacher-classes"><strong>Classes:</strong> ${teacher.classes.join(', ')}</div>
        </div>
    `).join('');
    
    NomeNãoEncontrado.style.display = teachersToShow.length === 0 ? 'block' : 'none';
}
// Atualiza a lista ao clicar no botão de pesquisa
botão.addEventListener('click', () => {
    const query = Pesquisa.value.toLowerCase();
    const filteredTeachers = teachers.filter(teacher => teacher.name.toLowerCase().includes(query));
    displayTeachers(filteredTeachers);
});