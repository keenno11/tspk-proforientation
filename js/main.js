/* ТСПК — Профориентация. Интерактив */
(function () {
  'use strict';

  /* ---- Мобильное меню (бургер) ---- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('navLinks');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    // закрывать по клику на ссылку
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Аккордеон (Профессии / FAQ) ---- */
  var accItems = document.querySelectorAll('[data-accordion] .acc__item');
  accItems.forEach(function (item) {
    var head = item.querySelector('.acc__head');
    if (!head) return;
    head.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');
      // закрыть остальные в этой группе
      var group = item.closest('[data-accordion]');
      group.querySelectorAll('.acc__item.is-open').forEach(function (other) {
        if (other !== item) other.classList.remove('is-open');
      });
      item.classList.toggle('is-open', !isOpen);
    });
  });

})();
