const dicas = [
    {
      titulo: "Pratique todos os dias",
      texto: "A consistência é fundamental. Torne um hábito praticar o inglês todos os dias. Seja lendo, ouvindo ou falando, a prática regular melhorará suas habilidades.",
    },
    {
      titulo: "Expanda Seu Vocabulário",
      texto: "Aprenda novas palavras e frases regularmente. Você pode usar aplicativos, flashcards ou sites de aprendizado de idiomas para ajudar nisso.",
    },
    {
      titulo: "Assista coisas em Inglês",
      texto: "Assistir a filmes e programas de TV em inglês pode ser uma maneira agradável de melhorar suas habilidades de audição e compreensão. Experimente usar legendas, se necessário.",
    },
    {
      titulo: "Fale com nativos",
      texto: "Sempre que possível, envolva-se em conversas com falantes nativos de inglês. Isso o ajudará na pronúncia e na compreensão de diferentes sotaques.",
    },
  ];

  function gerarHTMLDica(dica) {
    return `
      <div class="dica">
        <img class="dica-img" src="assets/svg/dicas.png" alt="lampada de ideia">
        <h4>${dica.titulo}</h4>
        <p>${dica.texto}</p>
      </div>
    `;
  }
  document.addEventListener("DOMContentLoaded", function() {
  div_dicas = document.getElementById("dicas");
  for (const dica of dicas) {
    const htmlDica = gerarHTMLDica(dica);
    div_dicas.innerHTML += htmlDica;
    console.log(htmlDica);
  }        

  });