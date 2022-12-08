import style from "./style.module.css";
import logo from "./logo-site.png";
import logoBlack from "./logo_black.png";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import btnMenu from "./menu.svg";
const LogoB = ({ view }) => {
  if (!view) return null;
  return (
    <Image
      className={style.animationView}
      src={logoBlack}
      width={170}
      height={60}
      alt="logo pizzaria"
    />
  );
};
const LogoW = ({ view }) => {
  if (!view) return null;
  return (
    <Image
      className={style.animationView}
      src={logo}
      width={200}
      height={123}
      alt="logo pizzaria"
    />
  );
};

const Header = () => {
  const [viewLogoB, setViewLogoB] = React.useState(false);
  const [viewLogoW, setViewLogoW] = React.useState(true);
  const header = useRef();
  const nav = useRef();

  function changeHeader() {
    if (window.scrollY > 100) {
      header.current.classList.add("scrollHeader");
      setViewLogoB(true);
      setViewLogoW(false);
    } else {
      header.current.classList.remove("scrollHeader");
      setViewLogoB(false);
      setViewLogoW(true);
    }
  }

  function changeMobileMenu() {
    nav.current.classList.toggle("activeMenuMobile");
  }

  React.useEffect(() => {
    if (window.innerWidth >= 750) {
      window.addEventListener("scroll", changeHeader);
    }

    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, []);

  React.useEffect(() => {
    if (window.innerWidth <= 750) {
      setViewLogoB(true);
      setViewLogoW(false);
    }
  }, []);

  return (
    <>
      <header ref={header} className={style.header}>
        <div className={style.headerConter}>
          <div className={style.logo}>
            <LogoB view={viewLogoB} />
            <LogoW view={viewLogoW} />
          </div>
          <button onClick={changeMobileMenu} className={style.btnMobile}>
            <Image
              src={btnMenu}
              width={30}
              height={30}
              alt="icone de menu  tres barras horizontais"
            />
          </button>
          <nav ref={nav} className={style.nav}>
            <ul>
              <li>
                <Link onClick={changeMobileMenu} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={changeMobileMenu} href="/sobre">
                  Sobre
                </Link>
              </li>
              <li>
                <Link onClick={changeMobileMenu} href="/cardapio">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link onClick={changeMobileMenu} href="/localizacao">
                  Localização
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
