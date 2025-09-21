const openBtn = document.getElementById('openBtn');
const contentBox = document.getElementById('contentBox');
const invitationDetails = document.getElementById('invitationDetails');
const toggleMusicBtn = document.getElementById('toggleMusicBtn');
const music = document.getElementById('weddingMusic');
const iconMusic = document.getElementById('iconMusic');

const invitationContent = `
<div class="section-container scroll-animate">
      <div class="kata-sambutan">
        Assalamu’alaikum warahmatullahi wabarakatuh.<br><br>
        Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada acara pernikahan putra-putri kami.
      </div>

      <div class="foto-pasangan scroll-animate">
        <img src="prewed 1.jpg" alt="Foto Pasangan">
      </div>
    </div>

    <div class="section-title scroll-animate">Mempelai</div>
    <div class="pasangan">
      <div class="profile scroll-animate">
        <img src="wanita.jpg" alt="Foto mempelai wanita" />
        <div class="info">
          <h3>Anita Cantika</h3>
          <p>Putri pertama dari<br><strong>Bapak Winarmo</strong> & <strong>Ibu Julaikah</strong></p>
          <a class="btn-ig" href="#" target="_blank">
            <img src="instagram.png" alt="Instagram" class="icon-ig">
              Instagram
          </a>
        </div>
      </div>
      <div class="symbol">&</div>
      <div class="profile reverse scroll-animate">
        <img src="pria1.jpg" alt="Foto mempelai pria" />
        <div class="info2">
          <h3>Angga Pratama</h3>
          <p>Putra kedua dari<br><strong>Bapak Bambang</strong> & <strong>Ibu Lestari</strong></p>
          <a class="btn-ig" href="#" target="_blank">
            <img src="instagram.png" alt="Instagram" class="icon-ig">
              Instagram
          </a>
        </div>
      </div>
    </div>

    <div class="quotes-islami scroll-animate">
      <div class="bismillah scroll-animate">
        <p> ﷽</p>
      </div>
      <p class="arabic scroll-animate">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا</p>
      <p class="latin scroll-animate">Wa min āyātihī an khalaqa lakum min anfusikum azwājā</p>
      <p class="arti scroll-animate">"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri." <br><strong>(QS. Ar-Rum: 21)</strong></p>
    </div>

    <section class="akad-card scroll-animate">
      <div class="akad-inner scroll-animate">
        <h2>Akad Pernikahan</h2>
        <span class="hari scroll-animate">Minggu</span>
        <div class="tanggal-akad scroll-animate">
          <span class="bulan scroll-animate">Desember</span>
          <span class="tanggal scroll-animate">24</span>
          <span class="tahun scroll-animate">2025</span>
        </div>
        <p class="jam scroll-animate">Pukul 09.00 WIB</p>
        <p class="lokasi scroll-animate">Gedung Graha Cinta, Jl. Bahagia No. 123</p>
        <div class="countdown-wrapper scroll-animate">
          <div class="countdown-box scroll-animate">
            <div><div id="hariAkad" class="countdown-item">00</div><p>Hari</p></div>
            <div><div id="jamAkad" class="countdown-item">00</div><p>Jam</p></div>
            <div><div id="menitAkad" class="countdown-item">00</div><p>Menit</p></div>
            <div><div id="detikAkad" class="countdown-item">00</div><p>Detik</p></div>
          </div>
        </div>
        <a href="https://maps.app.goo.gl/8RG2Ljph53bxCPt7A" target="_blank" class="btn-maps scroll-animate">Map Lokasi Acara</a>
      </div>
    </section>

    <section class="resepsi-card scroll-animate">
      <div class="resepsi-inner scroll-animate">
        <h2>Resepsi Pernikahan</h2>
        <span class="hari scroll-animate">Minggu</span>
        <div class="tanggal-resepsi scroll-animate">
          <span class="bulan scroll-animate">Desember</span>
          <span class="tanggal scroll-animate">24</span>
          <span class="tahun scroll-animate">2025</span>
        </div>
        <p class="jam scroll-animate">Pukul 11.00 WIB</p>
        <p class="lokasi scroll-animate">Gedung Graha Cinta, Jl. Bahagia No. 123</p>
        <div class="countdown-wrapper scroll-animate">
          <div class="countdown-box scroll-animate">
            <div><div id="hariResepsi" class="countdown-item">00</div><p>Hari</p></div>
            <div><div id="jamResepsi" class="countdown-item">00</div><p>Jam</p></div>
            <div><div id="menitResepsi" class="countdown-item">00</div><p>Menit</p></div>
            <div><div id="detikResepsi" class="countdown-item">00</div><p>Detik</p></div>
          </div>
        </div>
        <a href="https://maps.app.goo.gl/8RG2Ljph53bxCPt7A" target="_blank" class="btn-maps scroll-animate">Map Lokasi Acara</a>
      </div>
    </section>

    <section class="maps-section scroll-animate">
      <h2 class="maps-title scroll-animate">Maps</h2>
      <div class="maps-wrapper scroll-animate">
        <div class="maps-content scroll-animate">
          <div class="maps-frame scroll-animate">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63731.419375311925!2d114.51668552167968!3d-3.2971944999999865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423a6c5ef9b61%3A0x6d05999c9548678b!2sGedung%20Serba%20Guna%20(GSG)%20Universitas%20Lambung%20Mangkurat%20Banjarmasin!5e0!3m2!1sid!2sid!4v1758235169200!5m2!1sid!2sid" frameborder="0" allowfullscreen=""></iframe>
          </div>
          <p class="lokasi-judul scroll-animate">GEDUNG GRAHA CINTA</p>
          <p class="lokasi-alamat scroll-animate">Jl. Bahagia No. 123</p>
          <a href="https://maps.app.goo.gl/8RG2Ljph53bxCPt7A" target="_blank" class="btn-maps-lokasi scroll-animate">Petunjuk Ke Lokasi</a>
        </div>
      </div>
    </section>

    <!-- 7. RSVP Form: Formulir konfirmasi kehadiran -->
<section class="rsvp-section scroll-animate">
  <h2 class="rsvp-title scroll-animate">Konfirmasi Kehadiran</h2>
  <p class="rsvp-desc scroll-animate">Silakan isi formulir berikut untuk memberi tahu kami kehadiran Anda.</p>

  <form class="rsvp-form scroll-animate" onsubmit="submitRSVP(event)">
    <!-- Input nama tamu -->
    <label for="nama">Nama:</label>
    <input type="text" id="nama" name="nama" required />

    <!-- Input jumlah tamu -->
    <label for="jumlah">Jumlah Tamu:</label>
    <input type="number" id="jumlah" name="jumlah" min="1" required />

    <!-- Pilihan hadir atau tidak -->
    <label for="kehadiran">Akan Hadir?</label>
    <select id="kehadiran" name="kehadiran" required>
      <option value="">Pilih</option>
      <option value="Hadir">Hadir</option>
      <option value="Tidak Hadir">Tidak Hadir</option>
    </select>

    <!-- Tambahan input komentar -->
    <label for="komentar">Komentar / Ucapan:</label>
    <textarea id="komentar" name="komentar" rows="3" placeholder="Tulis ucapan atau pesan..."></textarea>

    <!-- Tombol kirim -->
    <button type="submit">Kirim</button>
    </form>

    <!-- Ringkasan RSVP -->
    <div id="rsvp-summary" class="rsvp-summary scroll-animate">
    <p><strong>Tamu yang mengonfirmasi:</strong> <span id="totalRSVP">0</span></p>
    <p><strong>Total tamu hadir:</strong> <span id="totalTamuHadir">0</span></p>
    </div>


    <!-- Hasil submit ditampilkan di sini -->
    <div id="rsvp-result" class="rsvp-result scroll-animate"></div>
    </section>

    <section class="hadiah-section scroll-animate" id="kirim-kado">
  <h2 class="hadiah-title scroll-animate">Hadiah</h2>
  <p class="hadiah-desc scroll-animate">
    Terima kasih atas kehadiran dan doa terbaik Anda. Jika berkenan, hadiah dapat dikirim melalui pilihan berikut:
  </p>

  <!-- Amplop Digital -->
  <h3 class="sub-title scroll-animate">Amplop Digital</h3>
  <div class="amplop-wrapper scroll-animate">
    <!-- Card Bank/E-Wallet -->
    <div class="amplop-card">
      <img src="/assets/bank/dana.jpg" alt="Dana" class="amplop-icon">
      <p><strong>DANA</strong></p>
      <p>0896 7890 5534</p>
      <p>a.n. Angga Pratama</p>
      <button class="copy-btn" onclick="copyText('089678905534')">Salin</button>
    </div>

    <div class="amplop-card">
      <img src="/assets/bank/bri.png" alt="Bank BRI" class="amplop-icon">
      <p><strong>Bank BRI</strong></p>
      <p>1470 5674 56346</p>
      <p>a.n. Angga Pratama</p>
      <button class="copy-btn" onclick="copyText('1470567456346')">Salin</button>
    </div>

    <div class="amplop-card">
      <img src="/assets/bank/ovo.jpg" alt="OVO" class="amplop-icon">
      <p><strong>OVO</strong></p>
      <p>0896 7890 5534</p>
      <p>a.n. Anita Cantika</p>
      <button class="copy-btn" onclick="copyText('089678905534')">Salin</button>
    </div>

    <div class="amplop-card">
      <img src="/assets/bank/bni.png" alt="Bank BNI" class="amplop-icon">
      <p><strong>Bank BNI</strong></p>
      <p>1470 5674 56346</p>
      <p>a.n. Anita Cantika</p>
      <button class="copy-btn" onclick="copyText('1470567456346')">Salin</button>
    </div>
  </div>

  <!-- Kirim Kado -->
  <h3 class="sub-title scroll-animate">Kirim Kado</h3>
  <div class="kado-maps scroll-animate">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63731.419375311925!2d114.51668552167968!3d-3.2971944999999865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423a6c5ef9b61%3A0x6d05999c9548678b!2sGedung%20Serba%20Guna%20(GSG)%20Universitas%20Lambung%20Mangkurat%20Banjarmasin!5e0!3m2!1sid!2sid!4v1758235169200!5m2!1sid!2sid" frameborder="0" allowfullscreen=""></iframe>
    <a href="https://maps.app.goo.gl/8RG2Ljph53bxCPt7A" target="_blank" class="btn-maps">Lihat Lokasi</a>
    <p><strong>Alamat Rumah:</strong><br>Jl. Bahagia No. 123</p>
    <div class="alamat-actions">
      <button class="copy-btn" onclick="copyText('Jl. Bahagia No. 123')">Salin Alamat</button>
    </div>
  </div>
</section>

    <section class="galeri-custom scroll-animate" id="galeri">
    <div class="daun-atas scroll-animate">
        <img src="atas-galeri.png" alt="bunga-atas">
        </div>
    <h2>Galeri Prewedding</h2>

    <div class="galeri-grid scroll-animate">
        <!-- Baris 1 -->
        <img src="prewed 2.jpg" alt="Foto 1" onclick="openModal(this.src)">
        <img src="prewed 1.jpg" alt="Foto 2" onclick="openModal(this.src)">
        <img src="prewed 5.jpg" alt="Foto 3" onclick="openModal(this.src)">
        <img src="prewed 4.jpg" alt="Foto 4" onclick="openModal(this.src)">
        <img src="prewed 6.jpg" alt="Foto 5" onclick="openModal(this.src)">
        <img src="prewed 3.jpg" alt="Foto 5" onclick="openModal(this.src)">
        <img src="prewed 10.jpg" alt="Foto 6" onclick="openModal(this.src)">
        <img src="prewed 7.jpg" alt="Foto 7" onclick="openModal(this.src)">
        <img src="prewed 11.jpg" alt="Foto 8" onclick="openModal(this.src)">
    </div>

    <div class="daun-bawah scroll-animate">
        <img src="bunga_dekorasi.png" alt="bunga-bawah">
    </div>
    </section>


<section class="penutup-undangan scroll-animate">
  <div class="frame-foto-lengkung scroll-animate">
    <img src="prewed 10.jpg" alt="Pengantin" class="foto-lengkung scroll-animate">
  </div>
  <div class="teks-ucapan scroll-animate">
    <h2>Terima Kasih</h2>
    <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.</p>
    <p>Wassalamu’alaikum Warahmatullahi Wabarakatuh</p>
  </div>
  <h3 class="nama-pengantin scroll-animate">Angga & Anita</h3>
</section>

`; // Salin seluruh isi template HTML undangan dari <script> sebelumnya

