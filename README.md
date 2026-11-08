# KALOS — Sito ufficiale

Questo README è **l'unica documentazione tecnica ufficiale** del repository. Prima di modificare il sito, leggerlo e verificare che la struttura reale corrisponda a quanto descritto qui. Quando cambiano architettura o procedure, aggiornare questo file: non creare manuali paralleli.

## Architettura del sito

Il sito è pubblicato su GitHub Pages all'indirizzo `https://kalosmusic.github.io/` ed è un sito statico con un'applicazione condivisa.

### File condivisi principali

| File | Funzione |
|---|---|
| `site-shell.html` | **Unica fonte del markup comune**: Home, bacheca Welcome to KALOS world, Who is KALOS, Works, Contacts, Legal, Privacy, Cookie Policy, navigazione e footer. Le modifiche ai contenuti/alla struttura di queste sezioni si fanno qui una sola volta. |
| `app-loader.js` | Carica `site-shell.html`, poi carica nell'ordine corretto i dati e il comportamento dell'applicazione. |
| `style.css` | Stile grafico condiviso per tutte le pagine dell'applicazione. |
| `script.js` | Comportamento condiviso: navigazione, interazioni, player, gallerie, selettori linguistici e dati strutturati SEO. Non deve contenere elenchi manuali duplicati delle rotte dei singoli lavori. |
| `works-data.js` | Archivio centrale di album, pubblicazioni FUN e singoli. Ogni lavoro contiene anche i propri dati di rotta e i metadati necessari. |

### File `index.html` delle singole pagine

I 16 `index.html` dell'applicazione sono **punti di ingresso leggeri**, non copie del sito. Contengono soltanto:

- metadati specifici della pagina (titolo, descrizione, canonical e anteprime social/SEO);
- un contenitore `#kalos-app`;
- il richiamo a `/app-loader.js`.

Non inserire in questi file il markup comune, le sezioni del sito, i player o copie di `script.js`/`works-data.js`. Per modificare il contenuto comune usare `site-shell.html`.

Gli indirizzi pubblici esistenti sono conservati. Gli `index.html` restano necessari perché GitHub Pages usa questi file per servire direttamente gli URL delle pagine.

### Pagine speciali non caricate dal guscio comune

- `the-kalos-files/index.html` è una pagina autonoma con il proprio codice e la propria galleria. Non fa parte dell'applicazione condivisa e non va convertita nel loader.
- `googlecd7a23545b85a61a.html` è il file di verifica Google: non modificarlo né eliminarlo senza una ragione specifica.

## Come vengono caricate le pagine

1. Il browser apre l'`index.html` dell'indirizzo richiesto.
2. `app-loader.js` recupera `/site-shell.html` e lo inserisce in `#kalos-app`.
3. Il loader carica `/works-data.js` e, solo dopo, `/script.js`.
4. `script.js` legge il percorso richiesto e mostra la sezione o il lavoro corrispondente.

Il sito usa URL assoluti dalla radice (per esempio `/works/tuesday/`, `/style.css`, `/tuesday-cover.jpg`). Mantenere questa convenzione: non trasformare i percorsi in relativi alla cartella della singola pagina.

Per una prova locale, avviare un server statico dalla cartella principale del repository (ad esempio `python -m http.server 8000`) e aprire `http://localhost:8000/`. Non aprire direttamente `index.html` con `file://`, perché il browser può bloccare il caricamento del guscio comune tramite `fetch`.

## Come aggiungere o modificare un lavoro

I contenuti dei lavori si gestiscono in `works-data.js`. Le procedure specifiche e l'ordine dei record sono documentati in questo README; non modificare `script.js` per aggiungere una nuova pubblicazione, salvo una nuova funzionalità generale.

### Album

1. Aggiungere un oggetto in `KALOS_ALBUMS`.
2. Assegnare uno `slug` univoco e stabile.
3. Impostare `url` con l'indirizzo pubblico completo, per esempio `"/works/nuovo-album/"`.
4. Impostare `albumName` (nome pulito usato nei metadati strutturati), `title`, `genre`, `cover`, `concept`, `tracks` e gli altri campi effettivamente necessari.
5. Se l'album appartiene a un artista immaginario con una propria pagina, aggiungere `artistPage` con `url`, `name`, `image` e `genre`.
6. Creare il relativo piccolo `works/.../index.html` copiando la struttura di un entrypoint esistente e aggiornando **solo** i metadati SEO specifici e il percorso canonico. Non copiare il contenuto di `site-shell.html`.
7. Caricare immagini e altri file con nomi e percorsi coerenti con i riferimenti in `works-data.js`.

### Pubblicazioni FUN

