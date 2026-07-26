const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

function closeMenu({ returnFocus = false } = {}) {
  nav?.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Navigation öffnen');
  if (returnFocus) toggle?.focus();
}

toggle?.addEventListener('click', () => {
  const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(willOpen));
  toggle.setAttribute('aria-label', willOpen ? 'Navigation schließen' : 'Navigation öffnen');
  nav?.classList.toggle('open', willOpen);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) closeMenu({ returnFocus: true });
});

const navigationGrid = document.querySelector('#navigation-grid');
const partnerUrl = 'https://home-5020967539.app-ionos.space/';

function createTile(item, index) {
  const link = document.createElement('a');
  link.className = `area-card${item.link === partnerUrl ? ' partner' : ''}`;
  link.href = item.link;

  const number = document.createElement('span');
  number.textContent = String(index + 1).padStart(2, '0');
  link.append(number);

  if (item.symbol) {
    const icon = document.createElement('img');
    icon.className = 'tile-icon';
    icon.src = item.symbol;
    icon.alt = '';
    icon.loading = 'lazy';
    icon.addEventListener('error', () => icon.remove(), { once: true });
    link.append(icon);
  }

  const title = document.createElement('h3');
  title.textContent = item.titel;
  const description = document.createElement('p');
  description.textContent = item.kurztext;
  const action = document.createElement('b');
  action.className = 'card-action';
  action.textContent = item.link === partnerUrl ? 'Partnerseite ↗' : 'Mehr erfahren →';
  link.append(title, description, action);
  return link;
}

if (navigationGrid) {
  fetch('content/navigation.json', { cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error('Navigation konnte nicht geladen werden.');
      return response.json();
    })
    .then(items => {
      const activeItems = items
        .filter(item => item.aktiv === true)
        .sort((a, b) => a.reihenfolge - b.reihenfolge);
      navigationGrid.replaceChildren(...activeItems.map(createTile));
    })
    .catch(() => {
      navigationGrid.dataset.fallback = 'true';
    });
}

const latestNews = document.querySelector('#latest-news');
if (latestNews) {
  fetch('content/beitraege.json', { cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error('Beiträge konnten nicht geladen werden.');
      return response.json();
    })
    .then(posts => {
      const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date))[0];
      if (!latest) return;
      const image = latestNews.querySelector('img');
      const time = latestNews.querySelector('time');
      const title = latestNews.querySelector('strong');
      const description = latestNews.querySelector('.latest-copy > span');
      latestNews.href = `aktuelles.html#${latest.slug}`;
      image.src = latest.image;
      image.alt = latest.alt;
      time.dateTime = latest.date;
      time.textContent = `${new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(`${latest.date}T12:00:00`))}${latest.demo ? ' · Demo' : ''}`;
      title.textContent = latest.titel;
      description.textContent = latest.kurztext;
    })
    .catch(() => {
      latestNews.dataset.fallback = 'true';
    });
}

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

document.querySelectorAll('[data-demo-action]').forEach(button => button.addEventListener('click', () => {
  const note = document.querySelector('#demo-note');
  if (!note) return;
  note.hidden = false;
  note.focus();
  note.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
}));

