/* Questo file gestisce il comportamento del sito.
   I CONTENUTI degli album (titoli, testi, tracce...) NON sono
   qui: sono nel file works-data.js, pensato per essere
   modificato senza toccare questo codice. */

const list = document.getElementById("works-list");

const KALOS_WORK_URLS = {
  "morchia-1": { artist: "/works/morchia-quartet/", album: "/works/morchia-quartet/morchia-1/", artistName: "Morchia Quartet", albumName: "Morchia 1" },
  "insatiable": { artist: "/works/lorna/", album: "/works/lorna/insatiable/", artistName: "Lorna", albumName: "Insatiable" },
  "tuesday": { artist: null, album: "/works/tuesday/", artistName: "KALOS", albumName: "TUESDAY" },
  "sugar-static": { artist: null, album: "/works/singles/sugar-static/", artistName: "KALOS", albumName: "Sugar Static" },
  "i-dont-do-simple": { artist: null, album: "/works/singles/i-dont-do-simple/", artistName: "KALOS", albumName: "I Don't Do Simple" },
  "entropia": { artist: null, album: "/works/singles/entropia/", artistName: "KALOS", albumName: "Entropia" }
};

function currentPath() {
  return window.location.pathname.replace(/^\/+|\/+$/g, "");
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderWorks() {
  // Real, independently addressable categories. No singles mixed into album list.
  list.insertAdjacentHTML("beforebegin", `
    <nav class="works-categories" aria-label="Works categories">
      <a href="/works/" data-works-category="albums">ALBUMS</a>
      <a href="/works/singles/" data-works-category="singles">SINGLES</a>
    </nav>
  `);
  list.innerHTML = KALOS_WORKS.map((work, wIndex) => `
    <article class="work" data-work="${wIndex}" data-work-type="${work.type === "single" ? "single" : "album"}" data-work-slug="${work.slug}">
      <button class="work-trigger" type="button" aria-expanded="false">
        <span>${work.title}</span>
        <span class="symbol">+</span>
      </button>
      <div class="work-panel">
        <div class="work-panel-inner">
          <div class="work-content">
            ${work.cover
              ? `<img class="work-cover" src="${work.cover}" alt="${escapeHtml(work.title)} cover"${work.type === "single" ? ' loading="lazy" decoding="async"' : ''}>`
              : `<div class="work-cover work-cover--single" role="img" aria-label="${escapeHtml(work.title)} — KALOS single artwork"><span>KALOS / SINGLE</span><strong>${escapeHtml(work.title)}</strong><small>WRONG FREQUENCY</small></div>`}
            <div class="work-meta">
              <h2>${work.title}</h2>
              <div class="genre">${work.genre}</div>

              <div class="tabs" role="tablist">
                <button class="tab active" type="button" data-tab="concept">Concept</button>
                <button class="tab" type="button" data-tab="audio">Audio</button>
                ${work.videos?.length ? '<button class="tab" type="button" data-tab="video">Video</button>' : ''}
              </div>

              <div class="tab-content active" data-content="concept">

                ${work.images && work.images.length ? `
                  <div class="gallery" data-gallery>
                    ${work.images.map((img, iIndex) => `
                      <div class="gallery-slide" data-gallery-slide="${iIndex}">
                        <img src="${img}" alt="${work.title} — image ${iIndex + 1}" loading="lazy">
                      </div>
                    `).join("")}
                  </div>
                  ${work.images.length > 1 ? `
                    <div class="gallery-dots" data-gallery-dots>
                      ${work.images.map((_, iIndex) => `
                        <button class="gallery-dot ${iIndex === 0 ? "active" : ""}" type="button" data-gallery-dot="${iIndex}" aria-label="Image ${iIndex + 1}"></button>
                      `).join("")}
                    </div>
                  ` : ""}
                ` : ""}

                <div class="lang-toggle" data-lang-toggle>
                  <button class="lang-btn active" type="button" data-lang="en">EN</button>
                  <button class="lang-btn" type="button" data-lang="it">IT</button>
                </div>

                <div class="concept-text active" data-concept-lang="en">${work.concept.en}</div>
                <div class="concept-text" data-concept-lang="it">${work.concept.it}</div>

                <a class="concept-copyright" href="/#legal" data-target="legal">© 2026 KALOS</a>
                ${work.type === "single" ? `<div class="single-links"><a href="https://www.youtube.com/watch?v=${work.youtubeVideoId}" target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href="https://facebook.com/KALOSmusicproject" target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href="/#legal" data-target="legal">Legal ↗</a></div>` : ''}
              </div>

              <div class="tab-content" data-content="audio">
                <div class="yt-player">
                  <div class="yt-player-placeholder" data-player-placeholder>
                    <span>Choose a track to play</span>
                  </div>
                  <div class="yt-player-frame" data-player-frame hidden></div>
                </div>
                ${work.youtubeVideoId ? `<a class="single-youtube-link" href="https://www.youtube.com/watch?v=${work.youtubeVideoId}" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a>` : ''}
                ${work.tracks.map((track, tIndex) => `
                  <div class="track" data-track-index="${tIndex}">
                    <div class="track-row">
                      <button class="track-play" type="button" aria-label="Play ${escapeHtml(track.title)}">
                        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                          <path d="M6 4l14 8-14 8V4z" fill="currentColor"/>
                        </svg>
                      </button>
                      <span class="track-index">${String(tIndex + 1).padStart(2, "0")}</span>
                      <span class="track-title">${track.title}</span>
                      ${work.instrumental ? "" : `<button class="track-lyrics-toggle" type="button" data-lyrics-toggle>Lyrics</button>`}
                    </div>
                    ${work.instrumental ? "" : `
                    <div class="track-lyrics" data-track-lyrics hidden>
                      ${track.lyrics
                        ? `<div class="lyric-text">${escapeHtml(track.lyrics).replace(/\n/g, "<br>")}</div>`
                        : `<p class="lyrics-note">Lyrics coming soon.</p>`
                      }
                    </div>
                    `}
                  </div>
                `).join("")}
              </div>

              ${work.videos?.length ? `
              <div class="tab-content" data-content="video">
                <div class="video-player" data-video-player hidden></div>
                <a class="video-external" data-video-external href="#" target="_blank" rel="noopener noreferrer" hidden>Watch on YouTube ↗</a>
                <div class="video-list">
                  ${work.videos.map(video => `
                    <button type="button" class="video-choice" data-video-id="${video.id}" data-video-title="${escapeHtml(video.title)}" aria-label="Play video ${escapeHtml(video.title)}">
                      <span class="video-thumb"><img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" loading="lazy" alt="" referrerpolicy="no-referrer"><span aria-hidden="true" class="video-play-symbol">▶</span></span>
                      <span class="video-name">${escapeHtml(video.title)}${video.short ? '<small>SHORT</small>' : ''}</span>
                    </button>
                  `).join("")}
                </div>
              </div>` : ''}

            </div>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  attachWorkBehaviour();

  document.querySelectorAll("[data-works-category]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const url = link.getAttribute("href");
      if (window.location.pathname !== url) history.pushState({}, "", url);
      initRoute(); // closes details, resets players and displays only the chosen list
    });
  });
}

function selectWorksCategory(category) {
  const chosen = category === "singles" ? "singles" : "albums";
  list.dataset.category = chosen;
  document.querySelectorAll("[data-works-category]").forEach(link => {
    const active = link.dataset.worksCategory === chosen;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function attachWorkBehaviour() {
  // Links generated dynamically inside work content (e.g. the "© 2026 KALOS"
  // legal link in Concept) aren't caught by the page's initial data-target
  // wiring, since that runs before this content exists — handle them here.
  document.querySelectorAll(".work [data-target]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.dataset.target;
      setView(target);
      if (target === "legal" && (window.location.pathname !== "/" || window.location.hash !== "#legal")) {
        history.pushState({}, "", "/#legal");
      }
    });
  });

  document.querySelectorAll(".work-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const current = trigger.closest(".work");
      const isOpen = current.classList.contains("open");

      document.querySelectorAll(".work.open").forEach(work => {
        if (work !== current) {
          work.classList.remove("open");
          work.querySelector(".work-trigger").setAttribute("aria-expanded", "false");
          stopPlayer(work);
          stopVideo(work);
        }
      });

      current.classList.toggle("open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
      if (isOpen) {
        stopPlayer(current);
        stopVideo(current);
        const listUrl = current.dataset.workType === "single" ? "/works/singles/" : "/works/";
        if (window.location.pathname !== listUrl) history.pushState({}, "", listUrl);
        clearRoutePresentation();
      } else {
        const workSlug = current.dataset.workSlug;
        const url = KALOS_WORK_URLS[workSlug]?.album;
        if (url && window.location.pathname !== url) history.pushState({}, "", url);
      }
    });
  });

  document.querySelectorAll(".work").forEach(workEl => {
    const wIndex = Number(workEl.dataset.work);
    const work = KALOS_WORKS[wIndex];

    // Tabs
    workEl.querySelectorAll(".tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        workEl.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        workEl.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        tab.classList.add("active");
        workEl.querySelector(`[data-content="${target}"]`).classList.add("active");
        if (target !== "audio") stopPlayer(workEl);
        if (target !== "video") stopVideo(workEl);
      });
    });

    // Track play buttons -> load embedded YouTube player at the right playlist index
    workEl.querySelectorAll(".track-play").forEach(btn => {
      btn.addEventListener("click", () => {
        const trackEl = btn.closest(".track");
        const tIndex = Number(trackEl.dataset.trackIndex);
        stopVideo(workEl);
        playTrack(workEl, work, wIndex, tIndex);
      });
    });

    // Video gallery: only one player at a time, loaded after an explicit click.
    workEl.querySelectorAll("[data-video-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        stopPlayer(workEl);
        const player = workEl.querySelector("[data-video-player]");
        if (!player) return;
        const videoId = btn.dataset.videoId;
        player.hidden = false;
        player.replaceChildren();
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
        iframe.title = btn.dataset.videoTitle;
        iframe.loading = "lazy";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        player.appendChild(iframe);
        const external = workEl.querySelector("[data-video-external]");
        if (external) {
          external.href = `https://www.youtube.com/watch?v=${videoId}`;
          external.hidden = false;
        }
        workEl.querySelectorAll(".video-choice").forEach(item => {
          item.classList.toggle("active", item === btn);
        });
      });
    });

    // Per-track lyrics toggle — opens inline, does NOT touch the player
    workEl.querySelectorAll("[data-lyrics-toggle]").forEach(btn => {
      btn.addEventListener("click", () => {
        const trackEl = btn.closest(".track");
        const panel = trackEl.querySelector("[data-track-lyrics]");
        const isOpen = !panel.hidden;
        panel.hidden = isOpen;
        btn.classList.toggle("active", !isOpen);
        btn.textContent = isOpen ? "Lyrics" : "Hide lyrics";
      });
    });

    // Concept language toggle (EN / IT)
    const langToggle = workEl.querySelector("[data-lang-toggle]");
    if (langToggle) {
      langToggle.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const lang = btn.dataset.lang;
          langToggle.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          workEl.querySelectorAll("[data-concept-lang]").forEach(el => {
            el.classList.toggle("active", el.dataset.conceptLang === lang);
          });
        });
      });
    }

    // Gallery: swipe (native scroll-snap) + dot navigation, dots follow scroll position
    const gallery = workEl.querySelector("[data-gallery]");
    if (gallery) {
      const dots = workEl.querySelectorAll("[data-gallery-dot]");
      const slides = workEl.querySelectorAll("[data-gallery-slide]");

      dots.forEach(dot => {
        dot.addEventListener("click", () => {
          const index = Number(dot.dataset.galleryDot);
          slides[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        });
      });

      if (slides.length && dots.length) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
              const index = Number(entry.target.dataset.gallerySlide);
              dots.forEach(d => d.classList.remove("active"));
              const activeDot = workEl.querySelector(`[data-gallery-dot="${index}"]`);
              if (activeDot) activeDot.classList.add("active");
            }
          });
        }, { root: gallery, threshold: [0.6] });

        slides.forEach(slide => observer.observe(slide));
      }
    }
  });
}

