let progress = 0;
let mode = "gallery"; // "gallery" | "map"

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("onboarding-canvas");

  stroke(255, 120);
  strokeWeight(1);
  noFill();
}

function draw() {
  clear();

  let cols = 12;
  let rows = 12;

  let spacingX = width / cols;
  let spacingY = height / rows;

  // =========================
  // MAP MODE (STABIL)
  // =========================
  if (mode === "map") {
    drawGridMap();
    return; // 👈 WICHTIG: alles andere stoppen
  }

  // =========================
  // GALLERY MODE (ANIMATION)
  // =========================
  progress += 0.02;
  progress = constrain(progress, 0, 1);

  let eased = easeOutCubic(progress);

  // VERTIKALE LINIEN
  for (let i = 0; i <= cols; i++) {
    let x = i * spacingX;

    beginShape();

    for (let y = -40; y <= height + 40; y += 20) {
      let n = noise(x * 0.01, y * 0.01);
      let distortedX = x + map(n, 0, 1, -60, 60);
      let finalX = lerp(distortedX, x, eased);
      curveVertex(finalX, y);
    }

    endShape();
  }

  // HORIZONTALE LINIEN
  for (let i = 0; i <= rows; i++) {
    let y = i * spacingY;

    beginShape();

    for (let x = -40; x <= width + 40; x += 20) {
      let n = noise(x * 0.01, y * 0.01);
      let distortedY = y + map(n, 0, 1, -60, 60);
      let finalY = lerp(distortedY, y, eased);
      curveVertex(x, finalY);
    }

    endShape();
  }
}

