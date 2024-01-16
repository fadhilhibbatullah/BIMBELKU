import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ELearning.module.css";

const ELearning: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Matematika" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "IPA" to the project
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "IPS" to the project
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.eLearning}>
      <img className={styles.eLearningChild} alt="" src="/rectangle-10.svg" />
      <b className={styles.eLearning1}>E-Learning</b>
      <img
        className={styles.undrawVideoCallRe4p261Icon}
        alt=""
        src="/undraw-video-call-re-4p26-1.svg"
      />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <b className={styles.matematika}>Matematika</b>
      </div>
      <img
        className={styles.dataAnalyzingMonochromatic}
        alt=""
        src="/data-analyzing--monochromatic-1.svg"
      />
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupChild} />
        <b className={styles.matematika}>IPA</b>
      </div>
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer2Click}
      >
        <div className={styles.groupChild} />
        <b className={styles.matematika}>IPS</b>
      </div>
      <img
        className={styles.undrawToTheStarsReWq2x1Icon}
        alt=""
        src="/undraw-to-the-stars-re-wq2x-1.svg"
      />
      <img
        className={styles.undrawProfessorReMj1s1Icon}
        alt=""
        src="/undraw-professor-re-mj1s-1.svg"
      />
      <img
        className={styles.undrawConnectedWorldWuay1Icon}
        alt=""
        src="/undraw-connected-world-wuay-1.svg"
      />
      <div className={styles.eLearningInner} onClick={onGroupContainer3Click}>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <b className={styles.kembali}>Kembali</b>
        </div>
      </div>
    </div>
  );
};

export default ELearning;
