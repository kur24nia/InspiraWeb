// Shared navbar, injected via JS (works under file:// too).
// Active link state is driven by <body data-page="..."> on each page.
(function () {
  var page = document.body.getAttribute('data-page') || '';

  function isActive(key) { return page === key ? ' active' : ''; }

  document.write(`
  <nav>
    <a href="index.html" class="logo">
      <div class="logo-mark">NI</div>
      <div class="logo-word"><span class="l1">Nusa Inspira</span><span class="l2">Teknologi</span></div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" class="${page === 'home' ? 'active' : ''}">Home</a></li>
      <li class="dropdown">
        <a href="tentang-kami.html" class="dropbtn ${page === 'about' ? 'active' : ''}">About Us</a>
        <div class="dropdown-content">
          <a href="tentang-kami.html#tentang-kami">Tentang Kami</a>
          <a href="tentang-kami.html#visi-misi">Visi &amp; Misi</a>
          <a href="tentang-kami.html#struktur">Struktur Perusahaan</a>
        </div>
      </li>
      <li class="dropdown">
        <a href="#" class="dropbtn ${page === 'layanan' ? 'active' : ''}">Layanan</a>
        <div class="dropdown-content">
          <a href="layanan-inspira-teknologi.html">Inspira Teknologi</a>
          <a href="layanan-inspira-innovation.html">Inspira Innovation</a>
        </div>
      </li>
      <li class="dropdown">
        <a href="#" class="dropbtn ${page === 'products' ? 'active' : ''}">Products</a>
        <div class="dropdown-content">
          <a href="produk-edulyfe.html">Edulyfe</a>
          <a href="produk-inspirasiya.html">Inspirasiya</a>
          <a href="produk-english-inspira.html">English Inspira</a>
        </div>
      </li>
      <li><a href="events.html" class="${page === 'events' ? 'active' : ''}">Events</a></li>
      <li><a href="index.html#kontak">Kontak</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html">Home</a>
    <div class="m-group-label">About Us</div>
    <a class="m-sub" href="tentang-kami.html#tentang-kami">Tentang Kami</a>
    <a class="m-sub" href="tentang-kami.html#visi-misi">Visi &amp; Misi</a>
    <a class="m-sub" href="tentang-kami.html#struktur">Struktur Perusahaan</a>
    <div class="m-group-label">Layanan</div>
    <a class="m-sub" href="layanan-inspira-teknologi.html">Inspira Teknologi</a>
    <a class="m-sub" href="layanan-inspira-innovation.html">Inspira Innovation</a>
    <div class="m-group-label">Products</div>
    <a class="m-sub" href="produk-edulyfe.html">Edulyfe</a>
    <a class="m-sub" href="produk-inspirasiya.html">Inspirasiya</a>
    <a class="m-sub" href="produk-english-inspira.html">English Inspira</a>
    <a href="events.html">Events</a>
    <a href="index.html#kontak">Kontak</a>
  </div>
  `);
})();
