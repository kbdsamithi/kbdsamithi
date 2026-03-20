/* =========================================
   Karnatak Buddha Dhamma Samithi – main.js
   =========================================
   HOW TO ADD REAL MEMBERS:
   Option A (Simple): Edit the `MEMBERS_LOCAL` array below.
   Option B (Google Sheets): Follow steps at the bottom of this file.
   ========================================= */

'use strict';

/* =========================================
   CONFIGURATION
   ========================================= */
const CONFIG = {
  // ── Google Sheets Integration ─────────────────────────────────────────────
  // Step 1: Open your Google Sheet
  // Step 2: File → Share → Publish to web → Sheet1 → CSV → Publish
  // Step 3: Copy the published CSV link and paste it below
  // Step 4: Change USE_GOOGLE_SHEETS to true
  USE_GOOGLE_SHEETS: false,
  GOOGLE_SHEETS_CSV_URL: 'YOUR_PUBLISHED_CSV_URL_HERE',
  // Column order in your Google Sheet must be:
  // Name | Role | Status (Working/Retired) | From | Contribution | PhotoURL
  // ─────────────────────────────────────────────────────────────────────────

  // Number of placeholder cards to show while real data is pending
  PLACEHOLDER_COUNT: 6,

  // Current year for activities display
  YEAR: 2025,
};

/* =========================================
   MEMBERS DATA  (Edit this when you have real member info)
   ─────────────────────────────────────────
   To add a real member:
   1. Add an object to this array.
   2. For `photo`: either use a hosted image URL,
      or put the photo file in /images/ and write "images/filename.jpg"
   3. For Google Drive photos: upload → right-click → Share → "Anyone with link"
      → copy link → change:
        https://drive.google.com/file/d/FILE_ID/view
      to:
        https://drive.google.com/thumbnail?id=FILE_ID&sz=w400
   ========================================= */
const MEMBERS_LOCAL = [
  // ── Uncomment and fill in when ready ──────────────────────────────────────
  // {
  //   name:         "Sri Rajappa Nayak",
  //   role:         "President",
  //   status:       "Retired",           // "Working" or "Retired"
  //   from:         "Retired from Indian Administrative Service (IAS)",
  //   contribution: "Leading the organization with vision for 15+ years. Instrumental in acquiring the sangha premises.",
  //   photo:        "images/rajappa.jpg", // or a full URL
  // },
  // ─────────────────────────────────────────────────────────────────────────
];

/* =========================================
   MONTHLY ACTIVITIES DATA
   Add/edit events here. Each entry = one activity card.
   ========================================= */
