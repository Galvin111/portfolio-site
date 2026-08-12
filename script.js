/**
 * Portfolio Interactive & Animation Engine
 * Multi-font typography, 3D card tilts, Galvin bio Spider-Man doodle hover,
 * Pinned Sticky Stacked Cards Selected Works Section with Spider-Man Web Pulling Animation
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Scroll Progress Bar & Background Parallax Shift
  const scrollProgress = document.getElementById('scroll-progress');
  const orb1 = document.getElementById('orb-1');
  const orb2 = document.getElementById('orb-2');
  const bgGrid = document.querySelector('.bg-grid-pattern');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    if (scrollProgress) {
      scrollProgress.style.width = `${scrollPercent}%`;
    }

    if (orb1) {
      orb1.style.transform = `translate3d(0, ${scrollTop * 0.12}px, 0)`;
    }
    if (orb2) {
      orb2.style.transform = `translate3d(0, ${-scrollTop * 0.08}px, 0)`;
    }
    if (bgGrid) {
      bgGrid.style.transform = `translate3d(0, ${scrollTop * 0.05}px, 0)`;
    }
  });

  // 2. Cursor Spotlight Follower
  const cursorSpotlight = document.getElementById('cursor-spotlight');
  if (cursorSpotlight) {
    document.addEventListener('mousemove', (e) => {
      cursorSpotlight.style.left = `${e.clientX}px`;
      cursorSpotlight.style.top = `${e.clientY}px`;
    });
  }

  // 3. Spider-Man Doodle Interactive 3D Movement on Hover
  const spidermanCard = document.getElementById('spiderman-card');
  if (spidermanCard) {
    spidermanCard.addEventListener('mousemove', (e) => {
      const rect = spidermanCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -((y - centerY) / centerY) * 12;
      const rotateY = ((x - centerX) / centerX) * 12;

      spidermanCard.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
    });

    spidermanCard.addEventListener('mouseleave', () => {
      spidermanCard.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  }

  // 4. Journey Narrative & Platform Iconography Sync (IntersectionObserver)
  const storyBeats = document.querySelectorAll('.story-beat');
  const platformIcons = document.querySelectorAll('.platform-icon-item');

  const beatObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -40% 0px',
    threshold: 0.45
  };

  const beatObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        storyBeats.forEach(beat => beat.classList.remove('active'));
        entry.target.classList.add('active');

        const beatType = entry.target.getAttribute('data-beat');
        platformIcons.forEach(icon => {
          if (icon.getAttribute('data-beat-target') === beatType) {
            icon.classList.add('active');
          } else {
            icon.classList.remove('active');
          }
        });
      }
    });
  }, beatObserverOptions);

  storyBeats.forEach(beat => beatObserver.observe(beat));

  platformIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      const targetBeat = icon.getAttribute('data-beat-target');
      platformIcons.forEach(i => i.classList.remove('active'));
      storyBeats.forEach(b => b.classList.remove('active'));
      
      icon.classList.add('active');
      const matchedBeat = document.querySelector(`.story-beat[data-beat="${targetBeat}"]`);
      if (matchedBeat) matchedBeat.classList.add('active');
    });
  });

  // 5. Pinned Sticky Stacked Cards Selected Works Section Scroll Logic
  const worksSection = document.getElementById('work');
  const redCards = document.querySelectorAll('.spidey-red-card');
  const activeStepIndicator = document.getElementById('work-step-indicator');
  const activeWorkTitle = document.getElementById('active-work-title');
  const activeWorkDetails = document.getElementById('active-work-details');
  const activeWorkMeta = document.getElementById('active-work-meta');
  const webLine = document.getElementById('web-thread-line');
  const webDot = document.getElementById('web-snap-dot');
  const descBox = document.getElementById('active-work-desc-box');

  let lastIndex = -1;

  function updateWorksDeck() {
    if (!worksSection || redCards.length === 0) return;

    // Mobile fallback (screen width < 992px)
    if (window.innerWidth <= 992) {
      redCards.forEach(card => card.classList.remove('pulled-away', 'waiting-in-deck', 'in-stack'));
      return;
    }

    const totalCards = redCards.length;
    const rect = worksSection.getBoundingClientRect();
    const scrollTrackHeight = worksSection.offsetHeight - window.innerHeight;

    if (scrollTrackHeight <= 0) return;

    // Scrolled distance within the pinned section
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollTrackHeight));

    // Determine active card index (0 to 4)
    let currentIndex = Math.min(totalCards - 1, Math.floor(progress * totalCards));

    if (currentIndex !== lastIndex) {
      lastIndex = currentIndex;

      redCards.forEach((card, i) => {
        card.classList.remove('pulled-away', 'in-stack', 'waiting-in-deck');

        if (i < currentIndex) {
          // Pulled up & away with spider web fling
          card.classList.add('pulled-away');
          card.style.zIndex = totalCards - i;
        } else if (i === currentIndex) {
          // Active card on top of stack
          card.classList.add('in-stack');
          card.style.zIndex = totalCards + 5;
        } else {
          // Waiting in stack underneath
          card.classList.add('waiting-in-deck');
          card.style.zIndex = totalCards - i;
        }
      });

      // Update Left Details Panel
      const activeCard = redCards[currentIndex];
      if (activeCard) {
        const indexStr = `0${currentIndex + 1}`;
        const title = activeCard.getAttribute('data-title');
        const details = activeCard.getAttribute('data-details');
        const tags = activeCard.getAttribute('data-tags').split(',');

        if (activeStepIndicator) activeStepIndicator.textContent = `WORK ${indexStr} / 05`;
        if (activeWorkTitle) activeWorkTitle.textContent = title;
        if (activeWorkDetails) activeWorkDetails.textContent = details;
        if (activeWorkMeta) {
          activeWorkMeta.innerHTML = tags.map(t => `<span class="meta-badge">${t.trim()}</span>`).join('');
        }

        // Web thread SVG positioning animation
        if (webLine && webDot && descBox) {
          const descRect = descBox.getBoundingClientRect();
          const cardRect = activeCard.getBoundingClientRect();
          const containerRect = document.querySelector('.works-pinned-viewport').getBoundingClientRect();

          const startX = descRect.right - containerRect.left;
          const startY = descRect.top + descRect.height / 2 - containerRect.top;
          const endX = cardRect.left - containerRect.left + 30;
          const endY = cardRect.top + cardRect.height / 2 - containerRect.top;

          const controlX = (startX + endX) / 2;
          const controlY = Math.min(startY, endY) - 40;

          webLine.setAttribute('d', `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`);
          webDot.setAttribute('cx', endX);
          webDot.setAttribute('cy', endY);
        }
      }
    }
  }

  window.addEventListener('scroll', updateWorksDeck);
  window.addEventListener('resize', updateWorksDeck);
  updateWorksDeck();

  // 6. Contact Modal Logic
  const contactModal = document.getElementById('contact-modal');
  const closeContactModalBtn = document.getElementById('close-contact-modal');
  const contactTriggers = document.querySelectorAll('.open-contact-trigger');

  contactTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      contactModal.classList.add('active');
    });
  });

  if (closeContactModalBtn) {
    closeContactModalBtn.addEventListener('click', () => {
      contactModal.classList.remove('active');
    });
  }

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove('active');
      }
    });
  }

  // 7. Copy Email Button
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'galvin@creativepipeline.design';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailBtn.textContent;
        copyEmailBtn.textContent = 'Copied!';
        copyEmailBtn.style.backgroundColor = 'var(--accent-red)';
        copyEmailBtn.style.color = '#FFF';

        setTimeout(() => {
          copyEmailBtn.textContent = originalText;
          copyEmailBtn.style.backgroundColor = 'transparent';
          copyEmailBtn.style.color = 'var(--accent-red)';
        }, 2000);
      });
    });
  }

  // 8. Footer Live Clock Readout (NYC Time)
  const timeClock = document.getElementById('time-clock');
  function updateClock() {
    if (!timeClock) return;
    const now = new Date();
    const options = {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    timeClock.textContent = now.toLocaleTimeString('en-US', options) + ' EST';
  }

  updateClock();
  setInterval(updateClock, 1000);
});
