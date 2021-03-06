import React from 'react'

import '../header/header.css';
import '../header/search.svg';
import 'react-bootstrap';

import '../header/modal.css';

function Header() {
    const nome = "JoÃ£o"

    function VerificarHora() {
        const data = new Date();
        const hora = data.getHours();
        console.log(hora)


        if (hora <= 12) {
            return (
                <text>ð Bom dia</text>
            )
        };
        if (hora <= 17) {
            return (
                <text>â Boa tarde</text>
            )
        };
        if (hora >= 18) {
            return (
                <text>ð Boa noite</text>
            );
        }
    }
    return (
        <header className="cabecalho">
            <h1 className="cabecalho-titulo">ByteBank</h1>
            <div className="cabecalho-profile">
            <p className="cabecalho-profile-p">{VerificarHora()}, {nome}!</p>
            </div>
        </header>
    )
}

export default Header;