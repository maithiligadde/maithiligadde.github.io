// ── icon sprite loader ──
(function () {
  var base = document.querySelector('script[data-root]');
  var prefix = base && base.dataset.root ? base.dataset.root : '';
  fetch(prefix + 'icons.svg')
    .then(function (r) { return r.text(); })
    .then(function (t) {
      var d = document.createElement('div');
      d.hidden = true;
      d.innerHTML = t;
      document.body.prepend(d.firstElementChild);
    });
})();

// ── mobile nav toggle ──
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

// ── footer lyric ──
var lyrics = [
  'Is it still winter here?',
  'I miss you.',
  'How much longer do I have to wait?',
  'Like a small piece, like the last of winter.',
  'You know it all. You\'re my best friend.',
  'Morning will come again.',
  'Snowflakes are falling, getting farther away.',
  'I wander around, looking for you.',
  'Winter is cold because of you.'
];
var el = document.getElementById('footerLyric');
if (el) el.textContent = lyrics[Math.floor(Math.random() * lyrics.length)];
