"use client";
import { useState } from "react";
// useState -> utilizada como uma Div moldável, para alterar o conteúdo dentro

export default function DogGallery() {
  const [fotos, fotosDog] = useState([]);
  const [carregando, carregandoApi] = useState(true); //Caso esteja true, ele mostra a mensagem de carregando

  // Pesquisar raça na API, e receber resultados
  async function pesquisarDogs(raca) {
    try {
        const resp = await fetch(`https://dog.ceo/api/breed/${raca}/images`); // Fazer requisição API
        const data = await resp.json(); //Resposta da API
        return(data.message)
      
    } catch (e) {
        console.error("404- Raça não encontrada"); // Erro csso não encontre a raça
    }
  }

  // Função preencher tela com as fotos
  async function preencherDogs() {
    try {
        carregandoApi(true)
        const raca = document.getElementById('inputRaca').value //Recebe o valor digitado
        const listaFotos = await pesquisarDogs(raca) // Pega a resposta da API

        fotosDog(listaFotos); //Coloca as fotos no container

    } catch (e) {
        console.error("404- Erro ao carregar fotos");
    } finally {
        carregandoApi(false); // Apresenta as fotos e some a mensagem de carregando
    }
  }


// Parte visual HTML
  return (
    <section className="caixa"> 

        <div className="pesquisar">
            <input className= "input" id="inputRaca" type="text" placeholder="Digite a raça do cachorro"/>

            <button className="botao" onClick={() => preencherDogs()}>
            Pesquisar!
            </button>
        </div>

      {carregando && <p>Carregando Fotos…</p>}

      <div className="grade">
        {fotos.map((url, i) => (
          <img className="foto" key={i} src={url} alt="Cachorro fofo" />
        ))}
      </div>
    </section>
  );
}
