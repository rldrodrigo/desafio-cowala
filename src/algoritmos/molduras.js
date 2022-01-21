function molduras(colunas, linhas) {
    let linha = ''
    for (i = 0; i < linhas; i++) {
        linha = ''
        for (j = 0; j < colunas; j++) {
            if ((j == 0 && i == 0) || (j == 0 && i == linhas - 1) || (j == colunas - 1 && i == 0) || (j == colunas - 1 && i == linhas - 1)) {
                linha += '+'
            } else if ((i == 0 && (j != 0 && j != colunas - 1)) || ((i == linhas - 1 && (j != 0 && j != colunas - 1)))) {
                linha += '-'
            } else if ((j == 0 && (i != 0 || i != linhas - 1)) || ((j == colunas - 1 && (i != 0 || i != linhas - 1)))) {
                linha += '-'
            }
            else {
                linha += ' '
            }
        }
        console.log(linha)
    }
}
var f = molduras(1, 3);