/* ===== YouTube player (uses the official IFrame API for reliable
   track jumping — the simple ?index= URL parameter is unreliable
   and often always plays the first video) ===== */

let ytApiReady = false;
let ytApiLoading = false;
const ytApiCallbacks = [];
const ytPlayers = {}; // one real YT.Player instance per open album, keyed by work index

function loadYouTubeApi(callback) {
  if (ytApiReady) { callback(); return; }
  ytApiCallbacks.push(callback);
  if (ytApiLoading) return;
  ytApiLoading = true;

  window.onYouTubeIframeAPIReady = function () {
    ytApiReady = true;
    ytApiCallbacks.splice(0).forEach(cb => cb());
  };

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
}

function playTrack(workEl, work, wIndex, tIndex) {
  const placeholder = workEl.querySelector("[data-player-placeholder]");
  const frame = workEl.querySelector("[data-player-frame]");

  workEl.querySelectorAll(".track").forEach(t => t.classList.remove("playing"));
  workEl.querySelector(`.track[data-track-index="${tIndex}"]`).classList.add("playing");

  // Standalone songs use their own video ID: no fake playlist is required.
  if (work.youtubeVideoId) {
    frame.hidden = false;
    placeholder.hidden = true;
    frame.replaceChildren();
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${work.youtubeVideoId}?autoplay=1`;
    iframe.title = work.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    frame.appendChild(iframe);
    return;
  }

  const existing = ytPlayers[wIndex];
  if (existing && existing.ready) {
    placeholder.hidden = true;
    frame.hidden = false;
    existing.player.playVideoAt(tIndex);
    return;
  }

  placeholder.hidden = true;
  frame.hidden = false;

  loadYouTubeApi(() => {
    // Avoid creating it twice if the user clicked fast more than once
    if (ytPlayers[wIndex]) {
      if (ytPlayers[wIndex].ready) ytPlayers[wIndex].player.playVideoAt(tIndex);
      else ytPlayers[wIndex].pendingIndex = tIndex;
      return;
    }

    const mount = document.createElement("div");
    frame.innerHTML = "";
    frame.appendChild(mount);

    const entry = { player: null, ready: false, pendingIndex: tIndex };
    ytPlayers[wIndex] = entry;

    entry.player = new YT.Player(mount, {
      host: "https://www.youtube-nocookie.com",
      playerVars: {
        listType: "playlist",
        list: work.youtubePlaylistId,
        autoplay: 1
      },
      events: {
        onReady: () => {
          entry.ready = true;
          entry.player.playVideoAt(entry.pendingIndex);
        }
      }
    });
  });
}

function stopPlayer(workEl) {
  const frame = workEl.querySelector("[data-player-frame]");
  const placeholder = workEl.querySelector("[data-player-placeholder]");
  const wIndex = Number(workEl.dataset.work);
  if (!frame) return;

  const entry = ytPlayers[wIndex];
  if (entry && entry.ready) {
    entry.player.pauseVideo();
  }
  if (KALOS_WORKS[wIndex]?.youtubeVideoId) frame.replaceChildren();

  frame.hidden = true;
  if (placeholder) placeholder.hidden = false;
  workEl.querySelectorAll(".track.playing").forEach(t => t.classList.remove("playing"));
}

function stopVideo(workEl) {
  const player = workEl.querySelector("[data-video-player]");
  if (!player) return;
  player.replaceChildren(); // removes the iframe and actually stops playback
  player.hidden = true;
  const external = workEl.querySelector("[data-video-external]");
  if (external) external.hidden = true;
  workEl.querySelectorAll(".video-choice.active").forEach(btn => btn.classList.remove("active"));
}

/* ===== View switching (Home / Who / Works — separate, non-scrolling worlds) ===== */

const body = document.body;
const logoMark = document.querySelector(".logo-mark");
const logoWordmark = document.querySelector(".logo-wordmark");
const logoSubtitle = document.querySelector(".logo-subtitle");

function replayLogoAnimation() {
  [logoMark, logoWordmark, logoSubtitle].forEach(el => {
    if (!el) return;
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
  });
}

function clearRoutePresentation() {
  list.classList.remove("is-detail");
  document.querySelectorAll(".work").forEach(el => {
    el.classList.remove("route-hidden", "artist-profile");
    const index = Number(el.dataset.work);
    const heading = el.querySelector(".work-meta h2");
    if (heading && KALOS_WORKS[index]) heading.textContent = KALOS_WORKS[index].title;
    const oldLink = el.querySelector(".artist-album-link");
    if (oldLink) oldLink.remove();
  });
}

function setView(view) {
  document.querySelectorAll(".work.open").forEach(workEl => {
    stopPlayer(workEl);
    stopVideo(workEl);
  });
  clearRoutePresentation();
  body.dataset.view = view;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  if (view === "home") {
    replayLogoAnimation();
  }
}

document.querySelectorAll("[data-target]").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.dataset.target;
    setView(target);
    const url = { home: "/", who: "/who-is-kalos/", works: "/works/", contacts: "/contacts/", legal: "/#legal" }[target];
    if (url && `${window.location.pathname}${window.location.hash}` !== url) history.pushState({}, "", url);
    if (target === "works") initRoute();
  });
});

/* ===== EN / IT toggle for static pages (Who is KALOS, Contacts).
   Separate from the per-album concept toggle above, which is
   generated dynamically inside each .work — this one handles
   the toggles that are already present in the static HTML. */

function initStaticLangToggles() {
  document.querySelectorAll("[data-lang-toggle]").forEach(toggle => {
    if (toggle.closest(".work")) return; // handled by attachWorkBehaviour instead

    const group = toggle.dataset.langToggle;
    toggle.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        toggle.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.querySelectorAll(`[data-lang-group="${group}"]`).forEach(el => {
          el.classList.toggle("active", el.dataset.pageLang === lang);
        });
      });
    });
  });
}

/* ===== Structured data (schema.org) for search engines.
   Generated automatically from KALOS_WORKS, so every new album added
   to works-data.js gets picked up here too — nothing to maintain by hand. */

function injectStructuredData() {
  const path = currentPath();
  const routeToWork = {
    "works/morchia-quartet/morchia-1": "morchia-1",
    "works/lorna/insatiable": "insatiable",
    "works/tuesday": "tuesday",
    "works/singles/sugar-static": "sugar-static",
    "works/singles/i-dont-do-simple": "i-dont-do-simple",
    "works/singles/entropia": "entropia"
  };
  const artistRoutes = {
    "works/morchia-quartet": { name: "Morchia Quartet", image: "morchia-gallery-6.jpg", genre: "Experimental / Noise / Post-Hardcore / Jazzcore", url: "/works/morchia-quartet/" },
    "works/lorna": { name: "Lorna", image: "lorna-gallery-5.jpg", genre: "Funk / Rock / Afrobeat", url: "/works/lorna/" }
  };

  let data = null;
  if (Object.prototype.hasOwnProperty.call(routeToWork, path)) {
    const slug = routeToWork[path];
    const work = KALOS_WORKS.find(item => item.slug === slug);
    const info = KALOS_WORK_URLS[slug];
    data = {
      "@context": "https://schema.org",
      "@type": work.type === "single" ? "MusicRecording" : "MusicAlbum",
      "name": info.albumName,
      "byArtist": { "@type": (slug === "tuesday" || work.type === "single") ? "Organization" : "MusicGroup", "name": info.artistName, ...(info.artist ? { "url": `https://kalosmusic.github.io${info.artist}` } : {}) },
      "genre": work.genre,
      ...(work.cover ? { "image": `https://kalosmusic.github.io/${work.cover}` } : {}),
      "url": `https://kalosmusic.github.io${info.album}`,
      ...(work.youtubeVideoId ? { "sameAs": `https://www.youtube.com/watch?v=${work.youtubeVideoId}` } : {}),
      "publisher": { "@type": "Organization", "name": "KALOS", "url": "https://kalosmusic.github.io/" },
      ...(work.type === "single" ? { "lyrics": { "@type": "CreativeWork", "text": work.tracks[0].lyrics } } :
      { "track": work.tracks.map((track, i) => ({ "@type": "MusicRecording", "name": track.title, "position": i + 1 })) })
    };
  } else if (artistRoutes[path]) {
    const a = artistRoutes[path];
    data = {
      "@context": "https://schema.org",
      "@type": "MusicGroup",
      "name": a.name,
      "genre": a.genre,
      "image": `https://kalosmusic.github.io/${a.image}`,
      "url": `https://kalosmusic.github.io${a.url}`,
      "memberOf": { "@type": "Organization", "name": "KALOS", "url": "https://kalosmusic.github.io/" }
    };
  }

  if (data) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.routeSchema = "true";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
}