function startCountdown(targetDate, ids) {
  function update() {
    const now = new Date().getTime();
    const gap = targetDate - now;
    if (gap < 0) return;

    const d = Math.floor(gap / (1000 * 60 * 60 * 24));
    const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById(ids.hari).innerText = d;
    document.getElementById(ids.jam).innerText = h;
    document.getElementById(ids.menit).innerText = m;
    document.getElementById(ids.detik).innerText = s;
  }

  update();
  setInterval(update, 1000);
}

openBtn.addEventListener('click', () => {
  contentBox.style.display = 'none';
  invitationDetails.innerHTML = invitationContent;
  invitationDetails.style.display = 'block';

  setTimeout(() => {
    jalankanAnimasiScroll();
  }, 100); 

  toggleMusicBtn.style.display = 'block';
  music.play().catch(() => {});

  startCountdown(new Date(2025, 12, 24, 9, 0, 0), {
    hari: 'hariAkad',
    jam: 'jamAkad',
    menit: 'menitAkad',
    detik: 'detikAkad'
  });

  startCountdown(new Date(2025, 12, 24, 11, 0, 0), {
    hari: 'hariResepsi',
    jam: 'jamResepsi',
    menit: 'menitResepsi',
    detik: 'detikResepsi'
  });
});

toggleMusicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    iconMusic.src = "sound-on.png";
    iconMusic.alt = "Sound On";
  } else {
    music.pause();
    iconMusic.src = "sound-off.png";
    iconMusic.alt = "Sound Off";
  }
});

