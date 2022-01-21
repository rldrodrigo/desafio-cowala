import React, { useState } from "react";
import './Form.css';


const Form = props => {

    const [nome, setNome] = useState(localStorage.getItem('nome') || '')
    const [profissao, setProfissao] = useState(localStorage.getItem('profissao') || '')
    const [celular, setCelular] = useState(localStorage.getItem('celular') || '')
    const [ip, setIp] = useState(localStorage.getItem('ip') || '')

    function getIP(url) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onerror = function (e) {
            console.log('Erro ao acessar a API')
        }
        request.onload = () => {
            var response = (request.responseText);
            setIp(response)
        }
        request.send();
    }

    function salvarDados() {
        localStorage.setItem('nome', nome)
        localStorage.setItem('profissao', profissao)
        localStorage.setItem('celular', celular)
        localStorage.setItem('ip', ip)
    }

    function limparDados() {
        localStorage.removeItem('nome')
        localStorage.removeItem('profissao')
        localStorage.removeItem('celular')
        localStorage.removeItem('ip')
        setNome('')
        setProfissao('')
        setCelular('')
        setIp('')
    }

    const masks = {
        phone(value) {
            return value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '($1) $2')
                .replace(/(\d{4})(\d)/, '$1-$2')
                .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
                .replace(/(-\d{4})\d+?$/, '$1')
        }
    }


    document.querySelectorAll('input').forEach(($input) => {

        const campo = document.getElementById('celular')
        campo.addEventListener('input', (e) => {

            e.target.value = masks.phone(e.target.value)
        }, false)
    })

    return (
        <div className="Form" >
            <form >
                <div className="nome">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" value={nome} id="nome" onChange={e => setNome(e.target.value)} />
                </div>
                <div className="section2">
                    <div className="profissao">
                        <label htmlFor="profissao">Profissão</label>
                        <input type="text" name="profissao" value={profissao} id="profissao" onChange={e => setProfissao(e.target.value)} />
                    </div>
                    <div className="celular">
                        <label htmlFor="celular">Celular</label>
                        <input type="text" name="celular" value={celular} id="celular" onChange={e => setCelular(e.target.value)} />
                    </div>
                </div>
                <div className="section3">
                    <div className="ip">
                        <label htmlFor="ip">Meu IP</label>
                        <input type="text" name="ip" value={ip} id="ip" readOnly />
                    </div>
                    <button type="button" className="btn encontrar" onClick={() => getIP('https://ip-fast.com/api/ip/')}>ENCONTRAR IP</button>
                </div>

                <div className="botoes">
                    <button type="button" className="btn" onClick={() => salvarDados()}>SALVAR</button>
                    <button type="reset" className="btn" onClick={() => limparDados()}>LIMPAR</button>
                </div>


            </form>
        </div >

    )
}

export default Form