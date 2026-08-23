/* ============================================================
   ARCHIVIO ALBUM KALOS
   ============================================================

   COME AGGIUNGERE UN NUOVO ALBUM
   --------------------------------
   1. Copia un intero blocco { ... } da qui sotto (da "{" alla
      "}," che lo chiude), incollalo appena PRIMA della riga
      "];" in fondo a questo file.
   2. Cambia i valori con quelli del nuovo album.
   3. Carica l'immagine di copertina nella STESSA cartella dove
      si trovano già index.html e gli altri file (la radice del
      repository — non esiste una sottocartella "assets", tutte
      le immagini stanno lì insieme al resto) e scrivi qui il
      suo nome esatto nel campo "cover".
   4. Salva, carica questo file su GitHub sovrascrivendo quello
      vecchio (o con un nuovo nome se preferisci evitare la
      cache — vedi index.html in quel caso).

   L'album che metti PIÙ IN ALTO nell'elenco qui sotto sarà il
   PRIMO a comparire nella pagina "Works". Quindi per mettere un
   nuovo album sopra Lorna, incollalo prima del blocco di Lorna.
   Per metterlo sotto, incollalo dopo.

   CAMPI DI OGNI ALBUM
   --------------------------------
   title    → Nome dell'album, es. "Lorna — Insatiable"
   genre    → Genere musicale, es. "Funk / Afrobeat"
   cover    → Nome del file immagine (caricato nella radice del
              repository, insieme agli altri file), es. "lorna-insatiable.jpg"
   concept  → Il testo del Concept. Puoi scrivere più paragrafi:
              ogni paragrafo va tra <p> e </p>. Per una parola in
              corsivo usa <em>parola</em>, per il grassetto usa
              <strong>parola</strong>.
   youtubePlaylistId → Solo il codice della playlist YouTube,
              NON l'intero link. Si trova nel link dopo "list=".
              Esempio: nel link
              https://youtube.com/playlist?list=PLOpjGYfNpjeY
              il codice è: PLOpjGYfNpjeY
   tracks   → Elenco delle tracce, nell'ordine in cui compaiono
              nella playlist YouTube (l'icona play di ogni
              traccia farà partire automaticamente il brano
              corrispondente in quella posizione della playlist,
              quindi l'ordine qui DEVE coincidere con l'ordine
              reale su YouTube).
   lyrics   → Il testo di ogni canzone. Se non hai ancora il
              testo di una canzone, lascia il valore vuoto: ""
              Per andare a capo dentro un testo, usa \n
              Per aggiungere una traduzione, usa il campo
              "translation" (facoltativo — se non ti serve,
              cancella semplicemente quella riga).
   ============================================================ */

const KALOS_WORKS = [
  {
    title: "Lorna — Insatiable",
    genre: "Funk / Afrobeat",
    cover: "lorna-insatiable.jpg",
    concept: `
      <p><strong>Lorna</strong> è una cantante immaginaria: giovane, bella, carismatica, sensuale, diretta e feroce.</p>
      <p><em>Insatiable</em> esplora la sua quotidianità, il suo modo di pensare e le esperienze che modellano il suo mondo, attraverso una raccolta di brani funk e afrobeat.</p>
    `,
    youtubePlaylistId: "PLOpjGYfNpjeY",
    tracks: [
      "Still",
      "Bored",
      "Hunt",
      "Again",
      "Insatiable",
      "Don't Love Me",
      "No Permission",
      "Take",
      "Get Gone",
      "Funk A"
    ],
    lyrics: [
      { title: "Still", text: "", translation: "" },
      { title: "Bored", text: "", translation: "" },
      { title: "Hunt", text: "", translation: "" },
      { title: "Again", text: "", translation: "" },
      { title: "Insatiable", text: "", translation: "" },
      { title: "Don't Love Me", text: "", translation: "" },
      { title: "No Permission", text: "", translation: "" },
      { title: "Take", text: "", translation: "" },
      { title: "Get Gone", text: "", translation: "" },
      { title: "Funk A", text: "", translation: "" }
    ]
  },

  // Per il prossimo album: copia il blocco qui sopra (da { a },)
  // e incollalo qui sotto con i nuovi contenuti.

];
