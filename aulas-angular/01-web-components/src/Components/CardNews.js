class Cardnews extends HTMLElement {
  // O construtor é chamado quando uma instância do componente é criada.
  constructor() {
    // A palavra-chave 'super' chama o construtor da classe pai (HTMLElement neste caso).
    super();

    // Cria um novo Shadow DOM vinculado ao elemento customizado.
    const shadow = this.attachShadow({ mode: "open" });

    // Chama a função `build` para construir a estrutura do componente e adiciona-a ao Shadow DOM.
    shadow.appendChild(this.build());

    // Chama a função `styles` para adicionar estilos ao Shadow DOM.
    shadow.appendChild(this.styles());
  }

  // Esta função constrói a estrutura do componente.
  build() {
    // Cria um elemento <div> que servirá como o contêiner do componente.
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    // Cria um elemento <div> para a parte esquerda do cartão.
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    // Cria um elemento <span> para exibir o autor da notícia.
    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    // Cria um elemento <a> para exibir o título da notícia com um link.
    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    // Cria um elemento <p> para exibir o conteúdo da notícia.
    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content"); // Deve ser "content" em vez de "contet".

    // Adiciona os elementos criados à parte esquerda do cartão.
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    // Cria um elemento <div> para a parte direita do cartão.
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    // Cria um elemento <img> para exibir a foto da notícia. E tratando dos erros.
    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg"; // Define uma imagem padrão se não houver URL da imagem.
    newsImage.alt = "Foto da Noticia";

    // Adiciona a imagem à parte direita do cartão.
    cardRight.appendChild(newsImage);

    // Adiciona as partes esquerda e direita do cartão ao contêiner principal.
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    // Retorna o elemento <div> que representa o componente completo.
    return componentRoot;
  }
  // Adiciona a estilização padrão do CSS
  styles() {
    const style = document.createElement("style");
    style.textContent = `
        .card {
          width: 80%;
          box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        
        .card__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;
        }
        
        .card__left > span {
          font-weight: 400;
        }
        
        .card__left > a {
          margin-top: 15px;
          font-size: 25px;
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
        
        .card__left > p {
          color: rgb(70, 70, 70);
        }
    `;
    return style;
  }
}

// Registra o elemento personalizado 'card-news' com o navegador.
customElements.define("card-news", Cardnews);
