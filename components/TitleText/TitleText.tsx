import React from "react";
import styles from './styles.module.scss'

interface ITitleText {
  title: string;
  textColor?: string;
}

const TitleText = ({title, textColor}: ITitleText) => {

  return (
    <section className={styles.titleText} style={{ color: textColor }}>
      <h1>{title}</h1>
    </section>

  );
};

export default TitleText;