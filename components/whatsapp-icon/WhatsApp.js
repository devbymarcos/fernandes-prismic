import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";

const WhatsApp = () => {
  return (
    <Link
      href="https://wa.me/554132660954?text=Quero%20pedir"
      className={style.boxWhats}
    >
      <Image src="/whats-icon.svg" width={40} height={40} />
    </Link>
  );
};

export default WhatsApp;
