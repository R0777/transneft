import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { baseHeaderItems } from "./headerData";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [mobNavIsOpen, setMobNavIsOpen] = useState(false);
  const [coords, setCoords] = useState(0);

  const router = useRouter();

  const toggleMobNav = () => {
    setMobNavIsOpen(!mobNavIsOpen);
  };

  useEffect(() => {
    const onScroll = () => setCoords(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (
    <div className={router.pathname !== '/' ? `${styles.outerNav} ${styles.scrolled}` : coords > 10 ? `${styles.outerNav} ${styles.scrolled}` : `${styles.outerNav}`}>
        <div className={styles.innerNav}>
          <div className={styles.leftSide}>
            <Link href="/" onClick={() => setMobNavIsOpen(false)}>
              
                <img
                  src="/logo.svg"
                  alt="Транснефть"
                  width="270"
                  height="30"
                />
              
            </Link>
          </div>
          <div
            className={`${styles.rightSide} ${
              mobNavIsOpen ? "" : styles.mobOpen
            }`}
          >
            {baseHeaderItems.map((item, idx) => (
              <Link href={item.pageLink} key={idx}  onClick={() => setMobNavIsOpen(false)}
              className={`styles.rightSide ${
                router.pathname === item.pageLink ? styles.activeLink : styles.navLinks
              }`}>
                
                  {item.title}
                
              </Link>
            ))}
            <div className={styles.closeButton} onClick={toggleMobNav}>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            className={`${styles.burgerMenu} ${
              mobNavIsOpen ? styles.toggleX : ""
            }`}
            onClick={toggleMobNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    </div>
  );
};

export default Header;
