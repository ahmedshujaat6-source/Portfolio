/* =========================================================================
   PORTFOLIO — BEHAVIOR ONLY
   -------------------------------------------------------------------------
   All page content lives directly in the HTML files, so there is nothing
   in here that builds text, cards, or lists. This file only wires up:
     - dark mode toggling (with saved preference)
     - the mobile menu (burger) toggle
     - the slide-out sidebar open/close
     - the "shadow" the navbar gets once you scroll
     - the slow scroll-in animations (adds .is-visible to .reveal elements)
     - the skill bars / timeline "fill in" animation as you scroll to them

   To change what's ON the page, edit the HTML file directly — not this file.
   ========================================================================= */

(function () {
  "use strict";

  /* ---- Theme (light / dark) ------------------------------------------ */
  function applyStoredTheme() {
    try {
      var stored = localStorage.getItem("portfolio-theme");
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (stored === "dark" || (!stored && prefersDark)) {
        document.documentElement.classList.add("dark");
      }
    } catch (e) { /* localStorage may be unavailable — theme just won't persist */ }
  }
  function toggleTheme() {
    var isDark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("portfolio-theme", isDark ? "dark" : "light"); } catch (e) {}
  }

  /* ---- Mobile menu + sidebar ------------------------------------------ */
  function openSidebar() {
    var sb = document.querySelector(".sidebar");
    var ov = document.querySelector(".sidebar-overlay");
    if (sb) sb.classList.add("is-open");
    if (ov) ov.classList.add("is-open");
  }
  function closeSidebar() {
    var sb = document.querySelector(".sidebar");
    var ov = document.querySelector(".sidebar-overlay");
    if (sb) sb.classList.remove("is-open");
    if (ov) ov.classList.remove("is-open");
  }

  function wireEvents() {
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-action]");
      if (!t) return;
      var action = t.dataset.action;
      if (action === "theme-toggle") toggleTheme();
      if (action === "burger") {
        var nav = document.querySelector(".nav-links");
        if (nav) nav.classList.toggle("is-open");
      }
      if (action === "sidebar-open") openSidebar();
      if (action === "sidebar-close") closeSidebar();
    });

    // Close the mobile menu automatically after a link is tapped.
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        var nav = document.querySelector(".nav-links");
        if (nav) nav.classList.remove("is-open");
      });
    });
  }

  /* ---- Sticky navbar shadow once the page scrolls --------------------- */
  function wireNavbarScrollState() {
    var navbar = document.querySelector(".navbar");
    if (!navbar) return;
    var update = function () { navbar.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---- Scroll-triggered reveal / skill bars / timeline draw ----------- */
  function initScrollEffects() {
    var targets = document.querySelectorAll(".reveal, .skill-row, .timeline");
    if (targets.length === 0) return;
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---- Simple front-end-only contact form feedback --------------------- */
  function wireContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      var original = btn.innerHTML;
      btn.innerHTML = "Message ready to send &#10003;";
      setTimeout(function () { btn.innerHTML = original; form.reset(); }, 2200);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyStoredTheme();
    wireEvents();
    wireNavbarScrollState();
    wireContactForm();
    initScrollEffects();
  });
})();
