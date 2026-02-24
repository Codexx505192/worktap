
import Link from "next/link";
import { useState } from "react";

export default function Header(){
 const [openMenu, setOpenMenu] = useState(false)

    return(
        <header className="header">
            <div className="left">
                <div className="lg">
                <Link href="/" className="lnks">
                  <img src="./img/logo1.svg" alt="" />
                </Link>
                </div>

                  <ul className="li1">
                    <li className="li1">
                        <Link href="/stock" className="lnk">
                        Биржа
                        </Link>
                    </li>

                    <li className="li1">
                        <Link href="#" className="lnk">
                        Ворки
                        </Link>
                    </li>

                     <li className="li1">
                        <Link href="#" className="lnk">
                        Конкурсы
                        </Link>
                    </li>

                     <li className="li1">
                        <Link href="#" className="lnk">
                        Создать ворк
                        </Link>
                    </li>

                     <li className="li1">
                        <Link href="#" className="lnk">
                        Создать заказ
                        </Link>
                    </li>
                  </ul>

                  <button className="menu" onClick={() => setOpenMenu(!openMenu)}>
                    <img src="./img/menu.svg" alt="" />
                  </button>

                  <ul className={`mnu ${openMenu ? "_active" : ""}`}>
                    <li>
                        <Link href="/stock" className="kn">
                        Биржа
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="kn">
                        Ворки
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="kn">
                        Конкурсы
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="kn">
                        Создать ворк
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="kn">
                        Создать заказ
                        </Link>
                    </li>
                    <li onClick={() => setOpenMenu(false)}>
                        <Link href="#" className="kn">
                        close
                        </Link>
                    </li>
                  </ul>
            </div>

            <div className="right">
                <button className="btn1">
                    <Link href="#" className="lnk2">
                    Регистрация
                    </Link>
                </button>

                <button className="btn2">
                    <Link href="/login" className="lnk3">
                    Войти
                    </Link>
                </button>
            </div>
        </header>
    )
}