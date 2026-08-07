// Shared footer, injected via JS so it works even when the site is opened
// directly from disk (file://) where fetch() of local partials is blocked.
document.write(`
<footer id="kontak">
  <div class="footer-container">
    <div>
      <div class="footer-logo">
        <div class="logo-mark">NI</div>
        <div class="footer-logo-text">Nusa Inspira Teknologi</div>
      </div>
      <p class="footer-tagline">Inspiration to Innovation. Menghubungkan pembelajaran, teknologi, dan kebutuhan mitra dalam satu solusi yang terarah.</p>
      <div class="footer-social">
        <a href="https://www.instagram.com/inspira.teknologi" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/inspirateknologi/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://www.tiktok.com/@inspira.teknologi" target="_blank" rel="noopener" aria-label="TikTok">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
        </a>
      </div>
    </div>

    <div class="footer-col">
      <h4>Tautan Cepat</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="tentang-kami.html">Tentang Kami</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="index.html#kontak">Kontak</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Layanan &amp; Produk</h4>
      <ul>
        <li><a href="layanan-inspira-teknologi.html">Inspira Teknologi</a></li>
        <li><a href="layanan-inspira-innovation.html">Inspira Innovation</a></li>
        <li><a href="produk-edulyfe.html">Edulyfe</a></li>
        <li><a href="produk-inspirasiya.html">Inspirasiya</a></li>
        <li><a href="produk-english-inspira.html">English Inspira</a></li>
      </ul>
    </div>

    <div class="footer-col footer-contact">
      <h4>Kontak</h4>
      <p>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>Jalan Ruko Permata No.39, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119</span>
      </p>
      <p>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.33 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>+62 851 1163 6633</span>
      </p>
      <p>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        <span>nusainspirateknologi@gmail.com</span>
      </p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 PT Nusa Inspira Teknologi. Hak cipta dilindungi.</p>
  </div>
</footer>
`);
