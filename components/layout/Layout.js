import Header from "../header/Header";
import style from "./style.module.css";
import Footer from "../footer/Footer";
import Modal from "../modal/Modal";
import { ALERT_USER_GET } from "../../lib/api";
import React from "react";

const Layout = ({ children }) => {
  const [message, setMessage] = React.useState("");
  const [active, setActive] = React.useState(false);

  async function AlertUser() {
    const { url, options } = ALERT_USER_GET();
    const response = await fetch(url, options);
    const { data } = await response.json();
    if (!data) {
      return;
    }
    data.forEach((item) => {
      if (item.attributes.publishedAt) {
        setActive(true);
        setMessage(item.attributes.Texto);
      }
    });
  }

  function closeModal() {
    setActive(false);
    setMessage("");
  }

  React.useEffect(() => {
    AlertUser();
  }, []);

  return (
    <>
      <Modal onClick={closeModal} visibility={active}>
        {message}
      </Modal>
      <Header />
      <main className={style.main}>
        <div className={style.overlayer}></div>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
