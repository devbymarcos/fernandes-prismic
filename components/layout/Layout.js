import Header from "../header/Header";
import style from "./style.module.css";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
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
