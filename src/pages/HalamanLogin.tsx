import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HalamanLogin.module.css";

const HalamanLogin: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.halamanLogin}>
      <div className={styles.halamanLoginChild} />
      <div className={styles.halamanLoginChild} />
      <b className={styles.signIn}>Sign In</b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.passwordParent}>
          <div className={styles.password}>Password</div>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.teleponAtauEmailParent}>
          <div className={styles.password}>Telepon atau email</div>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.rectangleGroup} onClick={onGroupContainer2Click}>
          <div className={styles.rectangleDiv} />
          <b className={styles.masuk}>Masuk</b>
        </div>
        <b className={styles.lupaPassword}>Lupa Password?</b>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild1} />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.masukDenganGoogle}>Masuk dengan Google</b>
      </div>
      <b className={styles.belumMemilikiAkunContainer}>
        <span className={styles.belumMemilikiAkunContainer1}>
          <span>{`Belum memiliki akun terdaftar? `}</span>
          <span className={styles.daftar}>Daftar</span>
        </span>
      </b>
      <img
        className={styles.undrawSignInReO58h1Icon}
        alt=""
        src="/undraw-sign-in-re-o58h-1.svg"
      />
    </div>
  );
};

export default HalamanLogin;