let totalPengisi = 0;
let totalTamuHadir = 0;

function submitRSVP(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const jumlah = parseInt(document.getElementById("jumlah").value, 10);
  const kehadiran = document.getElementById("kehadiran").value;
  const komentar = document.getElementById("komentar").value;

  const resultContainer = document.getElementById("rsvp-result");
  const newEntry = document.createElement("div");

  const statusClass = kehadiran === "Hadir" ? "hadir" : "tidak-hadir";
  newEntry.classList.add("rsvp-entry", statusClass);

  newEntry.innerHTML = `
    <div class="nama">${nama} (${jumlah} tamu)
      <span class="status">${kehadiran}</span>
    </div>
    ${komentar ? `<div class="komentar">💬 ${komentar}</div>` : ""}
  `;

  resultContainer.prepend(newEntry);

  totalPengisi += 1;
  if (kehadiran === "Hadir") {
    totalTamuHadir += jumlah;
  }

  document.getElementById("totalRSVP").textContent = totalPengisi;
  document.getElementById("totalTamuHadir").textContent = totalTamuHadir;

  event.target.reset();
}

  const modalGaleri = document.getElementById('modalGaleri');
  const modalImg = document.getElementById('modalImg');

  function openModal(src) {
    modalImg.src = src;
    modalGaleri.style.display = 'flex';
  }

  function closeModal() {
    modalGaleri.style.display = 'none';
    modalImg.src = '';
  }

  window.addEventListener('load', () => {
    const atas = document.querySelector('.bunga-transition.atas');
    const bawah = document.querySelector('.bunga-transition.bawah');

    setTimeout(() => {
      atas?.classList.add('buka');
      bawah?.classList.add('buka');
    }, 800);
  });

  function jalankanAnimasiScroll() {
    const scrollElements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });

    scrollElements.forEach(el => observer.observe(el));
  }

  jalankanAnimasiScroll(); // initial run

  function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert("Nomor berhasil disalin: " + text);
    });
  }
