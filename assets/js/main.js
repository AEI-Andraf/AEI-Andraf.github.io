// Project modals — open/close, keyboard support, PDF zoom default.
(function () {
  "use strict";

  // PDFs are heavy, so their iframes carry data-src and are only fetched the
  // first time their modal is opened. #zoom=50 makes a page fit the frame.
  function loadDeferredFrames(root) {
    root.querySelectorAll("iframe.pdf-frame[data-src]").forEach(function (frame) {
      var src = frame.dataset.src;
      frame.removeAttribute("data-src");
      frame.setAttribute("src", src + (src.includes("#") ? "&" : "#") + "zoom=50");
    });
  }

  function openModal(el) {
    loadDeferredFrames(el);
    el.classList.add("is-active");
    document.documentElement.classList.add("is-clipped");
  }

  function closeModal(el) {
    el.classList.remove("is-active");
    document.documentElement.classList.remove("is-clipped");
  }

  // Called from the inline onclick handlers on the project cards.
  window.showProject = function (id) {
    var el = document.getElementById(id);
    if (el) openModal(el);
  };

  window.closeProject = function (id) {
    var el = document.getElementById(id);
    if (el) closeModal(el);
  };

  document.addEventListener("DOMContentLoaded", function () {
    // Cards are <div>s driven by onclick: make them reachable by keyboard too.
    document.querySelectorAll(".project-card").forEach(function (card) {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      });
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    document.querySelectorAll(".modal.is-active").forEach(closeModal);
  });
})();
