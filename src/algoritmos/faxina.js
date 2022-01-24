function faxina(obj) {
    for (let key in obj) {
        if (obj[key] === null) {
            delete obj[key]
        }
    }
}



// Para testar a função
let obj = { "fizz": "buzz", "foo": null, "bar": 42 }
faxina(obj)
console.log(obj)