import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HalamanDaftar.module.css";

const HalamanDaftar: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer4Click = useCallback(() => {
    navigate("/halaman-login");
  }, [navigate]);

  return (
    <div className={styles.halamanDaftar}>
      <div className={styles.halamanDaftarChild} />
      <div className={styles.halamanDaftarChild} />
      <img
        className={styles.undrawSignInReO58h1Icon}
        alt=""
        src="/undraw-sign-in-re-o58h-1.svg"
      />
      <b className={styles.signUp}>Sign Up</b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.passwordParent}>
          <div className={styles.password}>Password</div>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.teleponParent}>
          <div className={styles.password}>Telepon</div>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.emailParent}>
          <div className={styles.password}>Email</div>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.namaLengkapParent}>
          <div className={styles.password}>Nama lengkap</div>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.groupWrapper} onClick={onGroupContainer4Click}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild2} />
            <b className={styles.daftar}>Daftar</b>
          </div>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild3} />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <b className={styles.daftarDenganGoogle}>Daftar dengan Google</b>
      </div>
    </div>
  );
};

export default HalamanDaftar;
