// função chamada quando clicar no botão para sortear
function sortear() {

    // para retornar os valores que foram colocados nos campos, parseInt utilizado para forçar a retornar um valor númerico, pois document. vem uma string
    let quantidade = parseInt(document.getElementById ('quantidade').value);
    let de = parseInt(document.getElementById ('de').value);
    let ate = parseInt(document.getElementById ('ate').value);
    
    //verificar se o valor min é maior que o valor max
    if(de >= ate){
        alert('Verifique os números escolhidos, o número mínimo é maior que o máximo!');
        return;
    }
    if(quantidade > (ate - de + 1)){
        alert('Uou, você quer sortear números inéditos em? A quantidade de números é maior do que os que podem ser sorteados!');
        return;
    }

    let sorteados = [];
    let numero;


    // loop se i for menor q quantidade, chamar função e add 1 em i
    for ( i = 0; i < quantidade; i++) {
        numero = obterNumerosSorteados(de, ate);

       // Para não aparecer números repetidos nos sorteados
        while(sorteados.includes(numero)){
            numero = obterNumerosSorteados(de, ate);
        }
        
        //colocar os números sorteados na array
        sorteados.push(numero);
    }

    //aqui vai inserir o texto no html e exibir a var sorteados na tela
    let resultado = document.getElementById('resultado');
    alterarStatusBotao();
    resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    
}

// função para sortear números
function obterNumerosSorteados(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

//para alterar o estado do botão ativado/desativado

function alterarStatusBotao() {

    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {

            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');

    } else {

            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
    }
}

// Para limpar as caixas de texto, funcionar o botão reiniciar
function reiniciar(){
    alterarStatusBotao();
    document.getElementById ('quantidade').value = '';
    document.getElementById ('de').value = '';
    document.getElementById ('ate').value = '';
    document.getElementById ('resultado').innerHTML('<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>');
}