const ACTIVITIES = [
  {
    month: 'January',
    title: 'New Year Dhamma Discourse',
    date: `January 5, ${CONFIG.YEAR}`,
    desc: 'A special discourse on impermanence and new beginnings — welcoming the new year with mindfulness and intention.',
    photo: 'images/img01.jpeg',
    category: 'discourse',
  },
  {
    month: 'February',
    title: 'Metta Meditation Retreat',
    date: `February 15–16, ${CONFIG.YEAR}`,
    desc: 'Two-day loving-kindness (Metta) meditation retreat. 45 participants experienced deep renewal and inner stillness.',
    photo: 'images/img02.jpeg',
    category: 'meditation',
  },
  {
    month: 'March',
    title: 'Inauguration — Siddhartha Buddha Vihara',
    date: 'Sunday, 29 March 2026',
    desc: 'Grand Inauguration Ceremony of Siddhartha Buddha Vihara at D. Sanjeevaiah Memorial Educational Society Premises, Vijayanagar 1st Stage, Mysuru. All are cordially invited.',
    photo: 'images/inauguration-ceremony.jpeg',
    category: 'festival',
  },
  {
    month: 'April',
    title: 'Free Community Health Camp',
    date: `April 20, ${CONFIG.YEAR}`,
    desc: 'Free health checkup camp organized by our medical volunteers. Over 150 community members received consultation.',
    photo: 'images/img03.jpeg',
    category: 'community',
  },
  {
    month: 'May',
    title: 'Buddha Purnima Celebration',
    date: `May 12, ${CONFIG.YEAR}`,
    desc: 'Grand celebration of the Buddha\'s birth, enlightenment, and Parinirvana — with procession, talks, and community meal.',
    photo: 'images/img04.jpeg',
    category: 'festival',
  },
  {
    month: 'June',
    title: 'Youth Leadership Program',
    date: `June 1–7, ${CONFIG.YEAR}`,
    desc: 'Week-long program for young members to develop leadership skills rooted in Buddhist values of compassion and wisdom.',
    photo: 'images/img05.jpeg',
    category: 'youth',
  },
  {
    month: 'July',
    title: 'Asalha Puja Celebration',
    date: `July 10, ${CONFIG.YEAR}`,
    desc: 'Celebrating the first teaching of the Buddha. Candle-lighting ceremony, chanting, and offering of robes.',
    photo: 'images/img06.jpeg',
    category: 'festival',
  },
  {
    month: 'August',
    title: 'Vassa (Rains Retreat) Begins',
    date: `August 11, ${CONFIG.YEAR}`,
    desc: 'Beginning of the Buddhist Rains Retreat — daily meditation, Dhamma study, and increased community activities.',
    photo: 'images/img07.jpeg',
    category: 'meditation',
  },
  {
    month: 'September',
    title: 'Cultural Arts Festival',
    date: `September 21, ${CONFIG.YEAR}`,
    desc: 'Annual cultural program showcasing Buddhist art, Kannada folk traditions, and performances by community children.',
    photo: 'images/img08.jpeg',
    category: 'community',
  },
  {
    month: 'October',
    title: 'Kathina Ceremony',
    date: `October 10, ${CONFIG.YEAR}`,
    desc: 'Traditional robe-offering ceremony marking the end of the Rains Retreat. Community feast and merit-making activities.',
    photo: 'images/img09.jpeg',
    category: 'festival',
  },
  {
    month: 'November',
    title: 'Annual General Meeting',
    date: `November 15, ${CONFIG.YEAR}`,
    desc: 'Annual general body meeting — reviewing the year\'s activities, finances, and planning for the coming year.',
    photo: 'images/img10.jpeg',
    category: 'community',
  },
  {
    month: 'December',
    title: 'Year-End Celebration & Awards',
    date: `December 28, ${CONFIG.YEAR}`,
    desc: 'Annual celebration recognizing volunteers and members for their outstanding contributions throughout the year.',
    photo: 'images/img11.jpeg',
    category: 'community',
  },
];

/* =========================================
   GALLERY DATA
   Replace src values with real photo URLs or local paths.
   ========================================= */
const GALLERY = [
  { src: 'images/inauguration-ceremony.jpeg', category: 'events',     caption: 'Inauguration — Siddhartha Buddha Vihara, 29 March 2026' },
  { src: 'images/img12.jpeg',                 category: 'events',     caption: 'Buddha Purnima Celebration' },
  { src: 'images/img13.jpeg',                 category: 'meditation', caption: 'Morning Meditation Session' },
  { src: 'images/FunctionHall.jpeg',          category: 'hall',       caption: 'Our Samithi Hall — Interior' },
  { src: 'images/img14.jpeg',                 category: 'community',  caption: 'Community Health Camp' },
  { src: 'images/img15.jpeg',                 category: 'events',     caption: 'Kathina Ceremony' },
  { src: 'images/img16.jpeg',                 category: 'meditation', caption: 'Metta Retreat' },
  { src: 'images/img17.jpeg',                 category: 'community',  caption: 'Community Gathering' },
  { src: 'images/img18.jpeg',                 category: 'hall',       caption: 'Hall Setup for Function' },
  { src: 'images/img19.jpeg',                 category: 'events',     caption: 'Annual Celebration' },
  { src: 'images/img20.jpeg',                 category: 'community',  caption: 'Volunteer Service Day' },
  { src: 'images/img21.jpeg',                 category: 'meditation', caption: 'Mindfulness Workshop' },
  { src: 'images/img22.jpeg',                 category: 'events',     caption: 'Cultural Arts Festival' },
];

