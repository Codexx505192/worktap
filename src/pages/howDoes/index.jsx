import Header from "@/widjets/header";
import Link from "next/link";

export default function HowDoes() {
    return(
        <>
        <div className="container">
            <div className="how_block">
              <div className="tppp">
                <h1 className="txt24">
                    Как это работает
                </h1>

                <div className="exit2">
                    <Link href="/" className="exst">
                     x
                    </Link>
                </div>
              </div>


             <div className="grd_how">
                <div className="hw">
                    <div className="how_tp">
                        <img src="./img/udraw.svg" alt="" />
                    </div>

                    <p className="txt25">
                    Укажите вид работы и <br />
                     категорию
                    </p>
                </div>

                <div className="hw">
                    <div className="how_tp">
                        <img src="./img/undraw.svg" alt="" />
                    </div>

                    <p className="txt25">
                    Выберите специалиста
                    </p>

                    <p className="txt26">
                     Каждый специалист перед <br />
                      началом работы проходит <br />
                       тщательную проверку, имеет <br />
                        рейтинг и отзывы предыдущих <br />
                         заказчиков.
                    </p>
                </div>

                 <div className="hw">
                    <div className="how_tp">
                        <img src="./img/pay.png" alt="" />
                    </div>

                    <p className="txt25">
                    Оплатите услугу
                    </p>
                </div>


                <div className="hw">
                    <div className="how_tp">
                        <img src="./img/undraw.svg" alt="" />
                    </div>

                    <p className="txt25">
                     Cпециалист выполняет <br />
                      работу
                    </p>

                    <p className="txt26">
                     После выполнения заказа у вас <br />
                      будет возможность поставить <br />
                       специалисту оценку и <br />
                        написать отзыв.
                    </p>

                </div>

             </div>

             <div className="btn_cntr2">
                <button className="btn6">
                  <Link href="/" className="lnk9">
                  Понятно
                  </Link>
                </button>
                </div>
            </div>
        </div>
        </>
    )
}