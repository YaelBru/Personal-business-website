import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import Btn from "../../shared/Btn/Btn";
import Hdr from "../../shared/Hdr/Hdr";

const Contact = (props) => {
  const content = {
    title: "צרו קשר",
    text: " רוצים לקבוע תור? יש לכם שאלה? שלחו לי הודעה!",
  };

  const [submitMessage, setsubmitMessage] = useState(false);
  const [sentMessageStatus, setSentMessageStatus] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "taya-therapy-contact",
        "contact-form",
        e.target,
        "user_QQvxgx3DpiC7GH8aCkZS8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setsubmitMessage(true);
          setSentMessageStatus(true);
        },
        (error) => {
          console.log(error.text);
          setsubmitMessage(true);
          setSentMessageStatus(false);
        }
      );
  };

  return (
    <div className={styles.contactContainer} id="contact">
      <div
        className={`${styles.formWrapper} ${
          submitMessage ? styles.formHidden : null
        }`}
      >
        <Hdr title={content.title} text={content.text} />
        <form onSubmit={sendEmail}>
          <div className={styles.row}>
            <div className={styles.inputField}>
              <input
                className={styles.inputElement}
                name="user_name"
                placeholder="שם מלא"
              />
            </div>
            <div className={styles.inputField}>
              <input
                className={styles.inputElement}
                name="user_mobile"
                placeholder="טלפון"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputField}>
              <input
                className={styles.inputElement}
                name="user_email"
                placeholder="כתובת אימייל"
              />
            </div>
            <div className={styles.inputField}>
              <input
                className={styles.inputElement}
                name="message_header"
                placeholder="נושא"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputField}>
              <textarea
                rows="5"
                className={styles.inputElement}
                name="message_content"
                placeholder="תוכן ההודעה"
              ></textarea>
            </div>
          </div>
          <div className={styles.row}>
            <Btn name="contact" type="submit" value="שלחו לי הודעה!" />
          </div>
        </form>
      </div>
      {submitMessage && (
        <div className={styles.submitResponse}>
          {sentMessageStatus ? (
            <div className={styles.submitResponseWrapper}>
              ההודעה נשלחה
            </div>
          ) : (
            <div className={styles.submitResponseWrapper}>
              הודעה לא נשלחה. אנא נסו שוב.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Contact;