/* =========================================
   INIT
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 680, once: true, offset: 70 });
  initNav();
  initBackToTop();
  initContactForm();
  initGalleryFilters();
  renderActivities('All');
  renderMonthTabs();
  renderGallery('all');
  loadMembers();
});

/* =========================================
   MEMBERS — load & render
   ========================================= */
async function loadMembers() {
  if (CONFIG.USE_GOOGLE_SHEETS && CONFIG.GOOGLE_SHEETS_CSV_URL !== 'YOUR_PUBLISHED_CSV_URL_HERE') {
    try {
      const members = await fetchFromSheets(CONFIG.GOOGLE_SHEETS_CSV_URL);
      renderMembers(members);
    } catch (err) {
      console.warn('Google Sheets fetch failed, falling back to local data.', err);
      renderMembers(MEMBERS_LOCAL);
    }
  } else {
    renderMembers(MEMBERS_LOCAL);
  }
}

async function fetchFromSheets(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network error');
  const text = await res.text();
  const rows = text.trim().split('\n').slice(1); // skip header row
  return rows
    .map(row => {
      // Handle quoted CSV values
      const cols = row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];
      const clean = cols.map(c => c.replace(/^"|"$/g, '').trim());
      return {
        name:         clean[0] || '',
        role:         clean[1] || '',
        status:       clean[2] || 'Working',
        from:         clean[3] || '',
        contribution: clean[4] || '',
        photo:        clean[5] || '',
      };
    })
    .filter(m => m.name);
}

function renderMembers(members) {
  const grid = document.getElementById('membersGrid');
  if (!grid) return;

  if (!members || members.length === 0) {
    // Show placeholder cards
    grid.innerHTML = placeholderCards(CONFIG.PLACEHOLDER_COUNT);
    initAOS();
    return;
  }

  grid.innerHTML = members.map((m, i) => `
    <div class="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <div class="member-card">
        <img
          src="${memberPhotoSrc(m)}"
          alt="${escHtml(m.name)}"
          class="member-photo"
          onerror="this.src='${avatarUrl(m.name)}'"
        />
        <div class="member-body">
          <div class="member-name">${escHtml(m.name)}</div>
          <div class="member-role">${escHtml(m.role)}</div>
          <span class="member-status ${m.status === 'Working' ? 'status-working' : 'status-retired'}">
            ${m.status === 'Working' ? '● Working' : '● Retired'}
          </span>
          <div class="member-from mt-1">
            <i class="fas fa-briefcase fa-xs me-1"></i>${escHtml(m.from)}
          </div>
          <div class="member-contribution">
            <strong>Contribution:</strong> ${escHtml(m.contribution)}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  initAOS();
}

function placeholderCards(count) {
  const labels = [
    'President', 'Vice President', 'Secretary',
    'Treasurer', 'Health Committee', 'Cultural Committee',
    'Youth Committee', 'Infrastructure Head',
  ];
  return Array.from({ length: count }, (_, i) => `
    <div class="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <div class="member-placeholder">
        <div class="ph-avatar"><i class="fas fa-user"></i></div>
        <div class="ph-title">${labels[i] || 'Committee Member'}</div>
        <p class="ph-sub">Member details coming soon.<br>Contact us to register.</p>
      </div>
    </div>
  `).join('');
}

function memberPhotoSrc(m) {
  if (!m.photo) return avatarUrl(m.name);
  // Convert Google Drive "view" links to direct thumbnail
  const driveMatch = m.photo.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch) return `https://drive.google.com/thumbnail?id=${driveMatch[1]}&sz=w400`;
  return m.photo;
}

function avatarUrl(name) {
  const encoded = encodeURIComponent(name || 'Member');
  return `https://ui-avatars.com/api/?name=${encoded}&size=400&background=B5541C&color=fff&font-size=0.33&bold=true`;
}

/* =========================================
   ACTIVITIES
   ========================================= */
function renderMonthTabs() {
  const container = document.getElementById('monthTabs');
  if (!container) return;
  const months = ['All', ...ACTIVITIES.map(a => a.month)];
  container.innerHTML = months.map(m => `
    <button class="month-tab ${m === 'All' ? 'active' : ''}"
            data-month="${m}"
            onclick="filterActivities('${m}')">
      ${m}
    </button>
  `).join('');
}

window.filterActivities = function (month) {
  document.querySelectorAll('.month-tab').forEach(t =>
    t.classList.toggle('active', t.dataset.month === month)
  );
  renderActivities(month);
};

function renderActivities(filter) {
  const grid = document.getElementById('activitiesGrid');
  if (!grid) return;
  const list = (filter === 'All') ? ACTIVITIES : ACTIVITIES.filter(a => a.month === filter);

  if (list.length === 0) {
    grid.innerHTML = '<div class="col-12 text-center text-muted py-4">No activities listed for this month yet.</div>';
    return;
  }

  grid.innerHTML = list.map((a, i) => `
    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
      <div class="act-card">
        <img src="${a.photo}" alt="${escHtml(a.title)}" class="act-img" loading="lazy" />
        <div class="act-body">
          <span class="act-month">${a.month}</span>
          <div class="act-title">${escHtml(a.title)}</div>
          <p class="act-desc">${escHtml(a.desc)}</p>
          <div class="act-date"><i class="fas fa-calendar-alt"></i>${escHtml(a.date)}</div>
        </div>
      </div>
    </div>
  `).join('');
  initAOS();
}

/* =========================================
   GALLERY
   ========================================= */
function renderGallery(filter) {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const list = (filter === 'all') ? GALLERY : GALLERY.filter(g => g.category === filter);

  grid.innerHTML = list.map((item, i) => `
    <div class="col-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="${(i % 4) * 50}">
      <div class="gal-item" onclick="openLightbox('${item.src}', '${escHtml(item.caption)}')">
        <img src="${item.src}" alt="${escHtml(item.caption)}" loading="lazy" />
        <div class="gal-overlay"><i class="fas fa-expand-alt"></i></div>
      </div>
    </div>
  `).join('');
  initAOS();
}

function initGalleryFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderGallery(this.dataset.filter);
    });
  });
}

