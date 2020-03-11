module.exports = {
  siteMetadata: {
    title: `Python Iluminado`,
    name: `Gabriel Felippe`,
    siteUrl: `https://github.com/the-akira/Python-Iluminado`,
    description: `Guia para Iniciantes com a Linguagem Python`,
    social: [
      {
        name: `github`,
        url: `https://github.com/the-akira`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/akirascientist`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: [
        "introducao",
        "ambiente",
        "sintaxe",
        "tipos-variaveis",
        "numeros",
        "strings",
        "operadores",
        "listas",
        "tuplas",  
        "dicionarios",
        "sets",
        "input",
        "if-else",
        "for-loops",
        "while-loops",
        "funcoes",
        "expressoes-lambda",
        "modulos",
        "input-output-arquivos",
        "erros-excecoes-testes",
        "data-tempo",
        "classes-objetos",
        "expressoes-regulares",
        "json",
        "xml",
        "iteradores",
        "geradores",    
        "decoradores",
        "ambientes-virtuais",
        "mysql",
        "mongodb",
        "grandes-bibliotecas",
        "referencias-online"    
        ],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
