<template>
  <footer class="footer container-xl py-4">
    <hr />
    <div class="row mt-4">
      <div class="col-md-4 text-center text-md-start">
        <img src="../../assets/images/logo-alt.svg" alt="" />
        <br />
        <br />
        <h6>Find Us :</h6>
        <div class="social-icons">
          <img class="mx-2" src="../../assets/images/facebook.svg" alt="" />
          <img class="mx-2" src="../../assets/images/instagram.svg" alt="" />
          <img class="mx-2" src="../../assets/images/youtube.svg" alt="" />
        </div>
      </div>

      <div class="col-md-2 text-center text-md-start">
        <h5 style="color: orange">Navigation</h5>
        <ul class="list-unstyled">
          <li><a href="#">Home</a></li>
          <li><a href="#">Order</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <div class="col-md-2 text-center text-md-start">
        <h5 style="color: orange">Contact</h5>
        <ul class="list-unstyled">
          <li>
            <img src="../../assets/images/mail.svg" alt="" width="10%" />
            <a href="mailto:Food.now@mail.com">Food.now@mail.com</a>
          </li>
          <li>
            <img src="../../assets/images/phone.svg" alt="" width="10%" />
            <a href="tel:+62848477102943">+62848477102943</a>
          </li>
          <li>
            <img src="../../assets/images/whatsapp.svg" alt="" width="10%" />
            <a href="https://wa.me/628184938494">+628184938494</a>
          </li>
        </ul>
      </div>

      <div class="col-md-4 text-center text-md-start">
        <h5 style="color: orange">Location</h5>
        <div class="location-wrapper">
          <img
            src="../../assets/images/location.svg"
            alt="Location Icon"
            class="location-icon"
          />
          <p class="location-text"><b>Kerobokan</b></p>
        </div>
        <p>
          Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta
          Utara, Kabupaten Badung, Bali 80361
        </p>
      </div>
    </div>
    <hr />
    <div class="text-center mt-4">
      <p>
        &copy; 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor
        Indonesia. | <a href="#">Privacy Policy</a>
      </p>
      <p>
        This site is protected by reCAPTCHA and the Google
        <a href="#">Privacy Policy</a> and
        <a href="#">Terms of Service</a> apply.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  color: #333;
}

.footer h3 {
  font-size: 2rem;
  color: orange;
}
.footer h6 {
  color: orange;
}

.footer .social-icons {
  color: #333;
  font-size: 1.5rem;
  margin: 10 10px;
}

.footer .social-icons:hover {
  color: orange;
}

.footer ul {
  padding-left: 0;
}

.footer ul li a {
  text-decoration: none;
  color: #333;
}

.footer ul li a:hover {
  color: orange;
}

.footer .text-center a {
  color: #333;
}

.footer .text-center a:hover {
  color: orange;
}

.location-wrapper {
  display: flex; /* Mengatur elemen di dalamnya berjajar secara horizontal */
  align-items: center; /* Menyelaraskan elemen secara vertikal */
  gap: 4px; /* Jarak antara ikon dan teks */
}

.location-text {
  margin: 0;
}
</style>