window.openLightbox = function (src, caption) {
  document.getElementById('lbImage').src = src;
  document.getElementById('lbCaption').textContent = caption;
  new bootstrap.Modal(document.getElementById('lightboxModal')).show();
};

/* =========================================
   NAVBAR — scroll behavior + active link
   ========================================= */
function initNav() {
  const nav = document.getElementById('mainNav');
  const links = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  const onScroll = () => {
    // Scrolled class
    nav.classList.toggle('scrolled', window.scrollY > 50);

    // Active link highlight
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${sec.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Close mobile menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      const collapse = document.getElementById('navMenu');
      if (collapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(collapse)?.hide();
      }
    });
  });
}

/* =========================================
   BACK TO TOP
   ========================================= */
function initBackToTop() {
  const btn = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 320);
  }, { passive: true });
}

/* =========================================
   CONTACT FORM
   ========================================= */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const btn  = document.getElementById('formSubmitBtn');
  if (!form || !btn) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    // ── To wire up a real backend, replace this block with a fetch() call ──
    // e.g. Formspree: fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: new FormData(form) })
    btn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
    btn.style.background = '#15803d';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = 'Send Message';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
}

/* =========================================
   HELPERS
   ========================================= */
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function initAOS() {
  if (window.AOS) AOS.refresh();
}

/* =========================================
   HOW TO CONNECT GOOGLE SHEETS (Step-by-step)
   ─────────────────────────────────────────
   1. Create a Google Sheet with this header row (Row 1):
         Name | Role | Status | From | Contribution | Photo URL

   2. Fill in member details from Row 2 onwards.
      For Status: type exactly "Working" or "Retired"
      For Photo URL: paste the Google Drive thumbnail URL
        (see memberPhotoSrc() above for format)

   3. Publish the sheet:
      File → Share → Publish to web
      → Choose "Sheet1" and "Comma-separated values (.csv)"
      → Click Publish → Copy the URL

   4. In this file (main.js), set:
        USE_GOOGLE_SHEETS: true,
        GOOGLE_SHEETS_CSV_URL: 'paste the URL here',

   5. Save main.js → re-upload → done.
      Any admin can now edit the sheet and the website updates automatically.
   ========================================= */
