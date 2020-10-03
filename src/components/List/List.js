import React from "react";
import styles from "./List.module.css";
import { HashLink } from "react-router-hash-link";
import ListItem from "./ListItem/ListItem";
import Btn from "../../shared/Btn/Btn";
import serviceList from "../../assets/services.json";

import Hdr from "../../shared/Hdr/Hdr";

const List = () => {
  const content = {
    title: "הטיפולים",
    text:
      "ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים.ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית  צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים.",
  };

  const list = serviceList.map((service) => (
    <ListItem
      key={service.id}
      title={service.title}
      description={service.description}
      icon={service.icon}
    />
  ));

  return (
    <div className={styles.listContainer} id="services">
      <Hdr title={content.title} text={content.text} />
      <div className={styles.listWrapper}>{list}</div>
      <HashLink to="/#contact" smooth>
        <Btn name="contact" value="לקביעת תור" />
      </HashLink>
    </div>
  );
};

export default List;
