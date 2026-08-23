/* ============================================================
   ARCHIVIO ALBUM KALOS
   ============================================================

   COME AGGIUNGERE UN NUOVO ALBUM
   --------------------------------
   1. Copia un intero blocco { ... } da qui sotto (da "{" alla
      "}," che lo chiude), incollalo appena PRIMA della riga
      "];" in fondo a questo file.
   2. Cambia i valori con quelli del nuovo album.
   3. Carica le immagini (copertina e galleria) nella STESSA
      cartella dove si trovano già index.html e gli altri file
      (la radice del repository — non esiste una sottocartella
      "assets") e scrivi qui i loro nomi esatti.
   4. Salva, carica questo file su GitHub sovrascrivendo quello
      vecchio.

   L'album che metti PIÙ IN ALTO nell'elenco qui sotto sarà il
   PRIMO a comparire nella pagina "Works".

   CAMPI DI OGNI ALBUM
   --------------------------------
   title    → Nome dell'album, es. "Lorna — Insatiable"
   genre    → Genere musicale, es. "Funk / Afrobeat"
   cover    → Nome del file immagine di copertina (usato anche
              nell'elenco Works), es. "lorna-insatiable.jpg"
   concept  → Il testo del Concept, in due lingue:
              concept.en → versione inglese
              concept.it → versione italiana
              Un pulsante EN/IT sul sito farà passare dall'una
              all'altra. Ogni paragrafo va tra <p> e </p>.
              Per il corsivo usa <em>parola</em>, per il
              grassetto <strong>parola</strong>.
   images   → Elenco delle immagini della galleria del Concept
              (scorrono una alla volta, con swipe). Nomi dei
              file, nello stesso ordine in cui vuoi che compaiano.
   youtubePlaylistId → Solo il codice della playlist YouTube,
              si trova nel link dopo "list=".
   tracks   → Elenco delle tracce, NELL'ORDINE REALE della
              playlist YouTube. Ogni traccia è un oggetto con:
              title  → nome della canzone
              lyrics → testo completo della canzone. Lascia ""
                       se non lo hai ancora. Per andare a capo,
                       usa \n. Il testo compare con un pulsante
                       "Lyrics" accanto al brano, dentro la
                       stessa pagina Audio (non interrompe la
                       riproduzione).
   ============================================================ */

