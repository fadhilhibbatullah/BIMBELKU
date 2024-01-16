import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Intro.module.css";

const Intro: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/halaman-login");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/halaman-daftar");
  }, [navigate]);

  return (
    <div className={styles.intro}>
      <div className={styles.introChild} />
      <b className={styles.bimbelku}>BIMBELKU</b>
      <div className={styles.tempatBelajarYangContainer}>
        <p className={styles.tempatBelajarYang}>Tempat belajar yang asik dan</p>
        <p className={styles.menyenangkan}>menyenangkan</p>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.masuk}>MASUK</b>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupChild} />
        <b className={styles.masuk}>MASUK</b>
      </div>
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer2Click}
      >
        <div className={styles.groupChild} />
        <b className={styles.masuk}>DAFTAR</b>
      </div>
      <img
        className={styles.undrawPersonalNotebookReD7Icon}
        alt=""
        src="/undraw-personal-notebook-re-d7dc-1-1.svg"
      />
    </div>
  );
};

export default Intro;
