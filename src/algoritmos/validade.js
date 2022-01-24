function validade(data, validade) {

    dataValidade = new Date(data)
    dataHoje = new Date()
    //Converter a string para um valor inteiro

    let diaValidade = parseInt(validade.replace('d', ''))
    //Adiciona o valor da validade
    dataValidade.setDate(dataValidade.getDate() + diaValidade)

    if (dataHoje > dataValidade)
        return false
    else
        return true
}

// Para testar a função
console.log(validade("2021-11-17T20:40:09.503Z", "10d"))
console.log(validade("2021-12-10T00:00:00.000Z", "180d"))