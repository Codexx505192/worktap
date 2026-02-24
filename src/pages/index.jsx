import Footer from "@/widjets/footer";
import Header from "@/widjets/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <div className="container">
          <Header/>

          <div className="banner">
            <div className="left_b">
              <h1 className="txt1">
                 Покупайте фриланс-услуги <br />
                  в <span className="sp">два клика</span>
              </h1>

              <p className="txt2">
                Ворк — единица работы продавца, которую <br />
                 можно купить как товар в магазине 
              </p>

              <div className="inp">
                <input type="text" placeholder="Что нужно сделать?"/>
                <button className="search">
                  Найти
                </button>
              </div>

              <p className="txt3">
                Выберите рубрику, чтобы начать
              </p>

              <div className="select_a_category_block">
                <p className="txt4">
                  Тексты и переводы    
                </p>

                <p className="txt4">
                  Разработка    
                </p>

                <p className="txt4">
                   Дизайн    
                </p>

                <p className="txt4">
                   Аудио, видео монтаж     
                </p>

                <p className="txt4">
                   SEO и оптимизация     
                </p>

                <p className="txt4">
                   Бизнес и жизнь     
                </p>

                <p className="txt4">
                   Соцсети и реклама     
                </p>
                
                <button className="catigor">
                   Все категории
                </button>
              </div>
            </div>

          <div className="right_b">
            <img src="./img/us.svg" alt="" />
          </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="current_works_block">
             
             <div className="crnt">
              <p className="txt5">
               Актуальные ворки
              </p>
              
              <div className="grd">
                <div className="lm">
                  <div className="top">
                    <div className="user">
                      <img src="./img/user.svg" alt="" />
                      </div>

                      <p className="txt6">
                      Сделать дизайн <br />
                       интернет-магазина
                      </p>
                  </div>

                  <p className="txt7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                     elit. Aliquam sed leo at hendrerit dictum diam, enim. <br />
                      Dolor in imperdiet ultrices mauris. Est vitae vulputate <br />
                       est nec cras. Turpis nunc ornare nulla neque, <br />
                        interdum. At pharetra consectetur nec est convallis...
                  </p>


                  <button className="btn3">
                    <Link href="#" className="lnk4">
                    Посмотреть
                    </Link>
                  </button>

                </div>
                
                 <div className="lm">
                  <div className="top">
                    <div className="user">
                      <img src="./img/user.svg" alt="" />
                      </div>

                      <p className="txt6">
                      Сделать дизайн <br />
                       интернет-магазина
                      </p>
                  </div>

                  <p className="txt7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                     elit. Aliquam sed leo at hendrerit dictum diam, enim. <br />
                      Dolor in imperdiet ultrices mauris. Est vitae vulputate <br />
                       est nec cras. Turpis nunc ornare nulla neque, <br />
                        interdum. At pharetra consectetur nec est convallis...
                  </p>


                  <button className="btn3">
                    <Link href="#" className="lnk4">
                    Посмотреть
                    </Link>
                  </button>

                </div>



                 <div className="lm">
                  <div className="top">
                    <div className="user">
                      <img src="./img/user.svg" alt="" />
                      </div>

                      <p className="txt6">
                      Сделать дизайн <br />
                       интернет-магазина
                      </p>
                  </div>

                  <p className="txt7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                     elit. Aliquam sed leo at hendrerit dictum diam, enim. <br />
                      Dolor in imperdiet ultrices mauris. Est vitae vulputate <br />
                       est nec cras. Turpis nunc ornare nulla neque, <br />
                        interdum. At pharetra consectetur nec est convallis...
                  </p>


                  <button className="btn3">
                    <Link href="#" className="lnk4">
                    Посмотреть
                    </Link>
                  </button>

                </div>

                 <div className="lm">
                  <div className="top">
                    <div className="user">
                      <img src="./img/user.svg" alt="" />
                      </div>

                      <p className="txt6">
                      Сделать дизайн <br />
                       интернет-магазина
                      </p>
                  </div>

                  <p className="txt7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                     elit. Aliquam sed leo at hendrerit dictum diam, enim. <br />
                      Dolor in imperdiet ultrices mauris. Est vitae vulputate <br />
                       est nec cras. Turpis nunc ornare nulla neque, <br />
                        interdum. At pharetra consectetur nec est convallis...
                  </p>


                  <button className="btn3">
                    <Link href="#" className="lnk4">
                    Посмотреть
                    </Link>
                  </button>

                </div>



                 <div className="lm">
                  <div className="top">
                    <div className="user">
                      <img src="./img/user.svg" alt="" />
                      </div>

                      <p className="txt6">
                      Сделать дизайн <br />
                       интернет-магазина
                      </p>
                  </div>

                  <p className="txt7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                     elit. Aliquam sed leo at hendrerit dictum diam, enim. <br />
                      Dolor in imperdiet ultrices mauris. Est vitae vulputate <br />
                       est nec cras. Turpis nunc ornare nulla neque, <br />
                        interdum. At pharetra consectetur nec est convallis...
                  </p>


                  <button className="btn3">
                    <Link href="#" className="lnk4">
                    Посмотреть
                    </Link>
                  </button>

                </div>


                <div className="lm2">
                  <p className="txt8">
                   Смотреть все ворки
                  </p>
                </div>
              </div>
             </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          
          <div className="top_freelancers_block">
            <p className="txt9">
            Топ фрилансеров
            </p>

            <div className="grd_top-fr">
              <div className="itm">
                <div className="inf_tp">
                   <div className="pht">
                    <Link href="/profile">
                    <img src="./img/ma.svg" alt="" />
                    </Link>
                   </div>

                   <div className="inf_i">
                    <p className="txt10">
                      Марина Королёва
                    </p>

                    <p className="txt11">
                      Разработчик PHP  
                    </p>

                    <p className="txt12">
                      Выполено проектов: 65
                    </p>


                    <div className="str">
                      <img src="./img/star.svg" alt="" />
                    </div>
                   </div>
                </div>

                <button className="btn4">
                    <Link href="/chat" className="lnk5">
                    Написать
                    </Link>
                  </button>
              </div>


                 <div className="itm">
                <div className="inf_tp">
                   <div className="pht">
                    <Link href="/profile">
                    <img src="./img/semyon.svg" alt="" />
                    </Link>
                   </div>

                   <div className="inf_i">
                    <p className="txt10">
                      Семён Сергеев
                    </p>

                    <p className="txt11">
                      Копирайтер  
                    </p>

                    <p className="txt12">
                      Выполено проектов: 104
                    </p>


                    <div className="str">
                      <img src="./img/star.svg" alt="" />
                    </div>
                   </div>
                </div>

                <button className="btn4">
                    <Link href="/chat" className="lnk5">
                    Написать
                    </Link>
                  </button>
              </div>


               <div className="itm">
                <div className="inf_tp">
                   <div className="pht">
                   <Link href="/profile">
                    <img src="./img/angelina.svg" alt="" />
                   </Link>
                   </div>

                   <div className="inf_i">
                    <p className="txt10">
                      Ангелина Сорокина
                    </p>

                    <p className="txt11">
                      Дизайнер сайтов  
                    </p>

                    <p className="txt12">
                      Выполено проектов: 25
                    </p>


                    <div className="str">
                      <img src="./img/star.svg" alt="" />
                    </div>
                   </div>
                </div>

                <button className="btn4">
                    <Link href="/chat" className="lnk5">
                    Написать
                    </Link>
                  </button>
              </div>

              <div className="itm">
                <div className="inf_tp">
                   <div className="pht">
                    <Link href="/profile">
                    <img src="./img/nikita.svg" alt="" />
                    </Link>
                   </div>

                   <div className="inf_i">
                    <p className="txt10">
                      Никита Зайцев
                    </p>

                    <p className="txt11">
                      Маркетолог  
                    </p>

                    <p className="txt12">
                      Выполено проектов: 144
                    </p>


                    <div className="str">
                      <img src="./img/star.svg" alt="" />
                    </div>
                   </div>
                </div>

                <button className="btn4">
                    <Link href="/chat" className="lnk5">
                    Написать
                    </Link>
                  </button>
              </div>


               <div className="itm">
                <div className="inf_tp">
                   <div className="pht">
                    <img src="./img/natalia.svg" alt="" />
                   </div>

                   <div className="inf_i">
                    <p className="txt10">
                      Наталья Захарова
                    </p>

                    <p className="txt11">
                      Motion дизайнер  
                    </p>

                    <p className="txt12">
                     Выполено проектов: 71
                    </p>


                    <div className="str">
                      <img src="./img/star.svg" alt="" />
                    </div>
                   </div>
                </div>

                <button className="btn4">
                    <Link href="/chat" className="lnk5">
                    Написать
                    </Link>
                  </button>
              </div>

              <div className="itm2">
                <p className="txt13">
                   Посмотреть всех ТОП фрилансеров
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="tasks_block">
            <p className="txt14">
              Как решать задачи на WorkTap?
            </p>

            <p className="txt15">
              Идеально подходит для бизнеса и частных лиц
            </p>


            <div className="grd_tasks">
              <div className="tm">
               <div className="tpts">
                <div className="ts_img">
                <img src="./img/t.svg" alt="" />
               </div>

               <p className="txt16">
                Выберите услугу
               </p>
               </div>

               <div className="btmm_tsks">
                 <p className="txt17">
                В супермаркете WorkTap представлен широкий <br />
                 выбор услуг от квалифицированных специалистов.
                 </p>
               </div>
              </div>

             <div className="tm">
               <div className="tpts">
                <div className="ts_img">
                <img src="./img/money.svg" alt="" />
               </div>

               <p className="txt16">
                Оплатите
               </p>
               </div>

               <div className="btmm_tsks">
                 <p className="txt17">
                  Деньги будут перечислены продавцу после того, как он <br />
                   выполнит работу, и вы её одобрите. 
                 </p>
               </div>
              </div>


              <div className="tm">
               <div className="tpts">
                <div className="ts_img">
                <img src="./img/res.svg" alt="" />
               </div>

               <p className="txt16">
                Получите результат
               </p>
               </div>

               <div className="btmm_tsks">
                 <p className="txt17">
                  Наш супермаркет гарантирует вам возврат средств <br />
                   в полном объёме в случае невыполнения заказа. 
                 </p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="imsg">
        <div className="container">
        <form>
            <div className="work_form">
           <div className="inf_txtlft">
            <p className="txt18">
              Как WorkTap помогает бизнесу?
            </p>


            <div className="inp_bl">
                 <div className="inpz">
                    <input type="text" placeholder="Оплачивайте с р/с или карты компании" />
                    <div className="crdt">
                      <img src="./img/credit.svg" alt="" />
                    </div>
                 </div>

                 <div className="inpz">
                    <input type="text" placeholder="Экономьте до 87% бюджета на фрилансе" />
                    <div className="crdt">
                      <img src="./img/mn.svg" alt="" />
                    </div>
                 </div>


                  <div className="inpz">
                    <input type="text" placeholder="Экономьте до 75% времени на решении фриланс задач" />
                    <div className="crdt">
                      <img src="./img/clock.svg" alt="" />
                    </div>
                 </div>
            </div>

              <p className="txt19">
                WorkTap — быстро, просто и безопасно!
              </p>

              <button className="btn5 btn_cntr">
               <Link href="#" className="lnk6" >
               Начать!
               </Link>
              </button>
           </div>
          </div>
        </form>
        </div>
      </section>

      <section>
        <div className="container">
          <Footer/>
        </div>
      </section>
    </>
  );
}
