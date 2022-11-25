import Image from "next/image";
import style from "./style.module.css";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <p>Todos os direitos reservados 2022</p>
        <p>Pizzaria Fernandes</p>
        <p>
          <Image
            src="/images/logo-black.png"
            width={90}
            height={15}
            alt="logo codemars"
          />
        </p>
      </footer>
    </>
  );
};

export default Footer;
