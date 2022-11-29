import style from "./style.module.css";
import logo from "./logo-site.png";
import logoBlack from "./logo_black.png";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

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

  React.useEffect(() => {
    window.addEventListener("scroll", changeHeader);

    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, []);

  return (
    <>
      <header ref={header} className={style.header}>
        <div className={style.headerConter}>
          <div className={style.logo}>
            <LogoB view={viewLogoB} />
            <LogoW view={viewLogoW} />
          </div>
          <nav className={style.nav}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre</Link>
              </li>
              <li>
                <Link href="/cardapio">Cardápio</Link>
              </li>
              <li>
                <Link href="/localizacao">Localização</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
