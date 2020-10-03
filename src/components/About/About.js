import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/about-img-2.jpg";

const About = () => {

  return (
    <div className={styles.aboutContainer} id="about">
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.aboutContent}>
        <div className={styles.imgContainer}>
          <img className={styles.aboutImage} src={aboutImg} alt="Taya Bakshiyev" />
        </div>
        <div className={styles.aboutText}>
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית צש בליא, מנסוטו
            צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קולהע צופעט למרקוח איבן
            איף, ברומץ כלרשט מיחוצים. קלאצי נולום ארווס סאפיאן - פוסיליס קוויס,
            אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט
            למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
