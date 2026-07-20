import './Cadastro.css'
import Footer from '../../components/Footer/Footer'

export default function Cadastro() {
    return (
        <main className='auth'>
            <form class="formulario">
                <h1><i>CADASTRE-SE</i></h1>
                <label for="nome">Nome Completo</label>
                <input type="text" id="nome" required></input>

                <label for="email">E-mail</label>
                <input type="email" id="email" required></input>

                <label for="senha">Senha</label>
                <input type="password" id="senha" required></input>

                <label for="cep">CEP</label>
                <input type="text" id="cep" placeholder="00000-000" required></input>

                <div class="linha">
                    <div class="campo-largo">
                        <label for="logradouro">Rua</label>
                        <input type="text" id="logradouro"></input>
                    </div>

                    <div class="campo-curto">
                        <label for="numero">Número</label>
                        <input type="text" id="numero"></input>
                    </div>
                </div>

                <label for="bairro">Bairro</label>
                <input type="text" id="bairro"></input>

                <div class="linha">
                    <div class="campo-largo">
                        <label for="cidade">Cidade</label>
                        <input type="text" id="cidade"></input>
                    </div>

                    <div class="campo-curto">
                        <label for="uf">UF</label>
                        <input type="text" id="uf" maxlength="2"></input>
                    </div>
                </div>
                <p id="aviso" class="aviso"></p>
                <button type="submit" class="btn">Cadastrar</button>
            </form>
        </main>
    )
}