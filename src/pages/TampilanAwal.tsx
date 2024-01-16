import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TampilanAwal.module.css";

const TampilanAwal: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSTARTTextClick = useCallback(() => {
    navigate("/intro");
  }, [navigate]);

  return (
    <div className={styles.tampilanAwal}>
      <div className={styles.tampilanAwalChild} />
      <img
        className={styles.undrawBooksRe8gea11}
        alt=""
        src="/undraw-books-re-8gea-1-1.svg"
      />
      <b className={styles.bimbelku}>BIMBELKU</b>
      <b className={styles.appVersion101Container}>
        <p className={styles.appVersion}>App Version</p>
        <p className={styles.p}>1.01</p>
      </b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.start} onClick={onSTARTTextClick}>
          START
        </b>
      </div>
    </div>
  );
};

export default TampilanAwal;