renderWorks();
initStaticLangToggles();
injectStructuredData();

function initRoute() {
  const path = currentPath();
  const routeMap = {
    "": { view: "home" },
    "who-is-kalos": { view: "who" },
    "works": { view: "works", category: "albums" },
    "works/singles": { view: "works", category: "singles" },
    "contacts": { view: "contacts" },
    "works/lorna": { view: "works", workSlug: "insatiable", artistProfile: true },
    "works/lorna/insatiable": { view: "works", workSlug: "insatiable" },
    "works/tuesday": { view: "works", workSlug: "tuesday" },
    "works/morchia-quartet": { view: "works", workSlug: "morchia-1", artistProfile: true },
    "works/morchia-quartet/morchia-1": { view: "works", workSlug: "morchia-1" },
    "works/singles/sugar-static": { view: "works", workSlug: "sugar-static" },
    "works/singles/i-dont-do-simple": { view: "works", workSlug: "i-dont-do-simple" },
    "works/singles/entropia": { view: "works", workSlug: "entropia" }
  };
  const route = (window.location.hash === "#legal") ? { view: "legal" } : (routeMap[path] || { view: "home" });
  setView(route.view);

  document.querySelectorAll(".work").forEach(el => {
    el.classList.remove("route-hidden", "artist-profile", "open");
    const trigger = el.querySelector(".work-trigger");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
    const oldLink = el.querySelector(".artist-album-link");
    if (oldLink) oldLink.remove();
  });

  // Direct links to a single select SINGLES; album routes select ALBUMS.
  const selectedWork = route.workSlug && KALOS_WORKS.find(work => work.slug === route.workSlug);
  selectWorksCategory(route.category || (selectedWork?.type === "single" ? "singles" : "albums"));

  if (route.workSlug) {
    list.classList.add("is-detail");
    document.querySelectorAll(".work").forEach(el => {
      if (el.dataset.workSlug !== route.workSlug) el.classList.add("route-hidden");
    });
    const workEl = document.querySelector(`.work[data-work-slug="${route.workSlug}"]`);
    if (workEl) {
      workEl.classList.add("open");
      const trigger = workEl.querySelector(".work-trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "true");

      if (route.artistProfile) {
        workEl.classList.add("artist-profile");
        const info = KALOS_WORK_URLS[route.workSlug];
        const heading = workEl.querySelector(".work-meta h2");
        if (heading && info) heading.textContent = info.artistName;
        const concept = workEl.querySelector('[data-content="concept"]');
        if (concept && info?.album) {
          const link = document.createElement("a");
          link.className = "artist-album-link";
          link.href = info.album;
          link.textContent = `${info.albumName} — album`;
          concept.appendChild(link);
        }
      }
    }
  }
}

window.addEventListener("popstate", initRoute);
initRoute();


/* SEO route URLs: keep the existing app-like navigation while exposing real URLs. */
const KALOS_VIEW_URLS = { home: "/", who: "/who-is-kalos/", works: "/works/", contacts: "/contacts/", legal: "/#legal" };
document.querySelectorAll("[data-target]").forEach(link => {
  const url = KALOS_VIEW_URLS[link.dataset.target];
  if (url) link.setAttribute("href", url);
});
