// Main application logic
export function createApp() {
  return {
    mount(selector) {
      const app = document.querySelector(selector)
      app.innerHTML = this.render()
      this.bindEvents()
    },

    render() {
      return `
        <header class="header">
          <nav class="nav">
            <div class="nav-brand">
              <h1>Warung Sate Pak Budi</h1>
            </div>
            <div class="nav-menu">
              <a href="#home">Beranda</a>
              <a href="#about">Tentang</a>
              <a href="#services">Layanan</a>
              <a href="#contact">Kontak</a>
            </div>
          </nav>
        </header>

        <main>
          <section id="home" class="hero">
            <div class="hero-content">
              <h2>Selamat Datang di Warung Sate Pak Budi</h2>
              <p>Warung sate kambing dan ayam dengan bumbu kacang rahasia keluarga</p>
              <button class="cta-button">Hubungi Kami</button>
            </div>
          </section>

          <section id="about" class="about">
            <div class="container">
              <h2>Tentang Kami</h2>
              <p>Kami adalah Kuliner terpercaya yang melayani dengan sepenuh hati.</p>
            </div>
          </section>

          <section id="services" class="services">
            <div class="container">
              <h2>Layanan Kami</h2>
              <div class="services-grid">
                <div class="service-card">
                  <h3>Layanan Premium</h3>
                  <p>Kualitas terbaik untuk kebutuhan Anda</p>
                </div>
                <div class="service-card">
                  <h3>Harga Terjangkau</h3>
                  <p>Solusi ekonomis tanpa mengurangi kualitas</p>
                </div>
                <div class="service-card">
                  <h3>Pelayanan 24/7</h3>
                  <p>Siap melayani kapan saja Anda membutuhkan</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" class="contact">
            <div class="container">
              <h2>Hubungi Kami</h2>
              <div class="contact-info">
                <p>📱 WhatsApp: <a href="https://wa.me/6281234567890">+62 812-3456-7890</a></p>
                <p>📧 Email: info@warungsatepakbudi.com</p>
                <p>📍 Alamat: Jakarta, Indonesia</p>
              </div>
            </div>
          </section>
        </main>

        <footer class="footer">
          <div class="container">
            <p>&copy; 2025 Warung Sate Pak Budi. Dibuat dengan ❤️ oleh NYAI</p>
          </div>
        </footer>
      `
    },

    bindEvents() {
      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute('href'))
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
          }
        })
      })

      // CTA button
      const ctaButton = document.querySelector('.cta-button')
      if (ctaButton) {
        ctaButton.addEventListener('click', () => {
          window.open('https://wa.me/6281234567890', '_blank')
        })
      }
    }
  }
}