// 👉 Smooth easing
function easeOutCubic(t) {
  return 1 - pow(1 - t, 3);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// =====================
// PROJECT DATA
// =====================
const projectData = [
  {
    slug: "scrollytelling",
    title: "Scrollytelling",
    text: "Die Schweizer Bergwelt ist jedes Jahr Anziehungspunkt für viele Menschen, wobei durchschnittlich 122 Personen pro Jahr in Notsituationen ihr Leben verlieren. In den letzten Jahren zeichnet sich ein bemerkenswerter Trend ab. Doch wie sollen diese Zahlen interpretiert werden und welche Einschätzungen liefern Expert:innen dazu. In einer scrollbaren Anwendung kannst du dich durch Informationen und Statistiken bewegen und so Schritt für Schritt den Sachverhalt verstehen.",
    media: [
      {
        type: "video",
        src: "images/scrollytelling-01.mp4",
      },
      {
        type: "image",
        src: "images/scrollytelling-02.jpg",
      },
      {
        type: "image",
        src: "images/scrollytelling-03.jpg",
      },
      {
        type: "image",
        src: "images/scrollytelling-04.jpg",
      },
      {
        type: "image",
        src: "images/scrollytelling-05.jpg",
      },
    ],
  },
  {
    slug: "sdg09",
    title: "SDG 09",
    text: "Im Rahmen des Moduls Think im Studiengang Datadesign+Art bestand die Aufgabe darin, eines der 17 Sustainable Development Goals der Vereinten Nationen durch eine ansprechende Datenvisualisierung auf einem Website-Prototypen darzustellen. Ich habe mich für Ziel 9: Industrie, Innovation und Infrastruktur entschieden und mich der Herausforderung gestellt, ein Thema mit vielen verschiedenen Indikatoren zu bearbeiten. Ich habe mich auf den Kontinent Afrika konzentriert, da mich das SDG 09 auf diesem Erdteil sehr interessiert. Die Daten für die SDGs sind open source. Ich habe sie mit P5js visualisiert und in einem Webprototypen interaktiv verknüpft und angeordnet. Das Projekt ist so aufgebaut, dass man Schritt für Schritt in die komplexe Thematik eingeführt wird und das Wissen und die Komplexität nach und nach zunehmen.",
    media: [
      {
        type: "image",
        src: "images/sdg09-01.jpg",
      },
      {
        type: "image",
        src: "images/sdg09-02.jpg",
      },
      {
        type: "image",
        src: "images/sdg09-03.jpg",
      },
      {
        type: "image",
        src: "images/sdg09-04.jpg",
      },
      {
        type: "image",
        src: "images/sdg09-05.jpg",
      },
      {
        type: "image",
        src: "images/sdg09-06.jpg",
      },
      {
        type: "image",
        src: "images/sdg09-07.jpg",
      },
    ],
  },
  {
    slug: "trauma-tank",
    title: "Trauma Tank",
    text: "Die Beamer-Installation «Trauma Tank» ist im Rahmen des Moduls Play im Studiengang Datadesign+Art entstanden und zeigt, wie unterschiedlich sich traumatischer Stress auf verschiedene Individuen auswirkt. Mit Daten des Schweizerischen Gesundheitsobser vatoriums OBSAN haben wir fünf Personas erstellt, die auf grund ihrer Disposition und Resilienz eine unterschiedliche Fähiakeit haben, mit Stress umzugehen. Mit P5js habe ich die Daten visualisiert und auf dem Konzept des Diathese-Stress-Modells - einer Grundannahme der Gesundheitspsychologie - in einer interaktiven Beamer-Installation aufgebaut.",
    media: [
      {
        type: "video",
        src: "images/trauma-tank-01.mov",
      },
      {
        type: "image",
        src: "images/trauma-tank-02.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-03.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-04.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-05.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-06.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-07.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-08.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-09.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-10.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-11.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-12.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-13.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-14.jpg",
      },
      {
        type: "image",
        src: "images/trauma-tank-15.jpg",
      },
    ],
  },
  {
    slug: "data-sculpture",
    title: "Data Sculpture",
    text: "CO2 verbaut statt verbrannt! In der Schweiz wird etwa die Hälfte des geernteten Holzes zur Energiegewinnung verbrannt. Dies mag zwar eine solide Lösung sein, um Abfall- und Restholz, das nicht mehr für Bau und Möbel verwendet werden kann, zu verwerten, doch die Verbrennung setzt CO2 in die Atmosphäre frei. Ökologischer wäre es, Abfall- und Restholz nicht zu verbrennen, sondern in Produkten weiter zu verwenden, damit das CO2 im Holz gebunden bleibt. Im Rahmen des Think Moduls haben wir in einer Zweiergruppen eine Datenskulptur in Form einer Kugelbahn entwickelt, die den Holzfluss inder Schweiz zeigt, wie er ist, und zudem ein umweltfreundlicheres Szenario vorschlägt.",
    media: [
      {
        type: "image",
        src: "images/data-sculpture-01.jpg",
      },
      {
        type: "image",
        src: "images/data-sculpture-02.jpg",
      },
      {
        type: "image",
        src: "images/data-sculpture-03.jpg",
      },
      {
        type: "image",
        src: "images/data-sculpture-04.jpg",
      },
      {
        type: "image",
        src: "images/data-sculpture-05.jpg",
      },
      {
        type: "image",
        src: "images/data-sculpture-06.jpg",
      },
      {
        type: "image",
        src: "images/data-sculpture-07.jpg",
      },
      {
        type: "image",
        src: "images/data-sculpture-08.jpg",
      },
      {
        type: "image",
        src: "images/data-sculpture-09.jpg",
      },
      {
        type: "image",
        src: "images/data-sculpture-10.jpg",
      },
      {
        type: "image",
        src: "images/data-sculpture-12.jpg",
      },
      {
        type: "image",
        src: "images/data-sculpture-13.jpg",
      },
    ],
  },
  {
    slug: "code-patterns",
    title: "Code Patterns",
    text: "An der HSLU Design Film und Kunst findet jährlich ein Informationstag für Interessierte statt. Datadesign+Art entwickelt dafür immer ein Projekt, welches den Studiengang möglichst gut repräsentiert und Interesse wecken soll. In einem Team von vier Personen war es meine Aufgabe, spannende und veränderbare Code Muster zu entwickeln. Die Rezipienten des Infotages konnten einen Fragebogen ausfüllen, der bei jeder Frage eine Zustimmung von 0 bis 100% zuliess. Je nach Schiebereglerwert wurde das Code Pattern beeinflusst, welches am Ende der Befragung auf einem Kassenzettel in der Länge der eigenen Körpergrösse ausgedruckt wurde. Dieser Zettel enthält auch Informationen über die Türnummer unserer Ateliers und die Termine der nächsten Informationsveranstaltungen zum Studiengang.",
    media: [
      {
        type: "image",
        src: "images/code-patterns-01.jpg",
      },
      {
        type: "image",
        src: "images/code-patterns-02.jpg",
      },
      {
        type: "image",
        src: "images/code-patterns-03.jpg",
      },
      {
        type: "image",
        src: "images/code-patterns-04.jpg",
      },
    ],
  },
  {
    slug: "the-armor",
    title: "The Armor",
    text: "Jedes Jahr werden weltweit Tausende von Menschen hingerichtet. Die Todesstrafe stellt einen vorsätzlichen Akt der staatlich angeordneten Tötung dar und verstösst häufig gegen die Grundrechte auf Leben und das Verbot der Folter. Mit dem Projekt «The Armor» welches ich im Modul The Voice von Kunst und Vermittlung konzepiert habe soll die Idee der Gerechtigkeit als ein inhärentes Recht und nicht als ein Privileg, das man sich verdienen kann, verdeutlicht werden. Die Symbolik der Rüstung soll denjenigen Schutz bieten, die ungerecht behandelt worden sind. Zwar ist niemand ohne Schuld, und es gibt Menschen, die abscheuliche Taten begehen, doch bin ich der festen Überzeugung, dass die Gerechtigkeit, die uns als unverdientes Geschenk zugesprochen wird, die Grundlage für unser eigenes gerechtes Handeln bildet. Die Rüstung visualisier mit den Kupferplatten die Anzahl Opfer durch die Todesstrafe von 2010–2022.",
    media: [
      {
        type: "image",
        src: "images/the-armor-02.jpg",
      },
      {
        type: "image",
        src: "images/the-armor-03.jpg",
      },
      {
        type: "image",
        src: "images/the-armor-04.jpg",
      },
      {
        type: "image",
        src: "images/the-armor-05.jpg",
      },
      {
        type: "image",
        src: "images/the-armor-06.jpg",
      },
    ],
  },
  {
    slug: "the-missing-piece",
    title: "The Missing Piece",
    text: "Sehnsucht sichtbar machen! The Missing Piece ist eine partizipative Installation, die untersucht, wonach Menschen sich sehnen. Sie besteht aus vier Holzgerüst-Modulen mit gespannter Leinwand, die an verschiedenen Orten aufgestellt werden. Besucher:innen werden eingeladen, mit Stiften ihre Sehnsüchte auf die Leinwand zu schreiben oder zu malen. So entsteht eine kollektive Sammlung persönlicher Gefühle. Ziel ist es, die emotionale Resonanz von Sehnsucht erfahrbar zu machen und die Vielfalt menschlicher Wünsche sichtbar zu präsentieren.",
    media: [
      {
        type: "image",
        src: "images/missing-piece.jpg",
      },
      {
        type: "image",
        src: "images/the-missing-piece-02.jpg",
      },
      {
        type: "image",
        src: "images/the-missing-piece-03.jpg",
      },
      {
        type: "image",
        src: "images/the-missing-piece-04.jpg",
      },
      {
        type: "image",
        src: "images/the-missing-piece-05.jpg",
      },
      {
        type: "image",
        src: "images/the-missing-piece-06.jpg",
      },
    ],
  },
];

// =====================
// DOM
// =====================
const track = document.querySelector(".track");
const galleryTrack = document.querySelector(".gallery-track");
const topbar = document.querySelector(".topbar");

const projects = document.querySelectorAll(".project");
const galleryItems = document.querySelectorAll(".gallery-item");

const about = document.querySelector(".about");
const aboutLink = document.querySelector(".about-link");
const homeLink = document.querySelector(".home");

const projectView = document.querySelector(".project-view");
const projectTitle = document.querySelector(".project-title");
const projectText = document.querySelector(".project-text");

const projectGallery = document.querySelector(".project-gallery");
const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle, index) => {
  toggle.addEventListener("click", () => {
    toggles.forEach((t) => t.classList.remove("active"));
    toggle.classList.add("active");

    if (index === 1) {
      mode = "map";
    } else {
      mode = "gallery";
    }

    progress = 0; // 👈 WICHTIG: RESET
  });
});

