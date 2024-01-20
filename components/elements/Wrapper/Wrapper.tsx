import React, { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  bg?: string
  additionalStyles?: string
};

const Wrapper: FC<Props> = ({ children, bg, additionalStyles,  }) => {
  return (
    <main 
      className={`${styles.wrapper}${additionalStyles ? ' ' + additionalStyles : ''}`}
      style={{ background: bg, backgroundSize: "cover" }}>
      {children}
    </main>
  );
};

export default Wrapper;