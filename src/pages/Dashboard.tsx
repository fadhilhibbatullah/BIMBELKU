import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAudioBookLine1Click = useCallback(() => {
    navigate("/elearning");
  }, [navigate]);

  const onStudyLine1Click = useCallback(() => {
    // Please sync "MATA PELAJARAN" to the project
  }, []);

  const onLearningLine1Click = useCallback(() => {
    // Please sync "Latihan Soal" to the project
  }, []);

  const onTrophyLine1Click = useCallback(() => {
    // Please sync "Leaderboard" to the project
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardChild} />
      <b className={styles.dashboard1}>Dashboard</b>
      <div className={styles.componentParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.groupChild} />
          </div>
        </div>
        <b className={styles.eLearnimg}>Leaderboard</b>
        <b className={styles.eLearnimg1}>E-learning</b>
        <img className={styles.groupItem} alt="" />
        <img className={styles.groupInner} alt="" />
        <img
          className={styles.audioBookLine1}
          alt=""
          src="/audio-book-line-1.svg"
          onClick={onAudioBookLine1Click}
        />
        <img
          className={styles.studyLine1Icon}
          alt=""
          src="/study-line-1.svg"
          onClick={onStudyLine1Click}
        />
        <b className={styles.mataPelajaran}>Mata Pelajaran</b>
        <img
          className={styles.learningLine1Icon}
          alt=""
          src="/learning-line-1.svg"
          onClick={onLearningLine1Click}
        />
        <b className={styles.latihanSoal}>Latihan Soal</b>
        <img
          className={styles.trophyLine1Icon}
          alt=""
          src="/trophy-line-1.svg"
          onClick={onTrophyLine1Click}
        />
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img
        className={styles.undrawBooksRe8gea1Icon}
        alt=""
        src="/undraw-books-re-8gea-1.svg"
      />
      <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
      <b className={styles.bimbelku}>BIMBELKU</b>
      <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector.svg" />
      <div className={styles.dashboardItem} />
      <div className={styles.statusBar}>
        <div className={styles.battery}>
          <div className={styles.border} />
          <img className={styles.capIcon} alt="" src="/cap.svg" />
          <div className={styles.capacity} />
        </div>
        <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
        <img
          className={styles.cellularConnectionIcon}
          alt=""
          src="/cellular-connection.svg"
        />
        <div className={styles.timeStyle}>
          <div className={styles.time}>9:41</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
