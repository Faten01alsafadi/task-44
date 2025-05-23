import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.first}>
          <img src="/public/img/logo.svg" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus
felis vitae sit est quisque.</p>
        </div>
        <div>
          <h4>Service</h4>
          <span>Payment & Tax</span>
          <span>Features</span>
          <span>View Booking</span>
          <span>Support</span>
        </div>
        <div>
          <h4>About</h4>
          <span>About us</span>
          <span>News</span>
          <span>Pricing</span>
          <span>New Property</span>
        </div>
        <div className={styles.last}>
          <h4>Our Location</h4>
          <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
          <div className={styles.images}>
            <img src="/public/img/Frame 20.svg" alt="" />
            <img src="/public/img/Frame 21.svg" alt="" />
            <img src="/public/img/Frame 22.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Copyright 2024 flora. All Rights Reserved</p>
        <div className={styles.dflex}>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
