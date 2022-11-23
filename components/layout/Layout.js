import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import style from "./style.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <div className={style.overlayer}></div>
      <main className={style.main}>{children}</main>
    </>
  );
};

export default Layout;