Aggiungere l'oggetto in `KALOS_FUN`, usando `category: "fun"`, uno `slug` unico, `url`, `albumName`, `title`, `genre`, `cover`, `concept`, `tracks` e gli eventuali dati YouTube. Creare il relativo piccolo entrypoint nella cartella indicata da `url`.

### Singoli

Aggiungere l'oggetto in `KALOS_SINGLES`, con `type: "single"`, uno `slug` unico, `url`, `albumName`, `title`, `genre`, `concept`, `tracks` e `youtubeVideoId`. Per i singoli con copertina, usare un percorso pubblico valido. Creare il relativo piccolo entrypoint.

### Campi di instradamento e artista

- `slug`: identificatore tecnico stabile, unico nel catalogo.
- `url`: percorso canonico diretto della pubblicazione, con slash iniziale e finale.
- `albumName`: titolo pulito per i dati strutturati SEO.
- `artistPage` (facoltativo): oggetto `{ url, name, image, genre }` che definisce la pagina artista e i relativi dati SEO strutturati.
- `artistSchemaType` (facoltativo): tipo Schema.org del soggetto artista, da specificare solo quando serve mantenere una classificazione particolare.

La navigazione diretta alle pagine dei lavori, i link generati nelle schede e i dati strutturati SEO vengono ricavati da questi campi. **Non aggiungere una seconda mappa delle rotte in `script.js`.**

## Come modificare le sezioni comuni

| Cosa si vuole modificare | File principale |
|---|---|
| Testo o struttura Welcome to KALOS world | `site-shell.html` |
| Notizia/immagine IAIMA nella bacheca | `site-shell.html` (testi EN/IT, immagine e link) |
| Who is KALOS e pulsante THE KALOS FILES | `site-shell.html` |
| Contacts, Legal, Privacy e Cookie Policy | `site-shell.html` |
| Navigazione e footer | `site-shell.html` |
| Aspetto grafico e responsive | `style.css` |
| Comportamento di navigazione, lingua, player o gallerie | `script.js` |
| Dati, testi, tracce, immagini e rotte dei lavori | `works-data.js` |

Per una modifica puramente testuale/strutturale alle sezioni comuni, modificare una sola volta `site-shell.html`. Se la modifica richiede anche una nuova regola visiva, intervenire in `style.css`; se richiede un comportamento interattivo nuovo, intervenire in `script.js`.

## THE KALOS FILES

THE KALOS FILES è una pagina autonoma raggiungibile da `/the-kalos-files/`, collegata dal pulsante presente in Who is KALOS. La galleria comprende **65 fotografie** in `the-kalos-files/images/` e **7 capitoli**. Nell'attuale repository, la definizione dei capitoli, l'ordine approvato delle fotografie, le descrizioni e il comportamento del visualizzatore sono incorporati nello script presente in `the-kalos-files/index.html`: **non esiste un file `chapters.json` separato**. La vecchia nota di installazione citava `chapters.json`, ma quell'indicazione non corrisponde a questa versione del sito.

Quando si modifica la galleria, controllare `the-kalos-files/index.html` e i file in `the-kalos-files/images/`. Non sostituire l'intera pagina con un entrypoint dell'applicazione principale.

## Regole di manutenzione e sicurezza

- Leggere questo README prima di ogni intervento e rispettare l'architettura descritta.
- Non duplicare il markup comune nei singoli `index.html`.
- Non creare una seconda documentazione tecnica: aggiornare questo README.
- Non modificare o rimuovere URL già pubblicati senza una richiesta esplicita.
- Non cambiare nomi o percorsi di immagini, copertine, playlist, file di verifica o risorse senza aggiornare e verificare tutti i riferimenti.
- Non cancellare file solo perché sembrano duplicati: verificare prima i riferimenti. I due file TUESDAY `tuesday-cover.jpg` e `tuesday-gallery-1.jpg` sono mantenuti entrambi intenzionalmente.
- Le pagine `the-kalos-files/index.html` e `googlecd7a23545b85a61a.html` sono eccezioni intenzionali.
- Prima della pubblicazione, verificare sintassi JavaScript, presenza delle risorse locali, link interni, rotte dirette e corretto caricamento del guscio comune.

## Struttura essenziale

```text
/
├── index.html
├── site-shell.html
├── app-loader.js
├── style.css
├── script.js
├── works-data.js
├── README.md
├── contacts/index.html
├── who-is-kalos/index.html
├── works/
│   ├── index.html
│   ├── .../index.html       # un piccolo entrypoint per ogni rotta pubblica
│   └── ...                  # immagini e risorse dei lavori
├── the-kalos-files/
│   ├── index.html           # pagina autonoma
│   ├── index.html           # capitoli e sequenza incorporati nello script della pagina
│   └── images/              # 65 fotografie
└── googlecd7a23545b85a61a.html
```