const KALOS_WORKS = [
  {
    title: "Lorna — Insatiable",
    genre: "Funk / Afrobeat",
    cover: "lorna-insatiable.jpg",

    concept: {
      en: `
        <p>Lorna is a young Black singer, an instinctive, fierce, magnetic woman who has chosen to live by her own rules.</p>
        <p>She doesn't look for approval, she doesn't ask for permission, and most of all, she doesn't feel the need to explain her choices. Her freedom is not a slogan: it is how she lives every day, an almost animal-like attitude toward life.</p>
        <p>Lorna is sensual without being submissive, provocative without trying to shock, aggressive without turning her strength into an act. She knows exactly what she wants and, above all, she knows what she doesn't want. She belongs to no one.</p>
        <p>Her songs are about desire, sex, anger, independence, pleasure, rejection, and instinct. They talk about men, but rarely to win them over: most of the time, they are the ones who have to keep up with her. Lorna can desire someone without falling in love, seduce without promising anything, take what she wants, and walk away without giving any explanations.</p>
        <p>Musically, her world comes from a wild mix of Funk, Rock, and Afrobeat: physical, obsessive grooves, pounding bass, dirty guitars, percussive rhythms, and sudden bursts of energy. The music should feel physical, sweaty, and primal. It is not made to be elegant or comforting: it is made to move the body.</p>
        <p>Lorna sings as if every song were a form of liberation. Her voice can be sensual, rough, shouted, sarcastic, or almost animal-like; she can go from seduction to threat without asking for permission.</p>
        <p>Her sexuality is not decoration: it is power. Her anger is not self-pity: it is energy. Her independence is not a statement: it is simply the way she exists.</p>
      `,
      it: `
        <p>Lorna è una giovane cantante afroamericana, una donna istintiva, feroce e magnetica che ha scelto di vivere secondo le proprie regole.</p>
        <p>Non cerca approvazione, non chiede permesso e soprattutto non sente il bisogno di giustificare le proprie scelte. La sua libertà non è uno slogan: è un comportamento quotidiano, un atteggiamento quasi animalesco verso la vita.</p>
        <p>Lorna è sensuale senza essere accomodante, provocatoria senza cercare di scandalizzare, aggressiva senza trasformare la propria forza in una posa. Sa esattamente cosa vuole e, soprattutto, sa cosa non vuole. Non appartiene a nessuno.</p>
        <p>Le sue canzoni raccontano desiderio, sesso, rabbia, indipendenza, piacere, rifiuto e istinto. Parlano di uomini, ma raramente per conquistarli: spesso sono loro a dover stare al passo con lei. Lorna può desiderare qualcuno senza innamorarsi, sedurre senza promettere nulla, prendere ciò che vuole e andarsene senza lasciare spiegazioni.</p>
        <p>Musicalmente, il suo universo nasce dall'incontro selvaggio tra Funk, Rock e Afrobeat: groove fisici e ossessivi, bassi pulsanti, chitarre sporche, ritmi percussivi e improvvise esplosioni di energia. La musica deve avere qualcosa di corporeo, sudato e primordiale. Non è costruita per essere elegante o rassicurante: è costruita per muovere il corpo.</p>
        <p>Lorna canta come se ogni brano fosse una forma di liberazione. La sua voce può essere sensuale, roca, urlata, sarcastica o quasi animalesca; passa dalla seduzione alla minaccia senza chiedere il permesso.</p>
        <p>Il suo erotismo non è decorativo: è potere. La sua rabbia non è vittimismo: è energia. La sua indipendenza non è una dichiarazione: è il suo modo naturale di esistere.</p>
      `
    },

    images: [
      "lorna-gallery-1.jpg",
      "lorna-gallery-2.jpg",
      "lorna-gallery-3.jpg",
      "lorna-gallery-4.jpg",
      "lorna-gallery-5.jpg",
      "lorna-gallery-6.jpg"
    ],

    youtubePlaylistId: "PLOpjGYfNpjeY",

    tracks: [
      {
        title: "Still",
        lyrics: "I had it once, I want it twice,\nthe same heat at a different price.\nIt never left, it never cools,\nit pulls me back and breaks my rules.\n\nI know the weight, I know the taste,\nI want it slow, I want it chased.\nNot just the end, not just the peak,\nthe whole damn climb is what I seek.\n\nMy skin remembers every touch,\nand now it says it needs as much.\nIt calls the heat back to the bone,\nmy body will not leave it alone.\n\nI want the hands, I want the press,\nthe give, the pull, the sweet excess.\nThe breath that breaks, the grip that stays,\nI want it back, I want it days.\n\nNot done, not close, not satisfied,\nthe want comes back, it never died.\nAgain the weight, again the heat,\nagain until I lose my feet.\n\nI know the weight, I know the taste,\nI want it slow, I want it chased.\nNot just the end, not just the peak,\nthe whole damn climb is what I seek\n\nNot done, not close, not satisfied,\nthe want comes back, it never died.\nAgain the weight, again the heat,\nagain until I lose my feet.\n\nNot done, not close, not satisfied,\nthe want comes back, it never died.\nAgain the weight, again the heat,\nagain until I lose my feet."
      },
      {
        title: "Bored",
        lyrics: "bored...\nbored...\n\nAnother face, another night,\nyou talk and talk but nothing's right.\nNo spark behind those pretty eyes,\njust rehearsed moves and second-hand lies.\n\nbored...\n\nYou wear your shine like borrowed gold,\nI've touched hotter, harder, bold.\nYou got the body, not the fire,\njust enough to feed desire.\n\nbored...\n\nI'll take what's good and leave the rest,\nyou passed the skin but failed the test.\nOne night is all you'll ever be,\ntoo small a world to carry me.\n\nbored...\n\nSo come on then, just play your part,\nbored...\nI want the flesh, not what you call your heart.\nbored...\nGive me the heat, then let it end,\nbored...\nyou're not a lover, not a friend.\nbored...\n\nJust passing skin inside the dark,\nanother shape without a spark.\nI've seen a hundred just like you —\nenough to use, not enough to keep.\n\nSo come on then, just play your part,\nI want the flesh, not what you call your heart.\nGive me the heat, then let it end,\nyou're not a lover, not a friend.\n\nbored...\n\nJust passing skin inside the dark,\nanother shape without a spark.\nI've seen a hundred just like you —\nenough to use, not enough to keep.\n\nBored\nBored\nI'm\nso\nBored"
      },
      {
        title: "Hunt",
        lyrics: "I saw him from across the room,\nthe way he moved cut through the gloom.\nI didn't think, I didn't wait,\nI walked toward him, sealed his fate.\n\nI touched his arm, I held his eyes,\nno question asked, no sweet disguise.\nI know what I want when I see it clear,\nI pulled him close, I made it near.\n\nHe said my name like it was new,\nI said nothing, I just knew.\nMy hands already knew the place,\nmy mouth already knew his face.\n\nI take what calls me, take it straight,\nI don't ask twice, I don't debate.\nThe body speaks before the mind,\nI leave the hesitation behind.\n\nI had him warm, I had him real,\nI took my time, I took my feel.\nNot his to give, not mine to keep,\njust something good and dark and deep.\n\nI walked away while he still burned,\nthat's all I wanted, all I earned.\nThe hunt is over, hunger fed —\nuntil the next one turns his head.\n\nI take what calls me, take it straight,\nI don't ask twice, I don't debate.\nThe body speaks before the mind,\nI leave the hesitation behind."
      },
      {
        title: "Again",
        lyrics: "I touch my skin, I know my heat,\nbut it is never quite complete.\nIt rises fast, it falls too soon,\nlike broken light inside a room.\n\nI want it more, I want it now,\nI feel it pull me, teach me how.\nNo quiet edge, no fading spark,\nI need it loud, I need it sharp.\n\nI call the want, I call the fire,\nit twists and turns into desire.\nIt shakes my breath, it bends my spine,\nbut still it is not fully mine.\n\nI need a body not my own,\nto take the space I've never known.\nTo match the pulse I cannot slow,\nto make it rise, to make it grow.\n\nI want it hard, I want it real,\nnot just the way I make it feel.\nAgain, again, until it breaks,\nuntil it takes more than it takes.\n\nI want it hard, I want it real,\nnot just the way I make it feel.\nAgain, again, until it breaks,\nuntil it takes more than it takes.\n\nI want it hard, I want it real,\nnot just the way I make it feel.\nAgain, again, until it breaks,\nuntil it takes more than it takes."
      },
      {
        title: "Insatiable",
        lyrics: "My skin is burning, white and hot\nI'm craving things that you are not\nMy chest is tight, my breath is thick\nI need a thrill, I need it quick.\n\nMy peaks are rising, hard and cold\nI'm acting loose, I'm feeling bold\nDown in the dark, I'm slick and wide\nI'm aching for a place to hide.\n\nHard as a rock, my back is arched\nThe fire grows, my soul is parched\nMy hips are heavy, round and tight\nReady to ride you through the night.\n\nI feel the throb, I feel the sting\nI want the sweat that hunger brings\nMuscles twitching, raw and lean\nThe dirtiest thing you've ever seen.\n\nMy pulse is screaming through the floor\nI taste the salt and want some more\nMy body's locked in a fever dream\nI want to hear the silence scream.\n\nDon't ask me why, don't ask me when\nI'll take you down and back again\nI'm never full, I'm never still\nI live to hunt, I live to thrill.\n\nHard as a rock, my back is arched\nThe fire grows, my soul is parched\nMy hips are heavy, round and tight\nReady to ride you through the night.\n\nMy peaks are rising, hard and cold\nI'm acting loose, I'm feeling bold\nDown in the dark, I'm slick and wide\nI'm aching for a place to hide.\n\nDon't ask me why, don't ask me when\nI'll take you down and back again\nI'm never full, I'm never still\nI live to hunt, I live to thrill.\n\nDon't ask me why, don't ask me when\nI'll take you down and back again\nI'm never full, I'm never still\nI live to hunt, I live to thrill."
      },
      {
        title: "Don't Love Me",
        lyrics: "Don't love me, keep that lie,\nI came for heat, then goodbye.\nDon't bring me dreams, don't bring me chains,\nI want your fire, not your name.\n\nDon't whisper futures in my bed,\nI want your hands, not what you said.\nNo candle vows, no soft belief,\nI take my pleasure clean and brief.\n\nI fuck you once, then you're out,\nthat's what this night is all about.\nNo tears, no keys, no second plea,\nyou got your turn, now let me leave.\n\nI hate the eyes that ask for more,\nthe kind that wait outside my door.\nYou had the dark, you had the spark,\nnow take your shadow, leave the mark.\n\nDon't love me, you'll regret\nwanting what you'll never get.\nTouch me right, then disappear—\nI was the storm, not something dear.\n\nI fuck you once, then you're out,\nthat's what this night is all about.\nNo tears, no keys, no second plea,\nyou got your turn, now let me leave.\n\nDon't love me, you'll regret\nwanting what you'll never get.\nTouch me right, then disappear—\nI was the storm, not something dear.\n\nI fuck you once, then you're out,\nthat's what this night is all about.\nNo tears, no keys, no second plea,\nyou got your turn, now let me leave."
      },
      {
        title: "No Permission",
        lyrics: "I walk where I want, I breathe what I take,\nno line on the ground I refuse to break.\nMy skin is mine, my heat is loud,\nI move through the world like I own this crowd.\n\nHands in the air, sweat on skin,\nI don't ask twice, I just go in.\nNo judge, no chain, no silent law,\nI don't live like I did before.\n\nNo permission, no apology,\nthis body moves in full liberty.\nNo permission, no one to obey,\nI take the night, I burn the day.\n\nWe drink too fast, we laugh too hard,\nlose all names in a broken bar.\nSmoke in lungs, fire in chest,\ntonight we live like we're possessed.\n\nI don't care what they call right,\nI follow noise, I follow light.\nIf it feels real, it stays with me,\nif it doesn't bleed, it's not for me.\n\nNo permission, no apology,\nthis body moves in full liberty.\nNo permission, no one to obey,\nI take the night, I burn the day.\n\nNo permission, no apology,\nthis body moves in full liberty.\nNo permission, no one to obey,\nI take the night, I burn the day.\n\nMove with me, don't think, just fall,\nno rules survive when the drums call.\nWe are the law, we are the sound,\nwe tear the silence to the ground.\n\nNo permission, no apology,\nthis body moves in full liberty.\nNo permission, no one to obey,\nI take the night, I burn the day.\n\nNo permission, no apology,\nthis body moves in full liberty.\nNo permission, no one to obey,\nI take the night, I burn the day.\n\nIf it feels real, it stays with me,\nif it doesn't bleed, it's not for me.\nIf it feels real, it stays with me,\nif it doesn't bleed, it's not for me.\nIf it feels real, it stays with me,\nif it doesn't bleed, it's not for me."
      },
      {
        title: "Take",
        lyrics: "I don't wait for doors to part,\nI move on hunger, move on heart.\nI see the thing, I feel the flame,\nI reach before it gets a name.\n\nNo crown was laid upon my head,\nno path was warmed, no table set.\nI came through teeth, I came through bone,\nI built my fire with hands alone.\n\nMan or woman, silk or dust,\nall of us are blood and rust.\nRich or ruined, praised or blamed,\nwe break the same, we burn the same.\n\nI keep no score of race or creed,\nI only measure want and need.\nWho fights may rise, who dares may win,\nthe gate is locked from deep within.\n\nDon't call me brave, don't call me rare,\nI took the road because it's there.\nI never asked what I was worth,\nI learned it walking on this earth.\n\nNo permission, no applause,\nI never lived inside your laws.\nI don't ascend because you crawl,\nI stand because I stood through all.\n\nThis is no flag for you to raise,\nno borrowed rage, no righteous praise.\nThis is the rhythm in my chest—\nI take what calls me, keep the rest.\n\nI am a woman, fierce and whole,\nno hand was needed for my soul.\nIf I desire, I move, I make—\nthat is my name.\nI take.\n\nI am a woman, fierce and whole,\nno hand was needed for my soul.\nIf I desire, I move, I make—\nthat is my name.\nI take.\n\nI am a woman, fierce and whole,\nno hand was needed for my soul.\nIf I desire, I move, I make—\nthat is my name.\nI take."
      },
      {
        title: "Get Gone",
        lyrics: "Who the fuck is in my bed,\nwhose arm is this, whose heavy head?\nLight hits hard, my skull feels dead,\nI was drunk off my fucking head.\n\nDon't look at me like this means shit,\nlast night burned out — that's it.\nYou stayed too long, you missed the cue,\nmorning's here and I'm done with you.\n\nGet up.\nGet dressed.\nGet gone.\nGet up.\nGet dressed.\nGet gone.\n\nGet your clothes up off my chair,\nyou don't belong in my air.\nYour breathing loud, your body heat,\nget your hands off my fucking sheets.\n\nYou smell like last night's bad idea,\nwarm beer, smoke and cheap veneer.\nDon't try to smile, don't try to speak,\nI want you gone before I freak.\n\nGet up.\nGet dressed.\nGet gone.\nGet up.\nGet dressed.\nGet gone.\n\nI don't do coffee, names or stays,\nI don't replay these kinds of days.\nWhatever this was died with dark,\nnow you're just noise after the spark.\n\nDoor's right there — use your feet,\nback to whatever owns your street.\nNo goodbye kiss, no second round,\njust get the fuck out of my house.\n\nGet up.\nGet dressed.\nGet the fuck out.\nGet up.\nGet dressed.\nGet the fuck out!\nGET THE FUCK OUT!"
      },
      {
        title: "Funk A",
        lyrics: "Bassline deep in your blood.\nSweat running down your back.\nToo hot.\nToo loud.\nToo close.\nFUNK.\nFUNK!\n\nToo hot.\nToo loud.\nToo close.\nFUNK!\n\nI GOT IT IN MY BLOOD!\nFUNK!\nYOU GOT IT IN YOUR BONES!\nFUNK!\nFUNK!\n\nMove.\nI said move.\nFUNK!\n\nDrums hit hard — bodies shake,\nsmoke in the room and the floor might break\nFUNK!\nFUNK!\n\nMore.\nGive me more.\nFUNK!\n\nHands on skin.\nHeat in mouths.\nNo thinking now.\nFUNK.\nFUNK!\n\nToo hot.\nToo loud.\nToo close.\nFUNK!\n\nShake it loose.\nLose your head.\nFeel the rhythm in your chest.\nFUNK!\n\nMOVE YOUR ASS\nFUNK!\nC'MON BABY\nFUNK!\nMOVE YOUR ASS\nFUNK!\n\nToo fast.\nToo hard.\nDon't stop.\nFUNK!\nFUNK!\n\nMOVE YOUR ASS!\nFUNK!\nFUNK!\n\nFUNK\nBlood in the groove.\nFUNK\nSweat in the air.\nFUNK\nNobody clean anymore.\nFUNK\nMove.\nMOVE.\nFUNK!"
      }
    ]
  },

  // Per il prossimo album: copia il blocco qui sopra (da { a },)
  // e incollalo qui sotto con i nuovi contenuti.

];
