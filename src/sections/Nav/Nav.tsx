import styles from "./Nav.module.css";
import { useState } from "react";
type NavProps = {
  logo: string;
  navItems: NavItems[];
  btnText: string;
};
type NavItems = {
  link: string;
};
function Nav(props: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <nav>
        <div className={styles.logoContainer}>
          <img src={props.logo} alt="" />
        </div>
        {isOpen && (
   <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
   <ul>
     {props.navItems.map((item, index) => (
       <li key={index}><a href="#">{item.link}</a></li>
     ))}
   </ul>
 </div>
  )}
    <div className={styles.itemsContainer}>
    <ul className={styles.navLinks}>
      
      {props.navItems.map((item, index) => (
        <li key={index}><a href="#">{item.link}</a></li>
      ))}
  
    </ul>
  </div>

        <button className={styles.navBtn}>{props.btnText}</button>

        <button className={styles.menuBtn} onClick={toggleMenu}>
    {isOpen ? '✖' : '☰'}
  </button>
      </nav>
    </div>
  );
}

export default Nav;
