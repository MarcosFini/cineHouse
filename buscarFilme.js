let catalogo = [
    {

        codigo: 1,
        titulo: 'Batman',
        duracao: 90 + ' Min',
        atores: ['Robert Pattinson', "Zoe Kravitz", 'Paulo Dano', 'Colin Farrell'],
        ano: 2022,
        emCartaz: true,
    },

{
        codigo: 2,
        titulo: 'Spider Man',
        duracao: 150 + ' Min',
        atores: ['Tom Holland', 'Andrew Garfield', 'Tobey Maguire', 'Zendaya'],
        ano: 2021,
        emCartaz: false,
}

// Adicionar um objeto na array
]

/*let alterarStatus = (codigo) => {
    for (let i = 0; i < catalogo.length; i++ )
      if (catalogo[i].emCartaz == codigo){
      return catalogo[i].emCartaz == false
      console.log('oi')
     } else {
        return catalogo[i].emCartaz == true 
     }}
    

    alterarStatus(1)*/

   /* function alterarStatusEmCartaz(codigo) {
        for (let i=0; i<catalogo.length; i++) {
            if (catalogo[i].codigo == codigo) {
                catalogo[i].emCartaz = !catalogo[i].emCartaz;
                console.log('oi')
            }
        }
    }

    alterarStatusEmCartaz(1)*/

    function alterarStatusEmCartaz(codigo, emCartaz) {
        for (let i = 0; i < catalogo.length; i++) {
            if (catalogo[i].codigo == codigo) {
                catalogo[i].emCartaz = emCartaz;
                console.log(`Filme com código: ${codigo} teve sua propriedade "Em cartaz" alterada`)
            }
        }
    }
    alterarStatusEmCartaz(1, true)

  


