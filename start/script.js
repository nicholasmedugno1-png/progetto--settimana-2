/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/

const { createElement } = require("react");


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const arrayProdotti = [
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
/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function ritrnaPrezzo() {
   for (let i = 0; i < arrayProdotti.length ; i++){
      console.log(`${arrayProdotti[i].nome} prezzo: ${arrayProdotti[i].prezzo.toFixed(2)}`)
   }
}
      console.log(ritrnaPrezzo(arrayProdotti))

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function valutazione(){
   for(let i = 0 ; i < arrayProdotti.length; i++){
      
            switch (arrayProdotti[i].rating) {
      case 5:
         console.log( `${arrayProdotti[i].nome} valutazione: 5 → ★★★★★`)
          break;
      case 4:
          console.log( `${arrayProdotti[i].nome} valutazione: 4 → ★★★★☆`)
          break;

      case 3:
          console.log( `${arrayProdotti[i].nome} valutazione: 3 → ★★★☆☆`)
          break;
      case 2:
          console.log( `${arrayProdotti[i].nome} valutazione: 2 → ★★☆☆☆`)
          break;
      case 1:
          console.log( `${arrayProdotti[i].nome} valutazione: 1 → ★☆☆☆☆`)
          break;
      default:
         return "Il prodotto non ha un rating"; 
         }
      }
}
console.log(valutazione())

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function trovaCategorie(categoria){
   for(let i = 0 ; i < arrayProdotti.length; i++){
      if(arrayProdotti[i].categoria === categoria){
         console.log(arrayProdotti[i])
      }
   }
}
console.log(trovaCategorie('elettronica'))

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function newArrayProdotti(){
   let nuovoArray = []
    for(let i = 0 ; i < arrayProdotti.length; i++){
      if( arrayProdotti[i].rating >= 3 && arrayProdotti[i].disponibile === true){
         nuovoArray.push(arrayProdotti[i])
      }
   }
   return nuovoArray
}
console.log(newArrayProdotti())

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
