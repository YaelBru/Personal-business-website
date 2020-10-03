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

  const [values, setValues] = useState({
    user_name: "",
    user_mobile: "",
    user_email: "",
    message_header: "",
    message_content: "",
  });
  const [valid, setValid] = useState(null);
  const [submitMessage, setsubmitMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const [sentMessageStatus, setSentMessageStatus] = useState(null);

  const changeHandler = (event) => {
    event.persist();
    const inputVal = event.target.value;
    setValues((values) => ({ ...values, [event.target.name]: inputVal }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      values.user_name &&
      values.user_mobile &&
      values.user_email &&
      values.message_header &&
      values.message_content
    ) {
      setValid("valid");
      setsubmitMessage(true);
      setIsLoading(true);
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
            setIsLoading(false);
            setSentMessageStatus("success");
          },
          (error) => {
            console.log(error.text);
            setIsLoading(false);
            setSentMessageStatus("fail");
          }
        );
    } else {
      setValid("invalid");
    }
  };

  let messageResponse = () => {
    if (sentMessageStatus === "success") {
      return (
        <div className={styles.submitResponse}>
          <div className={styles.submitResponseWrapper}>ההודעה נשלחה</div>
        </div>
      );
    }
    if (sentMessageStatus === "fail") {
      return (
        <div className={styles.submitResponse}>
          <div className={styles.submitResponseWrapper}>
            הודעה לא נשלחה. אנא נסו שוב.
          </div>
        </div>
      );
    }
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
                value={values.user_name}
                placeholder="שם מלא"
                onChange={changeHandler}
              />
            </div>
            <div className={styles.inputField}>
              <input
                className={styles.inputElement}
                name="user_mobile"
                value={values.user_mobile}
                placeholder="טלפון"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputField}>
              <input
                className={styles.inputElement}
                name="user_email"
                value={values.user_email}
                placeholder="כתובת אימייל"
                onChange={changeHandler}
              />
            </div>
            <div className={styles.inputField}>
              <input
                className={styles.inputElement}
                name="message_header"
                value={values.message_header}
                placeholder="נושא"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputField}>
              <textarea
                rows="5"
                className={styles.inputElement}
                name="message_content"
                value={values.message_content}
                placeholder="תוכן ההודעה"
                onChange={changeHandler}
              ></textarea>
            </div>
          </div>
          {valid === "invalid" && (
            <div className={styles.error}>
              <span>יש למלא את כל הפרטים</span>
            </div>
          )}
          <div className={styles.row}>
            <Btn name="contact" type="submit" value="שלחו לי הודעה!" />
          </div>
        </form>
      </div>
      {isLoading && valid === "valid" && (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader}>
            <span></span>
            <span></span>
            {/* <span></span>
              <span></span> */}
          </div>
        </div>
      )}
      {submitMessage && !isLoading && messageResponse()}
    </div>
  );
};

export default Contact;
