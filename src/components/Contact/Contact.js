import React from "react";
import styles from "./Contact.module.css";
import Btn from "../../shared/Btn/Btn";
import Hdr from "../../shared/Hdr/Hdr";

const Contact = (props) => {
  const content = {
    title: "צרו קשר",
    text: " רוצים לקבוע תור? יש לכם שאלה? שלחו לי הודעה!",
  };

  return (
    <div className={styles.contactContainer} id="contact">
      <Hdr title={content.title} text={content.text} />
      <div className={styles.formWrapper}>
        <form onSubmit={(event) => props.sendMessage(event)}>
          <div className={styles.row}>
            <div className={styles.inputField}>
              <input className={styles.inputElement} placeholder="שם מלא" />
            </div>
            <div className={styles.inputField}>
              <input className={styles.inputElement} placeholder="טלפון" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputField}>
              <input
                className={styles.inputElement}
                placeholder="כתובת אימייל"
              />
            </div>
            <div className={styles.inputField}>
              <input className={styles.inputElement} placeholder="נושא" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputField}>
              <textarea
                rows="5"
                className={styles.inputElement}
                placeholder="תוכן ההודעה"
              ></textarea>
            </div>
          </div>
          <div className={styles.row}>
            <Btn name="contact" type="submit" value="שלחו לי הודעה!" />
          </div>
        </form>
      </div>

      {/* <div>
        Message sent / Oops try again
      </div> */}
    </div>
  );
};

export default Contact;
