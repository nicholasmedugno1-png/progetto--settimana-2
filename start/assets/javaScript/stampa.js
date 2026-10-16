const arrayProdottiStampa = [
   {
      nome: 'cuffie',
      categoria: 'elettronica',
      prezzo: 89.99,
      rating: 4,
      immagine: 'mouse.png',
      disponibile: true
   },
   {
      nome: 'tablet',
      categoria: 'elettronica',
      prezzo: 199.00,
      rating: 5,
      immagine: 'mouse.png',
      disponibile: true
   },
   {
      nome: 'libro',
      categoria: 'libri',
      prezzo: 14.90,
      rating: 4,
      immagine: 'mouse.png',
      disponibile: true
   },
   {
      nome: 'zaino',
      categoria: 'abbigliamento',
      prezzo: 49.99,
      rating: 4,
      immagine: 'mouse.png',
      disponibile: true
   },
   {
      nome: 'lampada',
      categoria: 'casa',
      prezzo: 29.50,
      rating: 3,
      immagine: 'mouse.png',
      disponibile: true
   },
   {
      nome: 'smartwatch',
      categoria: 'elettronica',
      prezzo: 119.00,
      rating: 4,
      immagine: 'mouse.png',
      disponibile: true
   },
   {
      nome: 'mouse',
      categoria: 'elettronica',
      prezzo: 24.90,
      rating: 4,
      immagine :'mouse.png',
      disponibile: true
   },
   {
      nome: 'caffettiera',
      categoria: 'casa',
      prezzo: 22.00,
      rating: 5,
      immagine: 'mouse.png',
      disponibile: true
   },
   {
      nome: 'diario',
      categoria: 'libri',
      prezzo: 19.99,
      rating: 5,
      immagine: 'mouse.png',
      disponibile: false
   },
   {
      nome: 'cintura',
      categoria: 'abbigliamento',
      prezzo: 49.99,
      rating: 2,
      immagine: 'mouse.png',
      disponibile: false
   },
   {
      nome: 'computer',
      categoria: 'elettronica',
      prezzo: 889.99,
      rating: 5,
      immagine: 'mouse.png',
      disponibile: false
   },
   {
      nome: 'monitor',
      categoria: 'elettronica',
      prezzo: 489.99,
      rating: 4,
      immagine: 'mouse.png',
      disponibile: false
   },
]






function valutazione(rating){
           switch (rating) {
      case 5:
        return `★★★★★`;
          
      case 4:
          return `★★★★☆`;
          

      case 3:
          return `★★★☆☆`;
          
      case 2:
           return `★★☆☆☆`;
          
      case 1:
          return `★☆☆☆☆`;
      
      default:
         return "☆☆☆☆☆"; 
         }
      }




const stampa = document.querySelector('#stampa')

function renderProdotti(lista) {
    let rigaIntestazione = document.createElement('tr');

    rigaIntestazione.innerHTML = `
        <th>NOME</th>
        <th>PREZZO</th>
        <th>CATEGORIA</th>
        <th>VALUTAZIONE</th>
    `;

    stampa.innerHTML = rigaIntestazione.innerHTML;

    for (let i = 0; i < lista.length; i++) {
        let celleTable = document.createElement('tr');
      
        celleTable.innerHTML = `
            <td>${lista[i].nome}</td>
            <td>${lista[i].prezzo}</td>
            <td>${lista[i].categoria}</td>
            <td>${valutazione(lista[i].rating)}</td>
        `;

        stampa.innerHTML += celleTable.innerHTML;
    }
}

renderProdotti(arrayProdottiStampa);

