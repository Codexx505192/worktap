import Link from "next/link";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="ul_block">
                 <p className="txt20">
                    Топ категории
                 </p>

                <ul className="ul2">
                   <li className="li2">
                    <Link href="#" className="lnk7">
                    Тексты и переводы
                    </Link>
                   </li>

                   <li className="li2">
                    <Link href="#" className="lnk7">
                    Разработка
                    </Link>
                   </li>

                   <li className="li2">
                    <Link href="#" className="lnk7">
                    Дизайн
                    </Link>
                   </li>

                   <li className="li2">
                    <Link href="#" className="lnk7">
                    Аудио, видео монтаж
                    </Link>
                   </li>

                   <li className="li2">
                    <Link href="#" className="lnk7">
                    Соцсети и реклама
                    </Link>
                   </li>


                   <li className="li2">
                    <Link href="#" className="lnk7">
                    Бизнес и жизнь
                    </Link>
                   </li>

                   <li className="li2">
                    <Link href="#" className="lnk7">
                    SEO и оптимизация
                    </Link>
                   </li>

                </ul>
            </div>

            <div className="ul_block">
                 <p className="txt20">
                   О Проекте
                 </p>

                <ul className="ul2">
                   <li className="li2">
                    <Link href="/aboutUs" className="lnk7">
                    О Нас
                    </Link>
                   </li>

                   <li className="li2">
                    <Link href="/howDoes" className="lnk7">
                    Как Это Работает
                    </Link>
                   </li>

                   <li className="li2">
                    <Link href="#" className="lnk7">
                    Политика Приватности
                    </Link>
                   </li>

                   <li className="li2">
                    <Link href="/rules" className="lnk7">
                    Правила Пользования 
                    </Link>
                   </li>

                   <li className="li2">
                    <Link href="#" className="lnk7">
                    Пресса о нас
                    </Link>
                   </li>

                </ul>
            </div>

            <div className="ul_block">
                 <p className="txt20">
                   Поддержка
                 </p>

                <ul className="ul2">
                   <li className="li2">
                    <Link href="#" className="lnk7">
                    Контакты
                    </Link>
                   </li>

                   <li className="li2">
                    <Link href="/securityPolicy" className="lnk7">
                    Политика Безопасности
                    </Link>
                   </li>

                   <li className="li2">
                    <Link href="#" className="lnk7">
                    FAQ
                    </Link>
                   </li>
                </ul>
            </div>

            <div className="follow_block">
                <p className="txt21">
              Follow
                </p>

                <div className="app_b">
                    <div className="app_v">
                        <Link href="#" className="lnk8">
                        <img src="./img/facebook.svg" alt="" />
                        </Link>
                    </div>

                    <div className="app_v">
                        <Link href="#" className="lnk8">
                        <img src="./img/twitter.svg" alt="" />
                        </Link>
                    </div>

                    <div className="app_v">
                        <Link href="#" className="lnk8">
                        <img src="./img/insta.svg" alt="" />
                        </Link>
                    </div>

                    <div className="app_v">
                        <Link href="#" className="lnk8">
                        <img src="./img/facebook.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}