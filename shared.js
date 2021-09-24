function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    //  .value -> para colocar só o elemento e n o código todo
    var valorEmDolarNumerico = parseFloat(valor);
    // parseFloat -> transforma um valor de texto em valor de numeral
    console.log(valorEmDolarNumerico);
    // mostra a mensagem no console do navegador

    var valorEmReal = valorEmDolarNumerico * 5.28;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
} 

// function -> é usada quando algo "invoca" ela (nesse caso qnd o botão é apertado)
