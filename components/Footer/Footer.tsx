import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Container from "../elements/Container/Container";
import styles from "./styles.module.scss";

const Footer = () => {

  const router = useRouter()

  const [vis, setVis] = useState(false);

  const visToggleHandler = (ev: React.MouseEvent<HTMLElement>) => {
    ev.stopPropagation();
    ev.currentTarget.classList.toggle("show");
  };

  const handleScreen = () => {
    if (window.innerWidth < 768) {
      setVis(false);
    } else setVis(true);
  };

  useEffect(() => {
    handleScreen();
  }, []);

  return (
    <footer
      id="footer"
      className={styles.footer}
    >
      <div 
        className={styles.footerOuter} 
        style={ !vis && router.pathname === '/contact-us' ? {padding: '130px 0 0'} : {padding: '0'} }>
        <Container additionalStyles={styles.footerContainer}>
          <div className={styles.wrapper}>
              <Image src="/tn.png" alt="Логотип Транснефть" title="Логотип Транснефть" width="140" height="70" />
            <p className={styles.rightSide}>
              ©2014 – 2024. ПАО «Транснефть».<br/> Все права защищены
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
