import React from "react";
import style from "./style.module.css";
import logo from "./logo-site.png";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Image src={logo} width={200} height={123} />
        </div>
      </header>
    </>
  );
};

export default Header;
