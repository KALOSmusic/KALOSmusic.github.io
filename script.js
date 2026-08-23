const works = [
  {
    title: "Lorna — Insatiable",
    genre: "Funk / Afrobeat",
    cover: "lorna-insatiable.jpg",
    concept: `
      <p><strong>Lorna</strong> is a fictional singer: young, beautiful, Black, charismatic, sensual, outspoken and fierce.</p>
      <p><em>Insatiable</em> explores her everyday life, her way of thinking and the experiences that shape her world, through a collection of funk and afrobeat songs.</p>
    `,
    tracks: [
      "Still", "Bored", "Hunt", "Again", "Insatiable",
      "Don't Love Me", "No Permission", "Take", "Get Gone", "Funk A"
    ],
    youtube: "https://youtube.com/playlist?list=PLOpjGYfNpjeY&si=5oRIIWCofe5tAJcI",
    lyrics: `<p class="lyrics-note">Lyrics will be added here. The final version will support original text and, where useful, an Italian translation.</p>`
  }
];

const list = document.getElementById("works-list");

function renderWorks() {
  list.innerHTML = works.map((work, index) => `
    <article class="work">
      <button class="work-trigger" type="button" aria-expanded="false">
        <span>${work.title}</span>
        <span class="symbol">+</span>
      </button>
      <div class="work-panel">
        <div class="work-panel-inner">
          <div class="work-content">
            <img class="work-cover" src="${work.cover}" alt="${work.title} cover">
            <div class="work-meta">
              <h2>${work.title}</h2>
              <div class="genre">${work.genre}</div>

              <div class="tabs" role="tablist">
                <button class="tab active" type="button" data-tab="concept">Concept</button>
                <button class="tab" type="button" data-tab="audio">Audio</button>
                <button class="tab" type="button" data-tab="lyrics">Lyrics</button>
              </div>

              <div class="tab-content active" data-content="concept">${work.concept}</div>
              <div class="tab-content" data-content="audio">
                ${work.tracks.map((track, i) => `
                  <div class="track"><span>${String(i + 1).padStart(2, "0")}</span><span>${track}</span></div>
                `).join("")}
                <a class="listen" href="${work.youtube}" target="_blank" rel="noopener">Listen on YouTube ↗</a>
              </div>
              <div class="tab-content" data-content="lyrics">${work.lyrics}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".work-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const current = trigger.closest(".work");
      const isOpen = current.classList.contains("open");

      document.querySelectorAll(".work.open").forEach(work => {
        if (work !== current) {
          work.classList.remove("open");
          work.querySelector(".work-trigger").setAttribute("aria-expanded", "false");
        }
      });

      current.classList.toggle("open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.querySelectorAll(".work").forEach(work => {
    work.querySelectorAll(".tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        work.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        work.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        tab.classList.add("active");
        work.querySelector(`[data-content="${target}"]`).classList.add("active");
      });
    });
  });
}

/* ===== View switching (Home / Who / Works — separate, non-scrolling worlds) ===== */

const body = document.body;
const logoMark = document.querySelector(".logo-mark");
const logoWordmark = document.querySelector(".logo-wordmark");

function replayLogoAnimation() {
  [logoMark, logoWordmark].forEach(el => {
    if (!el) return;
    el.style.animation = "none";
    // Force reflow so the animation can be re-triggered
    void el.offsetWidth;
    el.style.animation = "";
  });
}

function setView(view) {
  body.dataset.view = view;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  if (view === "home") {
    replayLogoAnimation();
  }
}

document.querySelectorAll("[data-target]").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    setView(link.dataset.target);
  });
});

renderWorks();
setView("home");
