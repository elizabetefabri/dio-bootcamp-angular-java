class TituloDinamico extends HTMLElement {
  // O construtor é chamado quando uma instância do componente é criada.
  constructor() {
    // A palavra-chave 'super' chama o construtor da classe pai (HTMLElement neste caso).
    super();

    // Cria um novo Shadow DOM vinculado ao elemento customizado.
    const shadow = this.attachShadow({ mode: "open" });

    // Cria um elemento <h1> que servirá como o conteúdo do componente.
    const componentRoot = document.createElement("h1");
    // Define o texto dentro do elemento <h1>.
    componentRoot.textContent = this.getAttribute("titulo");

    // Cria um elemento <style> para definir estilos CSS específicos para o componente.
    const style = document.createElement("style");
    style.textContent = `
      h1 {
        color: red;
      }
    `;

    // Adiciona o elemento <h1> ao Shadow DOM.
    shadow.appendChild(componentRoot);
    // Adiciona o elemento <style> ao Shadow DOM para aplicar estilos encapsulados.
    shadow.appendChild(style);
  }
}

// Registra o elemento personalizado 'titulo-dinamico' com o navegador.
customElements.define("titulo-dinamico", TituloDinamico);
