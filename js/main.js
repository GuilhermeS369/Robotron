//Traz os botoes de soamr e subtrair
const controle = document.querySelectorAll("[data-controle]")
//Traz todas as estatisticas
const estatisticas = document.querySelectorAll("[data-estatistica]")
//Para cada botao
controle.forEach( (elemento) => {
    //Adicionar um escutador de eventos "click"
    elemento.addEventListener("click", (evento) =>{
        //E adiciona a função de aumentar e diminuir, diferenciando + e -
        //Por evento que diz qual botao cliclamos
        //P1 Passamos se é + ou - P2 Qual das peças é
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        //Função que aumenta e diminui as estatisticas
        //P1 é pr saber qual peça, P2 + ou -
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
       
   
    });
    
})

function manipulaDados(operacao, controle){
    //filtro de peça
    const peca = controle.querySelector('[data-contador]')

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca, _operacao){
    console.log(pecas[peca]);
    //Para cada estistica testar se é + ou -
    estatisticas.forEach( (elemento)=> {
        if (_operacao === "+") {
            //Mudamos o conteudo somando 2 conteudos iguais
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        } else {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        }
        
    })
}
//Atributos de cada peça do robo
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
 }