// =====================
// STATE
// =====================
const colors = ["#168B37", "#C6CCB2", "#EC671A", "#D1BCDC"];
let index = 0;
let isScrolling = false;

// =====================
// SLIDER
// =====================
function update() {
  const offset = window.innerWidth;
  track.style.transform = `translateX(${-index * offset}px)`;
  galleryTrack.style.transform = `translateX(${-index * offset}px)`;
  topbar.style.backgroundColor = colors[index % colors.length];
}

// =====================
// ROUTING
// =====================
function openProjectBySlug(slug) {
  const data = projectData.find((p) => p.slug === slug);
  if (!data) return;

  projectTitle.textContent = data.title;
  projectText.textContent = data.text;
  // CLEAR GALLERY
  projectGallery.innerHTML = "";

  // BUILD GALLERY
  data.media?.forEach((item) => {
    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.classList.add("gallery-media");

      projectGallery.appendChild(img);
    }

    if (item.type === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      video.classList.add("gallery-media");

      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;

      video.setAttribute("autoplay", "");
      video.setAttribute("muted", "");
      video.setAttribute("loop", "");
      video.setAttribute("playsinline", "");

      projectGallery.appendChild(video);
    }
  });
  projectView.classList.add("active");
}

function updateURL(slug) {
  const url = new URL(window.location);
  url.searchParams.set("project", slug);
  window.history.pushState({}, "", url);
}

