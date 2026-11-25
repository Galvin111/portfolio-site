// Galvin Venturina — portfolio interactions (kept small on purpose)
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  // Header hairline once the page scrolls
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Notes, receipt, index card and postcard settle onto the page as they scroll in
  var reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
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
  var clocks = document.querySelectorAll('[data-clock]');
  function tick() {
    var t = '';
    try { t = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Manila', hour: 'numeric', minute: '2-digit' }); } catch (e) {}
    clocks.forEach(function (c) { c.textContent = t; });
  }
  if (clocks.length) { tick(); setInterval(tick, 30000); }
})();
