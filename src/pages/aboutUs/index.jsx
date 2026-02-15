import Header from "@/widjets/header";
import Link from "next/link";

export default function Page() {
    return(
        <>
        <div className="container">
            <div className="about_blck">
            <div className="about_tp">
              <button className="exit">
                <Link href="/" className="ex">
                     x
                </Link> 
              </button>

                  <h1 className="txt22">
                     О нас
                  </h1>

                  <p className="txt23">
                    WorkTap - онлайн сервис поиска частных специалистов для решения бизнес задач в кратчайшие сроки. Наша платформа объединяет заказчиков услуг, <br />
                     которым необходимо выполнить какую-либо работу, и компетентных специалистов, ищущих подработку или дополнительный заработок.
                  </p>
            </div>

            <div className="about_img">
                <img src="./img/abimg.svg" alt="" />
            </div>
            </div>
        </div>
        </>
    )
}