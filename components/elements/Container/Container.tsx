import React, { FC, ReactNode } from "react";
import styles from "./container.module.scss";

type Props = {
  children: ReactNode;
  additionalStyles?: string
};

const Container: FC<Props> = ({ additionalStyles, children }) => {
  return (
    <div 
      className={`${styles.container}${additionalStyles ? ' ' + additionalStyles : ''}`}>{children}</div>
  )
};

export default Container;