function clearURL() {
  const url = new URL(window.location);
  url.searchParams.delete("project");
  window.history.pushState({}, "", url);
}

// =====================
// NAVIGATION
// =====================
function goHome() {
  about.classList.remove("active");
  projectView.classList.remove("active");
  clearURL();
}

// =====================
// SCROLL
// =====================
window.addEventListener(
  "wheel",
  (e) => {
    // 👉 NICHT blockieren wenn Projekt offen
    if (projectView.classList.contains("active")) return;

    e.preventDefault();

    if (isScrolling) return;

    if (e.deltaY > 0) {
      index++;

      if (index >= projects.length) {
        index = 0;
      }
    } else {
      index--;

      if (index < 0) {
        index = projects.length - 1;
      }
    }

    isScrolling = true;
    update();

    setTimeout(() => (isScrolling = false), 1200);
  },
  { passive: false }
);

// =====================
// EVENTS
// =====================

// 👉 Titel klicken
projects.forEach((project) => {
  project.addEventListener("click", () => {
    const slug = project.dataset.slug;
    openProjectBySlug(slug);
    updateURL(slug);
  });
});

// 👉 Bild klicken (NEU)
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const slug = item.dataset.slug;
    openProjectBySlug(slug);
    updateURL(slug);
  });
});

// // 👉 Projekt schließen
// const closeBtn = document.querySelector(".close-btn");

// if (closeBtn) {
//   closeBtn.addEventListener("click", () => {
//     projectView.classList.remove("active");
//     clearURL();
//   });
// }

// 👉 About
aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  about.classList.add("active");
});

// 👉 Home
homeLink.addEventListener("click", goHome);

// 👉 ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") goHome();
});

window.addEventListener("resize", update);

// =====================
// LOAD
// =====================
window.addEventListener("load", () => {
  const onboarding = document.querySelector(".onboarding");

  setTimeout(() => {
    onboarding.style.opacity = "0";
    setTimeout(() => onboarding.remove(), 600);
  }, 3000);

  // 👉 URL Routing
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");

  if (slug) {
    openProjectBySlug(slug);
  }
});
function drawGridMap() {
  stroke(255, 160);
  strokeWeight(1);
  noFill();

  let cols = 12;
  let rows = 12;

  let spacingX = width / cols;
  let spacingY = height / rows;

  // vertikal
  for (let i = 0; i <= cols; i++) {
    let x = i * spacingX;
    line(x, 0, x, height);
  }

  // horizontal
  for (let i = 0; i <= rows; i++) {
    let y = i * spacingY;
    line(0, y, width, y);
  }
}
