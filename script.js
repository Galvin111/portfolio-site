// Galvin Venturina — portfolio interactions (kept small on purpose)
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  window.addEventListener('load', function () { root.classList.add('loaded'); });
  // fallback in case fonts/images delay "load"
  setTimeout(function () { root.classList.add('loaded'); }, 1200);

  // Header hairline once the page scrolls
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Journey: the beat in the middle of the screen activates its platform icon
  var beats = Array.prototype.slice.call(document.querySelectorAll('.beat'));
  var icons = {};
  document.querySelectorAll('.pi').forEach(function (el) { icons[el.dataset.icon] = el; });
  function activate(beat) {
    beats.forEach(function (b) { b.classList.toggle('is-active', b === beat); });
    Object.keys(icons).forEach(function (k) { icons[k].classList.toggle('is-active', beat && beat.dataset.beat === k); });
  }
  if ('IntersectionObserver' in window && beats.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) activate(e.target); });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    beats.forEach(function (b) { io.observe(b); });
    activate(beats[0]);
  } else {
    root.classList.remove('js');
  }

  // Copy email
  var copyBtn = document.getElementById('copy-email');
  var status = document.getElementById('copy-status');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.dataset.email;
      var done = function () { status.textContent = 'Email address copied'; setTimeout(function () { status.textContent = ''; }, 2500); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, function () { status.textContent = email; });
      } else { status.textContent = email; }
    });
  }

  // Local time in Pampanga (Asia/Manila), so clients can see the time difference
  var clock = document.getElementById('clock');
  function tick() {
    try {
      clock.textContent = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Manila', hour: 'numeric', minute: '2-digit' });
    } catch (e) { clock.textContent = ''; }
  }
  if (clock) { tick(); setInterval(tick, 30000); }
})();
