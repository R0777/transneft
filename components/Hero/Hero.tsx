import React, { FC, useEffect, useState } from "react";
import styles from './styles.module.scss'

const Hero:FC = () => {

const [loop, setLoop] = useState(0);
const [title, setTitle] = useState("Двигая нефть, двигаем прогресс");
const textArray = ["Двигая нефть, двигаем прогресс", "Приводим в движение нефть, чтобы она приводила в движение все остальное", "В числе лидеров отрасли по минимальному углеродному следу"];

useEffect(() => {
  const titleChange = setInterval(() => {
    setTitle(textArray[loop]);
    loop === 2 ? setLoop(0) : setLoop(loop+1)
  }, 3000);

  return () => clearInterval(titleChange);
});

  return (
    <section className={styles.heroBlock}>
      <h1 className={styles.heroBlock__title}>ПАО «Транснефть»</h1>
      <h2>{title}</h2>
  </section>
  );
};

export default Hero;