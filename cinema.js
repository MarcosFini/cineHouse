let catalogo = [
    {

        codigo: 1,
        titulo: 'Batman',
        duracao: 90 + ' Min',
        atores: ['Robert Pattinson', "Zoe Kravitz", 'Paulo Dano', 'Colin Farrell'],
        anoDeLancamento: 2022,
        emCartaz: true,
    },

{
        codigo: 2,
        titulo: 'Spider Man',
        duracao: 150 + ' Min',
        atores: ['Tom Holland', 'Andrew Garfield', 'Tobey Maguire', 'Zendaya'],
        anoDeLancamento: 2021,
        emCartaz: false,
}
]
// Adicionar um objeto na array

var novoFilme = {
  codigo: 3,
  titulo: 'Harry Potter',
  duracao: 150 + ' Min',
  atores: ['Emma Watson', 'Daniel Radcliffe', 'Tom Felton'],
  anoDeLancamento: 2007,
  emCartaz: false,
}
catalogo.push(novoFilme)
console.log(catalogo)

//Buscar filme pelo código 
const buscarFilme = (codigo) => {
  for (let i = 0; i < catalogo.length; i++) {
      catalogo[i].codigo === codigo ? console.log(catalogo[i]) : ''
  }
}

buscarFilme(1)

//Alterar status em cartaz

  let alterarStatus = (codigo) => {
    for (let i = 0; i < catalogo.length; i++ ){
      catalogo[i].emCartaz === true ? false : true
    }}

    alterarStatus(1)
  
    function alterarStatusEmCartaz(codigo, emCartaz) {
      for (let i = 0; i < catalogo.length; i++) {
          if (catalogo[i].codigo == codigo) {
              catalogo[i].emCartaz = emCartaz;
              console.log(`Filme com código: ${codigo} teve sua propriedade "Em cartaz" alterada`)
          }
      }
  }
  alterarStatusEmCartaz(1, true)




