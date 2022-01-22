function classificador(listaObj) {
    var souEu = []
    var responsaveis = []
    var usuarios = []
    for (let key in obj) {
        if (obj[key].souEu === true) {
            souEu.push(obj[key])
        } else if (obj[key].responsavel === true) {
            responsaveis.push(obj[key])
        } else {
            usuarios.push(obj[key])
        }
    }
    responsaveis.sort(function (x, y) {
        let a = x.nome.toUpperCase(),
            b = y.nome.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1
    })
    usuarios.sort(function (x, y) {
        let a = x.nome.toUpperCase(),
            b = y.nome.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1
    })
    var array = [...souEu, ...responsaveis, ...usuarios]
    return array
}
// Para testar a função
let obj = [
    { souEu: false, responsavel: false, nome: 'Pessoa 2' },
    { souEu: true, responsavel: false, nome: 'João' },
    { souEu: false, responsavel: true, nome: 'Maria' },
    { souEu: false, responsavel: false, nome: 'José' },
    { souEu: false, responsavel: false, nome: 'Fernando' },
    { souEu: false, responsavel: false, nome: 'Antônio' },
    { souEu: false, responsavel: false, nome: 'Pessoa 4' },
    { souEu: false, responsavel: true, nome: 'Glória' },
    { souEu: false, responsavel: true, nome: 'Nilza' },
    { souEu: false, responsavel: false, nome: 'Pessoa 3' },

]


console.log(classificador(obj))
