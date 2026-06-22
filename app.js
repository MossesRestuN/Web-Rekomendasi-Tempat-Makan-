/* ==========================================================================
   MAKANKUY - APP.JS
   Berisi seluruh logika interaktif:
   - Navbar scroll & mobile menu
   - Swiper carousel
   - Render kartu restoran (search & filter)
   - Leaflet map & marker
   - Render kartu Tim Pengembang (4 slot, identitas kosong)
   - Scroll animation & scroll-to-top
   ========================================================================== */

/* ---------------------------------------------------
   1. NAVBAR: shadow saat scroll + mobile hamburger menu
   --------------------------------------------------- */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
  // Tambahkan shadow saat halaman discroll
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Tampilkan / sembunyikan tombol scroll-to-top
  if (window.scrollY > 400) {
    scrollTopBtn.style.display = 'flex';
  } else {
    scrollTopBtn.style.display = 'none';
  }

  // Highlight active nav-link sesuai section yang terlihat
  highlightActiveLink();
});

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Tutup menu mobile saat link diklik
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// Highlight nav-link aktif berdasarkan posisi scroll
function highlightActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  let current = 'home';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

/* ---------------------------------------------------
   2. SWIPER CAROUSEL (Hero Section)
   --------------------------------------------------- */
const heroSwiper = new Swiper('.heroSwiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800, // transisi halus
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* ---------------------------------------------------
   3. RENDER RESTAURANT CARDS
   --------------------------------------------------- */
const restaurantGrid = document.getElementById('restaurantGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const emptyMessage = document.getElementById('emptyMessage');

// Isi dropdown kategori dengan kategori tetap
function populateCategoryFilter() {
  const categories = [
    "Masakan Indonesia",
    "Japanese Food",
    "Western Food",
    "Kafe & Minuman"
  ];
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// Buat HTML untuk satu card restoran
function createCardHTML(resto) {
  const ownerHTML = resto.owner
    ? `<div class="card-owner"><i class="fa-solid fa-user-tie"></i> <span>${resto.owner}</span></div>`
    : '';

  return `
    <div class="card fade-in" data-id="${resto.id}">
      <div class="card-img-wrap">
        <img src="${resto.image}" alt="${resto.name}">
      </div>
      <div class="card-body">
        <span class="card-category">${resto.category}</span>
        <h3 class="card-title">${resto.name}</h3>
        ${ownerHTML}
        <div class="card-rating">
          <i class="fa-solid fa-star"></i> ${resto.rating}
          <span>/ 5.0</span>
        </div>
        <div class="card-address">
          <i class="fa-solid fa-location-dot"></i>
          <span>${resto.address}</span>
        </div>
        ${resto.operasional ? `<div class="card-operasional"><i class="fa-solid fa-clock"></i> <span>${resto.operasional}</span></div>` : ''}
        ${resto.phone ? `<div class="card-phone"><i class="fa-solid fa-phone"></i> <a href="https://wa.me/62${resto.phone.replace(/^0/, '')}" target="_blank">${resto.phone}</a></div>` : ''}
        <div class="card-actions">
          <button class="btn-action btn-detail" onclick="openDetailModal(${resto.id})">
            <i class="fa-solid fa-circle-info"></i> Detail & Menu
          </button>
          <a href="${resto.gofood}" target="_blank" class="btn-action btn-gofood">
            <i class="fa-solid fa-bowl-food"></i> GoFood
          </a>
          <a href="${resto.shopeefood}" target="_blank" class="btn-action btn-shopeefood">
            <i class="fa-solid fa-bag-shopping"></i> ShopeeFood
          </a>
          <button class="btn-action btn-location" onclick="showLocation(${resto.id})">
            <i class="fa-solid fa-map-pin"></i> Lihat Lokasi
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------
   MODAL DETAIL RESTORAN
   --------------------------------------------------- */
function openDetailModal(id) {
  const resto = restaurants.find(r => r.id === id);
  if (!resto) return;

  const menuItems = (resto.menuDetail || resto.menus.map(m => ({ name: m, price: null })))
    .map(item => `
      <li class="modal-menu-row">
        <span class="modal-menu-name">${item.name}</span>
        ${item.price !== null ? `<span class="modal-menu-price">Rp ${item.price.toLocaleString('id-ID')}</span>` : ''}
      </li>`).join('');

  const modal = document.getElementById('detailModal');
  document.getElementById('modalImage').src = resto.image;
  document.getElementById('modalImage').alt = resto.name;
  document.getElementById('modalCategory').textContent = resto.category;
  document.getElementById('modalName').textContent = resto.name;
  document.getElementById('modalOwner').innerHTML = resto.owner
    ? `<i class="fa-solid fa-user-tie"></i> ${resto.owner}` : '';
  document.getElementById('modalRating').innerHTML =
    `<i class="fa-solid fa-star"></i> ${resto.rating} <span>/ 5.0</span>`;
  document.getElementById('modalAddress').innerHTML =
    `<i class="fa-solid fa-location-dot"></i> ${resto.address}`;
  document.getElementById('modalDesc').textContent = resto.description || '';
  document.getElementById('modalMenuList').innerHTML = menuItems;
  document.getElementById('modalGofood').href = resto.gofood;
  document.getElementById('modalShopeefood').href = resto.shopeefood;

  // Tampilkan jam operasional di modal
  let modalOpEl = document.getElementById('modalOperasional');
  if (!modalOpEl) {
    modalOpEl = document.createElement('div');
    modalOpEl.id = 'modalOperasional';
    modalOpEl.className = 'card-operasional';
    modalOpEl.style.marginBottom = '8px';
    const addressEl = document.getElementById('modalAddress');
    addressEl.parentNode.insertBefore(modalOpEl, addressEl.nextSibling);
  }
  modalOpEl.innerHTML = resto.operasional
    ? `<i class="fa-solid fa-clock"></i> ${resto.operasional}`
    : '';

  // Tampilkan nomor telepon di modal
  let modalPhoneEl = document.getElementById('modalPhone');
  if (!modalPhoneEl) {
    modalPhoneEl = document.createElement('div');
    modalPhoneEl.id = 'modalPhone';
    modalPhoneEl.className = 'card-phone';
    modalPhoneEl.style.marginBottom = '8px';
    modalOpEl.insertAdjacentElement('afterend', modalPhoneEl);
  }
  modalPhoneEl.innerHTML = resto.phone
    ? `<i class="fa-solid fa-phone"></i> <a href="https://wa.me/62${resto.phone.replace(/^0/, '')}" target="_blank">${resto.phone}</a>`
    : '';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  const modal = document.getElementById('detailModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Tutup modal saat klik overlay
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('detailModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeDetailModal();
    });
  }
  // Tutup dengan ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDetailModal();
  });
});

// Render daftar restoran berdasarkan array yang diberikan
function renderRestaurants(list) {
  if (list.length === 0) {
    restaurantGrid.innerHTML = '';
    emptyMessage.style.display = 'block';
    return;
  }

  emptyMessage.style.display = 'none';
  restaurantGrid.innerHTML = list.map(createCardHTML).join('');

  // Jalankan animasi fade-in untuk card baru
  observeFadeElements();
}

// Filter berdasarkan search input & kategori
function filterRestaurants() {
  const keyword = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;

  const filtered = restaurants.filter(resto => {
    const matchKeyword = resto.name.toLowerCase().includes(keyword);
    const matchCategory = category === 'all' || resto.category === category;
    return matchKeyword && matchCategory;
  });

  renderRestaurants(filtered);
}

searchInput.addEventListener('input', filterRestaurants);
categoryFilter.addEventListener('change', filterRestaurants);

/* ---------------------------------------------------
   4. LEAFLET MAP & MARKERS
   --------------------------------------------------- */
let map;
let markers = {}; // simpan referensi marker per id restoran
let streetLayer, satelliteLayer;

function initMap() {
  // Peta dipusatkan di Institut Teknologi Kalimantan (ITK)
  map = L.map('leafletMap').setView([ITK_CENTER.lat, ITK_CENTER.lng], 14);

  // Layer 1: OpenStreetMap (tampilan peta jalan)
  streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  });

  // Layer 2: Esri World Imagery (tampilan satelit)
  satelliteLayer = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics',
      maxZoom: 19,
    }
  );

  // Tampilan default: peta jalan
  streetLayer.addTo(map);

  // Marker khusus untuk kampus ITK sebagai titik acuan
  L.marker([ITK_CENTER.lat, ITK_CENTER.lng], {
    icon: L.icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      iconSize: [34, 34],
      iconAnchor: [17, 34],
    }),
  })
    .addTo(map)
    .bindPopup('<b>Institut Teknologi Kalimantan</b><br>Pusat area rekomendasi kuliner');

  // Tambahkan marker untuk setiap restoran
  restaurants.forEach(resto => {
    const marker = L.marker([resto.lat, resto.lng]).addTo(map);

    const popupContent = `
      <div class="popup-card">
        <b>${resto.name}</b><br>
        <i class="fa-solid fa-star" style="color:#f5a623;"></i> ${resto.rating} / 5.0<br>
        <span>${resto.address}</span><br>
        <a href="#restaurants" class="popup-detail-btn" onclick="scrollToRestaurant(${resto.id})">
          Lihat Detail
        </a>
      </div>
    `;

    marker.bindPopup(popupContent);
    markers[resto.id] = marker;
  });
}

// Ganti tampilan peta antara Peta Jalan (OSM) dan Satelit (Esri)
function setupLayerControl() {
  const buttons = document.querySelectorAll('.layer-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const layer = btn.getAttribute('data-layer');
      if (layer === 'satellite') {
        map.removeLayer(streetLayer);
        satelliteLayer.addTo(map);
      } else {
        map.removeLayer(satelliteLayer);
        streetLayer.addTo(map);
      }
    });
  });
}

// Dipanggil saat tombol "Lihat Lokasi" pada card diklik
function showLocation(id) {
  const resto = restaurants.find(r => r.id === id);
  if (!resto || !markers[id]) return;

  // Scroll ke section peta
  document.getElementById('map').scrollIntoView({ behavior: 'smooth' });

  // Fokuskan peta ke marker dan buka popup-nya
  map.flyTo([resto.lat, resto.lng], 16, { duration: 1 });

  // Beri sedikit delay agar flyTo selesai sebelum popup terbuka
  setTimeout(() => {
    markers[id].openPopup();
  }, 800);
}

// Dipanggil saat tombol "Lihat Detail" pada popup peta diklik
function scrollToRestaurant(id) {
  document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });

  // Reset filter agar item pasti terlihat
  searchInput.value = '';
  categoryFilter.value = 'all';
  filterRestaurants();

  // Highlight card terkait sebentar
  setTimeout(() => {
    const card = document.querySelector(`.card[data-id="${id}"]`);
    if (card) {
      card.style.boxShadow = '0 0 0 3px var(--primary)';
      setTimeout(() => (card.style.boxShadow = ''), 1500);
    }
  }, 500);
}

/* ---------------------------------------------------
   5. RENDER TIM PENGEMBANG (4 slot, identitas kosong)
   --------------------------------------------------- */
const teamGrid = document.getElementById('teamGrid');

// Buat HTML untuk satu card anggota tim
function createTeamCardHTML(member) {
  const leaderClass = member.isLeader ? 'team-card leader fade-in' : 'team-card fade-in';
  const badge = member.isLeader
    ? `<span class="leader-badge"><i class="fa-solid fa-crown"></i> Ketua Tim</span>`
    : '';

  // Jika foto belum diisi, tampilkan placeholder ikon
  const photoContent = member.photo
    ? `<img src="${member.photo}" alt="${member.name || 'Foto Anggota'}" class="team-photo">`
    : `<div class="team-photo-placeholder"><i class="fa-solid fa-user"></i></div>`;

  // Tampilkan placeholder teks jika identitas masih kosong
  const name = member.name || 'Nama belum diisi';
  const nim = member.nim ? `NIM: ${member.nim}` : 'NIM: -';
  const desc = member.description || 'Deskripsi singkat belum diisi.';

  return `
    <div class="${leaderClass}">
      ${badge}
      <div class="team-photo-wrap">
        ${photoContent}
      </div>
      <h3 class="team-name">${name}</h3>
      <p class="team-nim">${nim}</p>
      <span class="team-role">${member.role}</span>
      <p class="team-desc">${desc}</p>

      <div class="team-socials">
        <a href="${member.instagram}" target="_blank" class="social-tooltip" data-tooltip="Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="${member.github}" target="_blank" class="social-tooltip" data-tooltip="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  `;
}

// Render seluruh kartu tim, Ketua Tim selalu tampil di posisi pertama
function renderTeam() {
  const sorted = [...teamMembers].sort((a, b) => (b.isLeader ? 1 : 0) - (a.isLeader ? 1 : 0));
  teamGrid.innerHTML = sorted.map(createTeamCardHTML).join('');
  observeFadeElements();
}

/* ---------------------------------------------------
   6. SCROLL ANIMATION (fade-in saat elemen terlihat)
   --------------------------------------------------- */
function observeFadeElements() {
  const elements = document.querySelectorAll('.fade-in:not(.visible)');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

/* ---------------------------------------------------
   7. SCROLL TO TOP BUTTON
   --------------------------------------------------- */
const scrollTopBtn = document.getElementById('scrollTopBtn');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------------------------------------------------
   8. INISIALISASI APLIKASI
   --------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  populateCategoryFilter();
  renderRestaurants(restaurants);
  initMap();
  setupLayerControl();
  renderTeam();
  observeFadeElements();
});