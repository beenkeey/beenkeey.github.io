(function () {
  const header = document.querySelector(".header");
  const dialog = document.querySelector("#lightbox");
  const dialogImg = dialog.querySelector("img");
  const dialogCaption = dialog.querySelector(".lightbox__caption");
  const year = document.querySelector("[data-year]");

  const labels = {
    painting: "роспись",
    embroidery: "вышивка",
    miniature: "миниатюра",
  };

  if (year) year.textContent = String(new Date().getFullYear());

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char]));
  }

  function placeholder(index, category) {
    const number = String(index + 1).padStart(2, "0");
    const tone = (index % 4) + 1;
    return (
      '<div class="ph ph--' + tone + '" aria-hidden="true">' +
        '<span class="ph__num">' + number + "</span>" +
        '<span class="ph__label">' + escapeHtml(labels[category] || "") + "</span>" +
      "</div>"
    );
  }

  function cardHtml(work, index) {
    const number = String(index + 1).padStart(2, "0");
    const category = labels[work.category] || "";
    const title = work.title || category;
    const source = (work.src || "").trim();
    const media = source
      ? '<button class="card__zoom" type="button">' +
          '<img src="' + escapeHtml(source) + '" alt="' + escapeHtml(work.alt || title) + '" loading="lazy" decoding="async">' +
        "</button>"
      : placeholder(index, work.category);

    return (
      '<article class="card" data-category="' + escapeHtml(work.category || "") + '" data-span="' + escapeHtml(work.span || "6") + '" data-ratio="' + escapeHtml(work.ratio || "portrait") + '"' + (work.shift ? ' data-shift="down"' : "") + ">" +
        "<figure>" +
          '<div class="card__visual">' + media + "</div>" +
          '<figcaption class="card__caption">' +
            "<h3>" + escapeHtml(title) + "</h3>" +
            "<p>" + number + " — " + escapeHtml(category) + "</p>" +
          "</figcaption>" +
        "</figure>" +
      "</article>"
    );
  }

  function bindGallery(gallery) {
    gallery.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => {
        const card = img.closest(".card");
        const index = [...gallery.children].indexOf(card);
        img.closest(".card__zoom").remove();
        card.querySelector(".card__visual").insertAdjacentHTML(
          "beforeend",
          placeholder(index, card.dataset.category)
        );
      });
    });

    gallery.addEventListener("click", (event) => {
      const zoom = event.target.closest(".card__zoom");
      if (!zoom) return;
      const img = zoom.querySelector("img");
      const card = zoom.closest(".card");
      dialogImg.src = img.currentSrc || img.src;
      dialogImg.alt = img.alt;
      dialogCaption.textContent = card.querySelector("h3").textContent;
      dialog.showModal();
    });
  }

  function renderGalleries() {
    const works = Array.isArray(window.WORKS) ? window.WORKS : (typeof WORKS !== "undefined" ? WORKS : []);

    document.querySelectorAll("[data-gallery]").forEach((gallery) => {
      const category = gallery.dataset.gallery;
      const items = works.filter((work) => work.category === category);
      const empty = gallery.parentElement.querySelector("[data-empty]");

      gallery.innerHTML = items.map((work, index) => cardHtml(work, index)).join("");
      if (empty) empty.hidden = items.length !== 0;
      bindGallery(gallery);
    });
  }

  dialog.querySelector("[data-close]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    dialogImg.removeAttribute("src");
  });

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  document.addEventListener("scroll", onScroll, { passive: true });

  renderGalleries();
})();
